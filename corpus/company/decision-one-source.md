---
id: company-decision-one-source
title: "Decision: every public word is written once"
summary: "The website, Neo, the Knowledge Center, and the PDFs all read from one repository, so a fact is changed in one place."
type: page
consumers: [knowledge]
pdf: false
origin: "neon1-corpus"
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
related: [company-decisions]
---

# Decision: every public word is written once

The site, Neo, the Knowledge Center, and the PDFs all need the same facts.

## What I chose

neon1-corpus holds neon1's public information as Markdown. A release exports it per consumer as flat files, with a manifest and a digest, so a consumer can tell when anything changed. The site's watch picks up a release within 15 minutes, and Neo refreshes from the latest release on a weekly schedule or when I run it.

A linter checks the front matter, the links, and the business facts, and flags anything that looks private.

## What I weighed

| Option | Gain | Cost |
|---|---|---|
| Each site keeps its own copy | No coupling | Facts can differ between copies |
| One corpus, many consumers | One fix reaches all | A release has to reach each consumer, and each can lag |

## What it costs

Consumers can briefly disagree. The site, Neo, and the portal's guide refresh on different schedules, so after a release I check each one, not just the corpus.

## Why this and not the runner-up

> [!note] Pradeep writes this: two or three sentences on why this won, in your words.

## What would change my mind

> [!note] Pradeep writes this: the evidence that would make me reverse it.

## What I got wrong

> [!note] Pradeep writes this: what turned out different from the plan, or "nothing yet".
