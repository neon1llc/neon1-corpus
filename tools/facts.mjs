#!/usr/bin/env node

// tools/facts.mjs - The few business facts every page must state the same way: who can sign up, what sign-up
// asks for, a free account's limits, the service area, and the hours. Each fact names the wording it must
// match (a number pulled out of the text), wording that's out of date, and the documents that must state it.
// tools/lint.mjs runs it over the corpus. Other repos run it over their own copy:
//   node tools/facts.mjs <file> [file ...]    (for example the site's index.html or 1NEON's help FAQ)
// Change a fact here first, then the pages; the run names every page that still says the old thing.

import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"

// Each fact: `values` pulls numbers out of the text with a pattern and says what they must be; `stale` is wording
// that contradicts the fact; `required` lists corpus documents that must hold `phrase`
export const FACTS = [
  {
    name: "Anyone can make a free 1NEON account",
    stale: [/\b(you )?need an invit(e|ation)\b/i, /\bby invitation only\b/i, /\binvite[- ]only\b/i, /\bfor neon1 clients, by invitation\b/i],
  },
  {
    name: "At sign-up, a website, link, or location is optional",
    stale: [/\bsign-?up (asks|requires|needs) (for )?(where|a link|your website|your location|a website)/i,
      /\b(website|location|city|link)\b[^.]{0,40}\b(is|are) required\b/i],
  },
  {
    name: "Service area: remote across the US, on site within about 30 miles of Queens, NY; outside the US, ask",
    stale: [/\bremote (work )?from anywhere\b/i, /\banyone in the US when\b/i],
    values: [[/within about (\d+) miles/gi, ["30"]]],
    required: [["company/contact.md", "Outside the US, ask"], ["company/capabilities.md", "Outside the US, ask"], ["guides/free-accounts.md", "Outside the US, ask"]],
  },
  {
    name: "A free account holds up to 3 projects, and is removed 30 days after its last change",
    values: [
      [/free account holds up to (\d+) projects/gi, ["3"]],
      [/(?:unchanged|without a change) for (\d+) days/gi, ["30"]],
      [/(\d+) days (?:after|since) its last change/gi, ["30"]],
    ],
  },
  {
    name: "Hours: weekends 8am to 8pm, weekday evenings 6pm to 9pm, Eastern",
    values: [
      [/weekends? (\d+) ?am to (\d+) ?pm/gi, ["8", "8"]],
      [/weekday evenings? (\d+) ?pm to (\d+) ?pm/gi, ["6", "9"]],
    ],
  },
]

// Problems in one text, as "line N: why" messages
export function checkText(text) {
  const problems = []
  text.split("\n").forEach((line, i) => {
    for (const fact of FACTS) {
      for (const re of fact.stale ?? []) if (re.test(line)) problems.push(`line ${i + 1}: out of date (${fact.name}): "${line.match(re)[0]}"`)
      for (const [re, want] of fact.values ?? []) {
        for (const m of line.matchAll(re)) {
          const got = m.slice(1)
          if (got.join("|") !== want.join("|")) problems.push(`line ${i + 1}: says "${m[0]}" (${fact.name})`)
        }
      }
    }
  })
  return problems
}

// Corpus documents that must state a fact in so many words, as "path: why" messages
export function checkRequired(docs) {
  const problems = []
  for (const fact of FACTS) {
    for (const [path, phrase] of fact.required ?? []) {
      const doc = docs.find((d) => d.path === path)
      if (!doc) problems.push(`corpus/${path}: missing, but it must state "${fact.name}"`)
      else if (!doc.body.includes(phrase)) problems.push(`corpus/${path}: must say "${phrase}" (${fact.name})`)
    }
  }
  return problems
}

// Run directly over other files
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const files = process.argv.slice(2)
  if (!files.length) { console.error("Usage: node tools/facts.mjs <file> [file ...]"); process.exit(2) }
  const problems = files.flatMap((f) => checkText(readFileSync(f, "utf8")).map((p) => `${f}: ${p}`))
  if (problems.length) { console.error(problems.join("\n")); process.exit(1) }
  console.log(`facts: ${files.length} file(s) agree`)
}
