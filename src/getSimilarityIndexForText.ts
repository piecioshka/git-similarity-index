import { getSimilarityIndex } from "./getSimilarityIndex";

export function getLinesBytes(bytes: number[]): number[][] {
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

export function getSimilarityIndexForText(
  content1: string,
  content2: string
): number {
  const bytes1 = Buffer.from(content1).toJSON();
  const lineBytes1 = getLinesBytes(bytes1.data);

  const bytes2 = Buffer.from(content2).toJSON();
  const size2 = bytes2.data.length;
  const lineBytes2 = getLinesBytes(bytes2.data);

  return getSimilarityIndex(lineBytes1, lineBytes2, size2);
}
