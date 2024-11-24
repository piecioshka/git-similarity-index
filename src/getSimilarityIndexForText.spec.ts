import { suite, expect } from "vitest";
import { getSimilarityIndexForText } from "./getSimilarityIndexForText";

suite("getSimilarityIndexForText", (test) => {
  test.each([
    {
      text1: `e`,
      text2: `d
e`,
      expected: 33.33,
    },
    {
      text1: `d
e`,
      text2: `c
d
e`,
      expected: 60,
    },
    {
      text1: `c
d
e`,
      text2: `b
c
d
e`,
      expected: 71.43,
    },
    {
      text1: `b
c
d
e`,
      text2: `a
b
c
d
e`,
      expected: 77.78,
    },
  ])("should return $expected", ({ text1, text2, expected }) => {
    const result = getSimilarityIndexForText(text1, text2);
    expect(result).toBe(expected);
  });
});
