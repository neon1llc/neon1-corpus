---
id: standards-writing
title: Writing
summary: "How everything neon1 writes is written, from policies and proposals to READMEs, commit messages, code comments, and interface text."
type: standard
status: adopted
updated: 2026-11-15
created: 2026-11-01
edition: "1.8"
order: 1
consumers: [ai]
pdf: true
origin: "neon1's internal handbook (writing) and the genre conventions below"
related: [standards-development, standards-documentation, standards-code-style]
---

# Writing

How I write everything neon1 publishes or ships: documents, proposals, emails, READMEs, changelogs, commits, code comments, and interface text. Other standards add rules for particular kinds and point back here.

## The core rules

1. **Lead with what the reader needs.** Answer, decision, or action first. Background after, if it helps.
2. **Use plain words.** Everyday verbs, short sentences, natural contractions. Keep an exact technical term when it carries meaning, and explain it once.
3. **Be concrete.** Name who does what, when, and what happens next.
4. **Say only what's true and supported.** Keep planned, built, tested, released, and shown to help distinct. Don't invent experience, numbers, quotes, or results. Say when something is unknown.
5. **Use the fewest words that keep the full meaning.** See "Fewer words" below.
6. **Keep the voices straight.** I'm "I," neon1 is the business, and "you" is the reader.

## Voice

I write the way one business owner talks to another: direct, candid, and specific.

- **Say it and stop.** State what's true, what it costs, and what happens next.
- **Don't solicit.** No pitch, no urgency, no telling readers what they deserve.
- **Argue from evidence.** A number, method, or real example beats an adjective. When the evidence is thin, say so.
- **Leave the decision with the reader.** Give options and tradeoffs, and recommend plainly, with why.
- **Be candid about limits.** Say what neon1 doesn't do, when someone else is a better fit, and what might not work.

The test: would a capable professional say this across a table to a peer? If it sounds like an ad, rewrite it.

## Fewer words

Nielsen Norman Group found concise, scannable, objective text 124% more usable than promotional writing, and users read about a fifth of the words on a page. So I cut by default.

1. **Would the reader miss it?** Ask of every sentence. If not, cut it, even when it's true and well written. Detail stays only if the reader needs it to act, decide, or stay safe.
2. **Cut, then cut again.** After a draft, I try removing half the words, then half of what's left (Steve Krug), and stop when meaning would go.
3. **Sentences of 15 to 20 words,** rarely over 25. One idea per sentence, and one to three sentences per paragraph on screens.
4. **Verbs, not nouns.** "Decide," not "make a decision." Active voice, with who does what.
5. **Drop padding.** "In order to" is "to," and "at this time" is "now." "Please note that," "It's worth mentioning," "As mentioned above," and "In this document, I will" go entirely.
6. **Say it once.** No summary that repeats the page, no closing recap, no restating the heading in the first line. The one-sentence summary at the top is the only summary.
7. **Interface text is shortest.** Buttons are a verb and an object. Labels are one to three words. Errors say what happened and what to do. No "please," no "successfully."

Never cut a cause, a limit, a cost, a consequence, or a legal obligation.

## Habits I edit out

Most come from marketing and corporate writing. The [GOV.UK style guide](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/) keeps a longer list.

- **Inflated words:** leverage, utilize, robust (as praise), seamless, cutting-edge, empower, streamline.
- **Selling words** in place of facts: guaranteed, best-in-class, effortless, game-changing.
- **Soft selling:** "happy to help," "I'd love to," "no pressure," "peace of mind," "worry-free," "reach out."
- **Intensifiers** standing in for evidence: really, very, truly, genuinely, honestly, simply, just, actually, incredibly.
- **Slogans** that sound good but say little, such as "Technology that works together, and stays yours."
- **Character claims** instead of practice: passionate, dedicated, committed to, here for you.
- **Telling readers how they feel**, such as "Worried about...?" or "Tired of...?"
- **Absolutes** such as "always," "never," and "every" when they aren't literally true.
- **Dashes and semicolons** in prose. A period or a comma almost always reads better.

## Mechanics

- **neon1** is always lowercase, even starting a sentence, and is the name used everywhere. **neon1 LLC** appears only in the copyright line and legal text: policies, agreements, signature lines, and the [state registration](../company/registration.md).
- Serial comma: "email, spreadsheets, and POS."
- Sentence case for titles and headings.
- Numbers: words for one to nine in prose, numerals for 10 and up, and numerals for measurements, money, versions, and tables.
- Dates: "November 9, 2026" in prose, `2026-11-09` in data and file names. Times: "8am to 8pm, Eastern time."
- Links say where they go ("see the [privacy policy](../policies/privacy.md)"), never "click here."
- Code, commands, file names, and identifiers go in `code formatting`, copied exactly.

## Structure, from a line to a whole document

Readers scan the start of each heading, paragraph, and list item first. Structure serves that, at four sizes.

**A line.** One fact, step, or instruction, with the word the reader looks for first. In a list scanned by label, the label is bold and ends with a period.

**A group.** Lines that belong together, in the form that matches how they relate:

| When the items are | Use | Because |
|---|---|---|
| Parallel and in no order | A bulleted list | Each reads on its own |
| Steps in order | A numbered list | The number says what's next |
| Items compared on two or more facts | A table | The reader reads across and down |
| An argument, cause, or tradeoff | A paragraph | The reasoning is in the connecting words |

Keep items grammatically alike. Two to seven read easily, and a longer group usually hides two. A table earns its place with at least two columns of facts and three rows.

**A section.** A heading in the reader's words, a lead sentence saying what the section settles, then the groups. One section, one job: a heading that needs "and" is probably two. Headings don't repeat the title.

**A document.** It opens with a one-sentence summary. Sections follow in the order needed: what to do or know first, exceptions after, background last. It ends with sources and where to go next. Each kind has its own shape, below, and the [documentation standard](documentation.md) covers the Knowledge Center's documents.

### Attribution

neon1's practice builds on standards bodies, government guides, and practitioners. Every document says which.

- A method, rule, or number taken from somewhere names its source, in the text or in the Sources section.
- Link the primary source, not an article about it, and the page that says the thing, not a home page.
- Each source gets a few words on what it is.
- Say where neon1 differs from a source or uses only part of it.
- Sources is the last section of the body.

## Each kind of writing

| Kind | Its job | Structure |
|---|---|---|
| Policy | Tell people what's done with their information and their rights | Short version first, then sections by question. Dated "Last updated." Plain prose |
| Agreement or template | Record obligations exactly | Defined terms, numbered sections, blanks, an "example, not legal advice" note when it is one |
| Standard | Say how neon1 works and why | What I do, then the reason. Present tense. No claims of certification or results |
| Guide or how-to | Help someone finish a task | Who it's for, what they need, numbered steps, what to do when it goes wrong |
| Reference | Be looked up, not read through | Tables and short entries, exact values, consistent order |
| Explanation | Help someone understand a topic | One idea per section, in the order needed |
| Proposal | Help a client decide | Their problem, the result, what's in and out, price, schedule, acceptance, next step |
| Case study | Show real work honestly | My role and the years, the problem, the work, the results, and after handover, with limits stated |
| Form | Capture facts | Labeled blanks and checkboxes. An empty field is an open question |
| README | Help someone use or contribute | What it is, who it's for, status, how to run, deploy, and contribute, license |
| Changelog | Tell people what changed for them | Newest first, grouped by version |
| Commit message | Explain one change | Type and scope, then a plain summary. A body when the reason isn't obvious |
| Code comment | Explain intent the code can't | Why, constraints, and invariants, never a narration of the next line |
| Interface text | Help someone act in the moment | Short labels, verbs on buttons, errors that say what happened and how to fix it |
| Email or message | Get something done | The ask or answer first, context after, one next step |

The guide and reference split follows [Diátaxis](https://diataxis.fr/). The [documentation standard](documentation.md) covers READMEs, changelogs, and decision records, and the [code style standard](code-style.md) covers comments and names.

## Checking a draft

1. Read it as the intended reader. Can they act on it?
2. Read only the headings and first words of each paragraph and list item. Do they tell the story?
3. Check each group's form: lists that should be tables, tables that should be a sentence.
4. Compare it claim by claim with the sources. Nothing added, nothing overstated, every borrowed idea credited.
5. Cut the habits listed above, then cut again.
6. Check names, numbers, dates, links, and code. Open every link.
7. Read it aloud. Rewrite any sentence that's hard to say.

Writing that already works stays as it is. Shorter is only better when the meaning survives.

## Sources

- [Plain language guide series](https://digital.gov/guides/plain-language), from Digital.gov, which now hosts the federal plain language guidelines: the core rules on audience, plain words, and organization.
- [Writing to GOV.UK standards](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/) and the [GOV.UK A to Z style guide](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/), from the UK Government Digital Service: front-loading, short sentences, and words people use.
- [How users read on the web](https://www.nngroup.com/articles/how-users-read-on-the-web/) and [the F-shaped pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/), from Nielsen Norman Group: the research behind putting key words first.
- [Mailchimp Content Style Guide](https://styleguide.mailchimp.com/), from Mailchimp: concise, clear interface and help text.
- [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/): "bigger ideas, fewer words" and scannable text.
- [Concise, scannable, and objective](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/) and [How little do users read?](https://www.nngroup.com/articles/how-little-do-users-read/), from Nielsen Norman Group: the usability numbers behind cutting.
- Steve Krug, *Don't Make Me Think*: "Get rid of half the words on each page, then get rid of half of what's left."
- [Google developer documentation style guide](https://developers.google.com/style): conventions for lists, tables, procedures, and code in technical writing.
- [The Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html): the serial comma and other points of mechanics.
- [Diátaxis](https://diataxis.fr/), by Daniele Procida: the split between tutorials, how-to guides, reference, and explanation.
