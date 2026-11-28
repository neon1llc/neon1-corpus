---
id: examples-proposal
title: "Proposal, filled in"
summary: "A complete neon1 proposal for a fictional analytics company's architecture review of its AWS account."
type: example
status: adopted
updated: 2026-11-27
created: 2025-09-16
edition: "2.1"
consumers: [knowledge, ai]
pdf: true
example_of: templates-proposal
fictional: true
related: [templates-proposal, examples-proposal-options, templates-services-agreement]
---

# Proposal, filled in

> [!example] A fictional example
> Brightwater Analytics, its staff, and every detail below are invented. Prices are left out of public examples. A real proposal states them.

**neon1 proposal for:** Brightwater Analytics

**Proposal number:** BWA-01 **Version:** 1 **Date:** March 14

**Valid until:** April 14

**Prepared by:** Pradeep Tathineni, neon1 **Prepared for:** Maya Okafor, head of engineering

## Your problem

Brightwater's ten engineers run the product in one AWS account that grew by accident: a few services on instances, a few on containers, and infrastructure in three styles. A customer's security review is due in six weeks, and the team can't say which of its own design choices to defend and which to fix first. Costs have also doubled in a year with no clear reason.

## The result

A written architecture review the team can act on: what the account looks like today, which findings matter before the customer's review and why, a costed order of fixes, and a decision record for each major choice.

## Included

- A read-only walk through the account's organization, networking, identity and access, data stores, logging, and backups, with the platform team
- A diagram of the account as it runs, checked against what the team believes
- Findings ranked by risk to the customer review and by cost to fix, each with the evidence behind it
- A cost breakdown by service and team, with the three largest savings and what each would change
- A costed fix order, split into pieces the team can take itself, with me, or with someone else
- A decision record for each major choice the team asks me to weigh
- A 60-minute walkthrough of the review with the engineers, and a short summary for the customer's review

## Not included

- Changes to the account. The review is read-only, and fixes are a separate proposal
- A penetration test or a compliance certification
- Application code review
- Third-party tools, which you pay the vendors for directly

## What each of us will do

| You will | I will |
|---|---|
| Decide through Maya, within two business days of a question | Say when I'm working and what I'll do, and answer in my working hours (Monday to Thursday 6pm to 9pm, Friday 6pm to 8pm, and weekends 8am to 8pm, Eastern time), usually within a day |
| Give read-only access to the account, through a role the team creates and removes | Use only that access, and never change anything |
| Give an hour a week of a platform engineer's time for questions | Come with questions written down, and keep each session short |
| Share the customer's review questions | Rank findings against them, and say what I couldn't check |
| Pay tool vendors directly | Leave the review, the diagram, and the decision records in the company's repository |

## Schedule

**Starts when:** the read-only role exists and this proposal is signed

**Working sessions:** two evening sessions with the platform team and one Saturday review of the draft

**Estimated finish:** two weeks after start, a month before the customer's review

**Depends on:** access to the account's logs and billing data

## Price and payment

| Item | Amount |
|---|---|
| Estimate for the work above (low to high end) | *Stated in the real proposal* |
| Deposit: amount, due before work begins | *Stated in the real proposal* |
| Balance due at handover | *Stated in the real proposal* |
| Estimated outside costs (paid directly by you) | None expected |

**How the deposit is credited:** in full against the final invoice.

**Changes:** no extra work or spending without a written, approved change request.

## Acceptance

- [x] The diagram matches the account, confirmed by a platform engineer
- [x] Every finding names its evidence and the customer-review question it relates to
- [x] The cost breakdown adds up to the last month's AWS bill
- [x] The team can say, without help, what to fix first and why

## After handover

**Questions about the review within 30 days of handover** are answered at no charge.

**Optional next step:** a proposal for the fixes the team chooses, described separately.

**Your exit:** the review and every record stay in the company's repository, and the access role is removed at handover.

## Terms

**Governing agreement:** the [services agreement](../templates/services-agreement.md) signed March 2

**Other agreements needed:**

- [ ] Business associate agreement (health information)
- [ ] Data processing terms
- [x] None

## Comments and agreement

- Signing below means we both agree to the work, price, and schedule above, and to what each of us will do.

## Acceptance of this proposal

**For the client:** Maya Okafor **Title:** Head of engineering **Date:** March 16

**For neon1 LLC:** Pradeep Tathineni **Date:** March 16

*1 is glad to be of service.*
