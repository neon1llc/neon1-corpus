---
id: blog-release-skipped
title: "The skipped job that skipped the release"
summary: "A job that was skipped on purpose caused GitHub to skip the release steps after it too, so a green run shipped nothing."
type: post
topic: lessons
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
consumers: [blog, ai]
pdf: false
audience: "Engineers and technical teams who run small systems"
related: [company-decision-release-proof,blog-release-took-46-minutes]
---

# The skipped job that skipped the release

Summary: when the portal's walkthroughs were skipped on proof, the release and dev deploy steps were skipped with them, so the run was green and no tag or deploy followed.

## What happened

The `walkthroughs` job collects its shard results and ends with `if: always()`, so it still records proof when a shard is skipped. GitHub treats a job that depends on a skipped job as skipped unless its own condition says otherwise. The release job needed `walkthroughs` and the dev job did too, and neither had a condition that survived the skip. I found it on the first release that used the skip.

## What changed

The release job now runs on `!cancelled()` and reads each needed job's result explicitly, so it proceeds only when the checks succeeded, and a skipped check no longer hides it. The workflow says why in a comment above the condition.

## Also found, not fixed

One portal API test, "caps one network address across accounts," failed once on a slow runner with a 201 where it expected a 429. The rerun passed. I think it's timing, and I haven't reproduced it.

## What I would do differently

> [!note] Pradeep writes this: what you got wrong and what you changed, in your words.

## Sources

- [neon1-1NEON deploy workflow](https://github.com/neon1llc/neon1-1NEON/blob/main/.github/workflows/deploy.yml): the condition and its comment.
- [GitHub Actions: using conditions to control job execution](https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution): how skipped dependencies behave.
