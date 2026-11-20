---
id: standards-measurement
title: Measurement
summary: "How neon1 defines success with you, measures it, and reports what the numbers can and can't show."
type: standard
status: adopted
updated: 2026-11-20
created: 2026-11-01
consumers: [ai]
pdf: true
edition: "1.6"
order: 15
origin: "neon1's internal handbook, measurement handbook (client-facing parts)"
related: [forms-metric-record, standards-discovery-and-delivery, standards-reliability-and-recovery]
---

# Measurement

## Terms

A **measurement** is one observation. A **metric** is a defined way to measure. A **KPI** is a metric chosen because it matters to an ongoing goal, and "key" should keep the list short. A **baseline** is where things stood before, under stated conditions, and a **target** is the result we're aiming for. A **guardrail** is something that must not get worse while we improve the main result. Publishing a page is a task. People understanding and acting on it is an outcome, and I measure outcomes.

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

With a handful of clients, a conversation about what worked usually beats a satisfaction score such as CSAT or NPS.

## Small samples

- Counts appear beside percentages: four of five is 80%, and one more case changes it a lot.
- Failed and abandoned cases stay in the data.
- A survey only happy customers answer overstates satisfaction.
- Zero failures in 20 representative trials still allows a failure rate near 14% at 95% confidence. A small pilot finds problems but can't prove near-perfection. (The math follows [NIST's handbook section on estimating a proportion from a sample](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm).)
- Seasons, staff changes, and training move numbers too, so reports name them, and I don't claim cause and effect without a design that could show it.

## What a report from me looks like

One page when possible: the result you wanted, period and sample size, baseline, what we see now, cost and effort, failures, what the numbers can't establish, and whether the change is worth keeping.

## Software and website measures

For software I track how often changes ship, how long they take, how often they fail, how fast a failed change is fixed, and how often unplanned fixes are needed: [DORA's five software delivery performance metrics](https://dora.dev/guides/dora-metrics/). For websites I check Google's [Core Web Vitals](https://web.dev/articles/vitals) for loading, responsiveness, and visual stability, and test accessibility on the real pages against [WCAG 2.2](https://www.w3.org/TR/WCAG22/) at [level AA](https://www.w3.org/WAI/WCAG22/Understanding/conformance#levels). An automated score is a starting point, not a certificate.

## Sources

- [e-Handbook of Statistical Methods](https://www.itl.nist.gov/div898/handbook/), NIST and SEMATECH: honest measurement, including what small samples can show.
- [Service level objectives](https://sre.google/sre-book/service-level-objectives/), Google: choosing measures and targets for a service.
- [DORA research](https://dora.dev/), DevOps Research and Assessment: five measures of software delivery performance.
- [Web Vitals](https://web.dev/articles/vitals), Google: measures of how fast and stable a page feels.
