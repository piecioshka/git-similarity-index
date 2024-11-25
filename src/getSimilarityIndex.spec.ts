import { suite, expect } from "vitest";
import { getSimilarityIndex } from "./getSimilarityIndex";

suite("getSimilarityIndex", (test) => {
  test.each([
    {
      lineBytes1: [],
      lineBytes2: [],
      size2: 0,
      expected: 0,
    },
    {
      lineBytes1: [[1]],
      lineBytes2: [[1, 2], [3]],
      size2: 3,
      expected: 0,
    },
    {
      lineBytes1: [[1, 2]],
      lineBytes2: [[1, 2], [3]],
      size2: 3,
      expected: 66.67,
    },
    {
      // prettier-ignore
      lineBytes1: [[1, 2], [3, 4]],
      // prettier-ignore
      lineBytes2: [[5, 6], [7, 8]],
      size2: 4,
      expected: 0,
    },
    {
      // prettier-ignore
      lineBytes1: [[1, 2], [3, 4]],
      // prettier-ignore
      lineBytes2: [[1, 2], [3, 4]],
      size2: 4,
      expected: 100,
    },
    {
      // prettier-ignore
      lineBytes1: [[1, 2], [3, 4]],
      // prettier-ignore
      lineBytes2: [[1, 2], [7, 8]],
      size2: 4,
      expected: 50,
    },
    {
      // prettier-ignore
      lineBytes1: [[1, 2], [3, 4]],
      // prettier-ignore
      lineBytes2: [[1, 2], [3, 4]],
      size2: 5,
      expected: 80,
    },
    {
      lineBytes1: [[97, 10], [98, 10], [99, 10], [100, 10], [101]],
      lineBytes2: [[97, 120, 32, 10], [98, 10], [99, 10], [100, 10], [101]],
      size2: 11,
      expected: 63.64,
    },
    {
      lineBytes1: [[97, 120, 32, 10], [98, 10], [99, 10], [100, 10], [101]],
      lineBytes2: [[98, 10], [101]],
      size2: 3,
      expected: 100,
    },
  ])(
    "should return $expected when lists are $expected% equal",
    ({ lineBytes1, lineBytes2, size2, expected }) => {
      const result = getSimilarityIndex(lineBytes1, lineBytes2, size2);
      expect(result).toBe(expected);
    }
  );

  test("should throw an error for strange case", () => {
    expect(() => getSimilarityIndex([[1]], [[1]], 0)).toThrowError(
      "Similarity index is greater than 100"
    );
  });
});
