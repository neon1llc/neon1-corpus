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

Every project follows the same path, scaled to its size: understand one real task, measure where it stands, compare the options, agree on a bounded result, build it in small steps, teach it, and check later that it helped. The [process page](../company/process.md) is the one-minute version. This is the full one.

## Understand one real task

I ask for the last finished example, the next one coming, and a recent failure. With your permission I watch the work happen, often over a short screen share. I note who starts it, what information comes in, where it waits, which steps need judgment, and what "done" means.

The result is a plain problem statement, such as "When a new request arrives, the receptionist copies it into two places and sometimes misses the requested date." "Build an AI agent" is a solution, not a problem statement.

I don't copy private records into my notes just because they were on screen. For personal clients I ask about comfort, accessibility, shared devices, and who will help later, and I'm happy to slow down and write steps out.

## Measure the starting point

Before changing anything I time a few real examples. Hands-on effort and waiting time are measured separately, and so are errors and exceptions. Then we write one sentence on the outcome, one measure of success, and one guardrail. For example: cut retyping time without increasing wrong customer records.

Saved minutes don't automatically become money. If we put a dollar value on time, the assumption is written down next to it.

## Compare the options

I lay out at least four: improve the process, configure what you already have, adopt a new service, or build something narrow. Each gets its ongoing cost, the effort to learn it, how your data is handled, who maintains it, what happens when it fails, and how you'd leave. "Do nothing for now" is on the list too.

## Agree on a bounded result

The scope is small enough to demonstrate at handover. It lists the normal cases, what's excluded, what data and accounts you'll provide, who approves, and how we'll check it works. Uncertain work sits behind a paid discovery step or a separate spending cap. See the [proposal template](../templates/proposal.md).

If something new comes up, a [change request](../forms/change-request.md) says what it is, what it costs, how it moves the dates, and how it changes acceptance. Nothing extra happens before you approve it.

## Build and test in small steps

You see a basic working version early, using safe sample data, so you can tell me whether it matches your task. Configuration and code are versioned, test and live access are kept apart, and every release records how to roll it back.

Checks follow the promise: a valid request arrives once, missing fields are explained, one person can't see another's records, a duplicate doesn't create duplicate work, and an outage leaves a visible, recoverable state. I test on the browsers, devices, and accessibility needs that are in scope, including a slow connection when that's realistic.

## Teach and hand over

I show one ordinary task. You do it. Then you fix a harmless mistake on purpose. Where you hesitate, the instructions get better.

The handover covers the workflow, who owns each account, recurring costs, routine steps, common errors, backup and recovery, vendor contacts, support terms, how to export, and known limits. Passwords go in a password manager, never in the handover document. We record acceptance against the agreed checks, and I remove access I no longer need. The [release and handover record](../forms/release-and-handover.md) is the checklist.

## Check later that it helped

At the agreed review date we look at whether the new workflow is being used and whether it fixed the original problem, including any upkeep it added. If something new is needed, it's because of a real need, not to fill a care plan.

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

These are tools, not certifications. I use the parts that help and say so when I'm only using some of them.

## Sources

- [Lean lexicon: waste](https://www.lean.org/lexicon-terms/muda-mura-muri/), Lean Enterprise Institute: the kinds of waste behind retyping, waiting, and handoffs.
- [Lean lexicon: five whys](https://www.lean.org/lexicon-terms/5-whys/), Lean Enterprise Institute: tracing a recurring problem back to its cause.
- [The Kanban guide](https://kanban.university/kanban-guide/), Kanban University: making work visible and limiting work in progress.
- [Usability testing 101](https://www.nngroup.com/articles/usability-testing-101/), Nielsen Norman Group: watching people do the real task.
- [Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), Michael Nygard: the short decision record.
