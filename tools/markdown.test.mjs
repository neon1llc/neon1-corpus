// tools/markdown.test.mjs - Checks the renderer's safety rules: raw HTML is escaped, and a link can only use
// a safe address scheme. Run with: node --test tools/markdown.test.mjs

import { test } from "node:test"
import assert from "node:assert/strict"
import { inline, render, safeHref } from "./markdown.mjs"

// --- Address schemes ---

test("page, email, phone, and same-site links are allowed", () => {
  for (const href of ["https://neon1.tech", "http://example.com", "mailto:hello@neon1.tech", "tel:+14243263661",
    "../company/pricing.md", "#section", "/knowledge/"]) assert.ok(safeHref(href), href)
})

test("script, data, and other schemes are refused, however they're disguised", () => {
  for (const href of ["javascript:alert(1)", "JavaScript:alert(1)", "java\tscript:alert(1)", " javascript:alert(1)",
    "\u0000javascript:alert(1)", "data:text/html;base64,PHNjcmlwdD4=", "vbscript:msgbox(1)", "file:///etc/passwd"])
    assert.equal(safeHref(href), false, JSON.stringify(href))
})

test("a refused link keeps its text and loses the anchor", () => {
  assert.equal(inline("[click](javascript:void0)"), "click")
  assert.match(inline("[pricing](../company/pricing.md)"), /^<a href="\.\.\/company\/pricing\.md">pricing<\/a>$/)
})

// --- Raw HTML ---

test("raw HTML is escaped, never passed through", () => {
  const html = render("<script>alert(1)</script>\n\n<img src=x onerror=alert(1)>")
  assert.doesNotMatch(html, /<script|<img/)
})
