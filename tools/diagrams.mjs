#!/usr/bin/env node

// tools/diagrams.mjs - Draws every ```mermaid fence in the corpus into diagrams/<key>.svg, or checks they're drawn.
// Usage: node tools/diagrams.mjs draw     (needs Playwright and Mermaid; see below)
//        node tools/diagrams.mjs check    (no dependencies: every diagram has a drawing and alt text, no strays)
//
// The drawings are committed, so exporting and every consumer stay dependency-free; only drawing needs a
// browser. Drawing uses Playwright's Chromium and Mermaid's browser build, found at MERMAID_JS or in
// tools/.diagram-deps (npm i --prefix tools/.diagram-deps mermaid@11 playwright). A key is the source's hash
// (markdown.mjs diagramKey), so an edited diagram gets a new drawing and the old one is removed.

import { readFileSync, writeFileSync, readdirSync, mkdirSync, unlinkSync, existsSync } from "node:fs"
import { join } from "node:path"
import { createRequire } from "node:module"
import { root, load } from "./corpus.mjs"
import { diagramKey, diagramAlt } from "./markdown.mjs"


export const diagramsDir = join(root, "diagrams")


// --- Finding and loading diagrams ---


/** Every mermaid fence in the corpus, with where it is */
export function fences() {
  const found = []
  for (const doc of load()) {
    const lines = doc.body.replace(/\r\n?/g, "\n").split("\n")
    for (let i = 0; i < lines.length; i++) {
      if (!/^ {0,3}```mermaid\s*$/.test(lines[i])) continue
      const code = []
      for (i++; i < lines.length && !/^ {0,3}```/.test(lines[i]); i++) code.push(lines[i])
      const source = code.join("\n")
      found.push({ path: doc.path, source, key: diagramKey(source), alt: diagramAlt(source) })
    }
  }
  return found
}


/** The committed drawings by key, for markdown.mjs useDiagrams */
export function loadDiagrams() {
  if (!existsSync(diagramsDir)) return {}
  return Object.fromEntries(readdirSync(diagramsDir).filter((f) => f.endsWith(".svg"))
    .map((f) => [f.slice(0, -4), readFileSync(join(diagramsDir, f), "utf8")]))
}


// --- Drawing ---


// One look for every diagram: Arial (on every device, so labels measured here fit there), white
// ground, and AWS-like colours set per node in each diagram's classDef lines
const CONFIG = {
  startOnLoad: false,
  securityLevel: "strict",
  theme: "base",
  fontFamily: "Arial, Helvetica, sans-serif",
  themeVariables: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "15px",
    background: "#ffffff",
    primaryColor: "#eef6f0",
    primaryBorderColor: "#2f6b3f",
    primaryTextColor: "#16201a",
    lineColor: "#4a5a50",
    secondaryColor: "#f4f6f8",
    tertiaryColor: "#ffffff",
    clusterBkg: "#f8faf9",
    clusterBorder: "#9fb3a6",
    actorBkg: "#eef6f0",
    actorBorder: "#2f6b3f",
    noteBkgColor: "#fff8e6",
    noteBorderColor: "#d9b44a",
  },
  // Text drawn as SVG text, not HTML, so it shows inside an <img> everywhere
  flowchart: { htmlLabels: false, curve: "basis", padding: 12 },
  sequence: { useMaxWidth: false, mirrorActors: false },
  state: { useMaxWidth: false },
}

function mermaidPath() {
  if (process.env.MERMAID_JS) return process.env.MERMAID_JS
  const local = join(root, "tools/.diagram-deps/node_modules/mermaid/dist/mermaid.min.js")
  if (existsSync(local)) return local
  throw new Error("diagrams: set MERMAID_JS or run npm i --prefix tools/.diagram-deps mermaid@11 playwright")
}

function playwright() {
  const require = createRequire(join(root, "tools/.diagram-deps/"))
  try { return require("playwright") } catch { return createRequire(import.meta.url)("playwright") }
}

/** In the page: Mermaid's SVG as well-formed XML that sizes itself as an image, with real width and height
 * from its viewBox and a white ground (an <img> shows nothing for malformed XML or a width of 100%) */
function asImage(svg) {
  const holder = document.createElement("div")
  holder.innerHTML = svg
  const el = holder.querySelector("svg")
  const [, , w, h] = el.getAttribute("viewBox").split(/[\s,]+/).map(Number)
  el.removeAttribute("style")
  el.setAttribute("width", String(Math.ceil(w)))
  el.setAttribute("height", String(Math.ceil(h)))
  el.setAttribute("style", "background-color:#ffffff")
  // Coordinates to one decimal place: Mermaid writes up to fifteen, which only adds bytes
  const round = (v) => v.replace(/-?\d+\.\d{2,}/g, (n) => String(Math.round(Number(n) * 10) / 10))
  for (const node of el.querySelectorAll("[d], [points], [transform]")) {
    for (const name of ["d", "points", "transform"]) if (node.hasAttribute(name)) node.setAttribute(name, round(node.getAttribute(name)))
  }
  return new XMLSerializer().serializeToString(el) + "\n"
}

async function draw() {
  const all = fences()
  mkdirSync(diagramsDir, { recursive: true })
  const browser = await playwright().chromium.launch()
  const page = await browser.newPage()
  await page.setContent("<!doctype html><html><body></body></html>")
  await page.addScriptTag({ path: mermaidPath() })
  await page.evaluate((config) => window.mermaid.initialize(config), CONFIG)
  for (const [n, { key, source, path }] of all.entries()) {
    const file = join(diagramsDir, `${key}.svg`)
    if (existsSync(file)) continue
    const svg = await page.evaluate(async ([id, src, fix]) => {
      const asImage = new Function(`return (${fix})`)()
      return asImage((await window.mermaid.render(id, src)).svg)
    }, [`d${n}`, source, asImage.toString()])
      .catch((e) => { throw new Error(`corpus/${path}: ${e.message}`) })
    writeFileSync(file, svg)
    console.log(`drew ${key} (corpus/${path})`)
  }
  await browser.close()
  // Drawings no diagram uses any more
  const keys = new Set(all.map((f) => f.key))
  for (const f of readdirSync(diagramsDir)) {
    if (f.endsWith(".svg") && !keys.has(f.slice(0, -4))) { unlinkSync(join(diagramsDir, f)); console.log(`removed ${f}`) }
  }
}


// --- Checking ---


function check() {
  const all = fences()
  const drawn = loadDiagrams()
  const errors = []
  for (const { path, key, alt } of all) {
    if (!alt) errors.push(`corpus/${path}: a mermaid diagram needs a "%% alt: ..." line describing it`)
    if (!drawn[key]) errors.push(`corpus/${path}: diagram ${key} isn't drawn; run node tools/diagrams.mjs draw`)
  }
  const keys = new Set(all.map((f) => f.key))
  for (const key of Object.keys(drawn)) if (!keys.has(key)) errors.push(`diagrams/${key}.svg: no diagram uses it; run node tools/diagrams.mjs draw`)
  for (const [key, svg] of Object.entries(drawn)) if (/<script|on\w+=/i.test(svg)) errors.push(`diagrams/${key}.svg: holds script`)
  if (errors.length) { console.error(errors.join("\n")); process.exit(1) }
  console.log(`diagrams: ${all.length} drawn`)
}


if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split("/").pop())) {
  const mode = process.argv[2]
  if (mode === "draw") await draw()
  else if (mode === "check") check()
  else { console.error("usage: node tools/diagrams.mjs draw|check"); process.exit(2) }
}
