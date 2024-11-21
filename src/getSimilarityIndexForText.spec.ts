import { suite, expect } from "vitest";
import { getSimilarityIndexForText } from "./getSimilarityIndexForText";

suite("getSimilarityIndexForText", (test) => {
  test.each([
    {
      a: `e`,
      b: `d
e`,
      expected: 33.33,
    },
    {
      a: `d
e`,
      b: `c
d
e`,
      expected: 60,
    },
    {
      a: `c
d
e`,
      b: `b
c
d
e`,
      expected: 71.43,
    },
    {
      a: `b
c
d
e`,
      b: `a
b
c
d
e`,
      expected: 77.78,
    },
  ])("should return $expected", ({ a, b, expected }) => {
    const result = getSimilarityIndexForText(a, b);
    expect(result).toBe(expected);
  });
});
