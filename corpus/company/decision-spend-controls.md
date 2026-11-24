---
id: company-decision-spend-controls
title: "Decision: how Neo's spending is limited"
summary: "Alerts, a monthly deny on my own Bedrock access, and per-visitor and site-wide caps on Neo, each covering a different failure."
type: page
consumers: [knowledge]
pdf: false
origin: "neon1-aws-infrastructure"
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
related: [company-decisions,company-decision-neo-prompt]
---

# Decision: how Neo's spending is limited

Spend can grow from a bug, an abuser, or my own evaluation runs. Each layer covers a different one.

## What I chose

| Layer | What it does | Where |
|---|---|---|
| Account budget | $15 a month on usage, emails at 80% actual and 100% forecast | neon1-aws-infrastructure `account/` |
| Bedrock daily alert | Emails when Bedrock passes $1 in a day | `account/` |
| Bedrock monthly deny | At $10 a month, denies model calls from my admin user and the evaluation role | `account/` |
| Per-visitor caps | 6 questions a minute and 60 an hour, with cooldowns of 2 minutes, 10, an hour, then a day | neon1-chat |
| Site-wide cap | 60 questions a day, then Neo says to try again tomorrow and links the call booking | neon1-chat |
| Concurrency | At most 5 copies of the function, and 5 requests a second | neon1-chat |

## What the layers don't cover

The monthly deny applies to my admin user and the evaluation role. It doesn't stop Neo itself, so Neo's own caps are what limit it. At 60 questions a day and about 0.6 cent each, a month at the cap costs about $11, near the $10 deny. I lowered the cap from 200 on November 24, because 200 would have cost about $37.

In November the deny fired. Bedrock reached $50.56, mostly evaluation runs, and the account passed its $15 budget. See the [operating record](operating-record.md).

## Why this and not the runner-up

> [!note] Pradeep writes this: two or three sentences on why this won, in your words.

## What would change my mind

> [!note] Pradeep writes this: the evidence that would make me reverse it.

## What I got wrong

> [!note] Pradeep writes this: what turned out different from the plan, or "nothing yet".
