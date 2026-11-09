---
id: standards-testing-and-review
title: Testing and review
summary: "What neon1 tests, how changes are checked and reviewed before they ship, and what done means."
type: standard
status: adopted
updated: 2026-11-09
created: 2026-11-09
edition: "1.0"
order: 8
consumers: [knowledge, ai]
pdf: true
origin: "Core 02 (build and test in small increments) and neon1's private development guide (checks)"
related: [standards-development, standards-version-control, standards-security-and-data, standards-design-and-accessibility]
---

# Testing and review

Tests and reviews exist to catch the problems that would hurt the people using the work. A large test count isn't the goal. Evidence that the promised behavior works, and fails safely, is.

## What gets tested

Tests follow the promise made to the client or user:

- **The main task** works end to end.
- **The common failure** is handled: missing input, an outage, a timeout.
- **Duplicates and retries** don't create duplicate work, such as a second invoice.
- **Permissions** hold: one person can't reach another's data, including through exports and search.
- **Recovery** works: a backup restores, a deploy rolls back.
- **Accessibility and devices** in scope: keyboard, screen reader, phone, and slow connections where they matter.

When a bug is found, a test that would have caught it is written first, then the fix.

## Kinds of checks

| Check | What it catches | When it runs |
|---|---|---|
| Formatting and linting | Style drift and simple mistakes | Every commit, locally and in CI |
| Unit tests | Logic errors in one piece | Every commit |
| Integration tests | Pieces that don't fit together | Every pull request or merge |
| End-to-end and browser tests | Broken user paths | Before every release |
| Security scans | Leaked secrets, known vulnerable dependencies | Every push |
| Accessibility checks | Missing labels, contrast, keyboard traps | Before every release that changes an interface |
| Live checks | The deployed version isn't the one built | After every deploy |

Checks run the same way on a laptop and in CI, from one command, such as `make check`. A check that can't run somewhere says so, rather than passing quietly.

## Review

Every change gets read in full before it merges, as a diff, by its author at minimum. From `v1.0.0` on, someone other than the author reviews it when a second person is available. A review asks:

1. Does it do what it says, and only that?
2. Is anything unsafe: secrets, permissions, data loss, irreversible actions?
3. Are the tests about the promise, and do they pass?
4. Is it as simple as it can be?
5. Is it readable, with names and comments that follow the [code style](code-style.md)?
6. Are the docs, changelog, and version updated?

AI review tools can help find problems. They don't approve changes. A person decides.

## Definition of done

A change is done when all of these are true:

- [ ] It does what was agreed, including the failure cases that matter
- [ ] The checks pass, and new behavior has tests
- [ ] The diff has been read in full
- [ ] Docs, changelog, and version are updated
- [ ] It's merged, released, and running where it should be
- [ ] Someone has checked it works there

Merged isn't done. Deployed but unchecked isn't done either.

## Evidence

Report what was actually checked and how. Keep the difference between "passes locally," "passes in CI," "deployed," and "confirmed working by the people who use it." When something wasn't checked, say so.
