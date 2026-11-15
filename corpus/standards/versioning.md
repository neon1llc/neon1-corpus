---
id: standards-versioning
title: Versioning and releases
summary: "How neon1 numbers releases of code (vX.Y.Z) and editions of documents (X.Y), when each number goes up, and how tags, changelogs, and package files stay in agreement."
type: standard
status: adopted
updated: 2026-11-15
created: 2026-11-09
edition: "1.8"
audience: "Developers"
order: 6
consumers: [ai]
pdf: true
origin: "neon1's internal engineering notes (versions and releases), Semantic Versioning 2.0.0, and Keep a Changelog 1.1.0"
related: [standards-development, standards-version-control, standards-documentation]
---

# Versioning and releases

## Software: vX.Y.Z

Software follows [Semantic Versioning 2.0.0](https://semver.org/): `MAJOR.MINOR.PATCH`, written with a `v`, such as `v1.4.2`.

| Number | Goes up when | Example |
|---|---|---|
| **Major** (X) | Something that worked stops working, or people must change how they use it | Removing a command, renaming a setting |
| **Minor** (Y) | New capability is added and everything that worked still works | A new page, command, or option |
| **Patch** (Z) | Something is corrected and nothing new is added | A bug fix, a wrong fact, a security fix |

Numbers to the right of a bump reset to zero: `v1.4.2` then `v1.5.0`.

## Before v1.0.0

Versions starting with `0` are initial development. A breaking change bumps the minor number, and a patch is fixes only. A minor number counts releases, not merges or days. Start at `v0.1.0` for the first usable release.

## v1.0.0

`v1.0.0` is the first complete, dependable release of the whole intended scope, shown to work for its people, with documentation, recovery, and known limits written down. After that, a breaking change means a new major version.

## Pre-releases

A release under test gets a suffix, such as `v1.0.0-rc.1`. Nothing depends on it in production.

## One version, everywhere

A release's number must agree in:

- The **git tag**, annotated, on the exact commit built.
- The **changelog's** top entry.
- The **package file**, if there is one (`package.json`, `pyproject.toml`).
- Anything the release shows people, such as a site's footer or a `--version` flag.

Checks fail when these disagree. Every changelog version has a tag and every tag an entry. If numbers have drifted, don't rewrite old tags. Pick the next correct number, make every place agree, and note it in the changelog.

## When a project shipped before it was tagged

Tag the commits where meaningful pieces landed as pre-releases in order (`v0.1.0-alpha.1`, `v0.1.0-alpha.2`), without rewriting main. Each gets a short, dated entry under "Before v0.1.0" in the changelog.

## Changelogs

Every project keeps a `CHANGELOG.md`, newest first, following [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/):

```
## v1.5.0

### Added
- What's new, written for the people who use it.

### Fixed
- What was wrong and is now right.
```

A date may follow the version. Sections are **Added**, **Changed**, **Deprecated**, **Removed**, **Fixed**, and **Security**, used only when needed. Unreleased work goes under `## Unreleased`. Entries follow the [writing standard](writing.md) and describe the change from the reader's side.

## Releasing

1. Look at the batch on dev first, where a project has one. neon1's site and 1NEON do, at dev.neon1.tech.
2. Merge everything the release includes into main, with the checks passing.
3. Update the changelog and every place the version appears, in one commit.
4. Merge it to main. The pipeline deploys it, checks that what's live reports the new version, and then tags that commit: `vX.Y.Z`, annotated.
5. A project without a pipeline tags by hand: `git tag -a vX.Y.Z -m "vX.Y.Z: one line on what it brings"`, then pushes the tag.

## How neon1's repositories release

In every neon1 repository the pipeline makes the tag, so a tag means this exact commit passed its checks and is live.

| Repository | Where the version is set | When the tag is made |
|---|---|---|
| neon1-site | The changelog, the page's version, and the footer | After the deploy, once the live site reports the new version |
| neon1-1NEON | The changelog and `package.json` | After the deploy, once the portal is verified live |
| neon1-chat | The changelog and `package.json` | After the deploy, once Neo's health check reports the new commit |
| neon1-aws-infrastructure | The changelog | Once every stack's plan or apply has passed |
| neon1-corpus | The changelog | On main, by the release workflow, which also publishes the bundles |

- **A change people will notice ships in a release,** with its changelog entry in the same merge.
- **A push with no new version** is for changes nobody would notice, such as CI or comments.
- **Checks enforce agreement.** The tag step stops when the changelog names no version.
- **Dev builds are never releases.** Their changelog entries wait under `## Unreleased` until the batch reaches main.
- **A tag is never made again or moved.** If a release went wrong, the fix is the next patch.

## Release levels

A release level says how far a change has been proven:

| Level | Means | Evidence |
|---|---|---|
| **Implemented** | The code exists | Merged with checks passing, and a changelog entry under `## Unreleased` |
| **Verified** | Named acceptance tests passed | Affected scenarios pass in CI, plus a check on dev or in the demo for anything people see |
| **Released** | The right version is live | The pipeline deployed it, the live version matches, and the tag exists |
| **Qualified** | Real use and recovery are established | Representative real use, a safe check in production, and its recovery path (a rollback, a restore, or a re-run) tested at least once |

A tag means Released, never Qualified on its own. Descriptions don't get ahead of the level: Implemented is "in development", Verified is "in testing" or "a preview", Released is "available", and only Qualified is "in use" or "supported".

## Documents: editions X.Y

Documents, such as the standards, policies, and templates here, use an **edition** of two numbers without a `v`, such as `1.1`.

| Number | Goes up when |
|---|---|
| **Major** (X) | A promise, a rule, a required field, or an obligation changes |
| **Minor** (Y) | Wording is clarified, a fact is corrected, or something is added without changing a promise |

`1.0` is the first adopted edition, after an editing pass for accuracy, plain language, and its kind's conventions. Below it is a draft. Each document records when it was published and last updated, from its real history.

A collection of documents, such as neon1-corpus, is software and follows `vX.Y.Z`: a new document is a minor release, and a correction is a patch.

## Sources

- [Semantic Versioning 2.0.0](https://semver.org/), Tom Preston-Werner: what a major, minor, and patch number each promise.
- [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/), Olivier Lacan: changelogs written for people, newest first.
- [Git tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging), from Pro Git by Scott Chacon and Ben Straub: annotated tags that mark a release.
