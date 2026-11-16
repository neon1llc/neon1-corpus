// tools/facts.test.mjs - The business-facts check flags old wording and wrong numbers, and passes the current ones
import { test } from "node:test"
import assert from "node:assert/strict"
import { checkText, checkRequired } from "./facts.mjs"

test("current wording passes", () => {
  assert.deepEqual(checkText("I work remotely across the US, and on site within about 30 miles of Queens, NY. Outside the US, ask."), [])
  assert.deepEqual(checkText("A free account holds up to 3 projects. An account left unchanged for 30 days is removed."), [])
  assert.deepEqual(checkText("Weekends 8am to 8pm and weekday evenings 6pm to 9pm, Eastern time."), [])
})

test("old wording and wrong numbers are flagged", () => {
  assert.equal(checkText("You need an invite.").length, 1)
  assert.equal(checkText("Sign-up asks where your business is based.").length, 1)
  assert.equal(checkText("Remote from anywhere.").length, 1)
  assert.equal(checkText("On site within about 50 miles of Queens.").length, 1)
  assert.equal(checkText("A free account holds up to 5 projects.").length, 1)
  assert.equal(checkText("Removed 21 days after its last change.").length, 1)
  assert.equal(checkText("weekday evenings 5pm to 9pm").length, 1)
})

test("a required document without its phrase is flagged", () => {
  assert.equal(checkRequired([{ path: "engagement/contact.md", body: "Remote." }, { path: "engagement/capabilities.md", body: "Outside the US, ask" }, { path: "guides/free-accounts.md", body: "Outside the US, ask" }]).length, 1)
})
