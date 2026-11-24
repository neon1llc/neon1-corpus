---
id: company-operating-record
title: "Operating record"
summary: "What neon1's own systems cost, how long a release takes, and what I've tested by breaking it, with how each number was measured."
type: page
consumers: [knowledge]
pdf: false
origin: "AWS Cost Explorer and AWS Budgets for neon1's account, GitHub Actions run history, and neon1-aws-infrastructure"
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
related: [company-decisions, company-architecture, standards-reliability-and-recovery, standards-measurement]
---

# Operating record

These are measured figures from my own systems, as of November 24, 2026. Each says how I got it. When a figure changes, this page changes with a date.

## What it costs

AWS Cost Explorer, November 1 to 24, usage only (domain registration and tax are left out).

| Part | Cost |
|---|---|
| Amazon Bedrock | $50.56 |
| CloudFront | $7.25 |
| S3 | $1.14 |
| Route 53 | $0.51 |
| Key Management Service | $0.44 |
| Everything else (Cost Explorer, DynamoDB, email, API Gateway) | $0.41 |
| Total | $60.32 |

The account budget is $15 a month, so November passed it. Bedrock is the reason, and most of Bedrock was evaluation runs: Claude Sonnet 4.6 as the judge cost $30.54, and the other models cost $20.02, of which Qwen3 Next input was $16.27. Bedrock cost on quiet production days was one or two cents. The [spending decision](decision-spend-controls.md) lists the limits, and [a note](../blog/cost-numbers-did-not-match.md) tells how the figures were found.

### What one question costs

Qwen3 Next billed $0.14 per million input tokens and $1.20 per million output tokens (Cost Explorer cost divided by tokens). Neo's prompt is about 157,000 characters, so about 39,000 tokens at four characters a token. Add a reply capped at 600 tokens.

| | Tokens | Cost |
|---|---|---|
| Input | about 39,000 | about $0.0055 |
| Output | up to 600 | up to $0.0007 |
| One question | | about 0.6 cent at most |

This is computed from the prompt size and the price list, not metered per question.

## How long a release takes

GitHub Actions run times for the November 24 release.

| Step | Time |
|---|---|
| Corpus release | 20 seconds |
| Neo deploy | about 1.5 minutes |
| Portal deploy | about 2.5 minutes (about 26 before sharding the browser walkthroughs and skipping proven ones) |
| Site pipeline | 6 minutes 24 seconds, green on the first try (four runs and 46 minutes on November 23) |
| The whole release | about 35 minutes, mostly waiting and fixing one bug |

## What I've broken on purpose

Each drill is run on the dev copy first, timed, and written down here with what it found. None has been run yet.

| Drill | How it's done | Result |
|---|---|---|
| Restore neon1.tech from the repository | Rebuild the distribution from neon1-aws-infrastructure in a scratch copy and time it | Not run |
| Roll back a release | Revert on main, let CI apply it, and confirm the old version serves | Not run |
| Hit Neo's daily cap | Lower the cap on dev, send past it, and watch the refusal and the link | Not run |
| Rotate Neo's origin secret | Follow the procedure in the neon1-chat README and confirm calls still work | Not run |

> [!note] Pradeep runs the first drill himself, then writes the date, minutes, and what it found.

## Whether the site is up

An outside check of neon1.tech isn't running yet. I'll publish an uptime figure only after it has 30 days of data, with how it's measured.

## Sources

- AWS Cost Explorer and AWS Budgets, neon1's account, November 2026.
- [neon1-aws-infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure): the budgets, the deny, and the release procedures.
- GitHub Actions run history for neon1-site, neon1-1NEON, neon1-chat, and neon1-corpus.
