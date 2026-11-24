import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. Gravity keeps everything in place, then drops my phone face-first onto the one tile I cannot replace.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 160
// characters, not only white space, a single line.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry length ${LINE.length} outside 1..160`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
const WORDS = LINE.trim().split(/\s+/).length;
if (WORDS < 5 || WORDS > 40) {
  throw new Error(`entry word count ${WORDS} outside 5..40`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
