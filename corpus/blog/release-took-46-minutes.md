---
id: blog-release-took-46-minutes
title: "The release that took 46 minutes"
summary: "A production release took 46 minutes because three checks ran more often than they should have, and one of them was flaky. The next one took 35, mostly waiting."
type: post
topic: lessons
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
consumers: [blog, ai]
pdf: false
audience: "Engineers and technical teams who run small systems"
related: [company-decision-release-proof]
---

# The release that took 46 minutes

Summary: a release on the evening of November 23 took 46 minutes (01:04 to 01:50 UTC). Most of the time was repeated and slow checks, not the work they checked.

## What happened

- The first portal release commit carried a stale version. The app check failed in 20 seconds, but the 23-minute browser walkthroughs ran anyway, and a second push ran them again.
- The site pipeline ran four times. One run failed on a version mismatch. The history job in the WebKit browser failed on others, and it had failed in 10 of the last 12 site deploys.
- The biggest single delay was a package mirror stalling a WebKit install for 30 minutes.

## Cause

The history test read the page's scroll position before it had finished restoring. The page restores scroll with a timed glide that starts late on a busy machine. I inferred this from the code and didn't reproduce it locally.

## What changed

- The walkthroughs run in three shards, which cut them from 23 to about 10 minutes.
- Browser jobs run in a pinned Playwright image, so a mirror outage can't stall an install.
- The history test waits for two frames and three steady polls, and retries a failed case once in CI. It runs in thirds too, so its longest job is 3.5 minutes.
- One command writes the version in every place it appears.
- The portal skips walkthroughs that already passed on identical files. See [the decision](../company/decision-release-proof.md).

## Result

On the next release the site pipeline took 6 minutes 24 seconds and passed first try. The portal deploy took about 2.5 minutes. The whole release took about 35 minutes, and most of that was waiting and fixing one more bug, in [the next note](skipped-job-skipped-release.md).

## What I would do differently

> [!note] Pradeep writes this: what you got wrong and what you changed, in your words.

## Sources

- [neon1-site CHANGELOG](https://github.com/neon1llc/neon1-site/blob/main/CHANGELOG.md) and [neon1-1NEON CHANGELOG](https://github.com/neon1llc/neon1-1NEON/blob/main/CHANGELOG.md): the changes and their dates.
- GitHub Actions run history for both repositories: the timings, which I read from the runs.
