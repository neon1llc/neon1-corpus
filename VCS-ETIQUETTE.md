# Version control etiquette

How changes get into neon1-corpus. neon1's [version control](corpus/standards/version-control.md) and [versioning](corpus/standards/versioning.md) standards apply, and this file adds the corpus's own details. The rules get stricter at `v1.0.0`, because the site, Neo and the Knowledge Center depend on what's here.

## Always

### Branch names

Name a branch for the kind of change, in lowercase hyphenated words:

| Prefix | For | Example |
|---|---|---|
| `feat/` | New documents, sections or tools | `feat/proposal-example` |
| `fix/` | Wrong or outdated facts, broken links, bugs | `fix/office-hours` |
| `docs/` | Repository documents such as this one, the README or contributing guide | `docs/vcs-etiquette` |
| `refactor/` | Restructuring without changing what a reader learns | `refactor/split-services` |
| `chore/` | CI and housekeeping | `chore/node-24` |
| `release/` | Preparing a tagged release | `release/v1.0.0` |

One branch holds one change. A second problem gets a second branch.

### Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/) with an optional scope:

```
feat(templates): add a proposal example
fix(company): correct weekday hours
feat(tools): export a bundle for the knowledge area
docs: add version control etiquette
```

Types are `feat`, `fix`, `docs`, `refactor`, `chore` and `test`. A new document is a `feat`, and a corrected fact is a `fix`. Write the subject as a plain lowercase instruction with no period. Add a body when the reason isn't obvious from the diff.

### Commit boundaries

Commit at a point that stands on its own. `node tools/lint.mjs` should pass on every commit.

### Public only

Every commit is public once pushed, and history keeps it even after deletion. Nothing private goes in, not even briefly: no client names without written consent, no account numbers, no personal contact details, no drafts of internal strategy.

### History

Never rewrite history on `main` or on someone else's branch. Rebasing your own unpushed work is fine.

## Before `v1.0.0`: good habits

These are recommendations until the first full release.

- Work on a named branch for anything larger than a typo. Merge it into `main` with `git merge --no-ff` so the branch stays visible in history, then delete it.
- Small fixes such as typos and broken links may go straight to `main`.
- Pull requests are welcome but optional. Self-review the diff before merging.
- The `check` workflow should pass before a merge. If it fails on `main`, fixing it comes first.
- Version tags such as `v0.2.0` mark useful milestones. A minor version number says nothing about how close the project is to `v1.0.0`.

## From `v1.0.0` on: required

`v1.0.0` is reserved for the first complete release: the finalized Organization library translated in, templates and forms published, and the site, Neo and the knowledge area all reading from tagged releases. From then on, these rules are required.

- **`main` is protected.** No direct pushes. Every change arrives through a pull request from a named branch.
- **Review.** Every pull request needs at least one approving review from someone other than the author. Changes to policies need a reviewer who can check them against the live agreements.
- **Checks pass.** The `check` workflow (lint and every export) must pass before merge.
- **Linear, readable history.** Squash-merge small pull requests. Use a merge commit for large ones whose individual commits matter.
- **Releases are tagged** as `vX.Y.Z` from `main`, with notes listing what changed and which consumers need to update their pinned tag.
  - **Major** (`v2.0.0`): ids, sections or front matter keys change in a way consumers must handle.
  - **Minor** (`v1.1.0`): new documents, sections or export targets.
  - **Patch** (`v1.0.1`): corrections, link fixes and wording.
- **Urgent fixes**, such as a wrong policy or contact detail, can be merged with one review and released as a patch the same day. Name the branch `fix/urgent-...`.
- **Signed commits and tags** are required on `main`.
