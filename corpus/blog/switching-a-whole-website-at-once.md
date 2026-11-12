---
id: blog-switching-a-whole-website-at-once
title: "Switching a whole website at once"
summary: "A blank page in the middle of a deploy, the lesson the year's big outages keep teaching, and the small release switch that fixed it on neon1.tech."
type: post
topic: lessons
status: draft
updated: 2026-12-10
created: 2026-12-10
edition: "0.1"
consumers: [blog, ai]
pdf: false
audience: "Developers and anyone who runs a small website"
related: [company-architecture, standards-reliability-and-recovery]
---

# Switching a whole website at once

It's a weeknight, a deploy of neon1.tech is running, and I load the home page on my phone. It's blank. I refresh, and a few seconds later it's fine. I knew to refresh. A visitor checking me out for the first time wouldn't, and would reasonably decide the site was broken.

Small sites aren't the only ones that learn this lesson. On February 20 this year, a cleanup task at Cloudflare [withdrew about 1,100 customers' network prefixes](https://blog.cloudflare.com/cloudflare-outage-february-20-2026/) from the internet, and some of them stayed unreachable for hours. In its write-up, Cloudflare points out that changes to that system reached its whole network immediately, and that the change should have gone through the slower, health-checked rollout it already uses for software. The scale is nothing like mine, but the shape is the same: a change made of many parts, visible to people while it's still in progress.

This post is about why my page went blank and the small change that made it impossible.

## Why the page went blank

neon1.tech is a static site: HTML, scripts, styles, and images in a private Amazon S3 bucket, served through CloudFront. The deploy used to copy the new files over the old ones in place.

Copying isn't instant. For a few seconds, the bucket holds a mix: a new page that expects a new script, next to the old script that hasn't been replaced yet, or the other way around. A visitor who arrives in that window gets a page whose parts don't match, and the page fails to draw. Caching makes it worse, since a browser or a CloudFront edge can hold on to one half of the mix for longer.

The usual answers each have a cost. A maintenance page during deploys would show every visitor a "back soon" screen several times a week. Clearing CloudFront's whole cache after each deploy costs money past the free allowance and still leaves the window open while files copy.

## Upload everything, then flip one switch

The fix was to stop overwriting anything. Each deploy now uploads the whole site into a new folder named for its contents, `releases/<id>/`, next to the previous releases. Nothing a visitor can see changes while that upload runs.

Then one write flips the switch. A [CloudFront KeyValueStore](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/kvs-with-functions.html) holds a single key, `release`, naming the live folder. A small [CloudFront Function](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html) runs on every request, reads that key, and rewrites the address into the live folder. Change the key, and every visitor's next request comes from the new release, with every file in a page from the same one.

A few details made it work well:

- **New folders mean new cache addresses**, so there's nothing to invalidate. Old cached copies simply stop being asked for.
- **Fonts and images stay shared** at the bucket's top level, because they never change at a given path. A page left open from an older release can still load them.
- **Rollback is the same switch.** `make rollback` points the key at the previous folder, and the site is back in seconds.
- **Old releases get pruned.** The deploy keeps the last five and removes the rest.
- **If the key can't be read**, the function falls back to the bucket's top level instead of failing.

## What it taught me

The bug was never really about CloudFront. Any time a change is made of many parts, and people can see it while it's in progress, someone eventually sees a broken mix. The fix is the same at every size, and it's an old idea that Martin Fowler wrote up as [blue-green deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html): prepare the whole new version where nobody is looking, then make it visible in one step that can be reversed in one step. Cloudflare's own remedy, which it calls failing small, adds the next layer up: roll the switch out to a few places first, and stop on its own if something looks wrong.

The same thinking helps far from websites. A database change, a new set of office firewall rules, or a move to a new phone system all go better when the new version is ready and tested before anyone depends on it, and when going back is one step.

The code is open. The deploy script is in [neon1-site](https://github.com/neon1llc/neon1-site), and the router and key value store are in [neon1-aws-infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure). [How neon1 is built](../company/architecture.md) draws the whole path from a visitor's browser to the live release.

## Sources

- [Cloudflare outage on February 20, 2026](https://blog.cloudflare.com/cloudflare-outage-february-20-2026/), Cloudflare: the withdrawn prefixes, the immediate propagation, and the plan for health-checked configuration rollouts.
- [Amazon CloudFront KeyValueStore](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/kvs-with-functions.html), AWS documentation: reading key values from a CloudFront Function.
- [CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html), AWS documentation: rewriting requests at the edge.
- [Blue-green deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html), Martin Fowler: preparing a new version beside the old one and switching in one step.
