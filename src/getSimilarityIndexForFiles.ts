import * as fs from "fs/promises";
import { exec, ExecException } from "child_process";
import { getSimilarityIndexForText } from "./getSimilarityIndexForText";

async function getFileContentFromDisk(filename: string): Promise<string> {
  return await fs.readFile(filename, "utf-8");
}

async function getFileContentFromGit(filename: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(
      `git show HEAD:${filename}`,
      (error: ExecException | null, stdout: string, stderr: string) => {
        if (error) {
          return reject(`Error: ${stderr}`.trim());
        }
        resolve(stdout);
      }
    );
  });
}

export async function getSimilarityIndexForFiles(
  filename1: string,
  filename2: string,
  options: { useGit: boolean } = { useGit: false }
): Promise<number> {
  let content1: string;
  let content2: string;
  if (options.useGit) {
    content1 = await getFileContentFromGit(filename1);
    content2 = await getFileContentFromGit(filename2);
  } else {
    content1 = await getFileContentFromDisk(filename1);
    content2 = await getFileContentFromDisk(filename2);
  }
  return getSimilarityIndexForText(content1, content2);
}
