---
id: standards-technology-decisions
title: Technology decisions
summary: "How neon1 chooses tools and architecture, counts the full cost, and checks licenses."
type: standard
status: adopted
updated: 2026-11-26
created: 2025-08-12
consumers: [ai]
pdf: true
edition: "1.8"
order: 12
origin: "neon1's internal handbook, technology decisions"
related: [forms-tool-decision, standards-security-and-data, standards-reliability-and-recovery]
---

# Technology decisions

## Start with what you already have

First I list your subscriptions, devices, skills, data, and integrations, and check what's built in. A feature already in Microsoft 365 or Google Workspace is often cheaper and easier to support than a new free server.

For a decision that matters, I compare improving the process, configuring an existing product, adopting a managed service, building a narrow piece, and "not yet." Each recommendation says what evidence would change it.

## Requirements first, preferences second

A tool that fails the hard requirements, permissions, export, lawful use, and recovery, is out however good it looks. Then I compare ease of use, maintenance, total cost, fit, and evidence. A weighted score helps discussion but isn't a fact. The [tool and architecture decision form](../forms/tool-decision.md) keeps it short.

## Count the whole cost

First-year cost includes setup, subscriptions, computing, storage, data transfer, backups, monitoring, AI usage, payment fees, migration, training, upkeep, and the cost of leaving later.

> [!example] Why the license price isn't the price
> A free tool still needs a server and someone's time each month, and the time usually costs more than the server. A managed service charges fees, and still needs some admin time and has its own limits. Neither is automatically better.

I follow the [FinOps Framework](https://www.finops.org/framework/) for cloud costs at a small scale: a budget, an owner, a regular look at the bill, and a cost per useful result.

## Integrations that don't break quietly

- Supported APIs over screen scraping.
- API limits, paging, time zones, currencies, and ID formats written down.
- Incoming data validated, and each business action given a stable ID, so a retry doesn't send a second invoice.
- Temporary failures retry a few times with a delay, and permanent ones go where a person will see them.
- Partial success is kept: if a record saves but its email fails, the record stays and the failure shows. Reconciliation checks surface missing or duplicate results.

## Knowing when it's broken

Every service starts with a health check on the journey that matters, a clear failure log, cost visibility, and a named person for alerts, which say what's affected, what to do, and where the instructions are. A monitor on the app's own server goes down with it.

## Licenses and terms

Open source, source available, open core, free tier, and free trial differ. Code, hosted terms, model weights, datasets, plugins, logos, and fonts can each have their own rules. I read the actual license at the adopted version, for how we'll use it: your own installation, distribution, embedding, or hosting for others. Some automation and AI platforms allow internal use but need commercial terms for hosting or white-labeling. Notices and attribution stay intact.

## Qualifying a tool before you rely on it

1. Confirm it's maintained, the current release, known limits, how security issues are reported, and the license for your use.
2. Read the install, upgrade, export, backup, and recovery docs.
3. Test one real task with sample or approved data somewhere isolated.
4. Test a failure, an access attempt that should fail, an export, and a restore.
5. Measure setup effort, upkeep, ongoing cost, and how easily you can use it.
6. Record the evidence and gaps, then adopt, keep testing, defer, or reject.
7. Name the owner, update policy, review date, and exit before it goes live.

Stars or a recent commit aren't enough. A mature project can change rarely, and a busy one can be unstable.

## Sources

- [FinOps Framework](https://www.finops.org/framework/), FinOps Foundation: understanding and managing what the cloud costs.
- [The pillars of the Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html), Amazon Web Services: the tradeoffs a cloud design has to weigh.
- [Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), Michael Nygard: recording why a big choice was made.
- [Choose a License](https://choosealicense.com/), GitHub: what common open source licenses allow.
- [SPDX license list](https://spdx.org/licenses/), the Linux Foundation: exact names for every common license.
