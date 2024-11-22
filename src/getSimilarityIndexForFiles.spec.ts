import path from "node:path";
import { expect, suite } from "vitest";
import { getSimilarityIndexForFiles } from "./getSimilarityIndexForFiles";

suite("getSimilarityIndexForFiles", (test) => {
  test("should correct measure similarity index for files on disk", async () => {
    const similarityIndex = await getSimilarityIndexForFiles(
      path.join(__dirname, "../mocks/file1.txt"),
      path.join(__dirname, "../mocks/file2.md")
    );
    expect(similarityIndex).toBe(46.34);
  });

  test("should correct measure similarity index for files in Git repo", async () => {
    const similarityIndex = await getSimilarityIndexForFiles(
      path.join(__dirname, "../mocks/file1.txt"),
      path.join(__dirname, "../mocks/file2.md"),
      { useGit: true }
    );
    expect(similarityIndex).toBe(46.34);
  });
});
