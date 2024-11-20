function isEqualArray(line1: number[], line2: number[]): boolean {
  const size1 = line1.length;
  const size2 = line2.length;
  if (size1 !== size2) return false;
  for (let i = 0; i < size1; i++) {
    if (line1[i] !== line2[i]) return false;
  }
  return true;
}

function compareBytes(bytes1: number[][], bytes2: number[][]): number {
  return bytes1.reduce((acc: number, line1: number[]) => {
    bytes2.forEach((line2: any) => {
      const isEqual = isEqualArray(line1, line2);
      if (isEqual) {
        acc += line1.length;
      }
    });
    return acc;
  }, 0);
}

export function getSimilarityIndex(
  bytes1: number[][],
  bytes2: number[][],
  size2: number
): number {
  const equalLines = compareBytes(bytes1, bytes2);
  return Number(Number((equalLines / size2) * 100).toFixed(2));
}
