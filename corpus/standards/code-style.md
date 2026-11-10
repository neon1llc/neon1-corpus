---
id: standards-code-style
title: Code style
summary: "How neon1 code reads: names, comments, file headers, formatting, and layout, in every language and configuration format."
type: standard
status: adopted
updated: 2026-11-10
created: 2026-11-09
edition: "2.0"
audience: "Developers"
order: 7
consumers: [knowledge, ai]
pdf: true
origin: "neon1's private development guide (meaning, names, and source conventions)"
related: [standards-development, standards-writing, standards-testing-and-review]
---

# Code style

Code is read far more often than it's written. These conventions make neon1 code quick to understand for someone who didn't write it. They apply to every language and every format that allows comments, including tests, shell scripts, Dockerfiles, CI workflows, Terraform, and templates. A project's formatter and linter win where they conflict with this page.

## Names

- Use the shortest name that keeps the meaning clear: `retryLimit`, not `rl` or `maximumNumberOfRetryAttemptsAllowed`.
- Name things for what they mean to the reader, not how they're built: `unpaidInvoices`, not `filteredList`.
- Use the project's existing words for its concepts. If the interface says "workspace," the code says `workspace` too.
- When renaming, rename every use in the same change, and keep public interfaces stable or version the change.

## Comments

- **Explain why, not what.** A comment gives the purpose, a constraint, an invariant, or a reason that isn't visible in the code. It doesn't narrate the next line.
- **Comment at every semantic junction**: section boundaries, exported or public functions, classes, and components, non-obvious invariants, security and tenancy rules, and configuration blocks. Usually one or two lines, without a closing period on single-line comments. Between junctions, code that already says plainly what it does needs no comment of its own.
- **Start with the meaning.** Don't repeat the function's name or open with "This function." For example, `// Invalid records are rejected before anything is written`.
- **Keep comments true.** A comment that no longer matches the code is a bug. Update or remove it in the same change.
- **Judge comments by usefulness and truth, not by count.** A review asks whether each comment tells a reader something they need and whether it's still accurate. Adding comments to reach a number, or a test that counts them, doesn't make code clearer.
- Use each language's native documentation format where tools read it: docstrings in Python, doc comments in Go, JSDoc where a project uses it. Document parameters, results, and errors only when they add something the signature doesn't say.

## File headers

Every source file starts with a one-line header saying what it is and what it's for, after any line that must come first (a shebang, a license, or a directive):

```
#!/usr/bin/env node

// tools/export.mjs - Writes the bundle a consumer reads.
// Usage: node tools/export.mjs --target chat|site|knowledge|ai
```

The header uses sentence case and a period.

The header and junction rules apply to files people write and maintain. See the exceptions below. A `Usage:` line follows when the file can be run, showing a real invocation without closing punctuation. Full help belongs in `--help`, not the header.

## Layout and whitespace

- Let the formatter decide what it can: Prettier, Black, gofmt, `terraform fmt`.
- Two blank lines between top-level definitions and major sections, one between related groups inside them.
- Break long lines at meaningful points, one argument or item per line when a call gets long.
- Keep a file about one thing. When a file grows a second purpose, split it.

## Structure

- Prefer plain functions and data over frameworks and abstractions until a pattern repeats at least three times.
- Keep business logic separate from input, output, and presentation, so it can be tested on its own.
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

- **Generated files**, such as compiled output, generated clients, and build artifacts. Document the generator and its inputs instead, and regenerate rather than editing by hand.
- **Vendored code** copied from another project. Leave it as its authors wrote it, and record where it came from and which version in the nearest README or notice file.
- **Lock files**, such as `package-lock.json` or `go.sum`. Their tools own them.
- **Formats with their own authoritative description**, such as a JSON Schema with `description` fields, an OpenAPI document, or a migration tracked by its tool. The description fields are where the explanation goes.

## Formats without comments

Strict JSON and similar formats can't hold comments. Don't invent them. Put the explanation in the nearest file that can hold it, such as the README or the code that reads the file.
