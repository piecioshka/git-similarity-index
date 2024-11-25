import debug from "debug";

const logger = debug("git-similarity-index:bytes");

function isEqualArray(line1: number[], line2: number[]): boolean {
  const size1 = line1.length;
  const size2 = line2.length;
  if (size1 !== size2) return false;
  for (let i = 0; i < size1; i++) {
    if (line1[i] !== line2[i]) return false;
  }
  return true;
}

/**
 * Return number of equal lines in bytes
 */
function compareLineBytes(bytes1: number[][], bytes2: number[][]): number {
  let sum = 0;

  for (let i = 0; i < bytes1.length; i++) {
    const line1 = bytes1[i];

    for (let j = 0; j < bytes2.length; j++) {
      const line2 = bytes2[j];

      if (isEqualArray(line1, line2)) {
        sum += line1.length;
        bytes2.splice(j, 1);
        break;
      }
    }
  }

  return sum;
}

export function getSimilarityIndex(
  lineBytes1: number[][],
  lineBytes2: number[][],
  size2: number
): number {
  logger("Calculating similarity index for bytes", {
    lineBytes1,
    lineBytes2,
    size2,
  });
  const equalLines = compareLineBytes(lineBytes1, lineBytes2);
  const similarityIndex = (equalLines / size2) * 100;
  if (Number.isNaN(similarityIndex)) {
    return 0;
  }
  if (similarityIndex > 100) {
    throw new Error("Similarity index is greater than 100");
  }
  return Number(Number(similarityIndex).toFixed(2));
}
