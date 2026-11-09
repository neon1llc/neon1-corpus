#!/usr/bin/env node

// tools/export.mjs - Writes the bundle a consumer reads: adopted documents for that consumer, plus a manifest.
// Usage: node tools/export.mjs --target chat|site|knowledge|ai [--out dist]
//
// Every document is written twice, flat and named by id: <id>.md to read whole (matching neon1-chat's rule,
// ^[a-z0-9-]+\.md$), and <id>.json with its front matter, its body as HTML and its H2 sections, so no consumer
// ever parses Markdown. The manifest lists both, in export order, with each file's sha256 and length and a digest
// of the whole bundle, so consumers can tell when it changed and fetch only the documents they need.

import { writeFileSync, mkdirSync, rmSync } from "node:fs"
import { join, resolve, relative } from "node:path"
import { createHash } from "node:crypto"
import { root, load } from "./corpus.mjs"
import { render as toHtml, sections, inline } from "./markdown.mjs"



const args = process.argv.slice(2)
const option = (name, fallback) => {
  const i = args.indexOf(name)
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback
}

const TARGETS = ["chat", "site", "knowledge", "ai"]
const target = option("--target", "")
if (!TARGETS.includes(target)) {
  console.error(`Pick a target: --target ${TARGETS.join("|")}`)
  process.exit(1)
}
const outDir = resolve(root, option("--out", "dist"), target)
const sha = (text) => createHash("sha256").update(text).digest("hex")



// The body without its H1, since the title travels in the front matter
const bodyOf = (doc) => doc.body.trim().replace(/^# .+\n+/, "")

// What a type keeps in front matter, written out as Markdown so the .md file reads whole on its own
function lead(d) {
  if (d.type !== "case-study") return ""
  const row = (name, text) => `| **${name}** | ${text} |`
  return [
    `*${d.client} · ${d.area}*`,
    "",
    `**${d.stat_key}** ${d.stat}`,
    "",
    "| | In short |",
    "|---|---|",
    row("Needs", d.short_needs),
    row("Execute", d.short_execute),
    row("Observe", d.short_observe),
    row("Normalize", d.short_normalize),
    "",
    "",
  ].join("\n")
}

// Each exported file starts with its title and summary so it reads on its own
function render(doc) {
  return `# ${doc.data.title}\n\n${doc.data.summary}\n\n${lead(doc.data)}${bodyOf(doc)}\n`
}

// The same document as data: front matter, body as HTML, and the body split at its H2 headings
function json(doc) {
  const body = bodyOf(doc)
  return {
    id: doc.data.id,
    type: doc.data.type,
    title: doc.data.title,
    summary: doc.data.summary,
    source: `corpus/${doc.path}`,
    data: doc.data,
    html: toHtml(body),
    sections: sections(body).map(({ key, heading, html }) => ({ key, heading, headingHtml: heading ? inline(heading) : "", html })),
  }
}


const docs = load().filter((d) => d.data.status === "adopted" && d.data.consumers.includes(target))
rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

const files = docs.map((doc, order) => {
  const text = render(doc)
  const data = JSON.stringify(json(doc), null, 2) + "\n"
  const file = `${doc.data.id}.md`
  const jsonFile = `${doc.data.id}.json`
  writeFileSync(join(outDir, file), text)
  writeFileSync(join(outDir, jsonFile), data)
  const { id, type, title } = doc.data
  return { file, order, id, type, title, source: `corpus/${doc.path}`, sha256: sha(text), chars: text.length, json: jsonFile, jsonSha256: sha(data) }
})

const manifest = {
  target,
  digest: "sha256:" + sha(files.map((f) => f.sha256).join("\n")),
  chars: files.reduce((n, f) => n + f.chars, 0),
  files,
}
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n")
console.log(`Exported ${files.length} document(s), ${manifest.chars} characters, to ${relative(root, outDir)}.`)
