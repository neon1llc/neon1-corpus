---
id: standards-writing
title: Writing
summary: "How everything neon1 writes is written, from policies and proposals to READMEs, commit messages, code comments, and interface text."
type: standard
status: adopted
updated: 2026-11-20
created: 2025-08-05
edition: "2.2"
order: 1
consumers: [ai]
pdf: true
origin: "neon1's internal handbook (writing) and the genre conventions below"
related: [standards-development, standards-documentation, standards-code-style]
---

# Writing

## The core rules

1. **Lead with what the reader needs.** Answer, decision, or action first. Background after, if it helps.
2. **Use the reader's words.** Everyday verbs, short sentences, natural contractions. Use the term the reader's field uses, such as deployment, migration, integration, or scope, and explain it only when the reader may not know it. Plain and professional aren't opposites.
3. **Be concrete.** Name who does what, when, and what happens next.
4. **Say only what's true and supported.** Keep planned, built, tested, released, and shown to help distinct. Don't invent experience, numbers, quotes, or results. Say when something is unknown.
5. **Use the fewest words that keep the full meaning.**
6. **Keep the voices straight.** I'm "I," neon1 is the business, and "you" is the reader.

## Voice

Direct, candid, and specific, the way an engineer talks to a client or a peer.

- **Say it and stop.** State what's true, what it costs, and what happens next.
- **Don't solicit.** No pitch, no urgency, no telling readers what they deserve.
- **Argue from evidence.** A number, method, or real example beats an adjective. When the evidence is thin, say so.
- **Leave the decision with the reader.** Give options and tradeoffs, and recommend plainly, with why.
- **Be candid about limits.** Say what neon1 doesn't do, when someone else is a better fit, and what might not work.
- **Respect the reader.** Describe people by their situation, not their size, age, or assumed skill. Don't explain what a competent reader already knows, and don't announce honesty or humility. Show them through specifics.

The test: would a capable professional say this across a table to a peer? If it sounds like an ad, rewrite it.

## Fewer words

Cut by default. People scan a page to find the answer or the next action.

1. **Would the reader miss it?** Ask of every sentence. If not, cut it, even when it's true. Detail stays only if the reader needs it to act, decide, or stay safe.
2. **Cut, then cut again.** Try removing half the words, then half of what's left (Steve Krug). Stop when meaning would go.
3. **Sentences of 15 to 20 words,** rarely over 25. One idea per sentence, one to three sentences per paragraph.
4. **Verbs, not nouns.** "Decide," not "make a decision." Active voice.
5. **Drop padding.** "In order to" is "to." "Please note that," "As mentioned above," and "In this document, I will" go entirely.
6. **Say it once.** No repeated summary, closing recap, or restated heading. The one-sentence summary at the top is the only summary.
7. **Interface text is shortest.** Buttons name the action. Labels are one to three words where possible. Errors say what happened and what to do. No "please," no "successfully." Don't explain what a visible control already says, or repeat a whole policy beside it. Keep a consequence, condition, or fee visible before the decision it affects.

Never cut a cause, a limit, a cost, a consequence, or a legal obligation.

## Habits I edit out

The [GOV.UK style guide](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/) keeps a longer list.

- **Inflated words:** leverage, utilize, robust (as praise), seamless, cutting-edge, empower, streamline.
- **Selling words** in place of facts: guaranteed, best-in-class, effortless, game-changing.
- **Soft selling:** "happy to help," "I'd love to," "no pressure," "peace of mind," "worry-free," "reach out."
- **Intensifiers:** really, very, truly, genuinely, honestly, simply, just, actually, incredibly.
- **Slogans** that sound good but say little.
- **Character claims** instead of practice: passionate, dedicated, committed to, here for you.
- **Telling readers how they feel**, such as "Worried about...?"
- **Absolutes** such as "always," "never," and "every" when they aren't literally true.
- **Dashes and semicolons** in prose.

## Mechanics

- **neon1** is always lowercase, even starting a sentence. **neon1 LLC** appears only in the copyright line and legal text: policies, agreements, signature lines, and the [state registration](../company/registration.md).
- Serial comma: "email, spreadsheets, and POS."
- Sentence case for titles and headings.
- Words for one to nine in prose, numerals for 10 and up, and numerals for measurements, money, versions, and tables.
- Dates: "September 9, 2025" in prose, `2025-09-09` in data and file names. Times: "8am to 8pm, Eastern time."
- Links say where they go ("see the [privacy policy](../policies/privacy.md)"), never "click here."
- Code, commands, file names, and identifiers go in `code formatting`, copied exactly.

## Structure

| When the items are | Use |
|---|---|
| Parallel and in no order | A bulleted list |
| Steps in order | A numbered list |
| Compared on two or more facts | A table, with at least two columns of facts and three rows |
| An argument, cause, or tradeoff | A paragraph |

- **A line** is one fact, step, or instruction, with the word the reader looks for first. In a list scanned by label, the label is bold and ends with a period.
- **A group** has grammatically alike items, two to seven. A longer group usually hides two.
- **A section** has a heading in the reader's words, a lead sentence saying what it settles, then the groups. One section, one job. Headings don't repeat the title.
- **A document** opens with a one-sentence summary, then what to do or know first, exceptions, and background last. It ends with sources and where to go next. The [documentation standard](documentation.md) covers the Knowledge Center's documents.

### Attribution

- A method, rule, or number taken from somewhere names its source, in the text or the Sources section.
- Link the primary source, not an article about it, and the page that says the thing, not a home page.
- Give each source a few words on what it is, and say where neon1 differs from it.
- Sources is the last section of the body.

## Each kind of writing

| Kind | Its job | Structure |
|---|---|---|
| Policy | Tell people what's done with their information and their rights | Short version first, then sections by question. Dated "Last updated." |
| Agreement or template | Record obligations exactly | Defined terms, numbered sections, blanks, an "example, not legal advice" note when it is one |
| Standard | Say how neon1 works and why | What I do, then the reason. Present tense. No claims of certification or results |
| Guide or how-to | Help someone finish a task | Who it's for, what they need, numbered steps, what to do when it goes wrong |
| Proposal | Help a client decide | Their problem, the result, what's in and out, price, schedule, acceptance, next step |
| Case study | Show real work honestly | My role and the years, the problem, the work, the results, and after handover, with limits stated |
| README, changelog | Help someone use, contribute, or see what changed | See the [documentation standard](documentation.md) |
| Commit message, code comment | Explain one change, or intent the code can't | See the [code style standard](code-style.md) |
| Interface text | Help someone act in the moment | Short labels, verbs on buttons, errors that say what happened and how to fix it |
| Email or message | Get something done | The ask or answer first, context after, one next step |

## Checking a draft

Read it as the intended reader and ask whether they can act on it. Read only the headings and first words of each paragraph and ask whether they tell the story. Compare it claim by claim with the sources, with nothing added, nothing overstated, and every borrowed idea credited. Cut the habits above, then cut again. Check names, numbers, dates, links, and code, and read it aloud. Writing that already works stays as it is.

## Sources

- [Plain language guide series](https://digital.gov/guides/plain-language), from Digital.gov, which now hosts the federal plain language guidelines: the core rules on audience, plain words, and organization.
- [Writing to GOV.UK standards](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/) and the [GOV.UK A to Z style guide](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/), from the UK Government Digital Service: front-loading, short sentences, and words people use.
- [How users read on the web](https://www.nngroup.com/articles/how-users-read-on-the-web/) and [the F-shaped pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/), from Nielsen Norman Group: the research behind putting key words first.
- [Mailchimp Content Style Guide](https://styleguide.mailchimp.com/), from Mailchimp: concise, clear interface and help text.
- [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/): "bigger ideas, fewer words" and scannable text.
- [Concise, scannable, and objective](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/) and [How little do users read?](https://www.nngroup.com/articles/how-little-do-users-read/), from Nielsen Norman Group: how people scan and read web pages.
- Steve Krug, *Don't Make Me Think*: "Get rid of half the words on each page, then get rid of half of what's left."
- [Google developer documentation style guide](https://developers.google.com/style): conventions for lists, tables, procedures, and code in technical writing.
- [The Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html): the serial comma and other points of mechanics.
- [Diátaxis](https://diataxis.fr/), by Daniele Procida: the split between tutorials, how-to guides, reference, and explanation.
