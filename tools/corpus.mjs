// tools/corpus.mjs - Finds every corpus document and reads it, shared by lint and export.

import { readFileSync, readdirSync, statSync } from "node:fs"
import { join, dirname, relative } from "node:path"
import { fileURLToPath } from "node:url"
import { parse } from "./front-matter.mjs"


export const root = join(dirname(fileURLToPath(import.meta.url)), "..")
export const corpusDir = join(root, "corpus")

// Export order, so bundles read like the site: who, what, how, proof, products, then the paperwork and fine print.
// Each folder is also a shelf in the Knowledge Center, with the label and one-line description below
export const SECTIONS = ["company", "services", "standards", "guides", "faq", "case-studies", "products", "landscape", "templates", "forms", "examples", "policies", "neo"]

export const SHELVES = {
  company: ["Company", "Who neon1 is, what it stands for, and how to reach it."],
  services: ["Services", "What neon1 helps with and how an engagement works."],
  standards: ["How I work", "The habits and rules behind every engagement, from discovery to handover."],
  guides: ["Guides", "How-tos and use cases for owners, teams, and families."],
  faq: ["Questions", "Straight answers to what people ask most."],
  "case-studies": ["Case studies", "Past projects, told as Needs, Execute, Observe, Normalize."],
  products: ["Products", "Open-source tools and products neon1 builds."],
  landscape: ["Alternatives", "Where else to get help, and when they'd serve you better."],
  templates: ["Templates", "Blank business documents to copy and fill in."],
  forms: ["Forms", "Blank records used during an engagement."],
  examples: ["Filled-out examples", "Templates and forms filled in for a fictional client."],
  policies: ["Policies", "Privacy, terms, cookies, and the rest of the fine print."],
  neo: ["Neo", "How Neo, the chat on neon1.tech, behaves."],
}


// Every Markdown file under dir
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : []
  })


// All documents with their front matter, body and corpus-relative path, in export order
export function load() {
  return walk(corpusDir)
    .map((file) => {
      const { data, body } = parse(readFileSync(file, "utf8"))
      const path = relative(corpusDir, file)
      return { file, path, section: path.split("/")[0], data, body }
    })
    .sort((a, b) => SECTIONS.indexOf(a.section) - SECTIONS.indexOf(b.section) || a.path.localeCompare(b.path))
}
