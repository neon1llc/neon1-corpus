---
id: standards-development
title: Development
summary: "The main development standard for neon1: the principles in priority order, what each word means, how work moves from idea to release, and where the detailed rules live."
type: standard
status: adopted
updated: 2026-11-11
created: 2026-11-09
edition: "1.1"
audience: "Developers"
order: 2
consumers: [knowledge, ai]
pdf: true
origin: "neon1's internal handbook (security, data, and technology decisions) and repository conventions"
related: [standards-writing, standards-version-control, standards-versioning, standards-code-style, standards-testing-and-review, standards-documentation, policy-ai-use]
---

# Development

This is the main development standard for neon1. It covers every project neon1 builds, for itself or for a client: websites, tools, infrastructure, automations, and AI features. It sets the principles and the order of work. The detailed rules live in the standards linked at the end, and each of them follows this one.

## Principles, in priority order

When two principles pull in different directions, the higher one wins. Most of the time they agree.

| # | Principle | What it means here |
|---|---|---|
| 1 | **Safety** | Nobody is harmed, no data is lost or exposed, and nothing irreversible happens by accident. Covers security, privacy, and data integrity |
| 2 | **Correctness** | It does what it says, including in the failure cases that matter |
| 3 | **Value** | It solves a real need someone has today. Work that isn't needed isn't done, however interesting |
| 4 | **Usability** | The intended person can do the task without help, on their device, including with assistive technology |
| 5 | **Simplicity** | The fewest parts, dependencies, and concepts that meet the need. Easy to explain in a few sentences |
| 6 | **Robustness** | It degrades visibly instead of silently, recovers from failure, and can be undone |
| 7 | **Maintainability** | Someone else can read it, change it, and run it without the author |
| 8 | **Efficiency** | It uses time, money, and computing in proportion to its value. Fast enough, cheap enough, measured before optimized |
| 9 | **Consistency** | It follows the conventions of its project and of neon1, so nothing has to be relearned |

A few consequences of the order:

- A simpler design that leaves a security gap loses. A faster design that's harder to use loses unless speed is the need.
- Efficiency matters, but it comes after people can use and maintain the thing. Optimize what's measured, not what's guessed.
- Consistency is last because a convention should give way when it would make something unsafe, wrong, or unusable. When that happens, the convention gets updated rather than quietly broken.

## Words neon1 uses, defined

These words come up often. Each one means something specific here.

| Word | Meaning |
|---|---|
| **Mature** | Complete for its stated purpose, dependable in its intended workflows, documented, and recoverable. Not the same as old or large |
| **Ready** | Tested in conditions like real use, with known limits written down and a way back |
| **Done** | Built, tested, documented, reviewed, released, and handed over. Merged alone isn't done |
| **Robust** | Survives bad input, outages, and retries without corrupting anything, and says when it fails |
| **Simple** | Few parts and few concepts. Not the same as quick to write |
| **Usable** | The intended person finishes the task without help |
| **Valuable** | Someone would notice and mind if it were gone |
| **Efficient** | Proportionate in time, cost, and resources to what it delivers |
| **Secure** | Meets the agreed baseline for its data and risks, with evidence. Never a blanket claim |

## How work moves

Every piece of work follows the same order, at whatever size fits:

1. **Reproduce.** Start from something that works: an existing tool, a known pattern, or the current behavior, with a baseline measured.
2. **Integrate.** Connect it into the complete path a person actually uses, end to end.
3. **Enhance.** Improve what real use shows is missing or weak.
4. **Unify.** Once several pieces work, share their common parts and make them consistent.

Reuse comes before building. Existing tools and well-maintained open-source projects come first, checked under the [technology decisions](technology-decisions.md) standard. Custom code covers only what nothing else does.

For a bug, the order is: reproduce it, find the cause, fix it narrowly, add a test that would have caught it, and check the behavior around it.

## Maturity and version 1.0.0

Before `v1.0.0`, a project is under initial development, and its versions say so. `v1.0.0` is reserved for the first complete, dependable release of the whole intended scope, shown to work for the people it's for. Passing tests or finishing one feature doesn't make a project 1.0.0. The [versioning standard](versioning.md) defines every version number in detail.

## The detailed standards

| Standard | Covers |
|---|---|
| [Writing](writing.md) | Every word neon1 writes, including code comments and commit messages |
| [Version control](version-control.md) | Branches, commits, merges, protection, and history |
| [Versioning and releases](versioning.md) | Version numbers, tags, changelogs, and when each number goes up |
| [Code style](code-style.md) | Names, comments, file headers, formatting, and layout |
| [Testing and review](testing-and-review.md) | What gets tested, how changes are reviewed, and the definition of done |
| [Documentation](documentation.md) | READMEs, changelogs, decision records, and runbooks |
| [Security and data](security-and-data.md) | The security baseline and data handling |
| [Design and accessibility](design-and-accessibility.md) | Interfaces and documents anyone can use |
| [Technology decisions](technology-decisions.md) | Choosing tools and architecture, and counting the full cost |
| [Reliability and recovery](reliability-and-recovery.md) | Service targets, backups, and incidents |
| [AI quality and oversight](ai-quality.md) | AI features inside what neon1 builds |

## Your code is yours

Code written for a client lives in a repository the client owns, under the license agreed. The handover includes how to build, test, deploy, and roll back without me. Reused open-source code keeps its license and notices, and I explain what each license allows.

## Review tools

I use AI tools to review code for bugs, security issues, and missing tests, alongside automated checks. I review and take responsibility for every change that ships. See [How I use AI](../policies/ai-use.md).

## Sources

- [Semantic Versioning 2.0.0](https://semver.org/), Tom Preston-Werner: what a version number promises.
- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/): commit messages a person and a tool can both read.
- [The Twelve-Factor App](https://12factor.net/), Adam Wiggins and contributors at Heroku: settings outside code, and builds that repeat.
- [Secure Software Development Framework, SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final), NIST: security practices across development.
