---
id: standards-version-control
title: Version control
summary: "How neon1 uses git: branch names, commit messages, merges, protected branches, and the history rules, and which safeguards production and client data require."
type: standard
status: adopted
updated: 2026-11-11
created: 2026-11-08
edition: "2.2"
audience: "Developers"
order: 5
consumers: [knowledge, ai]
pdf: true
origin: "VCS-ETIQUETTE.md in Ready, Secure, Go and neon1-corpus, extended to every neon1 repository"
related: [standards-development, standards-versioning, standards-testing-and-review]
---

# Version control

Every neon1 project lives in git, on GitHub. These rules apply to all of them. A repository can add stricter rules in its own `VCS-ETIQUETTE.md`, but not looser ones. The rules get stricter when a repository deploys to production or holds client data, whatever its version number says.

## Before you commit

- Check which branch you're on, what's staged, and whether anyone else's changes are in the working tree.
- Keep unrelated changes out. One branch holds one change.
- Run the project's checks and read the full diff before committing.

## Branch names

Name a branch after the kind of change and what it does, in lowercase words joined by hyphens:

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
- The summary says what the change does, as an instruction: `fix(contact): correct weekday hours`, not `fixed stuff`.
- Messages follow the [writing standard](writing.md). They're written for someone reading the history a year later.

## Commit boundaries

Commit at a point that makes sense on its own: a finished workflow, a narrow fix, a complete document. Source, tests, and documentation for one change go in the same commit. Every commit on the main branch passes the checks.

## Authorship

Commits are made under the name and email of the person responsible for the change. Tools that help along the way, including AI review tools, aren't listed as authors or co-authors. The person committing has read and stands behind every line.

## Merging

- Merge a feature branch with `git merge --no-ff`, so the branch stays visible in history, then delete it.
- Small pull requests may be squash-merged once the repository is protected (see below) when the individual commits don't matter.
- Keep the main branch releasable. If the checks fail on main, fixing them comes before anything else.

## History

- Never rewrite history on the main branch, on a shared branch, or on anyone else's branch.
- Rebasing your own unpushed work is fine.
- Never force-push to main. A mistake on main is fixed by a new commit, such as a `git revert`.
- A leaked secret is revoked and rotated first. Removing it, or correcting a wrong author, from history is a separate decision the repository's owner makes deliberately, with branch protection paused only for that change and restored right after.

## Before anything is live

A repository that deploys nothing to production and holds no client data moves fast, and these are strong habits rather than hard gates:

- Named branches for anything bigger than a typo, merged with `--no-ff`.
- Typos and broken links may go straight to main.
- Pull requests are optional. Read your own diff before merging.

## From the first live release, or when client data is at stake

Production deployment and risk to clients or their data decide when the safeguards apply, not the version number. A `v0.x` repository that deploys a live site or holds client data follows these rules from its first live release:

- **The main branch is protected** against force pushes and deletion, with no one allowed to bypass that.
- **Required checks pass** before a change reaches main.
- **Every change is reviewed** as a full diff before it merges. When a second person is available, someone other than the author approves it. Policies and agreements also need a reviewer who can check them against what's live.
- **Rollback is ready:** the previous release can be put back, and how is written down before the release goes out.
- **Signed commits and tags** on main, from `v1.0.0` on.
- **Urgent fixes**, such as a wrong policy or contact detail, go on a `fix/urgent-...` branch and can be merged with one review and released as a patch the same day.

### How this works today

neon1 has one maintainer today, and the controls are set up for that. On the repositories that deploy to production (the website, the 1NEON portal, the chat, and the AWS infrastructure), main has two rulesets in force:

- **No force push or deletion**, with no bypass for anyone, including me.
- **Required checks** must pass before a change lands on main. As the sole maintainer and repository admin, I can bypass this ruleset, and GitHub prints a bypass warning whenever I push to main directly.

That bypass is the sole-maintainer exception. It's for when no second reviewer exists, not for skipping checks. I use it for small changes I've reviewed myself as a full diff, with the checks run locally first, and for an urgent fix when waiting would cause more harm. Each bypass shows in GitHub's warnings and in the history, and I look back at any bypassed change once it's live. When a second maintainer joins, review by someone other than the author becomes required.

## Tags

Every released version has an annotated tag on the commit it was built from, named exactly `vX.Y.Z`. Tags are never moved or deleted once pushed. See [versioning and releases](versioning.md) for when to tag.

## Sources

- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/): the commit message format.
- [Pro Git: branches in a nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell), Scott Chacon and Ben Straub: how branches and merges work.
- [About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches), GitHub: the rules that guard a main branch.
