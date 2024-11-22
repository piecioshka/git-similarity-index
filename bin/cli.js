#!/usr/bin/env node

const { getSimilarityIndexForFiles } = require("../dist/");
const pkg = require("../package.json");

const args = process.argv.slice(2);
const [filename1, filename2, ...params] = args;

function displayUsage() {
  console.log(`Usage: git-similarity-index <path/to/file1> <path/to/file2> [--use-git]

Options:
  --use-git\tChange file access to use git commands instead of file system

Examples:
  git-similarity-index path/to/file1.txt path/to/file2.md
  git-similarity-index path/to/file1.txt path/to/file2.md --use-git`);
}

function displayHeader() {
  const author = `${pkg.author.name} <${pkg.author.email}> ${pkg.author.url}`;
  console.log(`Copyright (c) ${new Date().getFullYear()} ${author}`);
  console.log(`Version ${pkg.version}`);
}

if (!filename1 || !filename2) {
  displayHeader();
  console.log('');
  displayUsage();
  process.exit(1);
}

async function main() {
  const options = {};
  if (params.includes("--use-git")) {
    options.useGit = true;
  }
  return await getSimilarityIndexForFiles(filename1, filename2, options);
}

main().then(console.log).catch(console.error);
