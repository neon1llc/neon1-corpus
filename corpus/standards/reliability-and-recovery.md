---
id: standards-reliability-and-recovery
title: Reliability and recovery
summary: "How neon1 sets service targets, plans for failure, and tests that backups restore."
type: standard
status: adopted
updated: 2026-11-23
created: 2025-08-26
consumers: [ai]
pdf: true
edition: "1.7"
order: 13
origin: "neon1's internal handbook, reliability and recovery"
related: [forms-service-and-recovery-profile, forms-incident-and-restore, standards-measurement]
---

# Reliability and recovery

Targets come from how much interruption and data loss your business can tolerate, what the design can do, its cost, and who can respond, not from a picked uptime percentage.

## Define the service first

A service profile names the task that matters, operating hours, users, dependencies (sign-in, email, payments, your internet connection, and which failures the design survives), data owner, support owner, and the manual fallback. "The website" is too vague when the real task is "a request reaches the right person." Normal, degraded, and failed states are described separately: a form that sends its email late hasn't lost the request.

## What a percentage costs

In 30 days, 99% allows 7 hours 12 minutes of downtime, 99.5% allows 3 hours 36 minutes, 99.9% allows 43 minutes, and 99.99% allows 4 minutes. Someone unavailable until the weekend can't meet 99.9% for anything a human must fix, so I don't sell targets the coverage can't back.

## Setting a target together

I ask what happens if the task fails for five minutes, an hour, a day, and a weekend, when the busy period is, and how long a manual process is acceptable. Then we price design and coverage against those answers. Targets start few, get a baseline period, and say what happens when missed.

## Recoverable data is more than a schedule

An hourly backup doesn't cap data loss at an hour. Jobs fail, copies come out incomplete, credentials get lost, and corruption is found late. If trouble starts at 10:15 and the last backup finished at 9:00 but only holds data up to 8:30, you've lost an hour and forty-five minutes, not an hour and fifteen. Recovery also needs uploaded files, configuration, and the decryption keys.

Replication and file sync copy deletions and corruption too. I keep an independent copy that matches the threat, following the 3-2-1 idea (several copies, different places, one off site) plus an offline or locked copy and regular test restores, as [CISA recommends](https://www.cisa.gov/stopransomware/ransomware-guide).

## Matching recovery to the stakes

| Situation | The question | How neon1 fits |
|---|---|---|
| A brochure site with nothing unique stored | Can versioned source and a documented deploy rebuild it? | A good fit |
| Ordinary intake with a workable manual fallback | Can you keep taking requests and catch up afterward? | A fit when ownership, backup, and support terms are explicit |
| Essential daily data | How much loss and downtime before real harm? | Needs proven recovery and coverage beyond appointment-based help |
| Continuous payments or critical operations | Who responds right away? | I refer you to a provider with the right operations team |

## A real restore test

1. Pick a safe, separate destination and a scenario, such as losing the main database or the admin account, and confirm it won't touch the live system or contact real customers.
2. Start the clock at the agreed disruption point, get the backup and keys through the documented route, and restore data and configuration.
3. Check counts, key records, permissions, and a few real tasks. A success message alone isn't enough.
4. Measure the actual recovery point and the full elapsed time, and note every manual step.
5. You confirm the restored result is usable. Then I clean up the test copy, update the instructions, and schedule the next test.

Restores are tested before handover, after big changes, and at an agreed interval.

## When something breaks

Each incident names who coordinates, who can change the system, and your contact, with a timestamped log. Updates say what's affected, known, and unknown, what you can do meanwhile, and when the next update comes. Suspected security incidents follow your agreed route, keep evidence intact, and bring in the right specialist or insurer. A short review afterward covers what happened and what changes, focused on conditions, not blame.

## What ongoing care covers

Ongoing care is scheduled attention to a named workflow within an agreed allowance, with response times written into the care plan. If the work regularly outgrows it, we change the scope or price.

## Sources

- [Service level objectives](https://sre.google/sre-book/service-level-objectives/), Google: targets, error budgets, and what a percentage really allows.
- [Postmortem culture](https://sre.google/sre-book/postmortem-culture/), Google: reviews that look for causes, not someone to blame.
- [Reliability pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html), Amazon Web Services: designing cloud systems to recover from failure.
- [Contingency planning guide, SP 800-34](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final), NIST: recovery objectives and plans that get tested.
- [Ransomware guide](https://www.cisa.gov/stopransomware/ransomware-guide), US Cybersecurity and Infrastructure Security Agency: offline backups, and what to do first.
