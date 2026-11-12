---
id: blog-switching-a-whole-website-at-once
title: "Switching a whole website at once"
summary: "Notes on a blank page in the middle of a deploy on neon1.tech, what caused it, and the small release switch that fixed it for good."
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

In November I loaded neon1.tech on my phone while a deploy was running and got a blank page. A refresh fixed it a few seconds later. I knew to refresh. Someone opening the site for the first time wouldn't, and they'd reasonably decide it was broken. These are my notes on why it happened and what I changed.

## What I saw

- A blank page, with no error on screen.
- Gone after a refresh, a few seconds later.
- Only while a deploy was running.

## What caused it

neon1.tech is a static site: HTML, scripts, styles, and images in a private Amazon S3 bucket, served through CloudFront. The deploy copied new files over the old ones in place.

Copying many files isn't instant. For a few seconds, the bucket held a mix: a new page that expected a new script, next to an old script that hadn't been replaced yet. My phone arrived in that window and got parts that didn't match. Caching can stretch the window, because a browser or a CloudFront edge may keep one half of the mix longer than the other.

I considered two quick fixes and turned both down. A maintenance page during deploys would show every visitor a "back soon" screen several times a week. Clearing CloudFront's whole cache after each deploy costs money past the free allowance, and the window stays open while the files copy anyway.

## What I changed

I stopped overwriting anything. Each deploy now uploads the whole site into a new folder named for its contents, `releases/<id>/`, beside the earlier releases. Nothing a visitor can see changes during the upload.

Then a single write makes it live. A [CloudFront KeyValueStore](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/kvs-with-functions.html) holds one key, `release`, naming the live folder. A small [CloudFront Function](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html) reads that key on every request and rewrites the address into that folder:

```
/blog/            →  releases/9ba352e72ba3/blog/index.html
/js/frame.js      →  releases/9ba352e72ba3/js/frame.js
```

Change the key, and the next request comes from the new release, with every file in the page from the same one. A few details matter:

- New folders mean new cache addresses, so there's nothing to invalidate.
- Fonts and images stay shared at the top of the bucket, since they never change at a given path. A page left open from an older release can still load them.
- `make rollback` points the key back at the previous folder. The site is back in seconds.
- The deploy keeps the last five releases and removes older ones.
- If the key can't be read, the function falls back to the top of the bucket instead of failing.

## What I took from it

The idea is old. Martin Fowler wrote it up years ago as [blue-green deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html): build the whole new version where nobody is looking, then switch to it in one step you can undo in one step.

It also holds at the far end of the scale. On February 20 this year, a cleanup task at Cloudflare [withdrew about 1,100 customers' network prefixes](https://blog.cloudflare.com/cloudflare-outage-february-20-2026/), and some stayed unreachable for hours. Cloudflare's write-up says changes to that system reached its whole network immediately, and that they'll now roll out in stages with health checks, the same way its software does. My site serves a handful of pages, but the shape of the bug is the same: a change people can see while it's half done.

The deploy script is in [neon1-site](https://github.com/neon1llc/neon1-site), and the router and key value store are in [neon1-aws-infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure). [How neon1 is built](../company/architecture.md) draws the whole path from a browser to the live release.

## Sources

- [Amazon CloudFront KeyValueStore](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/kvs-with-functions.html), AWS documentation: reading key values from a CloudFront Function.
- [CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html), AWS documentation: rewriting requests at the edge.
- [Blue-green deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html), Martin Fowler: preparing a new version beside the old one and switching in one step.
- [Cloudflare outage on February 20, 2026](https://blog.cloudflare.com/cloudflare-outage-february-20-2026/), Cloudflare: the withdrawn prefixes, the immediate propagation, and the plan for staged, health-checked rollouts.
