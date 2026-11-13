---
id: standards-versioning
title: Versioning and releases
summary: "How neon1 numbers releases of code (vX.Y.Z) and editions of documents (X.Y), when each number goes up, and how tags, changelogs, and package files stay in agreement."
type: standard
status: adopted
updated: 2026-11-13
created: 2026-11-09
edition: "1.5"
audience: "Developers"
order: 6
consumers: [ai]
pdf: true
origin: "neon1's internal engineering notes (versions and releases), Semantic Versioning 2.0.0, and Keep a Changelog 1.1.0"
related: [standards-development, standards-version-control, standards-documentation]
---

# Versioning and releases

A version number tells people what changed and whether they need to act, if the numbers follow rules. neon1 uses one scheme for software and one for documents.

## Software: vX.Y.Z

Software follows [Semantic Versioning 2.0.0](https://semver.org/): `MAJOR.MINOR.PATCH`, written with a `v`, such as `v1.4.2`.

| Number | Goes up when | Example |
|---|---|---|
| **Major** (X) | Something that worked before stops working, or people must change how they use it | Removing a command, renaming a setting, changing a data format |
| **Minor** (Y) | New capability is added and everything that worked still works | A new page, command, report, or option |
| **Patch** (Z) | Something is corrected and nothing new is added | A bug fix, a wrong fact, a security fix that changes nothing else |

Numbers to the right of a bump reset to zero: `v1.4.2` then `v1.5.0`.

## Before v1.0.0

Versions starting with `0` mean initial development: the same rules, except a breaking change bumps the minor number, since nothing is promised yet.

- **Patch** (`v0.4.1`): fixes only.
- **Minor** (`v0.5.0`): a release with new capability, or a breaking change.
- **A minor number counts releases, not merges or days.** Ten merges shipped together are one release, and `v0.42.0` doesn't mean 42% done.
- Start at `v0.1.0` for the first usable release.

## v1.0.0

`v1.0.0` is the first complete, dependable release of the whole intended scope, shown to work for its people, with documentation, recovery, and known limits written down. From then on, a breaking change means a new major version.

## Pre-releases

A release under test gets a suffix, such as `v1.0.0-rc.1`. Pre-releases sort before the final version, and nothing depends on them in production.

## One version, everywhere

A release's number appears in several places that must agree:

- The **git tag**, annotated, on the exact commit the release was built from.
- The **changelog's** top entry.
- The **package file**, if the project has one (`package.json`, `pyproject.toml`).
- Anything the release shows people, such as a site's footer or a `--version` flag.

Checks fail when these disagree. Every changelog version has a tag and every tag an entry, and tags are never moved or reused.

## When versions have drifted

If numbers have drifted, such as a package file at `0.42.0` and the latest tag `v0.13.0`, don't rewrite old tags. Pick the next correct number, make every place agree in that release, and note it in the changelog.

## When a project shipped before it was tagged

A project that ran from main before its first tag can tag the commits where meaningful pieces landed as pre-releases, in order: `v0.1.0-alpha.1`, `v0.1.0-alpha.2`, and so on, as they are, without rewriting main. Each gets a short, dated entry under "Before v0.1.0" in the changelog, noting when the tags were added.

## Changelogs

Every project keeps a `CHANGELOG.md`, newest first, following [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/):

```
## v1.5.0

### Added
- What's new, written for the people who use it.

### Fixed
- What was wrong and is now right.
```

A date may follow the version. Sections are **Added**, **Changed**, **Deprecated**, **Removed**, **Fixed**, and **Security**, used only when needed, and unreleased work goes under `## Unreleased`. Entries follow the [writing standard](writing.md), describing the change from the reader's side.

## Releasing

1. Look at the batch on dev first, where a project has one. neon1's site and 1NEON do, at dev.neon1.tech.
2. Merge everything the release includes into main, with the checks passing.
3. Update the changelog and every place the version appears, in one commit.
4. Merge it to main. The pipeline deploys it, checks that what's live reports the new version, and then tags that commit: `vX.Y.Z`, annotated.
5. A project without a pipeline tags by hand the same way: `git tag -a vX.Y.Z -m "vX.Y.Z: one line on what it brings"`, then pushes the tag.

## How neon1's repositories release

In every neon1 repository, the pipeline makes the tag, so a tag always means "this exact commit passed its checks and is live".

| Repository | Where the version is set | When the tag is made |
|---|---|---|
| neon1-site | The changelog, the page's version, and the footer | After the deploy, once the live site reports the new version |
| neon1-1NEON | The changelog and `package.json` | After the deploy, once the portal is verified live |
| neon1-chat | The changelog and `package.json` | After the deploy, once Neo's health check reports the new commit |
| neon1-aws-infrastructure | The changelog | Once every stack's plan or apply has passed |
| neon1-corpus | The changelog | On main, by the release workflow, which also publishes the bundles |

- **A change that people will notice ships in a release.** Its changelog entry goes in the same merge: a fix under the next patch, new capability under the next minor.
- **A push with no new version ships under the current one.** Keep that to changes nobody would notice, such as CI or comments.
- **Checks enforce agreement.** Each repository's checks fail when its version places disagree, and the tag step stops when the changelog names no version.
- **Dev builds are never releases.** Work shown on dev.neon1.tech, from the `dev` branch or any other branch, is never tagged or announced, and its changelog entries wait under `## Unreleased`. The version is set, and the tag made, only when the batch reaches main.
- **A tag that exists is never made again or moved.** If a release went wrong, the fix is the next patch.

## Documents: editions X.Y

Documents, such as the standards, policies, and templates here, use an **edition** of two numbers without a `v`, such as `1.1`, to keep them distinct from software versions.

| Number | Goes up when |
|---|---|
| **Major** (X) | A promise, a rule, a required field, or an obligation changes |
| **Minor** (Y) | Wording is clarified, a fact is corrected, or something is added without changing a promise |

`1.0` is the first adopted edition, after an editing pass for accuracy, plain language, and its kind's conventions; below it is a draft. Each document records when it was published and last updated, from its real history: published means when the content first appeared, in any form.

A collection of documents, such as neon1-corpus, is itself software and follows `vX.Y.Z`: a new document is a minor release, and a correction is a patch.

## Sources

- [Semantic Versioning 2.0.0](https://semver.org/), Tom Preston-Werner: what a major, minor, and patch number each promise.
- [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/), Olivier Lacan: changelogs written for people, newest first.
- [Git tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging), from Pro Git by Scott Chacon and Ben Straub: annotated tags that mark a release.
