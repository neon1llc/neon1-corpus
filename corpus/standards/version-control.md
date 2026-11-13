---
id: standards-version-control
title: Version control
summary: "How neon1 uses git: branch names, commit messages, merges, protected branches, and the history rules, and which safeguards production and client data require."
type: standard
status: adopted
updated: 2026-11-12
created: 2026-11-08
edition: "2.3"
audience: "Developers"
order: 5
consumers: [knowledge, ai]
pdf: true
origin: "VCS-ETIQUETTE.md in Ready, Secure, Go and neon1-corpus, extended to every neon1 repository"
related: [standards-development, standards-versioning, standards-testing-and-review]
---

# Version control

Every neon1 project lives in git, on GitHub, under these rules. A repository's own `VCS-ETIQUETTE.md` can add stricter rules, not looser ones. Rules tighten once a repository deploys to production or holds client data, whatever its version.

## Before you commit

- Check which branch you're on, what's staged, and whether anyone else's changes are in the working tree.
- Keep unrelated changes out. One branch holds one change.
- Run the project's checks and read the full diff before committing.

## Branch names

Name a branch for the kind of change and what it does, in lowercase hyphenated words:

| Prefix | For | Example |
|---|---|---|
| `feat/` | New capability, documents, or tools | `feat/knowledge-center` |
| `fix/` | Something wrong: a bug, a wrong fact, a broken link | `fix/office-hours` |
| `docs/` | Documentation about the project itself | `docs/vcs-etiquette` |
| `refactor/` | Restructuring that changes no behavior | `refactor/split-services` |
| `chore/` | CI, dependencies, and housekeeping | `chore/node-24` |
| `release/` | Preparing a release | `release/v1.0.0` |

If a second problem turns up while working, it gets its own branch.

## Commit messages

neon1 follows [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/):

```
type(scope): plain summary in lowercase with no period

Optional body: why the change was made, when the diff doesn't say.

Optional footers, such as BREAKING CHANGE: what breaks and how to move.
```

- **Types:** `feat` (a new capability), `fix` (a correction), `docs`, `refactor`, `test`, `chore`, `perf`, `build`, `ci`.
- **Scope** is optional and names the area, such as `fix(settings)` or `feat(templates)`.
- **A breaking change** gets a `!` after the type or scope, such as `feat(api)!:`, and a `BREAKING CHANGE:` footer.
- The summary is an instruction: `fix(contact): correct weekday hours`, not `fixed stuff`.
- Messages follow the [writing standard](writing.md), for someone reading the history a year later.

## Commit boundaries

Commit at a point that stands on its own: a finished workflow, a narrow fix, a complete document, with its source, tests, and documentation together. Every commit on main passes the checks.

## Authorship

Commits carry the name and email of the person responsible, who has read and stands behind every line.

## Merging

- Merge a feature branch with `git merge --no-ff`, so the branch stays visible in history, then delete it.
- Small pull requests may be squash-merged once the repository is protected (see below) when the individual commits don't matter.
- Keep main releasable. Failing checks on main come first.

## History

- Never rewrite history on the main branch, on a shared branch, or on anyone else's branch.
- Rebasing your own unpushed work is fine.
- Never force-push to main. A mistake on main is fixed by a new commit, such as a `git revert`.
- A leaked secret is revoked and rotated first. Removing it, or a wrong author, from history is a separate, deliberate owner decision, with branch protection paused only for that change.

## Before anything is live

A repository with nothing in production and no client data moves fast, with habits rather than gates:

- Named branches for anything bigger than a typo, merged with `--no-ff`.
- Typos and broken links may go straight to main.
- Pull requests are optional. Read your own diff before merging.

## From the first live release, or when client data is at stake

Production and client data decide when safeguards apply, not the version number. A `v0.x` repository that deploys a live site or holds client data follows these from its first live release:

- **The main branch is protected** against force pushes and deletion, with no one allowed to bypass that.
- **Required checks pass** before a change reaches main.
- **Every change is reviewed** as a full diff before it merges, approved by someone other than the author when a second person is available. Policies and agreements also need a reviewer who can check them against what's live.
- **Rollback is ready:** the previous release can be put back, written down before the release goes out.
- **Signed commits and tags** on main, from `v1.0.0` on.
- **Urgent fixes**, such as a wrong policy or contact detail, go on a `fix/urgent-...` branch, merged with one review and released as a same-day patch.

### How this works today

neon1 has one maintainer today, and the controls fit that. On the repositories that deploy to production (the website, 1NEON, the chat, and the AWS infrastructure), main has two rulesets:

- **No force push or deletion**, with no bypass for anyone, including me.
- **Required checks** must pass before a change lands on main. As sole maintainer and admin, I can bypass this one, and GitHub warns whenever I do.

That bypass is the sole-maintainer exception, for when no second reviewer exists, not for skipping checks. I use it for small changes I've reviewed as a full diff with the checks run locally, and for urgent fixes when waiting would cause more harm. Each bypass shows in the warnings and history, and I review it once it's live. When a second maintainer joins, review by someone other than the author becomes required.

## Tags

Every released version has an annotated `vX.Y.Z` tag on the commit it was built from, never moved or deleted once pushed. See [versioning and releases](versioning.md) for when to tag.

## Sources

- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/): the commit message format.
- [Pro Git: branches in a nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell), Scott Chacon and Ben Straub: how branches and merges work.
- [About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches), GitHub: the rules that guard a main branch.
