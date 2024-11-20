#!/usr/bin/env node

const { getSimilarityIndexForFiles } = require("../dist/");

const args = process.argv.slice(2);
const [filename1, filename2] = args;

if (!filename1 || !filename2) {
  console.log(`Usage: git-similarity-index <filename1> <filename2>

Options:
  <filename1>  Path to the file from Git repository
  <filename2>  Path to the file from File System

Examples:
  git-similarity-index path/to/file1.txt path/to/file2.md`);
  process.exit(1);
}

async function main() {
  return await getSimilarityIndexForFiles(filename1, filename2);
}

main().then(console.log).catch(console.error);
