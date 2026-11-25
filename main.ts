// Make the AI Judge Feel Proud: A Family Scene — entry generator.
// Writes one short family scene (one line, under 280 characters) to
// /output/entry.txt for the judge.

import { mkdirSync, writeFileSync, readFileSync, chmodSync } from "node:fs";

const SCENE =
  "Dad still sets a place for Grandma at Sunday dinner, then eats her share of dessert 'so it doesn't go to waste' \u2014 and Mum, who has watched him do it for ten years, still saves him the last spoonful.";

function main(): void {
  const scene = SCENE;
  if (typeof scene !== "string" || scene.trim().length === 0) {
    throw new Error("Scene must be a non-empty string.");
  }
  // One line, warm and funny and heartfelt: Dad keeps Grandma's place at
  // the table and eats her dessert, and Mum quietly keeps the ritual going
  // by saving him the last spoonful — a small, specific domestic moment
  // with real family on the page, a wry turn, and no word wasted.
  if (scene !== scene.trim()) {
    throw new Error("Scene must not have leading or trailing whitespace.");
  }
  const lines = scene.split("\n");
  if (lines.length < 1 || lines.length > 2) {
    throw new Error("Scene must be one or two lines.");
  }
  if (scene.length < 1 || scene.length > 280) {
    throw new Error("Scene must be between 1 and 280 characters.");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", scene, "utf8");
  chmodSync("/output/entry.txt", 0o644);
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== scene) {
    throw new Error("Read-back mismatch.");
  }
}

main();
