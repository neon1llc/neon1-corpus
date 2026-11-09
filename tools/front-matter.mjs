// tools/front-matter.mjs - Reads the small YAML subset the corpus uses for front matter, with no dependencies.
//
// Supported: one key per line, plain or double-quoted strings, true and false, and [inline, lists].


// Turns one YAML scalar into a string or boolean
function scalar(raw) {
  const value = raw.trim()
  if (value === "true" || value === "false") return value === "true"
  if (value.startsWith('"') && value.endsWith('"')) return JSON.parse(value)
  return value
}


// Splits a file into its front matter object and Markdown body
export function parse(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!match) return { data: null, body: text }
  const data = {}
  for (const line of match[1].split("\n")) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue
    const at = line.indexOf(":")
    if (at < 1) throw new Error(`can't read front matter line: ${line}`)
    const key = line.slice(0, at).trim()
    const raw = line.slice(at + 1).trim()
    data[key] = raw.startsWith("[") && raw.endsWith("]")
      ? raw.slice(1, -1).split(",").map((s) => scalar(s)).filter((s) => s !== "")
      : scalar(raw)
  }
  return { data, body: text.slice(match[0].length) }
}
