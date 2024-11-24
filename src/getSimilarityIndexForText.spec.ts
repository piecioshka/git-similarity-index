import { suite, expect } from "vitest";
import { getSimilarityIndexForText } from "./getSimilarityIndexForText";

suite("getSimilarityIndexForText", (test) => {
  test.each([
    {
      text1: "e",
      text2: "d\ne",
      expected: 33.33,
    },
    {
      text1: "d\ne",
      text2: "c\nd\ne",
      expected: 60,
    },
    {
      text1: "c\nd\ne",
      text2: "b\nc\nd\ne",
      expected: 71.43,
    },
    {
      text1: "b\nc\nd\ne",
      text2: "a\nb\nc\nd\ne",
      expected: 77.78,
    },
    {
      text1: "a\nb\nc\nd\ne",
      text2: "b\ne",
      expected: 100,
    },
  ])("should return $expected", ({ text1, text2, expected }) => {
    const result = getSimilarityIndexForText(text1, text2);
    expect(result).toBe(expected);
  });
});
