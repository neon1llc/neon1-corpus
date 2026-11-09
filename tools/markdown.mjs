// tools/markdown.mjs - Turns the Markdown the corpus uses into HTML, with no dependencies.
//
// Supported: headings, paragraphs, bullet and numbered lists (nested by indent), task lists (- [ ] and - [x]),
// tables, block quotes, callouts (> [!note] Title), fenced code, rules, and inline code, links, bold, italics and
// fill-in blanks (four or more underscores). Raw HTML in a document is escaped, never passed through.


const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }
export const escape = (text) => text.replace(/[&<>]/g, (c) => ESC[c])
const attr = (text) => text.replace(/[&<>"]/g, (c) => ESC[c])

// Lowercase words joined by hyphens, used for heading ids and section keys
export const slug = (text) =>
  text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z#0-9]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")



// Inline formatting inside one block of text
export function inline(text) {
  const kept = []
  const keep = (html) => `\u0000${kept.push(html) - 1}\u0000`
  let s = text
    // Code spans first, so nothing inside them is formatted
    .replace(/`([^`]+)`/g, (_, code) => keep(`<code>${escape(code)}</code>`))
    // Links and autolinks, with their text formatted and their address escaped
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => keep(`<a href="${attr(href)}">${inline(label)}</a>`))
    .replace(/<(https?:\/\/[^>\s]+)>/g, (_, href) => keep(`<a href="${attr(href)}">${escape(href)}</a>`))
    // A run of four or more underscores is a line to write on, in forms and templates
    .replace(/_{4,}/g, () => keep('<span class="blank" role="img" aria-label="blank to fill in"></span>'))
  s = escape(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^\w*])\*(?!\s)(.+?)\*(?!\w)/g, "$1<em>$2</em>")
    .replace(/(^|[^\w])_(?!\s)(.+?)_(?!\w)/g, "$1<em>$2</em>")
    .replace(/ {2,}\n/g, "<br>\n")
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => kept[i])
}



const isRule = (line) => /^ {0,3}([-*_])( *\1){2,} *$/.test(line)
const isFence = (line) => /^ {0,3}```/.test(line)
const isHeading = (line) => /^ {0,3}#{1,6} /.test(line)
const isQuote = (line) => /^ {0,3}> ?/.test(line)
const listItem = (line) => line.match(/^( *)([-*+]|\d+[.)]) +(.*)$/)
const isTableStart = (lines, i) => /^\s*\|/.test(lines[i]) && /^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/.test(lines[i + 1] ?? "")
const cells = (line) => line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim())
const startsBlock = (lines, i) =>
  isRule(lines[i]) || isFence(lines[i]) || isHeading(lines[i]) || isQuote(lines[i]) || listItem(lines[i]) || isTableStart(lines, i)


// A list starting at line i, nested lists taken from deeper-indented items. Returns [html, next line]
function list(lines, i) {
  const indent = listItem(lines[i])[1].length
  const ordered = /\d/.test(listItem(lines[i])[2])
  const items = []
  while (i < lines.length) {
    const m = listItem(lines[i])
    if (!m || m[1].length !== indent || /\d/.test(m[2]) !== ordered) break
    const text = [m[3]]
    let nested = ""
    i++
    while (i < lines.length && lines[i].trim()) {
      const sub = listItem(lines[i])
      if (sub && sub[1].length > indent) {
        const [html, next] = list(lines, i)
        nested += html
        i = next
      } else if (!sub && !startsBlock(lines, i)) {
        text.push(lines[i].trim())
        i++
      } else break
    }
    // "[ ] " or "[x] " at the start makes a checkbox to tick, on screen or on paper
    const task = text[0].match(/^\[( |x|X)\] +(.*)$/)
    if (task) {
      text[0] = task[2]
      const box = `<input type="checkbox"${task[1] === " " ? "" : " checked"}>`
      items.push(`<li class="task"><label>${box} ${inline(text.join("\n"))}</label>${nested}</li>`)
    } else items.push(`<li>${inline(text.join("\n"))}${nested}</li>`)
    // A blank line between items keeps the list going
    if (!lines[i]?.trim() && listItem(lines[i + 1] ?? "")?.[1].length === indent) i++
  }
  const tag = ordered ? "ol" : "ul"
  return [`<${tag}>${items.join("")}</${tag}>`, i]
}


// The whole document. Headings get ids from their text
export function render(markdown) {
  const lines = markdown.replace(/\r\n?/g, "\n").replace(/\t/g, "    ").split("\n")
  const out = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) {
      i++
    } else if (isFence(line)) {
      const lang = line.trim().slice(3).trim()
      const code = []
      for (i++; i < lines.length && !isFence(lines[i]); i++) code.push(lines[i])
      i++
      out.push(`<pre><code${lang ? ` class="language-${attr(lang)}"` : ""}>${escape(code.join("\n"))}</code></pre>`)
    } else if (isHeading(line)) {
      const [, hashes, text] = line.trim().match(/^(#+) +(.*?)( +#+)?$/)
      const html = inline(text)
      out.push(`<h${hashes.length} id="${slug(html)}">${html}</h${hashes.length}>`)
      i++
    } else if (isRule(line)) {
      out.push("<hr>")
      i++
    } else if (isQuote(line)) {
      const inner = []
      for (; i < lines.length && lines[i].trim() && (isQuote(lines[i]) || !startsBlock(lines, i)); i++) inner.push(lines[i].replace(/^ {0,3}> ?/, ""))
      // "> [!kind] Title" is a callout box: note, tip, warning or example
      const callout = inner[0].match(/^\[!(note|tip|warning|example)\] *(.*)$/i)
      if (callout) {
        const kind = callout[1].toLowerCase()
        const title = callout[2] || kind[0].toUpperCase() + kind.slice(1)
        out.push(`<aside class="callout ${kind}"><p class="callout-title">${inline(title)}</p>${render(inner.slice(1).join("\n"))}</aside>`)
      } else out.push(`<blockquote>${render(inner.join("\n"))}</blockquote>`)
    } else if (isTableStart(lines, i)) {
      const head = cells(line)
      const align = cells(lines[i + 1]).map((c) => (c.startsWith(":") && c.endsWith(":") ? "center" : c.endsWith(":") ? "right" : ""))
      const cell = (tag, text, n) => `<${tag}${align[n] ? ` style="text-align:${align[n]}"` : ""}>${inline(text)}</${tag}>`
      const rows = []
      for (i += 2; i < lines.length && /^\s*\|/.test(lines[i]); i++) rows.push(`<tr>${cells(lines[i]).map((c, n) => cell("td", c, n)).join("")}</tr>`)
      out.push(`<table><thead><tr>${head.map((c, n) => cell("th", c, n)).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table>`)
    } else if (listItem(line)) {
      const [html, next] = list(lines, i)
      out.push(html)
      i = next
    } else {
      const para = []
      for (; i < lines.length && lines[i].trim() && !startsBlock(lines, i); i++) para.push(lines[i].trim())
      out.push(`<p>${inline(para.join("\n"))}</p>`)
    }
  }
  return out.join("\n")
}


// The document split at its H2 headings. Text before the first H2 is the lead
export function sections(markdown) {
  const parts = []
  let current = { key: "lead", heading: "", lines: [] }
  for (const line of markdown.split("\n")) {
    const h2 = line.match(/^## +(.*?)\s*$/)
    if (h2) {
      parts.push(current)
      current = { key: slug(inline(h2[1])), heading: h2[1], lines: [] }
    } else current.lines.push(line)
  }
  parts.push(current)
  return parts
    .map(({ key, heading, lines }) => ({ key, heading, markdown: lines.join("\n").trim() }))
    .filter((s) => s.heading || s.markdown)
    .map((s) => ({ ...s, html: render(s.markdown) }))
}
