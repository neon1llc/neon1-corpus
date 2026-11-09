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

// Shelves fall into two groups in the Knowledge Center: resources a reader can use, and what neon1 is
export const GROUPS = {
  resources: ["For you", "Guides, templates, forms, filled-out examples, and comparisons."],
  about: ["About neon1", "Who neon1 is, how it works, what it offers, and its policies."],
}

export const SHELF_GROUP = {
  guides: "resources", landscape: "resources", templates: "resources", forms: "resources", examples: "resources",
  company: "about", services: "about", standards: "about", faq: "about", "case-studies": "about", products: "about", policies: "about", neo: "about",
}

export const SHELVES = {
  company: ["Company", "The charter, the names, how to get in touch, and a glossary."],
  services: ["Services", "What neon1 offers."],
  standards: ["How I work", "How each engagement is run, from the first conversation to handover."],
  guides: ["Guides", "How-tos and typical engagements, for owners, teams, and families."],
  faq: ["Questions", "Common questions about working with neon1 and using 1NEON."],
  "case-studies": ["Case studies", "Past projects, told as Needs, Execute, Observe, Normalize."],
  products: ["Products", "Tools and products neon1 builds."],
  landscape: ["Alternatives", "Other places to get help, and open-source tools worth a look."],
  templates: ["Templates", "Blank business documents to copy and fill in."],
  forms: ["Forms", "Blank records used during an engagement."],
  examples: ["Filled-out examples", "Templates and forms filled in for a fictional client."],
  policies: ["Policies", "Privacy, terms, cookies, accessibility, and security reporting."],
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
    // Within a shelf, documents with an order come first, in that order, then the rest by path
    .sort((a, b) => SECTIONS.indexOf(a.section) - SECTIONS.indexOf(b.section) || (a.data?.order ?? 1e9) - (b.data?.order ?? 1e9) || a.path.localeCompare(b.path))
}
