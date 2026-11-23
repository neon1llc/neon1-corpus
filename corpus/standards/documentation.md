---
id: standards-documentation
title: Documentation
summary: "The documents every neon1 project keeps and how they stay true, and how the documents in this Knowledge Center are built, dated, shared, and credited."
type: standard
status: adopted
updated: 2026-11-20
created: 2025-08-05
edition: "1.7"
audience: "Developers"
order: 9
consumers: [ai]
pdf: true
origin: "neon1's internal handbook (knowledge and governance) and neon1's repository conventions"
related: [standards-writing, standards-development, standards-versioning]
---

# Documentation

Documentation lets someone use, run, or change a project without asking its author.

## Every project has

| File | For | Contains |
|---|---|---|
| `README.md` | Anyone arriving | What it is, who it's for, status, how to run, test, and deploy it, and its license |
| `CHANGELOG.md` | People using it | What changed in each release, newest first. See [versioning](versioning.md) |
| `LICENSE` | Anyone reusing it | The license text, plus `NOTICE` when required |
| `SECURITY.md` | Anyone who finds a problem | How to report it privately. See the [security disclosure policy](../policies/security.md) |

Larger projects add `VCS-ETIQUETTE.md` or `CONTRIBUTING.md` for rules stricter than the [version control standard](version-control.md), decision records, and runbooks.

## Write by purpose

Following [Diátaxis](https://diataxis.fr/), each document does one job:

- **Tutorial:** learning by doing, for a newcomer.
- **How-to:** steps to finish a task.
- **Reference:** exact facts to look up.
- **Explanation:** why things are the way they are.

A README holds a short version of each and links out when one grows.

## Decision records

Write one when a choice is costly to reverse, such as a database, framework, hosting model, or license. One page: the context, the decision, the options rejected and why, and what would reopen it. Number them, never delete one, and record a changed decision as a new one. The [tool and architecture decision form](../forms/tool-decision.md) is a template.

## Runbooks

Prerequisites first, then commands in order, each with what you should see and what to do if you don't, copied exactly and tested. A runbook nobody has followed is a draft.

## Keeping docs true

- Docs change in the same commit as the behavior they describe.
- Run a README's commands before a release.
- Keep one source for each fact, linked rather than copied.

## Documents in this Knowledge Center

Everything is written once in [neon1-corpus](https://github.com/neon1llc/neon1-corpus) as Markdown, and read from there by the website, the Knowledge Center, and the blog. Each document carries a title, a one-sentence summary, its type (page, standard, guide, case study, FAQ, policy, template, form, or example), an edition (`X.Y`, raised as described in [versioning](versioning.md)), the date it was published and last changed in substance, and who it's for when that isn't everyone. Dates are never moved, and a typo fix changes neither the date nor the edition.

## Sources

- [Diátaxis](https://diataxis.fr/), by Daniele Procida: four kinds of documentation, each with its own job.
- [Write the Docs guide](https://www.writethedocs.org/guide/), from the Write the Docs community: docs as code, and keeping documentation next to what it describes.
- [Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), by Michael Nygard: the short decision record this standard uses.
- [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/): changelogs written for people, newest first.
- [Google SRE workbook](https://sre.google/workbook/table-of-contents/), from Google: runbooks and on-call practice for services that must keep running.
