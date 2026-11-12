// tools/front-matter.mjs - Reads the small YAML subset the corpus uses for front matter, with no dependencies.
//
// Supported: one key per line, plain or double-quoted strings, whole numbers, true and false, [inline, lists], and
// block lists (a key with nothing after its colon, then one "  - item" line per item) for items that hold commas.


// Turns one YAML scalar into a string, number or boolean
function scalar(raw) {
  const value = raw.trim()
  if (value === "true" || value === "false") return value === "true"
  if (/^-?\d+$/.test(value)) return Number(value)
  if (value.startsWith('"') && value.endsWith('"')) return JSON.parse(value)
  return value
}


// Splits a file into its front matter object and Markdown body
export function parse(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!match) return { data: null, body: text }
  const data = {}
  // The key of a block list being read, while its "  - item" lines follow
  let list = null
  for (const line of match[1].split("\n")) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue
    const item = line.match(/^\s+-\s+(.*)$/)
    if (item) {
      if (!list) throw new Error(`list item outside a list: ${line}`)
      data[list].push(scalar(item[1]))
      continue
    }
    list = null
    const at = line.indexOf(":")
    if (at < 1) throw new Error(`can't read front matter line: ${line}`)
    const key = line.slice(0, at).trim()
    const raw = line.slice(at + 1).trim()
    if (raw === "") {
      list = key
      data[key] = []
      continue
    }
    data[key] = raw.startsWith("[") && raw.endsWith("]")
      ? raw.slice(1, -1).split(",").map((s) => scalar(s)).filter((s) => s !== "")
      : scalar(raw)
  }
  return { data, body: text.slice(match[0].length) }
}
