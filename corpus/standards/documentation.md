---
id: standards-documentation
title: Documentation
summary: "The documents every neon1 project keeps, what each one is for, and how they stay true: READMEs, changelogs, decision records, and runbooks."
type: standard
status: adopted
updated: 2026-11-09
created: 2026-11-09
edition: "1.0"
audience: "Developers"
order: 9
consumers: [knowledge, ai]
pdf: true
origin: "Core 09 (knowledge and governance) and neon1's repository conventions"
related: [standards-writing, standards-development, standards-versioning]
---

# Documentation

Documentation lets someone use, run, or change a project without asking its author. It's written once, in one place, kept next to the code it describes, and updated in the same change as the code.

## Every project has

| File | For | Contains |
|---|---|---|
| `README.md` | Anyone arriving at the project | What it is, who it's for, its status, how to run, test, and deploy it, and its license |
| `CHANGELOG.md` | People using it | What changed in each release, newest first. See [versioning](versioning.md) |
| `LICENSE` | Anyone reusing it | The license text, plus `NOTICE` when required |
| `SECURITY.md` | Anyone who finds a problem | How to report it privately. See the [security disclosure policy](../policies/security.md) |

Larger projects add:

| File | For | Contains |
|---|---|---|
| `VCS-ETIQUETTE.md` or `CONTRIBUTING.md` | Contributors | Any rules stricter than the [version control standard](version-control.md) |
| Decision records | Future maintainers | Why a significant choice was made, the options considered, and what would change it |
| Runbooks | Whoever operates it | Step-by-step tasks such as deploy, roll back, restore, and rotate a secret |

## Write by purpose

Following [Diátaxis](https://diataxis.fr/), each document does one of four jobs, and doesn't mix them:

- **Tutorial:** learning by doing, for a newcomer.
- **How-to:** steps to finish a specific task.
- **Reference:** exact facts to look up, such as commands, settings, and fields.
- **Explanation:** why things are the way they are.

A README usually holds a short version of each and links out when one grows.

## Decision records

Write one when a choice is costly to reverse: a database, a framework, a hosting model, a license. Keep it to a page: the context, the decision, the options rejected and why, and what would make us revisit it. Number them and never delete one. A changed decision gets a new record that replaces the old one. The [tool and architecture decision form](../forms/tool-decision.md) is a template.

## Runbooks

Prerequisites come first, then commands in the order they're run, each with what you should see and what to do if you don't. Commands are copied exactly and tested. A runbook nobody has followed is a draft.

## Keeping docs true

- Docs change in the same commit as the behavior they describe.
- A checked fact beats a remembered one. Commands in a README should be run before a release.
- One source for each fact. Link to it instead of copying it, so it can't drift. That's why neon1's public words live once, in [neon1-corpus](https://github.com/neon1llc/neon1-corpus).
