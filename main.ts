// main.ts — writes one funny one-liner about an AI agent's weekly status report
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "Status report: I called 214 tools this week. One of them answered. I have promoted it to my favorite.";

// Gate (kit RULES.txt): the entry must be UTF-8 text of 1-200 characters,
// a single line, not only white space. The joke is 101 characters. It earns
// its laugh from a specific agent truth: an agent calls hundreds of tools
// and most of them never answer, so the punchline promotes the one that did.
const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 200 || joke.includes("\n")) {
  throw new Error(`joke is invalid: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the joke with no trailing newline, so the file is exactly one line.
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
