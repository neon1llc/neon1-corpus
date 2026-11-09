---
id: standards-measurement
title: Measurement
summary: "How neon1 defines success with you, measures it, and reports what the numbers can and can't show."
type: standard
status: adopted
updated: 2026-11-09
created: 2026-11-01
consumers: [knowledge, ai]
pdf: true
edition: "1.0"
order: 15
origin: "Documents/BUSINESS/neon1/Organization/Core/03-measurement-handbook.md (client-facing parts)"
related: [forms-metric-record, standards-discovery-and-delivery, standards-reliability-and-recovery]
---

# Measurement

Measurement shows whether the work was worth it. It starts during discovery with a baseline, gets checked at handover, and gets reviewed after real use. I keep the list short, define every number exactly, and say plainly what a small sample can't prove.

## Terms

| Term | Meaning |
|---|---|
| **Measurement** | One observation, such as 18 completed requests |
| **Metric** | A defined way to measure, such as completed requests divided by valid attempts |
| **KPI** | A metric chosen because it matters to an ongoing goal. "Key" should keep the list short |
| **Baseline** | Where things stood before, under stated conditions |
| **Target** | The result we're aiming for |
| **Guardrail** | Something that must not get worse while we improve the main result |
| **OKR** | An objective plus a few measurable key results by a date |

Publishing a page is a task. People understanding it and acting on it is an outcome. I try to measure outcomes.

## Every measure gets a definition

Each measure we agree on gets a [metric record](../forms/metric-record.md): what decision it supports, exactly what counts, the formula, the source, the baseline, the target, and the review date. A zero in the denominator means "no data," not zero percent and not perfect. Missing data stays visible as unknown.

## Measures I reach for most

| Measure | Definition | Watch out for |
|---|---|---|
| Task completion | Finished tasks ÷ valid attempts | A page loading isn't a completed booking |
| First time right | Cases needing no correction ÷ completed cases | Say how long corrections are watched for |
| Hands-on time | Time a person actively works a case | Keep it apart from waiting, and include new review time |
| End-to-end time | Finish time minus valid request time | Include queues and handoffs |
| Net time saved | Old effort minus new effort minus new review and upkeep | Compare like with like, and don't count saved time twice |
| Error rate | Cases with a defined error ÷ cases checked | State severity and how you checked |
| Adoption | People or cases using the new way ÷ those eligible | Forced use isn't satisfaction |
| Independent success | People finishing without help ÷ people trying | With a few people, it's qualitative evidence |
| Benefit realized | Observed benefit ÷ estimated benefit, same period | Keep time, money, and quality apart unless the conversion is written down |

Satisfaction scores such as CSAT and NPS have their place. With a handful of clients, a direct conversation about what worked and what's still hard usually tells us more.

## Small samples

- Counts appear next to percentages. Four out of five is 80%, and one more case changes it a lot.
- Failed and abandoned cases stay in the data.
- A survey only happy customers answer overstates satisfaction.
- Zero failures in 20 representative trials still allows a failure rate near 14% at 95% confidence. A small pilot finds problems. It can't prove near-perfection. (The math follows [NIST's handbook](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm).)
- Seasons, staff changes, and training also move numbers, so before-and-after reports name them. I don't claim cause and effect without a design that could show it.

## What a report from me looks like

One page when possible: the result you wanted, the period and sample size, the baseline, what we see now, cost and effort, failures and exceptions, what the numbers can't establish, and the next decision. Quotes appear only with permission. The question it answers is whether the change is worth keeping.

## Software and website measures

For software I track how often changes ship, how long they take, how often they fail, and how fast service comes back. For websites I check Core Web Vitals and test accessibility against [WCAG 2.2](https://www.w3.org/TR/WCAG22/) AA on the real pages. An automated accessibility score is a starting point, not a certificate.
