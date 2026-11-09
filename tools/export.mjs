#!/usr/bin/env node

// tools/export.mjs - Writes the bundle a consumer reads: adopted documents for that consumer, plus a manifest.
// Usage: node tools/export.mjs --target chat|site|knowledge|ai [--out dist]
//
// Files are flat and named by id, matching neon1-chat's rule (^[a-z0-9-]+\.md$). The manifest keeps the export
// order, each file's sha256 and length, and a digest of the whole bundle, so consumers can tell when it changed.

import { writeFileSync, mkdirSync, rmSync } from "node:fs"
import { join, resolve, relative } from "node:path"
import { createHash } from "node:crypto"
import { root, load } from "./corpus.mjs"



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



// Each exported file starts with its title and summary so it reads on its own
function render(doc) {
  const body = doc.body.trim().replace(/^# .+\n+/, "")
  return `# ${doc.data.title}\n\n${doc.data.summary}\n\n${body}\n`
}


const docs = load().filter((d) => d.data.status === "adopted" && d.data.consumers.includes(target))
rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

const files = docs.map((doc, order) => {
  const text = render(doc)
  const file = `${doc.data.id}.md`
  writeFileSync(join(outDir, file), text)
  return { file, order, id: doc.data.id, title: doc.data.title, source: `corpus/${doc.path}`, sha256: sha(text), chars: text.length }
})

const manifest = {
  target,
  digest: "sha256:" + sha(files.map((f) => f.sha256).join("\n")),
  chars: files.reduce((n, f) => n + f.chars, 0),
  files,
}
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n")
console.log(`Exported ${files.length} document(s), ${manifest.chars} characters, to ${relative(root, outDir)}.`)
