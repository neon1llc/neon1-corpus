---
id: standards-measurement
title: Measurement
summary: "How neon1 defines success with you, measures it, and reports what the numbers can and can't show."
type: standard
status: adopted
updated: 2026-11-13
created: 2026-11-01
consumers: [ai]
pdf: true
edition: "1.2"
order: 15
origin: "neon1's internal handbook, measurement handbook (client-facing parts)"
related: [forms-metric-record, standards-discovery-and-delivery, standards-reliability-and-recovery]
---

# Measurement

Measurement shows whether the work was worth it: a baseline in discovery, a check at handover, and a review after real use. I keep the list short, define every number exactly, and say what a small sample can't prove.

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

Publishing a page is a task; people understanding and acting on it is an outcome. I measure outcomes.

## Every measure gets a definition

Each agreed measure gets a [metric record](../forms/metric-record.md): the decision it supports, what counts, formula, source, baseline, target, and review date. A zero denominator means "no data," and missing data stays visible as unknown.

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

Satisfaction scores such as CSAT and NPS have their place, but with a handful of clients, a direct conversation about what worked usually tells us more.

## Small samples

- Counts appear beside percentages: four of five is 80%, and one more case changes it a lot.
- Failed and abandoned cases stay in the data.
- A survey only happy customers answer overstates satisfaction.
- Zero failures in 20 representative trials still allows a failure rate near 14% at 95% confidence. A small pilot finds problems but can't prove near-perfection. (The math follows [NIST's handbook section on estimating a proportion from a sample](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm).)
- Seasons, staff changes, and training move numbers too, so reports name them, and I don't claim cause and effect without a design that could show it.

## What a report from me looks like

One page when possible: the result you wanted, period and sample size, baseline, what we see now, cost and effort, failures, what the numbers can't establish, and the next decision, answering whether the change is worth keeping. Quotes only with permission.

## Software and website measures

For software I track how often changes ship, how long they take, how often they fail, how fast a failed change is fixed, and how often unplanned fixes are needed: [DORA's five software delivery performance metrics](https://dora.dev/guides/dora-metrics/). For websites I check Google's [Core Web Vitals](https://web.dev/articles/vitals) for loading, responsiveness, and visual stability, and test accessibility on the real pages against the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) at [level AA](https://www.w3.org/WAI/WCAG22/Understanding/conformance#levels), the middle of its three conformance levels. An automated accessibility score is a starting point, not a certificate.

## Sources

- [e-Handbook of Statistical Methods](https://www.itl.nist.gov/div898/handbook/), NIST and SEMATECH: honest measurement, including what small samples can show.
- [Service level objectives](https://sre.google/sre-book/service-level-objectives/), Google: choosing measures and targets for a service.
- [DORA research](https://dora.dev/), DevOps Research and Assessment: five measures of software delivery performance.
- [Web Vitals](https://web.dev/articles/vitals), Google: measures of how fast and stable a page feels.
