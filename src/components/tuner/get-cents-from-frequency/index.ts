// More detail: https://en.wikipedia.org/wiki/Cent_%28music%29#Use

export const getCentsFromFrequency = (
  detectedFrequency: number,
  targetFrequency: number
) => {
  return Number(
    (1200 * Math.log2(detectedFrequency / targetFrequency)).toFixed(1)
  );
};
