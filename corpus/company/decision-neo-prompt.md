---
id: company-decision-neo-prompt
title: "Decision: the whole corpus goes in Neo's prompt"
summary: "Neo reads the whole public corpus on every question instead of searching an index, which costs a little under a cent a question."
type: page
consumers: [knowledge]
pdf: false
origin: "neon1-chat"
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
related: [company-decisions,company-decision-neo-model,company-decision-spend-controls]
---

# Decision: the whole corpus goes in Neo's prompt

Neo has no search index. Every question carries the full public text.

## What I chose

The corpus build assembles the rules, Neo's directive, and every document Neo may answer from into one system prompt. It is about 157,000 characters, and the build refuses a prompt over 170,000.

## What I weighed

| Option | Gain | Cost |
|---|---|---|
| Whole corpus in the prompt | No index to run or keep fresh, and no retrieval miss | Every question pays for the full prompt, and the corpus has a size ceiling |
| Search index, then a short prompt | Cheaper per question, no ceiling | A service to run, chunking choices, and answers that miss when retrieval misses |
| A model with prompt caching | Repeat prompts are cheaper | Caching is on for Amazon and Anthropic models only, and it means changing the model |

## What it costs

At roughly four characters a token, the prompt is about 39,000 tokens. At November's Qwen3 Next input price that is about $0.0055, plus up to $0.0007 for a reply capped at 600 tokens. A question costs about 0.6 cent at most, not the fifth of a cent the neon1-chat README still says. I'm correcting the README. See the [operating record](operating-record.md) for how I measured it.

## Why this and not the runner-up

> [!note] Pradeep writes this: two or three sentences on why this won, in your words.

## What would change my mind

> [!note] Pradeep writes this: the evidence that would make me reverse it.

## What I got wrong

> [!note] Pradeep writes this: what turned out different from the plan, or "nothing yet".
