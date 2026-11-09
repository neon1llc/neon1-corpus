// tools/corpus.mjs - Finds every corpus document and reads it, shared by lint and export.

import { readFileSync, readdirSync, statSync } from "node:fs"
import { join, dirname, relative } from "node:path"
import { fileURLToPath } from "node:url"
import { parse } from "./front-matter.mjs"


export const root = join(dirname(fileURLToPath(import.meta.url)), "..")
export const corpusDir = join(root, "corpus")

// Export order, so bundles read like the site: who, what, how, proof, products, then the fine print
export const SECTIONS = ["company", "services", "faq", "case-studies", "products", "templates", "forms", "policies", "neo"]


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
