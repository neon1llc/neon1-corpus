---
id: company-decision-abuse-counters
title: "Decision: how Neo tells visitors apart"
summary: "Neo counts questions per network with a salted hash and an expiry, never storing an address, and refuses questions when it can't count."
type: page
consumers: [knowledge]
pdf: false
origin: "neon1-chat"
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
related: [company-decisions,company-decision-spend-controls]
---

# Decision: how Neo tells visitors apart

Neo is open to anyone, so limits need an identity that isn't a login and doesn't keep personal data.

## What I chose

Counters are keyed by a salted hash of the visitor's network and the time window. The network is an IPv4 address, or the first 64 bits of an IPv6 address, because one home or phone gets a whole /64. The table never holds an address, and every item expires on its own.

A visitor who trips a cap gets a cooldown, and each strike in a day earns a longer one. Strikes are forgiven after a quiet day. If a counter can't be written, the question is refused, never let through.

## What I weighed

| Option | Status |
|---|---|
| Hashed network, counted in DynamoDB | In use |
| Web application firewall with bot challenges | Waits until there's client traffic to protect |
| CAPTCHA | Not used |
| Per-account limits | Not possible, Neo is anonymous |

## What it costs

Two people on one network share a budget, so refusals offer Pradeep by email and the free call, and a visitor on a network someone else tripped is never stuck.

## Why this and not the runner-up

> [!note] Pradeep writes this: two or three sentences on why this won, in your words.

## What would change my mind

> [!note] Pradeep writes this: the evidence that would make me reverse it.

## What I got wrong

> [!note] Pradeep writes this: what turned out different from the plan, or "nothing yet".
