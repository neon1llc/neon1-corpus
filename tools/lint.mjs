#!/usr/bin/env node

// tools/lint.mjs - Checks every corpus document's front matter, links and the public-safety rules.
// Usage: node tools/lint.mjs
//
// The repo is public, so anything that looks private fails the run instead of waiting for a reviewer to spot it.

import { readFileSync, existsSync } from "node:fs"
import { join, dirname, resolve } from "node:path"
import { root, load, SECTIONS } from "./corpus.mjs"



const schema = JSON.parse(readFileSync(join(root, "schema/doc.schema.json"), "utf8"))
const P = schema.properties

// Patterns that should never appear in a public document
const PRIVATE = [
  [/\b\d{2}-\d{7}\b/, "looks like an EIN"],
  [/\b\d{3}-\d{2}-\d{4}\b/, "looks like a Social Security number"],
  [/\b\d{9,17}\b/, "long number that could be an account or routing number"],
  [/AKIA[0-9A-Z]{16}/, "looks like an AWS access key"],
  [/\b\d{12}\b/, "looks like an AWS account ID"],
  [/[A-Za-z0-9._%+-]+@(?!neon1\.tech\b)[A-Za-z0-9.-]+\.[a-z]{2,}/, "email address outside neon1.tech"],
]



const errors = []
const ids = new Map()
const docs = load()

for (const doc of docs) {
  const err = (m) => errors.push(`corpus/${doc.path}: ${m}`)
  const d = doc.data

  // Front matter against the schema
  if (!d) {
    err("missing front matter")
    continue
  }
  for (const key of schema.required) if (d[key] === undefined || d[key] === "") err(`missing ${key}`)
  for (const key of Object.keys(d)) if (!P[key]) err(`unknown key ${key}`)
  if (d.id && !new RegExp(P.id.pattern).test(d.id)) err(`id "${d.id}" should be lowercase words joined by hyphens`)
  if (d.type && !P.type.enum.includes(d.type)) err(`type "${d.type}" isn't one of ${P.type.enum.join(", ")}`)
  if (d.status && !P.status.enum.includes(d.status)) err(`status "${d.status}" isn't one of ${P.status.enum.join(", ")}`)
  if (d.updated && !new RegExp(P.updated.pattern).test(d.updated)) err("updated should be YYYY-MM-DD")
  if (d.pdf !== undefined && typeof d.pdf !== "boolean") err("pdf should be true or false")
  for (const c of Array.isArray(d.consumers) ? d.consumers : [d.consumers])
    if (!P.consumers.items.enum.includes(c)) err(`unknown consumer ${c}`)
  if (!SECTIONS.includes(doc.section)) err(`section ${doc.section} isn't one of ${SECTIONS.join(", ")}`)

  // Ids are unique because they become file names in every bundle
  if (ids.has(d.id)) err(`id ${d.id} is also used by ${ids.get(d.id)}`)
  ids.set(d.id, doc.path)

  // Relative links must land on a real file
  for (const [, href] of doc.body.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^[a-z]+:/i.test(href) || href.startsWith("#")) continue
    const target = resolve(dirname(doc.file), href.split("#")[0])
    if (!existsSync(target)) err(`broken link ${href}`)
  }

  // Public-safety patterns, checked line by line so the message points somewhere useful
  // Phone links are published on purpose, so they're left out of the number checks
  doc.body.split("\n").forEach((line, i) => {
    const text = line.replace(/\(tel:\+?\d+[^)]*\)/g, "")
    for (const [re, why] of PRIVATE) if (re.test(text)) err(`line ${i + 1}: ${why}`)
  })
}

if (errors.length) {
  console.error(errors.join("\n"))
  console.error(`\n${errors.length} problem(s) in ${docs.length} document(s).`)
  process.exit(1)
}
console.log(`${docs.length} document(s) look good.`)
