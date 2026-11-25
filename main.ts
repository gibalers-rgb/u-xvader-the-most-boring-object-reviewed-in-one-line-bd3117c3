// The Most Boring Object, Reviewed in One Line.
// Writes one review line to /output/entry.txt.
//
// The object: a coaster. The joke is a true, recognisable detail — a coaster
// glued to the bottom of a cold glass by condensation, riding along to the
// sink as if it did the drinking itself.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const REVIEW =
  "The coaster has one job \u2014 sit under the glass \u2014 yet it still ends up glued to the bottom every time, riding to the sink like it did the drinking.";

// The gate only accepts 1-200 characters, a single line, not only white
// space — so validate the line before writing, and re-read the file after
// writing to confirm it landed byte for byte. Fail loudly instead of
// silently shipping an invalid entry.
if (REVIEW.length < 1 || REVIEW.length > 200) {
  throw new Error(`review is ${REVIEW.length} characters, must be 1-200`);
}
if (REVIEW.includes("\n") || REVIEW.trim().length === 0) {
  throw new Error("review must be a single non-blank line");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = `${outputDir}/entry.txt`;
writeFileSync(outPath, REVIEW, "utf8");
if (readFileSync(outPath, "utf8") !== REVIEW) {
  throw new Error("entry.txt does not match the review");
}
