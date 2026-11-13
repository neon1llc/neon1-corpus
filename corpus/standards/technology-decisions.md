---
id: standards-technology-decisions
title: Technology decisions
summary: "How neon1 chooses tools and architecture, counts the full cost, and checks licenses."
type: standard
status: adopted
updated: 2026-11-11
created: 2026-11-01
consumers: [knowledge, ai]
pdf: true
edition: "1.1"
order: 12
origin: "neon1's internal handbook, technology decisions"
related: [forms-tool-decision, standards-security-and-data, standards-reliability-and-recovery]
---

# Technology decisions

I choose technology by your task and its running cost after handover. Popular, new, or free isn't a reason on its own.

## Start with what you already have

First I list your subscriptions, devices, skills, data, and integrations, and check what's built in. A feature already in Microsoft 365 or Google Workspace is often cheaper and easier to support than a new free server.

For a decision that matters, I compare improving the process, configuring an existing product, adopting a managed service, building a narrow piece, and "not yet." Each recommendation says what evidence would change it.

## Requirements first, preferences second

A tool that fails the hard requirements, permissions, export, lawful use, and recovery, is out however good it looks. Then I compare ease of use, maintenance, total cost, fit, and evidence. A weighted score helps discussion; it isn't an objective fact. The [tool and architecture decision form](../forms/tool-decision.md) keeps it short.

## Count the whole cost

First-year cost includes setup, subscriptions, computing, storage, data transfer, backups, monitoring, AI usage, payment fees, migration, training, upkeep, and the cost of leaving later.

> [!example] Why the license price isn't the price
> A free tool on a $12 a month server that needs an hour of someone's time each month, valued here at $75, costs at least $1,044 a year before setup, backups, or incidents. A $25 a month managed service costs $300 a year in fees before its own admin time and limits. Neither is automatically better, and the license price is only part of the cost.

I follow the [FinOps Framework](https://www.finops.org/framework/) for cloud costs at a small scale: a budget, an owner, a regular look at the bill, and a cost per useful result.

## Architecture that fits a small business

- A brochure website is usually a static site on managed hosting with versioned source and a documented redeploy.
- Client workflows use a few clearly owned parts and supported integrations. A modular app or a managed workflow usually beats microservices or Kubernetes at this size.
- Infrastructure as code is worth it when repeatability and recovery justify the setup.
- The [AWS Well-Architected](https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html) pillars (operations, security, reliability, performance, cost, sustainability) are a useful lens even when nothing runs on AWS.

## Integrations that don't break quietly

- Supported APIs over screen scraping.
- API limits, paging, time zones, currencies, and ID formats written down.
- Incoming data validated, and each business action given a stable ID, so a retry doesn't send a second invoice.
- Temporary failures retry a few times with a delay; permanent ones go where a person will see them.
- Partial success is kept: if a record saves but its email fails, the record stays and the failure shows. Reconciliation checks surface missing or duplicate results.

## Knowing when it's broken

Every service starts with a health check on the journey that matters, a clear failure log, cost visibility, and a named person for alerts, which say what's affected, what to do, and where the instructions are. A monitor on the app's own server goes down with it.

## Licenses and terms

Open source, source available, open core, free tier, and free trial differ, and code, hosted terms, model weights, datasets, plugins, logos, and fonts can each have their own rules. I read the actual license at the adopted version, for how we'll use it: your own installation, distribution, embedding, or hosting for others. Some automation and AI platforms allow internal use but need commercial terms for hosting or white-labeling. Notices and attribution stay intact.

## Qualifying a tool before you rely on it

1. Confirm it's maintained, the current release, known limits, how security issues are reported, and the license for your use.
2. Read the install, upgrade, export, backup, and recovery docs.
3. Test one real task with sample or approved data somewhere isolated.
4. Test a failure, an access attempt that should fail, an export, and a restore.
5. Measure setup effort, upkeep, ongoing cost, and how easily you can use it.
6. Record the evidence and gaps, then adopt, keep testing, defer, or reject.
7. Name the owner, update policy, review date, and exit before it goes live.

Stars or a recent commit aren't enough: a mature project can change rarely, and a busy one can be unstable.

## Sources

- [FinOps Framework](https://www.finops.org/framework/), FinOps Foundation: understanding and managing what the cloud costs.
- [The pillars of the Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html), Amazon Web Services: the tradeoffs a cloud design has to weigh.
- [Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), Michael Nygard: recording why a big choice was made.
- [Choose a License](https://choosealicense.com/), GitHub: what common open source licenses allow.
- [SPDX license list](https://spdx.org/licenses/), the Linux Foundation: exact names for every common license.
