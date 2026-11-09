#!/usr/bin/env node

// tools/lint.mjs - Checks every corpus document's front matter, links and the public-safety rules.
// Usage: node tools/lint.mjs
//
// The repo is public, so anything that looks private fails the run instead of waiting for a reviewer to spot it.

import { readFileSync, existsSync } from "node:fs"
import { join, dirname, resolve } from "node:path"
import { root, load, SECTIONS } from "./corpus.mjs"
import { sections } from "./markdown.mjs"



const schema = JSON.parse(readFileSync(join(root, "schema/doc.schema.json"), "utf8"))
const P = schema.properties
const TYPES = schema["x-types"]

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
// key and order must be unique within a type, since consumers use them for anchors and positions
const seen = new Map()
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
  if (d.created && d.updated && d.created > d.updated) err("created is after updated")
  // A "Last updated" line in the text must say the same day as updated
  const stated = doc.body.match(/Last updated (\w+) (\d{1,2}), (\d{4})/)
  if (stated && d.updated) {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].indexOf(stated[1]) + 1
    const iso = `${stated[3]}-${String(month).padStart(2, "0")}-${stated[2].padStart(2, "0")}`
    if (iso !== d.updated) err(`the text says Last updated ${iso}, but updated is ${d.updated}`)
  }
  if (d.pdf !== undefined && typeof d.pdf !== "boolean") err("pdf should be true or false")
  for (const c of Array.isArray(d.consumers) ? d.consumers : [d.consumers])
    if (!P.consumers.items.enum.includes(c)) err(`unknown consumer ${c}`)
  for (const [key, rule] of Object.entries(P)) {
    if (d[key] === undefined) continue
    if (rule.type === "integer" && !Number.isInteger(d[key])) err(`${key} should be a whole number`)
    if (rule.type === "string" && typeof d[key] !== "string") err(`${key} should be text`)
    if (rule.type === "boolean" && typeof d[key] !== "boolean") err(`${key} should be true or false`)
    if (rule.type === "array" && !Array.isArray(d[key])) err(`${key} should be a [list]`)
    if (rule.type === "array" && rule.items?.pattern && Array.isArray(d[key]))
      for (const item of d[key]) if (!new RegExp(rule.items.pattern).test(item)) err(`${key} item "${item}" doesn't match ${rule.items.pattern}`)
    if (rule.minimum !== undefined && d[key] < rule.minimum) err(`${key} should be at least ${rule.minimum}`)
    if (rule.pattern && typeof d[key] === "string" && !new RegExp(rule.pattern).test(d[key]) && !["id", "updated"].includes(key)) err(`${key} "${d[key]}" doesn't match ${rule.pattern}`)
  }

  for (const field of ["key", "order"]) {
    if (d[field] === undefined) continue
    const tag = `${d.type}:${field}:${d[field]}`
    if (seen.has(tag)) err(`${field} ${d[field]} is also used by ${seen.get(tag)}`)
    seen.set(tag, doc.path)
  }

  // Rules for this type: extra required keys, and the H2 sections it must have, in order
  const rules = TYPES[d.type] ?? {}
  for (const key of rules.required ?? []) if (d[key] === undefined || d[key] === "") err(`a ${d.type} needs ${key}`)
  if (rules.sections) {
    const found = sections(doc.body).filter((s) => s.heading).map((s) => s.heading)
    if (found.join("|") !== rules.sections.join("|")) err(`a ${d.type} needs the sections ${rules.sections.join(", ")} in that order, found ${found.join(", ") || "none"}`)
  }
  if (rules.last_section) {
    const found = sections(doc.body).filter((s) => s.heading).map((s) => s.heading)
    if (found.at(-1) !== rules.last_section) err(`a ${d.type} ends with a ${rules.last_section} section`)
  }
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

// References between documents, checked once every id is known
for (const doc of docs) {
  const d = doc.data ?? {}
  const err = (m) => errors.push(`corpus/${doc.path}: ${m}`)
  for (const id of d.related ?? []) if (!ids.has(id)) err(`related id ${id} isn't a document`)
  if (d.example_of) {
    const blank = docs.find((x) => x.data?.id === d.example_of)
    if (!blank) err(`example_of ${d.example_of} isn't a document`)
    else if (!["template", "form"].includes(blank.data.type)) err(`example_of ${d.example_of} is a ${blank.data.type}, not a template or form`)
  }
}

if (errors.length) {
  console.error(errors.join("\n"))
  console.error(`\n${errors.length} problem(s) in ${docs.length} document(s).`)
  process.exit(1)
}
console.log(`${docs.length} document(s) look good.`)
