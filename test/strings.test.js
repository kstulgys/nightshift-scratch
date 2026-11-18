import assert from "node:assert/strict";
import { test } from "node:test";
import { capitalize, trimEnd } from "../src/strings.js";

test("capitalize upper-cases the first letter", () => {
  assert.equal(capitalize("night"), "Night");
});

test("trimEnd removes trailing spaces", () => {
  assert.equal(trimEnd("night   "), "night");
});

test("trimEnd removes trailing tabs and newlines", () => {
  assert.equal(trimEnd("night\t\n \r\n"), "night");
});

test("trimEnd keeps leading whitespace", () => {
  assert.equal(trimEnd("  \tnight  "), "  \tnight");
});

test("trimEnd keeps inner whitespace", () => {
  assert.equal(trimEnd("night shift "), "night shift");
});

test("trimEnd returns an empty string unchanged", () => {
  assert.equal(trimEnd(""), "");
});

test("trimEnd reduces a whitespace-only string to empty", () => {
  assert.equal(trimEnd(" \t\n "), "");
});
