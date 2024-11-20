import { suite, expect } from "vitest";
import { getSimilarityIndex } from "./getSimilarityIndex";

suite("getSimilarityIndex", (test) => {
  test.each([
    {
      a: [[1, 2],[3, 4]],
      b: [[5, 6],[7, 8]],
      c: 4,
      expected: 0,
    },
    {
      a: [[1, 2],[3, 4]],
      b: [[1, 2],[3, 4]],
      c: 4,
      expected: 100,
    },
    {
      a: [[1, 2],[3, 4]],
      b: [[1, 2],[7, 8]],
      c: 4,
      expected: 50,
    },
    {
      a: [[1, 2],[3, 4]],
      b: [[1, 2],[3, 4]],
      c: 5,
      expected: 80,
    },
    {
      a: [ [ 97, 10 ], [ 98, 10 ], [ 99, 10 ], [ 100, 10 ], [ 101 ] ],
      b: [ [ 97, 120, 32, 10 ], [ 98, 10 ], [ 99, 10 ], [ 100, 10 ], [ 101 ] ],
      c: 11,
      expected: 63.64,
    },
  ])("should return $expected when files are $expected% equal", ({ a, b, c, expected }) => {
    const result = getSimilarityIndex(a, b, c);
    expect(result).toBe(expected);
  });
});
