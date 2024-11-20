import * as fs from "fs/promises";
import { exec } from "child_process";
import { getSimilarityIndexForText } from "./getSimilarityIndexForText";

async function getRegularFileContent(filename: string): Promise<string> {
  return await fs.readFile(filename, "utf-8");
}

async function getGitFileContent(filename: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(
      `git show HEAD:${filename}`,
      (error: any, stdout: string, stderr: string) => {
        if (error) {
          return reject(`Error: ${stderr}`);
        }
        resolve(stdout);
      }
    );
  });
}

export async function getSimilarityIndexForFiles(
  filename1: string,
  filename2: string
): Promise<number> {
  const content1 = await getGitFileContent(filename1);
  const content2 = await getRegularFileContent(filename2);
  return await getSimilarityIndexForText(content1, content2);
}
