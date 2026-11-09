---
id: standards-development
title: Development
summary: "How neon1 writes, reviews, tests, and ships code, so the software you receive is readable, safe to change, and yours to keep."
type: standard
status: adopted
updated: 2026-11-09
created: 2026-11-09
consumers: [knowledge, ai]
pdf: true
edition: "1.0"
origin: "Written for neon1-corpus from neon1's repository conventions (VCS etiquette, licensing, CI) and Core 05 and 07"
related: [standards-security-and-data, standards-technology-decisions, standards-design-and-accessibility]
---

# Development

Most of what I deliver isn't code. When it is, it should be code you could hand to another developer tomorrow without an apology. These are the habits behind every repository I touch, including neon1's own, which are public on [GitHub](https://github.com/neon1llc).

## Write for the next person

- Plain names, small functions, and comments that explain why rather than what.
- Every file starts with a line saying what it's for.
- The README says what it is, who it's for, how to run it, how to deploy it, what's missing, and the license.
- No clever tricks where an ordinary approach works. The next person may be you, a year from now, in a hurry.

## Fewer moving parts

- Use the platform's built-in features before adding a library, and a library before writing a framework.
- Every dependency is a long-term commitment, so each one has to earn its place. Several neon1 tools run on Node with no dependencies at all.
- Pin versions, including CI actions, and update them on purpose rather than by accident.

## Version control

- Every change lives on a named branch that says what it does, such as `fix/office-hours`.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/): `feat`, `fix`, `docs`, `refactor`, `chore`, or `test`, with a plain subject.
- Each commit makes sense on its own and passes the checks.
- History on the main branch is never rewritten. Releases are tagged and listed in a changelog written for people, not machines.

## Tests that match the promise

Tests check what the client was promised: a request arrives once, permissions hold, a retry doesn't duplicate work, and a failure leaves a visible, recoverable state. A green test suite that skips those is weak evidence. When a bug is found, a test that would have caught it comes first.

Checks run the same way locally and in CI, from one command. If a check is too slow or needs a browser, it says so instead of quietly being skipped.

## Security as a habit

- Secrets never go in code, issues, or chat. Repositories are scanned for leaked secrets on every push.
- Untrusted input is validated where it arrives. Permissions are checked on the server, never only in the interface.
- Content Security Policy, HTTPS everywhere, and least-privilege cloud roles are the default.
- See [Security and data](security-and-data.md) for the full baseline.

## Infrastructure as code

Cloud resources are described in code (usually Terraform), reviewed like code, and applied from CI with short-lived credentials. Nobody clicks around a console to change production. When a resource has to be created by hand in an emergency, it's imported into code afterward.

## Deploys you can undo

- Every deploy says which version it shipped and checks that the live site serves it.
- A rollback is a known command, not an improvisation.
- Static assets that never change are cached for a long time. Pages that do change are always revalidated.

## Your code is yours

Code written for you lives in a repository you own, under the license we agree on. The handover includes how to build, test, deploy, and roll back without me. If I reuse open-source work, its license and notices stay intact, and I'll tell you what each one allows.

## AI-assisted work

I may use AI coding tools as one of many aids. A person reviews, tests, and takes responsibility for every line that ships, the same as for code written by hand. Your confidential information doesn't go into any AI service unless you've approved that service. See [AI quality and oversight](ai-quality.md) for AI inside the systems I build.
