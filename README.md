# git-similarity-index

[![node version](https://img.shields.io/node/v/git-similarity-index.svg)](https://www.npmjs.com/package/git-similarity-index)
[![npm version](https://badge.fury.io/js/git-similarity-index.svg)](https://badge.fury.io/js/git-similarity-index)
[![downloads count](https://img.shields.io/npm/dt/git-similarity-index.svg)](https://www.npmjs.com/package/git-similarity-index)
[![size](https://packagephobia.com/badge?p=git-similarity-index)](https://packagephobia.com/result?p=git-similarity-index)
[![license](https://img.shields.io/npm/l/git-similarity-index.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/git-similarity-index/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/git-similarity-index/actions/workflows/testing.yml)

🔨 This simple tool calculates the similarity index between two files.

## Motivation

I would like to calculate the similarity between two files. Unfortunately, but Git does not provide a command that would count the ‘similarity index’. Therefore, I decided to write such a tool myself that counts this index.

![](./screenshots/demo-similarity-index.png)

## CLI

```bash
npm install -g git-similarity-index

git-similarity-index path1 path2
# or
git-similarity-index path1 path2 --use-git
```

## Usage

```js
import {
  getSimilarityIndex,
  getLinesBytes,
  getSimilarityIndexForText,
  getSimilarityIndexForFiles
} from "git-similarity-index";

// getSimilarityIndex + getLinesBytes
(function () {
  const toBytes = (text) => Buffer.from(text).toJSON().data;

  const firstPattern = "a\n";
  const secondPattern = "a\nb";
  const similarityIndex = getSimilarityIndex(
    getLinesBytes(toBytes(firstPattern)),
    getLinesBytes(toBytes(secondPattern)),
    toBytes(secondPattern).length,
  );
  console.log(similarityIndex); // 66.67
})();

// getSimilarityIndexForText
(function () {
  const firstPattern = "a\nb\nc\n";
  const secondPattern = "a\nb\nc\nd";
  const similarityIndex = getSimilarityIndexForText(
    firstPattern,
    secondPattern,
  );
  console.log(similarityIndex); // 85.71
})();

// getSimilarityIndexForFiles
(async function () {
  const similarityIndex = await getSimilarityIndexForFiles(
    "mocks/file1.txt",
    "mocks/file2.md",
  );
  console.log(similarityIndex); // 63.64
})();
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2024
