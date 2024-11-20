import { getSimilarityIndex } from "./getSimilarityIndex";

function getLinesBytes(bytes: number[]): number[][] {
  return bytes.reduce(
    (acc: number[][], byte: number) => {
      if (byte === 10) {
        acc[acc.length - 1].push(10);
        acc.push([]);
      } else {
        acc[acc.length - 1].unshift(byte);
      }
      return acc;
    },
    [[]]
  );
}

export async function getSimilarityIndexForText(
  content1: string,
  content2: string
): Promise<number> {
  const bytes1 = await Buffer.from(content1).toJSON();
  const file1 = getLinesBytes(bytes1.data);

  const bytes2 = await Buffer.from(content2).toJSON();
  const size2 = bytes2.data.length;
  const file2 = getLinesBytes(bytes2.data);

  return getSimilarityIndex(file1, file2, size2);
}
