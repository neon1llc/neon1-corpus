---
id: company-decision-release-proof
title: "Decision: skip walkthroughs that already passed"
summary: "The portal's release skips its 10-minute browser walkthroughs when an identical set of files already passed them in CI."
type: page
consumers: [knowledge]
pdf: false
origin: "neon1-1NEON"
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
related: [company-decisions,blog-release-skipped]
---

# Decision: skip walkthroughs that already passed

A release commit often changes only a changelog and a version number, and the browser suite takes minutes to replay.

## What I chose

The 1NEON release workflow fingerprints the files the walkthroughs depend on: the web app, the packages, the scripts, the lockfile and root configuration, and the workflows, with the `version` field removed. It adds the version of neon1.tech that is live, because the walkthroughs fetch its shared styles. If a dev or main run already passed the walkthroughs and uploaded a proof artifact with the same fingerprint, the shards are skipped.

Any difference, or any error while checking, runs the whole suite.

## What I weighed

| Option | Gain | Cost |
|---|---|---|
| Always run | Nothing can slip through | About 26 minutes to release a one-line change |
| Skip by changed paths | Simple | Misses an input that lives outside the listed paths, such as the site's styles |
| Skip on a matching fingerprint | Fast, and wrong only if the fingerprint misses an input | The input list has to stay true |

## What it cost, measured

The first release with it took about 2.5 minutes for the portal deploy, against about 26 before the walkthroughs were sharded and skipped on proof.

I changed a release gate, so I decided it deliberately: skipping is allowed only on proof, and uncertainty runs everything.

## Why this and not the runner-up

> [!note] Pradeep writes this: two or three sentences on why this won, in your words.

## What would change my mind

> [!note] Pradeep writes this: the evidence that would make me reverse it.

## What I got wrong

> [!note] Pradeep writes this: what turned out different from the plan, or "nothing yet".
