---
id: standards-discovery-and-delivery
title: Discovery and delivery
summary: How a neon1 project moves from your problem to a result you can run, step by step.
type: standard
status: adopted
updated: 2026-11-11
created: 2026-11-01
consumers: [knowledge, ai]
pdf: true
edition: "1.1"
order: 4
origin: "neon1's internal handbook, discovery and delivery"
related: [company-process, forms-discovery, templates-proposal, forms-release-and-handover]
---

# Discovery and delivery

Every project follows one path, scaled to size: understand one real task, measure it, compare options, agree a bounded result, build in small steps, teach it, and check later that it helped. The [process page](../company/process.md) is the one-minute version.

## Understand one real task

I ask for the last finished example, the next one coming, and a recent failure, and with your permission watch the work happen, often over a short screen share: who starts it, what comes in, where it waits, which steps need judgment, and what "done" means.

The result is a plain problem statement, such as "When a new request arrives, the receptionist copies it into two places and sometimes misses the requested date." "Build an AI agent" is a solution, not a problem statement.

I don't copy private records into my notes because they were on screen. For personal clients I ask about comfort, accessibility, shared devices, and who will help later, and write steps out.

## Measure the starting point

Before changing anything I time a few real examples, measuring effort, waiting, errors, and exceptions separately. Then we write one outcome, one measure of success, and one guardrail. For example: cut retyping time without increasing wrong customer records.

Saved minutes aren't automatically money; any dollar value on time has its assumption written beside it.

## Compare the options

At least four: improve the process, configure what you have, adopt a new service, or build something narrow, plus "do nothing for now." Each gets its ongoing cost, learning effort, data handling, maintainer, failure behavior, and exit.

## Agree on a bounded result

The scope is small enough to demonstrate at handover: normal cases, exclusions, the data and accounts you'll provide, who approves, and how we'll check it. Uncertain work sits behind a paid discovery step or a spending cap. See the [proposal template](../templates/proposal.md).

Anything new goes in a [change request](../forms/change-request.md) with its cost, dates, and effect on acceptance, and nothing extra happens before you approve it.

## Build and test in small steps

You see a basic working version early, on safe sample data, to check it matches your task. Configuration and code are versioned, test and live access kept apart, and every release records its rollback.

Checks follow the promise: a valid request arrives once, missing fields are explained, one person can't see another's records, a duplicate doesn't create duplicate work, and an outage leaves a visible, recoverable state. I test the browsers, devices, and accessibility needs in scope, including a slow connection when realistic.

## Teach and hand over

I show one ordinary task, you do it, then you fix a harmless mistake on purpose. Where you hesitate, the instructions improve.

The handover covers the workflow, who owns each account, recurring costs, routine steps, common errors, backup and recovery, vendor contacts, support terms, how to export, and known limits. Passwords go in a password manager, never the handover document. We record acceptance against the agreed checks, and I remove access I no longer need. The [release and handover record](../forms/release-and-handover.md) is the checklist.

## Check later that it helped

At the agreed review date we check whether the workflow is used and fixed the original problem, counting any upkeep it added. New work comes from a real need, not to fill a care plan.

Permission to do the work isn't permission to publish it. I ask separately before naming you, quoting you, or showing a screenshot.

## Methods I borrow from

| Method | Where it helps | What I avoid |
|---|---|---|
| Kanban and work-in-progress limits | Making waiting and unfinished work visible | Treating a task board as a management system |
| Plan, do, study, act | Testing one change and studying the result | Changing things without a prediction |
| Lean waste analysis | Removing retyping, waiting, and extra handoffs | Removing checks because they look slow |
| Five whys and root cause analysis | Understanding a recurring problem | Forcing every incident into one cause or one person |
| Failure mode and effects analysis | Thinking through failures before a risky release | Treating guessed scores as real probabilities |
| A simple responsibility table | Who does, approves, and is told | Two people both "owning" one decision |
| Architecture decision records | Keeping the reason for a big choice | A record for every small preference |
| Usability testing | Checking the whole task, including recovery | Testing only looks or expert use |

These are tools, not certifications. I use the parts that help, and say when it's only some.

## Sources

- [Lean lexicon: waste](https://www.lean.org/lexicon-terms/muda-mura-muri/), Lean Enterprise Institute: the kinds of waste behind retyping, waiting, and handoffs.
- [Lean lexicon: five whys](https://www.lean.org/lexicon-terms/5-whys/), Lean Enterprise Institute: tracing a recurring problem back to its cause.
- [The Kanban guide](https://kanban.university/kanban-guide/), Kanban University: making work visible and limiting work in progress.
- [Usability testing 101](https://www.nngroup.com/articles/usability-testing-101/), Nielsen Norman Group: watching people do the real task.
- [Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), Michael Nygard: the short decision record.
