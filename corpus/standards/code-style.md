---
id: standards-code-style
title: Code style
summary: "How neon1 code reads: names, comments, file headers, formatting, and layout, in every language and configuration format."
type: standard
status: adopted
updated: 2026-11-13
created: 2026-11-09
edition: "2.3"
audience: "Developers"
order: 7
consumers: [ai]
pdf: true
origin: "neon1's internal engineering notes (meaning, names, and source conventions)"
related: [standards-development, standards-writing, standards-testing-and-review]
---

# Code style

Code is read far more than it's written, so these conventions make neon1 code quick to understand for someone who didn't write it. They apply to every language and commentable format, from tests and shell scripts to CI workflows, Terraform, and templates. A project's formatter and linter win where they conflict.

## Names

- Use the shortest name that keeps the meaning clear: `retryLimit`, not `rl` or `maximumNumberOfRetryAttemptsAllowed`.
- Name things for what they mean to the reader, not how they're built: `unpaidInvoices`, not `filteredList`.
- Use the project's existing words for its concepts. If the interface says "workspace," the code says `workspace` too.
- Rename every use in the same change, and keep public interfaces stable or version the change.

## Comments

- **Explain why, not what.** A comment gives a purpose, constraint, invariant, or reason the code doesn't show, not a narration of the next line.
- **Comment at every semantic junction**: section boundaries, exported or public functions, classes, and components, non-obvious invariants, security and tenancy rules, and configuration blocks. Usually one or two lines, with no closing period on single-line comments. Between junctions, plain code needs no comment.
- **Start with the meaning.** Don't repeat the function's name or open with "This function." For example, `// Invalid records are rejected before anything is written`.
- **Keep comments true.** A comment that no longer matches the code is a bug, fixed in the same change.
- **Comments earn their place.** Review asks whether each comment tells readers something they need, and is still accurate.
- Use each language's native documentation format where tools read it, such as docstrings, Go doc comments, or JSDoc, and document parameters, results, and errors only when they add to the signature.

## File headers

Every source file starts with a one-line header saying what it is and what it's for, after any line that must come first (a shebang, a license, or a directive):

```
#!/usr/bin/env node

// tools/export.mjs - Writes the bundle a consumer reads.
// Usage: node tools/export.mjs --target chat|site|knowledge|ai
```

The header uses sentence case and a period.

These rules apply to files people write and maintain (see the exceptions below). A runnable file adds a `Usage:` line with a real invocation and no closing punctuation; full help belongs in `--help`.

## Layout and whitespace

- Let the formatter decide what it can: Prettier, Black, gofmt, `terraform fmt`.
- Two blank lines between top-level definitions and major sections, one between related groups inside them.
- Break long lines at meaningful points, one argument or item per line when a call gets long.
- Keep a file about one thing. When a file grows a second purpose, split it.

## Structure

- Prefer plain functions and data to frameworks and abstractions until a pattern repeats three times.
- Keep business logic apart from input, output, and presentation, so it tests on its own.
- Validate input where it enters the system, and trust it after that.
- Fail loudly with a clear message. Never swallow an error silently.
- Configuration comes from the environment or a config file, never from values hard-coded in several places.

## Dependencies

- Prefer the platform's built-in features, then small, well-maintained libraries.
- Pin exact versions in lock files, including CI actions pinned to a commit.
- Each new dependency needs a reason: what it does that would be costly to write and maintain.
- Check its license for the way it will be used.

## Exceptions

These don't get added headers or comments:

- **Generated files**, such as compiled output and generated clients. Document the generator and inputs, and regenerate rather than edit.
- **Vendored code** from another project, left as written, with its source and version in the nearest README or notice.
- **Lock files**, such as `package-lock.json` or `go.sum`. Their tools own them.
- **Formats with their own authoritative description**, such as a JSON Schema with `description` fields, an OpenAPI document, or a migration tracked by its tool. The description fields are where the explanation goes.

## Formats without comments

Strict JSON and similar formats can't hold comments, so the explanation goes in the nearest file that can, such as the README or the code that reads it.

## Sources

- [Google style guides](https://google.github.io/styleguide/), Google: naming, comments, and layout conventions for many languages.
- [PEP 8](https://peps.python.org/pep-0008/), the Python community: the style guide for Python code.
- [Prettier rationale](https://prettier.io/docs/rationale), the Prettier project: why formatting is best left to a tool.
- [EditorConfig](https://editorconfig.org/), the EditorConfig project: one file that keeps indentation and line endings the same in every editor.
