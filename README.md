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

## Usage

```js
import { getSimilarityIndexForFiles } from "git-similarity-index";

const similarityIndex = getSimilarityIndexForFiles("path/to/file1", "path/to/file2");

console.log(similarityIndex); // 63.64
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2024
