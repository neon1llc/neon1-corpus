---
id: standards-reliability-and-recovery
title: Reliability and recovery
summary: "How neon1 sets service targets, plans for failure, and tests that backups restore."
type: standard
status: adopted
updated: 2026-11-09
created: 2026-11-01
consumers: [knowledge, ai]
pdf: true
edition: "0.9"
origin: "Documents/BUSINESS/neon1/Organization/Core/04-reliability-and-recovery.md"
related: [forms-service-and-recovery-profile, forms-incident-and-restore, standards-measurement]
---

# Reliability and recovery

Reliability means you can do the task when you need to, and get back on your feet when something goes wrong. Targets come from how much interruption and data loss your business can actually tolerate, what the design can do, what it costs, and who's available to respond. I don't start by picking an uptime percentage.

## Define the service first

A service profile names the task that matters, operating hours, users, normal volume, dependencies, data owner, support owner, and the manual fallback. "The website" is too vague when the real task is "a request reaches the right person." We describe normal, degraded, and failed states separately, because a form that accepts a request but sends the email late hasn't lost the request.

Dependencies such as sign-in, DNS, email delivery, storage, payments, an AI provider, and your own internet connection are listed, along with which failures the design survives. A vendor's uptime figure doesn't describe your whole experience.

## The vocabulary

| Term | Meaning |
|---|---|
| **SLI** (service level indicator) | What we observe, such as the share of valid requests stored and acknowledged within a set time |
| **SLO** (service level objective) | The target value for that indicator over a stated window |
| **SLA** (service level agreement) | A contractual promise with consequences. An internal target isn't automatically one |
| **Response time** | Time to a real person's first useful reply, separate from time to fix |
| **RTO** (recovery time objective) | The intended longest time to restore the service after a defined disruption |
| **RPO** (recovery point objective) | How much recent data you can afford to lose, measured in time |

Definitions follow [Google's SRE guidance](https://sre.google/sre-book/service-level-objectives/) and [NIST SP 800-34](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final).

## What a percentage costs

| Availability target | Allowed downtime in 30 days |
|---|---|
| 99% | 7 hours 12 minutes |
| 99.5% | 3 hours 36 minutes |
| 99.9% | 43 minutes |
| 99.99% | 4 minutes |

Each extra nine needs faster detection, faster response, and usually more money. A person who's unavailable until the weekend can't meet 99.9% for anything that needs a human to fix it. So I don't sell targets that the coverage can't back up.

## Setting a target together

I ask what happens if the task fails for five minutes, an hour, a day, and a weekend. When's the busy period? Is a manual process acceptable, and for how long? Then we price the design and the coverage against those answers. Targets start few, get a baseline period, and say what happens when they're missed.

## Recoverable data is more than a schedule

An hourly backup doesn't guarantee an hour of data loss at most. Jobs fail, copies come out incomplete, credentials get lost, and corruption is found late. Recovery also needs uploaded files, configuration, and the keys to decrypt it all.

> [!example] Counting data loss
> Trouble starts at 10:15. The last backup finished at 9:00, but the data in it only goes up to 8:30. You've lost an hour and forty-five minutes of work, not an hour and fifteen.

Replication copies deletions and corruption too, and file sync spreads unwanted changes. I keep an independent copy that matches the threat, following the 3-2-1 idea (several copies, different places, one off site) plus an offline or locked copy and regular test restores, as [CISA recommends](https://www.cisa.gov/stopransomware/ransomware-guide).

## Matching recovery to the stakes

| Situation | The question | How neon1 fits |
|---|---|---|
| A brochure site with nothing unique stored | Can versioned source and a documented deploy rebuild it? | A good fit |
| Ordinary intake with a workable manual fallback | Can you keep taking requests and catch up afterward? | A fit when ownership, backup, and support terms are explicit |
| Essential daily data | How much loss and downtime before real harm? | Needs proven recovery and coverage beyond appointment-based help |
| Continuous payments or critical operations | Who responds right away? | I refer you to a provider with the right operations team |

## A real restore test

1. Pick a safe, separate destination and a scenario, such as losing the main database or the admin account.
2. Confirm it won't touch the live system or contact real customers.
3. Start the clock at the agreed disruption point.
4. Get the backup and keys through the documented route, then restore data and configuration.
5. Check counts, key records, permissions, and a few real tasks. A success message alone isn't enough.
6. Measure the actual recovery point and the full elapsed time, and note every manual step.
7. You confirm the restored result is usable.
8. Clean up the test copy, update the instructions, and schedule the next test.

Restores are tested before handover, after a big change, and at an interval we agree on.

## When something breaks

An incident disrupts or threatens normal work. A request asks for access, advice, or a change. Severity comes from the consequences to you. For each incident we name who coordinates, who can change the system, and your contact, and keep a timestamped log. Updates say what's affected, what's known, what isn't, what you can do meanwhile, and when the next update comes. Suspected security incidents follow your agreed route, keep the evidence intact, and bring in the right specialist or insurer.

Afterward a short review covers impact, timeline, what helped, and what changes, focused on conditions rather than blame, with a few actions that get checked later.

## What ongoing care covers

Ongoing care with neon1 is scheduled attention to a named workflow within an agreed allowance. It isn't a help desk, round-the-clock security monitoring, an unlimited repair fund, or insurance against vendor outages. If the work regularly outgrows the allowance, we change the scope or the price.
