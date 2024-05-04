export const simpleAutoCorrelate = (buffer: Float32Array): number => {
  const offsetSums = new Array(buffer.length).fill(0);

  // multiply each point in wave by same point in offset wave, add all results together
  for (let offset = 0; offset < buffer.length; offset++) {
    for (let j = 0; j < buffer.length - offset; j++) {
      offsetSums[offset] = buffer[j] * buffer[j + offset];
    }
  }

  let maxValue = -1;
  let bestOffset = -1;

  // find the offset that generates the biggest sum (i.e multiplies the wave by itself)
  for (let i = 0; i < offsetSums.length; i++) {
    if (offsetSums[i] > maxValue) {
      maxValue = offsetSums[i];
      bestOffset = i;
    }
  }

  // frequency is how many times the offset length fits into the sample length
  return buffer.length / bestOffset;
};
