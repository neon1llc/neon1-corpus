// tools/pipeline.test.mjs - Exercise the lint and export commands, including their refusal paths.

import assert from "node:assert/strict";
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import test from "node:test";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Run one corpus command with the current Node runtime and capture its result.
function run(script, args = [], cwd = root) {
  return spawnSync(process.execPath, [script, ...args], { cwd, encoding: "utf8" });
}

test("lint accepts the corpus and rejects a required fact that is missing", () => {
  const current = run("tools/lint.mjs");
  assert.equal(current.status, 0, current.stderr);

  const fixture = mkdtempSync(join(tmpdir(), "neon1-corpus-lint-"));
  try {
    for (const dir of ["tools", "corpus", "schema"]) cpSync(join(root, dir), join(fixture, dir), { recursive: true });
    const contact = join(fixture, "corpus/engagement/contact.md");
    const original = readFileSync(contact, "utf8");
    assert.ok(original.includes("Outside the US, ask"));
    writeFileSync(contact, original.replace("Outside the US, ask", "Outside the US, check"));

    const invalid = run(join(fixture, "tools/lint.mjs"), [], fixture);
    assert.equal(invalid.status, 1, invalid.stdout);
    assert.match(invalid.stderr, /must say "Outside the US, ask"/);
  } finally {
    rmSync(fixture, { recursive: true, force: true });
  }
});

test("export writes a complete bundle and refuses an unknown target without changing output", () => {
  const output = mkdtempSync(join(tmpdir(), "neon1-corpus-export-"));
  try {
    const valid = run(join(root, "tools/export.mjs"), ["--target", "chat", "--out", output]);
    assert.equal(valid.status, 0, valid.stderr);
    const target = join(output, "chat");
    const manifest = JSON.parse(readFileSync(join(target, "manifest.json"), "utf8"));
    const bundle = JSON.parse(readFileSync(join(target, "bundle.json"), "utf8"));
    assert.equal(manifest.target, "chat");
    assert.ok(manifest.files.length > 0);
    assert.equal(bundle.files.length, manifest.files.length);
    for (const file of manifest.files) {
      assert.ok(readFileSync(join(target, file.file), "utf8").startsWith("# "));
      assert.equal(JSON.parse(readFileSync(join(target, file.json), "utf8")).id, file.id);
    }

    const marker = join(output, "keep.txt");
    writeFileSync(marker, "keep");
    const invalid = run(join(root, "tools/export.mjs"), ["--target", "unknown", "--out", output]);
    assert.equal(invalid.status, 1);
    assert.match(invalid.stderr, /Pick a target/);
    assert.equal(readFileSync(marker, "utf8"), "keep");
  } finally {
    rmSync(output, { recursive: true, force: true });
  }
});
