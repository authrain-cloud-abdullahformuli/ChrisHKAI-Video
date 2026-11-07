import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { execSync } from "node:child_process";

const root = path.resolve(".");

console.log("▶ Running ChrisHKAI-Video drill verification tests...\n");

// 1. Required files exist
const requiredFiles = [
  "README.md",
  "LICENSE",
  "MAINTAINERS.md",
  "CITATION.cff",
  "package.json",
  ".claude-plugin/plugin.json",
  ".claude-plugin/marketplace.json",
  "skills/creator-toy-intro/SKILL.md",
  "skills/creator-toy-intro/example/abdullahformuli/film.json",
  "skills/creator-toy-intro/example/abdullahformuli/toy.json",
  "docs/abdullahformuli-intro.svg",
  "examples/README.md"
];

for (const f of requiredFiles) {
  assert.ok(fs.existsSync(path.join(root, f)), `Missing required file: ${f}`);
  console.log(`  ✓ Required file exists: ${f}`);
}

// 2. Prohibited files are absent
const prohibitedFiles = [
  "README.zh-CN.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  ".github/CONTRIBUTING.md",
  ".github/CODE_OF_CONDUCT.md"
];

for (const f of prohibitedFiles) {
  assert.ok(!fs.existsSync(path.join(root, f)), `Prohibited file found: ${f}`);
  console.log(`  ✓ Prohibited file absent: ${f}`);
}

// 3. Sole Maintainer verification
const maintainersContent = fs.readFileSync(path.join(root, "MAINTAINERS.md"), "utf8");
assert.ok(
  maintainersContent.includes("Maintained solely by Abdullah Formuli. No external contributions accepted."),
  "MAINTAINERS.md missing required sole maintainer notice"
);
console.log("  ✓ MAINTAINERS.md contains sole maintainer declaration");

const readmeContent = fs.readFileSync(path.join(root, "README.md"), "utf8");
assert.ok(
  readmeContent.includes("This repository is maintained solely by [Abdullah Formuli](https://github.com/authrain-cloud-abdullahformuli). External contributions or third-party pull requests are not accepted."),
  "README.md missing required governance statement"
);
console.log("  ✓ README.md contains governance statement");

// 4. Attribution in LICENSE, package.json, CITATION.cff, plugin manifests
const licenseContent = fs.readFileSync(path.join(root, "LICENSE"), "utf8");
assert.ok(licenseContent.includes("Abdullah Formuli"), "LICENSE missing Abdullah Formuli attribution");
console.log("  ✓ LICENSE contains Abdullah Formuli attribution");

const pkgContent = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
assert.ok(pkgContent.author.includes("Abdullah Formuli"), "package.json missing Abdullah Formuli");
assert.equal(pkgContent.license, "MIT");
console.log("  ✓ package.json metadata verified");

const citationContent = fs.readFileSync(path.join(root, "CITATION.cff"), "utf8");
assert.ok(citationContent.includes("Abdullah"), "CITATION.cff missing Abdullah");
assert.ok(citationContent.includes("Formuli"), "CITATION.cff missing Formuli");
console.log("  ✓ CITATION.cff verified");

const marketplaceContent = JSON.parse(fs.readFileSync(path.join(root, ".claude-plugin/marketplace.json"), "utf8"));
assert.equal(marketplaceContent.owner.name, "Abdullah Formuli");
console.log("  ✓ marketplace.json verified");

const pluginContent = JSON.parse(fs.readFileSync(path.join(root, ".claude-plugin/plugin.json"), "utf8"));
assert.equal(pluginContent.author.name, "Abdullah Formuli");
console.log("  ✓ plugin.json verified");

// 5. Abdullah Formuli X profile example check
const filmContent = JSON.parse(fs.readFileSync(path.join(root, "skills/creator-toy-intro/example/abdullahformuli/film.json"), "utf8"));
assert.equal(filmContent.profile.handle, "abdullahformuli");
assert.equal(filmContent.profile.name, "Abdullah Formuli");
console.log("  ✓ Abdullah Formuli X profile example verified");

// 6. Zero human face photos (all raster photos in docs/ removed)
const docsFiles = fs.readdirSync(path.join(root, "docs"));
assert.ok(docsFiles.every(f => !f.endsWith(".jpg")), "Found remaining jpg files in docs");
console.log("  ✓ Zero human face photos in docs (raster photos removed, SVG vector used)");

// 7. Unit test check
execSync("node --test tests/story-directions.test.mjs", { stdio: "inherit" });
console.log("  ✓ Unit tests pass");

console.log("\n✅ All ChrisHKAI-Video verification tests passed successfully!");
