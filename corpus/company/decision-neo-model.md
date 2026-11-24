---
id: company-decision-neo-model
title: "Decision: how Neo's model was chosen"
summary: "Neo runs Qwen3 Next 80B on Amazon Bedrock, chosen by running the same question set against seven models."
type: page
consumers: [knowledge]
pdf: false
origin: "neon1-chat"
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
related: [company-decisions,company-decision-neo-prompt]
---

# Decision: how Neo's model was chosen

I let a question set pick the model, not a leaderboard or a preference.

## What I chose

Neo, the assistant on neon1.tech, runs Qwen3 Next 80B A3B on Amazon Bedrock. Replies sample at temperature 0.3, so wording varies a little and facts drift less than at 0.7.

## What I weighed

The eval asked each model the same questions about neon1, including planted traps such as a price the pages don't publish. Qwen3 Next was compared with gpt-oss-120b, Nova 2 Lite, Nemotron Super, DeepSeek V3.2, Kimi K2.5, and Mistral Large 3. It passed every case across repeated runs at about the price of gpt-oss-120b, which once repeated a planted price.

The question sets are in [neon1-chat](https://github.com/neon1llc/neon1-chat): 53 original questions, 23 from a skeptical buyer, and 20 held back. A run of the same build varies by about two questions, so I read a result as a range.

## What it costs

In November, Bedrock billed Qwen3 Next $0.14 per million input tokens and $1.20 per million output tokens (Cost Explorer, November 1 to 24). One question costs under a cent. See the [operating record](operating-record.md).

Changing the model means changing one variable in [neon1-aws-infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure) (applied by hand) and one in neon1-chat.

## Why this and not the runner-up

> [!note] Pradeep writes this: two or three sentences on why this won, in your words.

## What would change my mind

> [!note] Pradeep writes this: the evidence that would make me reverse it.

## What I got wrong

> [!note] Pradeep writes this: what turned out different from the plan, or "nothing yet".
