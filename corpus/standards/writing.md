---
id: standards-writing
title: Writing
summary: "How everything neon1 writes is written, from policies and proposals to READMEs, commit messages, code comments, and interface text."
type: standard
status: adopted
updated: 2026-11-09
created: 2026-11-01
edition: "1.1"
order: 1
consumers: [knowledge, ai]
pdf: true
origin: "Core 08 (writing), neon1's private writing guide, and the genre conventions below"
related: [standards-development, standards-documentation, standards-code-style]
---

# Writing

This is the main writing standard for neon1. It applies to every word neon1 publishes or ships: documents on this site, proposals, emails, READMEs, changelogs, commit messages, code comments, and the text inside an interface. Other standards add rules for particular kinds of writing and point back here.

## The core rules

1. **Lead with what the reader needs.** Put the answer, decision, or action first. Background comes after, and only if it helps.
2. **Use plain words.** Everyday verbs, short sentences, and natural contractions. Keep an exact technical term when it carries meaning, and explain it once in terms of the reader's task.
3. **Be concrete.** Name who does what, when, and what happens next. A specific detail beats a general claim.
4. **Say only what's true and supported.** Keep the difference between what was planned, built, tested, released, and shown to help. Don't invent experience, numbers, quotes, or results. When something is unknown, say so.
5. **Use the fewest words that keep the full meaning.** Cut framing, repetition, and filler. Don't cut a detail that explains a cause, a limit, or a consequence.
6. **Write in the right voice.** "I" where Pradeep is doing the work, "neon1" for the business, and "you" for the reader. Warm through clarity and follow-through, not through reassurance.

## Voice

Write like a technical business owner talking to another one: direct, candid, and specific. The care shows in what gets done for the reader, not in how the writing feels about them.

- **Say it and stop.** State what's true, what it costs, and what happens next. Don't add warmth, reassurance, or enthusiasm on top.
- **Don't solicit.** No pitch, no urgency, no "let's get started," and no telling readers how they feel or what they deserve.
- **Argue from evidence.** A number, a named method, or a real example beats an adjective. When the evidence is thin, say that.
- **Leave the decision with the reader.** Give the options and their tradeoffs. Recommend plainly when it helps, and say why.
- **Be candid about limits.** Say what neon1 doesn't do, when someone else is a better fit, and what might not work.
- **Show values as practices.** "Accounts stay in your name" says more than "we value your ownership." Talk about the work and the reader's problem, not about neon1's passion or commitment.

The test: would a capable professional say this sentence across a table to a peer? If it sounds like an advertisement, a greeting card, or a pitch, rewrite it.

## Patterns to avoid

These are signs of writing that sounds produced rather than meant:

- Inflated words: leverage, utilize, robust (as praise), seamless, cutting-edge, delve, landscape, tapestry, pivotal, crucial, furthermore, moreover.
- Slogan sentences that sound good but say little, such as "Technology that works together, and stays yours."
- "Not just X, but Y," and other set-piece contrasts used for effect.
- A question answered right away ("Why does this matter? Because...").
- Lists of exactly three used as rhythm rather than content.
- Dashes and semicolons in prose. Use a period or a comma instead.
- Absolutes such as "always," "never," and "every" unless they're literally true.
- Selling words in place of facts: guaranteed, best-in-class, effortless, game-changing.
- Soft selling: "happy to help," "I'd love to," "no pressure," "peace of mind," "worry-free," "let's get started," "reach out."
- Intensifiers that stand in for evidence: really, truly, genuinely, honestly, simply, just, actually, incredibly.
- Describing neon1's character instead of its practice: passionate, dedicated, committed to, care deeply, here for you.
- Telling the reader how they feel ("Worried about...?", "Tired of...?") or what they'll feel afterward.

Lists, the passive voice, and formal words aren't errors on their own. Judge them by whether they help the reader.

## Mechanics

- **neon1** is always lowercase, even at the start of a sentence. The company is **neon1 LLC**.
- Serial comma: "email, spreadsheets, and POS."
- Sentence case for titles and headings.
- Numbers: words for one to nine in prose, numerals for 10 and up, and numerals for measurements, money, versions, and dates in tables.
- Dates: "November 9, 2026" in prose, `2026-11-09` in data and file names.
- Times: "8am to 8pm, Eastern time."
- Links say where they go ("see the [privacy policy](../policies/privacy.md)"), never "click here."
- Code, commands, file names, and identifiers go in `code formatting`, copied exactly.

## Each kind of writing

Different documents have different jobs. The structure follows the job.

| Kind | Its job | Structure |
|---|---|---|
| Policy | Tell people what's done with their information and their rights | Short version first, then sections by question. Dated "Last updated." Plain prose, no marketing |
| Agreement or template | Record obligations exactly | Defined terms, numbered sections, blanks to fill, an "example, not legal advice" note when it is one |
| Standard | Say how neon1 works and why | What I do, then the reason. Present tense. No claims of certification or results |
| Guide or how-to | Help someone finish a task | Who it's for, what they need, numbered steps, what to do when it goes wrong |
| Reference | Be looked up, not read through | Tables and short entries, exact values, consistent order |
| Explanation | Help someone understand a topic | One idea per section, in the order the reader needs them |
| Proposal | Help a client decide | Their problem, the result, what's in and out, price, schedule, acceptance, next step |
| Case study | Show real work honestly | Needs, Execute, Observe, Normalize, with scope and limits stated |
| Form | Capture facts | Labeled blanks and checkboxes. An empty field is an open question |
| README | Help someone use or contribute to a project | What it is, who it's for, status, how to run, deploy, and contribute, license |
| Changelog | Tell people what changed for them | Newest first, grouped by version, written for users |
| Commit message | Explain one change to future readers | Type and scope, then a plain summary. A body when the reason isn't obvious |
| Code comment | Explain intent the code can't | Why, constraints, and invariants, never a narration of the next line |
| Interface text | Help someone act in the moment | Short labels, verbs on buttons, errors that say what happened and how to fix it |
| Email or message | Get something done with someone | The ask or answer first, context after, one clear next step |

The guide and reference split follows the [Diátaxis](https://diataxis.fr/) framework for documentation. The [documentation standard](documentation.md) covers READMEs, changelogs, and decision records in more detail, and the [code style standard](code-style.md) covers comments and names.

## Checking a draft

1. Read it as the intended reader. Can they act on it?
2. Compare it claim by claim with the sources. Nothing added, nothing overstated.
3. Remove anything from the "avoid" list.
4. Check names, numbers, dates, links, and code exactly.
5. Read it aloud. Rewrite any sentence that's hard to say.

Good writing that already works stays as it is. Shorter is only better when the meaning survives.

## Sources

- [plainlanguage.gov guidelines](https://www.plainlanguage.gov/guidelines/)
- [GOV.UK style guide](https://www.gov.uk/guidance/style-guide)
- [Google developer documentation style guide](https://developers.google.com/style)
- [Diátaxis](https://diataxis.fr/), a framework for technical documentation
