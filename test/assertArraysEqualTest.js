const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("#assertArraysEqual Test", () => {
  it("returns false for eqArrays([1, 2, 3], [1, 3, 3])", () => {
    const results = eqArrays([1, 2, 3], [1, 3, 3]);
    assert.strictEqual(results, false);
  });
});

//assertArraysEqual([1, 2, 3], [1, 3, 3]);