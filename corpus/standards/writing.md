---
id: standards-writing
title: Writing
summary: "How everything neon1 writes is written, from policies and proposals to READMEs, commit messages, code comments, and interface text."
type: standard
status: adopted
updated: 2026-11-12
created: 2026-11-01
edition: "1.5"
order: 1
consumers: [knowledge, ai]
pdf: true
origin: "neon1's internal handbook (writing) and the genre conventions below"
related: [standards-development, standards-documentation, standards-code-style]
---

# Writing

How I write for neon1, for every word it publishes or ships: documents, proposals, emails, READMEs, changelogs, commits, code comments, and interface text. Other standards add rules for particular kinds and point back here.

## The core rules

1. **Lead with what the reader needs.** Answer, decision, or action first. Background after, only if it helps.
2. **Use plain words.** Everyday verbs, short sentences, and natural contractions. Keep an exact technical term when it carries meaning, and explain it once.
3. **Be concrete.** Name who does what, when, and what happens next. A specific detail beats a general claim.
4. **Say only what's true and supported.** Keep planned, built, tested, released, and shown to help distinct. Don't invent experience, numbers, quotes, or results, and say when something is unknown.
5. **Use the fewest words that keep the full meaning.** Cut framing, repetition, and filler. Don't cut a detail that explains a cause, a limit, or a consequence.
6. **Keep the voices straight.** I write as myself, "neon1" is the business, and "you" is the reader. Clarity and follow-through do more than reassurance.

## Voice

I write the way one business owner talks to another across a table: direct, candid, and specific. Care shows in what gets done, not in how the writing feels.

- **Say it and stop.** State what's true, what it costs, and what happens next, and leave it there.
- **Don't solicit.** No pitch, no urgency, and no telling readers how they feel or what they deserve.
- **Argue from evidence.** A number, a named method, or a real example beats an adjective. When the evidence is thin, say that.
- **Leave the decision with the reader.** Give the options and tradeoffs, and recommend plainly, with why, when it helps.
- **Be candid about limits.** Say what neon1 doesn't do, when someone else is a better fit, and what might not work.
- **Show values as practices.** "Accounts stay in your name" says more than "we value your ownership." Talk about the work and the reader's problem, not neon1's passion.

The test: would a capable professional say this across a table to a peer? If it sounds like an ad, a greeting card, or a pitch, rewrite it.

## Habits I edit out

Most come from marketing and corporate writing. The [GOV.UK style guide](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/) keeps a longer list; these are the ones I catch most.

- **Inflated words** where a plain one works: leverage, utilize, robust (as praise), seamless, cutting-edge, empower, streamline.
- **Selling words** in place of facts: guaranteed, best-in-class, effortless, game-changing.
- **Soft selling:** "happy to help," "I'd love to," "no pressure," "peace of mind," "worry-free," "let's get started," "reach out."
- **Intensifiers** standing in for evidence: really, truly, genuinely, honestly, simply, just, actually, incredibly.
- **Slogans** that sound good but say little, such as "Technology that works together, and stays yours."
- **Character claims** instead of practice: passionate, dedicated, committed to, care deeply, here for you.
- **Telling readers how they feel**, such as "Worried about...?" or "Tired of...?", or how they'll feel afterward.
- **Absolutes** such as "always," "never," and "every" when they aren't literally true.
- **Dashes and semicolons** in prose. A period or a comma almost always reads better.

Lists, the passive voice, and formal words aren't errors on their own; what matters is whether they help the reader.

## Mechanics

- **neon1** is always lowercase, even starting a sentence, and is the name used everywhere. The legal name, **neon1 LLC**, appears only in the copyright line and in legal text: policies, agreements, signature lines, and the [state registration](../company/registration.md).
- Serial comma: "email, spreadsheets, and POS."
- Sentence case for titles and headings.
- Numbers: words for one to nine in prose, numerals for 10 and up, and numerals for measurements, money, versions, and dates in tables.
- Dates: "November 9, 2026" in prose, `2026-11-09` in data and file names.
- Times: "8am to 8pm, Eastern time."
- Links say where they go ("see the [privacy policy](../policies/privacy.md)"), never "click here."
- Code, commands, file names, and identifiers go in `code formatting`, copied exactly.

## Structure, from a line to a whole document

Readers scan the start of each heading, paragraph, and list item before deciding to read on. Structure makes that work, at four sizes.

**A line.** One fact, step, or instruction, with the word the reader looks for first. In a list scanned by label, the label is bold and ends with a period. A second idea becomes a second line.

**A group.** Lines that belong together, shown in the form that matches how they relate:

| When the items are | Use | Because |
|---|---|---|
| Parallel and in no order | A bulleted list | Each one can be read on its own |
| Steps that happen in order | A numbered list | The number says what comes next |
| Several items compared on two or more facts | A table | The reader can read across and down |
| An argument, a cause, or a tradeoff | A paragraph | The reasoning is in the connecting words |

Keep items grammatically alike, all verbs or all things. Two to seven read easily; a longer group usually hides two, better split under small headings. A table earns its place with at least two columns of facts and three rows; smaller, a sentence or list reads better.

**A section.** A heading in the reader's words, a lead sentence saying what the section settles, then the groups. One section, one job: a heading that needs "and" is probably two. Headings are labels, not slogans, and don't repeat the title.

**A document.** It opens with a one-sentence summary, so readers know it's the right one. Sections follow in the order needed: what to do or know first, details and exceptions after, background last. It ends with sources and where to go next. Each kind has its own shape, below, and the [documentation standard](documentation.md) covers the Knowledge Center's documents.

### Attribution

neon1's practice builds on standards bodies, government guides, and practitioners, and every document says which, so readers can follow it.

- A method, rule, or number taken from somewhere names its source, in the text where it's used or in the document's Sources section.
- Link the primary source, such as the standard or the agency's guide, not an article about it, and the page that says the thing, not a home page.
- Each source gets a few words on what it is.
- Say where neon1 differs from a source, or uses only part of it.
- Sources is the last section of the body, before anything a page adds around it.

## Each kind of writing

Structure follows each document's job.

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
2. Read only the headings and the first words of each paragraph and list item. Do they tell the story on their own?
3. Check each group's form: lists that should be tables, tables that should be a sentence, and lists that mix kinds of item.
4. Compare it claim by claim with the sources. Nothing added, nothing overstated, and every borrowed idea credited.
5. Cut the habits listed above.
6. Check names, numbers, dates, links, and code exactly. Open every link.
7. Read it aloud. Rewrite any sentence that's hard to say.

Writing that already works stays as it is. Shorter is only better when the meaning survives.

## Sources

- [Plain language guide series](https://digital.gov/guides/plain-language), from Digital.gov, which now hosts the federal plain language guidelines: the core rules on audience, plain words, and organization.
- [Writing to GOV.UK standards](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/) and the [GOV.UK A to Z style guide](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/), from the UK Government Digital Service: front-loading, short sentences, and words people use.
- [How users read on the web](https://www.nngroup.com/articles/how-users-read-on-the-web/) and [the F-shaped pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/), from Nielsen Norman Group: the research behind putting key words first.
- [Google developer documentation style guide](https://developers.google.com/style): conventions for lists, tables, procedures, and code in technical writing.
- [The Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html): the serial comma and other points of mechanics.
- [Diátaxis](https://diataxis.fr/), by Daniele Procida: the split between tutorials, how-to guides, reference, and explanation.
