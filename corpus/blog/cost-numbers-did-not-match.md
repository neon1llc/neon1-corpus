---
id: blog-cost-numbers-did-not-match
title: "When the cost numbers didn't match"
summary: "Neo's documented cost was a fifth of a cent a question and $12 in a worst-case month. Measured, it is about 0.6 cent and $37, and November's Bedrock bill was my own evaluation runs, one night of them repeated 29 times."
type: post
topic: lessons
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
consumers: [blog, ai]
pdf: false
audience: "Engineers and technical teams who run small systems"
related: [company-decision-spend-controls,company-decision-neo-prompt]
---

# When the cost numbers didn't match

Summary: the cost I had written down for Neo was a fifth of the measured cost, and one night of repeated evaluation runs made me add logging and a spending limit on my own access.

## What happened

- The neon1-chat README said the corpus was about 12,000 tokens and that Neo cost under a fifth of a cent a question, so a month at the 200-question cap would cost about $12.
- The corpus had grown. The prompt is about 157,000 characters, roughly 39,000 tokens, and Qwen3 Next has no prompt caching. At November's rates a question costs about $0.0055 for input and up to $0.0007 for output, and a month at the cap is about $37.
- On November 16, Bedrock billed $29.90 in a day: $21.90 for Claude Sonnet 4.6 and $8.00 for other models. I first wrote it down as an unattended evaluation night, then doubted it, because a measured run costs about a dollar.
- CloudTrail settled it. Between 11:43 pm on November 15 and 9:07 am on November 16, my admin user made 1,770 Sonnet calls and 1,547 Qwen calls from one Mac, through the Node SDK. That's about 29 passes of the 53-question set with its judge. Another 144 Sonnet calls came through the AWS MCP server, and Neo's own function made 177 calls during three live runs. None of the 29 passes was saved as a result, so my records had no trace of them.
- A full evaluation run costs about $0.80 to $1.20. The $30 came from repeating it 29 times unattended, not from one run.

## What changed

- A role for evaluations that can only call Bedrock, and invocation logging that records the caller, model, and token counts for 14 days, with no prompt text. CloudTrail already names the caller of each call, but only for 90 days.
- A $1 daily Bedrock alert, and a $10 monthly deny on my admin user and the evaluation role.
- The cap and the README are being corrected to the measured numbers. See [the spending decision](../company/decision-spend-controls.md).

## Where it stands

November's account usage reached $60.32 against a $15 budget, and Bedrock reached $50.56, so the deny fired. Bedrock cost on quiet days was one or two cents. Most of the bill is evaluation. The [operating record](../company/operating-record.md) has the figures.

## What I would do differently

> [!note] Pradeep writes this: what you got wrong and what you changed, in your words.

## Sources

- AWS Cost Explorer for neon1's account, November 1 to 24, 2026: spend by service, model, and day. The per-million rates are cost divided by tokens.
- [neon1-chat README](https://github.com/neon1llc/neon1-chat#readme) and [CHANGELOG](https://github.com/neon1llc/neon1-chat/blob/main/CHANGELOG.md): the documented figures and the corpus size.
- [neon1-aws-infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure): the budgets and the deny.
