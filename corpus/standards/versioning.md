---
id: standards-versioning
title: Versioning and releases
summary: "How neon1 numbers releases of code (vX.Y.Z) and editions of documents (X.Y), when each number goes up, and how tags, changelogs, and package files stay in agreement."
type: standard
status: adopted
updated: 2026-11-11
created: 2026-11-09
edition: "1.4"
audience: "Developers"
order: 6
consumers: [knowledge, ai]
pdf: true
origin: "neon1's private development guide (versions and releases), Semantic Versioning 2.0.0, and Keep a Changelog 1.1.0"
related: [standards-development, standards-version-control, standards-documentation]
---

# Versioning and releases

A version number tells people what changed and whether they need to do anything about it. That only works if the numbers follow rules. neon1 uses two schemes: one for software and one for documents.

## Software: vX.Y.Z

Software follows [Semantic Versioning 2.0.0](https://semver.org/). A version has three numbers, `MAJOR.MINOR.PATCH`, and is written with a `v` in tags and prose, such as `v1.4.2`.

| Number | Goes up when | Example |
|---|---|---|
| **Major** (X) | Something that worked before stops working, or people must change how they use it | Removing a command, renaming a setting, changing a data format |
| **Minor** (Y) | New capability is added and everything that worked still works | A new page, command, report, or option |
| **Patch** (Z) | Something is corrected and nothing new is added | A bug fix, a wrong fact, a security fix that changes nothing else |

When a number goes up, the numbers to its right reset to zero: `v1.4.2` then `v1.5.0`, never `v1.5.2`.

## Before v1.0.0

Versions starting with `0` mean initial development. The rules above still guide the numbers, with one change: a breaking change bumps the minor number instead of the major one, because nothing is promised yet.

- **Patch** (`v0.4.1`): fixes only.
- **Minor** (`v0.5.0`): a release with new capability, or a breaking change.
- **A minor number counts releases, not merges or days.** Ten small merges that ship together are one release. A version is never a percentage of completeness, so `v0.42.0` doesn't mean 42% done.
- Start at `v0.1.0` for the first usable release.

## v1.0.0

`v1.0.0` is the first complete, dependable release of the project's whole intended scope, shown to work for the people it's for, with documentation, recovery, and its known limits written down. From then on, a breaking change means a new major version, and people can rely on the numbers.

## Pre-releases

A release that's being tested before it's final gets a suffix: `v1.0.0-rc.1`, `v2.0.0-beta.2`. Pre-releases sort before the final version, and nothing depends on them in production.

## One version, everywhere

A release's number appears in several places, and they must agree:

- The **git tag**, annotated, on the exact commit the release was built from.
- The **changelog's** top entry.
- The **package file**, if the project has one (`package.json`, `pyproject.toml`).
- Anything the release shows people, such as a site's footer or a `--version` flag.

A project's checks should fail when these disagree. Every version named in a changelog has a tag, and every tag has a changelog entry. Tags are never moved or reused.

## When versions have drifted

If a project's numbers have drifted, such as a package file saying `0.42.0` while the latest tag is `v0.13.0`, don't rewrite old tags. Pick the next correct number from where the project actually is, make every place agree in that release, and note the change in the changelog. History stays as it was, and the numbers are right from then on.

## When a project shipped before it was tagged

A project that ran from main before its first tag can still show how it got there. Pick the commits on main where a meaningful piece landed and tag them as pre-releases of the first tagged version, in order: `v0.1.0-alpha.1`, `v0.1.0-alpha.2`, and so on. Tag the commits as they are. Don't rebase or rewrite main to make the history look tidier. Give each one a short entry under a "Before v0.1.0" heading in the changelog, dated when it shipped, and say when the tags were added. Tags already pushed stay where they are.

## Changelogs

Every project keeps a `CHANGELOG.md`, newest first, following [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/):

```
## v1.5.0

### Added
- What's new, written for the people who use it.

### Fixed
- What was wrong and is now right.
```

The release date may follow the version in the heading. Sections are **Added**, **Changed**, **Deprecated**, **Removed**, **Fixed**, and **Security**, used only when they have entries. Work merged but not yet released goes under `## Unreleased`. Entries follow the [writing standard](writing.md): they describe the change from the reader's side, not the code's.

## Releasing

1. Merge everything the release includes into main, with the checks passing.
2. Update the changelog and every place the version appears, in one commit.
3. Merge it to main. The pipeline deploys it, checks that what's live reports the new version, and then tags that commit: `vX.Y.Z`, annotated.
4. A project without a pipeline tags by hand the same way: `git tag -a vX.Y.Z -m "vX.Y.Z: one line on what it brings"`, then pushes the tag.

## How neon1's repositories release

In every neon1 repository, the pipeline makes the tag, not a person. A tag then always means "this exact commit passed its checks and is live", and a release can't be forgotten or tagged on the wrong commit.

| Repository | Where the version is set | When the tag is made |
|---|---|---|
| neon1-site | The changelog, the page's version, and the footer | After the deploy, once the live site reports the new version |
| neon1-1NEON | The changelog and `package.json` | After the deploy, once the portal is verified live |
| neon1-chat | The changelog and `package.json` | After the deploy, once Neo's health check reports the new commit |
| neon1-aws-infrastructure | The changelog | Once every stack's plan or apply has passed |
| neon1-corpus | The changelog | On main, by the release workflow, which also publishes the bundles |

- **A change that people will notice ships in a release.** Add its changelog entry in the same merge: a fix goes under the next patch, new capability under the next minor.
- **A push with no new version ships under the current one.** Keep that to changes nobody would notice, such as CI, comments, or a dependency bump with no effect.
- **Checks enforce agreement.** Each repository's checks fail when its version places disagree, and the tag step stops when the changelog names no version.
- **A tag that exists is never made again or moved.** If a release went wrong, the fix is the next patch.

## Documents: editions X.Y

Documents, such as the standards, policies, and templates in this Knowledge Center, use an **edition** written as two numbers without a `v`: `1.0`, `1.1`, `2.0`. The missing `v` keeps document editions distinct from software versions.

| Number | Goes up when |
|---|---|
| **Major** (X) | A promise, a rule, a required field, or an obligation changes |
| **Minor** (Y) | Wording is clarified, a fact is corrected, or something is added without changing a promise |

`1.0` is the first edition published as adopted, after an editing pass for accuracy, plain language, and the conventions of its kind. Below `1.0` is a draft. Each document also records when it was published and when it was last updated, taken from its real history. The published date is when the content first appeared, in whatever form, not when it moved into this collection.

A collection of documents, such as neon1-corpus, is itself software and follows `vX.Y.Z`: a new document is a minor release, and a correction is a patch.

## Sources

- [Semantic Versioning 2.0.0](https://semver.org/), Tom Preston-Werner: what a major, minor, and patch number each promise.
- [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/), Olivier Lacan: changelogs written for people, newest first.
- [Git tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging), from Pro Git by Scott Chacon and Ben Straub: annotated tags that mark a release.
