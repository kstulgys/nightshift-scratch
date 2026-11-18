import assert from "node:assert/strict";
import { test } from "node:test";
import { capitalize, lowercaseFirst } from "../src/strings.js";

test("capitalize upper-cases the first letter", () => {
  assert.equal(capitalize("night"), "Night");
});

test("lowercaseFirst lower-cases the first letter", () => {
  assert.equal(lowercaseFirst("Night"), "night");
});

test("lowercaseFirst keeps the rest of the string", () => {
  assert.equal(lowercaseFirst("NIGHT"), "nIGHT");
});

test("lowercaseFirst returns an empty string for an empty string", () => {
  assert.equal(lowercaseFirst(""), "");
});
