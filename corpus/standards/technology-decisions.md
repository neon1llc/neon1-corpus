---
id: standards-technology-decisions
title: Technology decisions
summary: How neon1 chooses tools and architecture, counts the real cost, and checks licenses before you depend on anything.
type: standard
status: adopted
updated: 2026-11-09
created: 2026-11-01
consumers: [knowledge, ai]
pdf: true
edition: "1.0"
origin: "Documents/BUSINESS/neon1/Organization/Core/07-technology-decisions.md"
related: [forms-tool-decision, standards-security-and-data, standards-reliability-and-recovery]
---

# Technology decisions

I choose technology by your task and by what it costs to run after I've handed it over. Popular, new, and free are all fine qualities. None of them is a reason on its own.

## Start with what you already have

First I list the subscriptions, devices, skills, data, and integrations you already have, and check what's built in. A feature already included in Microsoft 365 or Google Workspace is often cheaper and easier to support than a new free server.

For a decision that matters, I compare four options: improve the process, configure an existing product, adopt a managed service, or build a narrow piece. "Not yet" is an option too. Each recommendation says what evidence would change it.

## Requirements first, preferences second

A tool that can't meet the hard requirements is out, however good it looks. Those requirements are permissions, export, lawful use, and recovery. Only then do I compare ease of use, maintenance, total cost, fit, and how good the evidence is. A weighted score helps us talk it through. It isn't an objective fact. The [tool and architecture decision form](../forms/tool-decision.md) keeps it short.

## Count the whole cost

First-year cost includes setup, subscriptions, computing, storage, data transfer, backups, monitoring, AI usage, payment fees, migration, training, upkeep, and the cost of leaving later.

> [!example] Why the license price isn't the price
> A free tool on a $12 a month server that needs an hour of someone's time each month, valued here at $75, costs at least $1,044 a year before setup, backups, or incidents. A $25 a month managed service costs $300 a year in fees before its own admin time and limits. Neither is automatically better. The point is that "free" was never the whole number.

I follow the [FinOps](https://www.finops.org/framework/) idea at a small scale: a budget, an owner, a regular look at the bill, and a cost per useful result.

## Architecture that fits a small business

- A brochure website is usually a static site on managed hosting with versioned source and a documented redeploy.
- Client workflows use a few clearly owned parts and supported integrations. A modular app or a managed workflow usually beats microservices or Kubernetes at this size.
- Infrastructure as code is worth it when repeatability and recovery justify the setup.
- The [AWS Well-Architected](https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html) pillars (operations, security, reliability, performance, cost, sustainability) are a useful lens even when nothing runs on AWS.

## Integrations that don't break quietly

- Supported APIs over screen scraping.
- API limits, paging, time zones, currencies, and ID formats written down.
- Incoming data validated. Each business action gets a stable ID, so a retry doesn't send a second invoice or make a second booking.
- Temporary failures retry a limited number of times with a delay. Permanent ones go somewhere a person will see them.
- Partial success is kept. If a record saves but its email fails, the record stays and the failed email shows up. Reconciliation checks make missing or duplicate results visible.

## Knowing when it's broken

Every service starts with a health check on the journey that matters, a clear failure log, cost visibility, and a named person for alerts. Alerts say what's affected, what to do next, and where the instructions are. A monitor hosted on the same server as the app goes down with it, so it doesn't count.

## Licenses and terms

Open source, source available, open core, free tier, and free trial mean different things. Code licenses, hosted terms, model weights, datasets, plugins, logos, and fonts can each have their own rules. I read the actual license at the version being adopted, and note whether we're consulting on your own installation, distributing software, embedding it, or hosting it for others. Some popular automation and AI platforms allow internal use but need commercial terms for hosting or white-labeling. Notices and attribution are kept intact.

## Qualifying a tool before you rely on it

1. Confirm it's maintained, the current release, known limits, how security issues are reported, and the license for your use.
2. Read the install, upgrade, export, backup, and recovery docs.
3. Test one real task with sample or approved data somewhere isolated.
4. Test a failure, an access attempt that should fail, an export, and a restore.
5. Measure setup effort, upkeep, ongoing cost, and how easily you can use it.
6. Record the evidence and gaps, then adopt, keep testing, defer, or reject.
7. Name the owner, update policy, review date, and exit before it goes live.

Lots of stars or a recent commit isn't enough. A mature project can change rarely, and a busy one can be unstable.
