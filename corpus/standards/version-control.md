---
id: standards-version-control
title: Version control
summary: "How neon1 uses git: branch names, commit messages, merges, protected branches, and the history rules, and which safeguards production and client data require."
type: standard
status: adopted
updated: 2026-11-15
created: 2025-08-26
edition: "2.6"
audience: "Developers"
order: 5
consumers: [ai]
pdf: true
origin: "VCS-ETIQUETTE.md in Ready, Secure, Go and neon1-corpus, extended to every neon1 repository"
related: [standards-development, standards-versioning, standards-testing-and-review]
---

# Version control

Every neon1 project lives in git, on GitHub. A repository's own `VCS-ETIQUETTE.md` can add stricter rules, not looser ones.

## Before you commit

- Check your branch, what's staged, and whether anyone else's changes are in the working tree.
- One branch holds one change. A second problem gets its own branch.
- Run the project's checks and read the full diff.

## Branch names

Lowercase hyphenated words, prefixed for the kind of change:

| Prefix | For | Example |
|---|---|---|
| `feat/` | New capability, documents, or tools | `feat/knowledge-center` |
| `fix/` | A bug, a wrong fact, a broken link | `fix/office-hours` |
| `docs/` | Documentation about the project itself | `docs/vcs-etiquette` |
| `refactor/` | Restructuring with no behavior change | `refactor/split-services` |
| `chore/` | CI, dependencies, and housekeeping | `chore/node-24` |
| `release/` | Preparing a release | `release/v1.0.0` |

`main` is what's in production. `dev`, where a repository has a dev environment, is main plus work waiting to ship. A workflow merges main into it after every push to main. `dev` is never merged into main as a whole. Each work branch goes to main on its own, so an unfinished change can't ride along.

## Commit messages

Messages follow [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/):

```
type(scope): plain summary in lowercase with no period

Optional body: why the change was made, when the diff doesn't say.

Optional footers, such as BREAKING CHANGE: what breaks and how to move.
```

- **Types:** `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`, `build`, `ci`.
- **Scope** is optional, such as `fix(settings)`.
- **A breaking change** gets a `!` after the type or scope, such as `feat(api)!:`, and a `BREAKING CHANGE:` footer.
- The summary is an instruction: `fix(contact): correct weekday hours`, not `fixed stuff`.
- Write for someone reading the history a year later, per the [writing standard](writing.md).

Commit at a point that stands on its own, with its source, tests, and documentation together. Every commit on main passes the checks. Commits carry the name and email of the person who has read and stands behind every line.

## Merging and history

- Merge a feature branch with `git merge --no-ff`, then delete it. Small pull requests may be squash-merged once the repository is protected.
- Keep main releasable. Failing checks on main come first.
- Never rewrite history on main, a shared branch, or anyone else's branch. Rebasing your own unpushed work is fine.
- Never force-push to main. Fix a mistake with a new commit, such as `git revert`.
- A leaked secret is revoked and rotated first. Removing it, or a wrong author, from history is a separate owner decision, with branch protection paused only for that change.

## Before anything is live

A repository with nothing in production and no client data moves on habits, not gates. Anything bigger than a typo gets a named branch merged with `--no-ff`. Typos and broken links may go straight to main. Pull requests are optional, but read your own diff.

## From the first live release, or when client data is at stake

Production and client data decide when safeguards apply, not the version number. A `v0.x` repository that deploys a live site or holds client data follows these from its first live release:

- **The main branch is protected** against force pushes and deletion, with no bypass.
- **Required checks pass** before a change reaches main.
- **Every change is reviewed** as a full diff, approved by someone other than the author when a second person is available. Policies and agreements also need a reviewer who can check them against what's live.
- **Rollback is ready:** the previous release can be put back, written down before release.
- **Signed commits and tags** on main, from `v1.0.0` on.
- **Urgent fixes**, such as a wrong policy or contact detail, go on a `fix/urgent-...` branch with one review and a same-day patch.

### How this works today

neon1 has one maintainer. On the repositories that deploy to production , main has two rulesets:

- **No force push or deletion**, with no bypass for anyone, including me.
- **Required checks** must pass before a change lands. As sole maintainer and admin, I can bypass this one, and GitHub warns whenever I do.

That bypass is for when no second reviewer exists, not for skipping checks. I use it for small changes I've reviewed as a full diff with the checks run locally, and for urgent fixes when waiting would cause more harm. I review each bypass once it's live. When a second maintainer joins, review by someone other than the author becomes required.

## Tags

Every released version has an annotated `vX.Y.Z` tag, never moved or deleted once pushed. See [versioning and releases](versioning.md).

## Sources

- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/): the commit message format.
- [Pro Git: branches in a nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell), Scott Chacon and Ben Straub: how branches and merges work.
- [About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches), GitHub: the rules that guard a main branch.
