---
id: standards-development
title: Development
summary: "The main development standard for neon1: the principles in priority order, what each word means, how work moves from idea to release, and where the detailed rules live."
type: standard
status: adopted
updated: 2026-11-15
created: 2026-11-09
edition: "1.3"
audience: "Developers"
order: 2
consumers: [ai]
pdf: true
origin: "neon1's internal handbook (security, data, and technology decisions) and repository conventions"
related: [standards-writing, standards-version-control, standards-versioning, standards-code-style, standards-testing-and-review, standards-documentation, policy-ai-use]
---

# Development

For everything neon1 builds, for itself or a client: websites, tools, infrastructure, automations, and AI features.

## Principles, in priority order

When two conflict, the higher wins.

| # | Principle | What it means here |
|---|---|---|
| 1 | **Safety** | Nobody is harmed, no data is lost or exposed, nothing irreversible happens by accident. Covers security, privacy, and data integrity |
| 2 | **Correctness** | It does what it says, including in the failure cases that matter |
| 3 | **Value** | It solves a real need someone has today. Work that isn't needed isn't done |
| 4 | **Usability** | The intended person can do the task without help, including with assistive technology |
| 5 | **Simplicity** | The fewest parts, dependencies, and concepts that meet the need |
| 6 | **Robustness** | It degrades visibly instead of silently, recovers from failure, and can be undone |
| 7 | **Maintainability** | Someone else can read it, change it, and run it without the author |
| 8 | **Efficiency** | Time, money, and computing in proportion to its value, measured before optimized |
| 9 | **Consistency** | It follows the conventions of its project and of neon1 |

Consistency is last because a convention should give way when it would make something unsafe, wrong, or unusable. Then the convention is updated, not quietly broken.

## Words neon1 uses, defined

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

1. **Reproduce.** Start from something that works, with a baseline measured.
2. **Integrate.** Connect it into the complete path a person actually uses.
3. **Enhance.** Improve what real use shows is missing or weak.
4. **Unify.** Once several pieces work, share their common parts and make them consistent.

Reuse comes before building: existing tools and well-maintained open source first, checked under the [technology decisions](technology-decisions.md) standard, and custom code only for what nothing else does.

For a bug: reproduce it, find the cause, fix it narrowly, add a test that would have caught it, and check the behavior around it.

## Maturity and version 1.0.0

Before `v1.0.0`, a project is in initial development. `v1.0.0` is the first complete, dependable release of the whole intended scope. Passing tests or one finished feature doesn't qualify. See [versioning](versioning.md).

## The detailed standards

| Standard | Covers |
|---|---|
| [Writing](writing.md) | Every word neon1 writes, including code comments and commit messages |
| [Version control](version-control.md) | Branches, commits, merges, protection, and history |
| [Versioning and releases](versioning.md) | Version numbers, tags, and changelogs |
| [Code style](code-style.md) | Names, comments, file headers, and formatting |
| [Testing and review](testing-and-review.md) | Testing, review, and the definition of done |
| [Documentation](documentation.md) | READMEs, changelogs, decision records, and runbooks |
| [Security and data](security-and-data.md) | The security baseline and data handling |
| [Design and accessibility](design-and-accessibility.md) | Interfaces and documents anyone can use |
| [Technology decisions](technology-decisions.md) | Choosing tools and architecture, and counting the full cost |
| [Reliability and recovery](reliability-and-recovery.md) | Service targets, backups, and incidents |
| [AI quality and oversight](ai-quality.md) | AI features inside what neon1 builds |

## Your code is yours

Client code lives in a repository the client owns, under the agreed license, and the handover covers building, testing, deploying, and rolling back without me. Reused open source keeps its license and notices.

## Review tools

I use AI tools alongside automated checks to review code for bugs, security issues, and missing tests, and I review and take responsibility for every change that ships. See [How I use AI](../policies/ai-use.md).

## Sources

- [Semantic Versioning 2.0.0](https://semver.org/), Tom Preston-Werner: what a version number promises.
- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/): commit messages a person and a tool can both read.
- [The Twelve-Factor App](https://12factor.net/), Adam Wiggins and contributors at Heroku: settings outside code, and builds that repeat.
- [Secure Software Development Framework, SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final), NIST: security practices across development.
