// Inspired by this contribution to the PitchDetect project: https://github.com/cwilso/PitchDetect/pull/23

export const autoCorrelate = (buffer: Float32Array, sampleRate: number) => {
  let SIZE = buffer.length;

  // Identify strength of sound signal, if too quiet abort operation
  let rootMeanSquare = 0;
  for (let i = 0; i < SIZE; i++) {
    let val = buffer[i];
    rootMeanSquare += val * val;
  }
  rootMeanSquare = Math.sqrt(rootMeanSquare / SIZE);
  if (rootMeanSquare < 0.01)
    // not enough signal
    return -1;

  // walk up for r1, walk down for r2
  // trim signal to only worry about relevent parts.
  let r1 = 0,
    r2 = SIZE - 1,
    thres = 0.2;
  for (let i = 0; i < SIZE / 2; i++)
    if (Math.abs(buffer[i]) < thres) {
      r1 = i;
      break;
    }
  for (let i = 1; i < SIZE / 2; i++)
    if (Math.abs(buffer[SIZE - i]) < thres) {
      r2 = SIZE - i;
      break;
    }

  const tempBuffer = buffer.slice(r1, r2);
  SIZE = tempBuffer.length;

  let c = new Array(SIZE).fill(0);
  for (let i = 0; i < SIZE; i++)
    for (let j = 0; j < SIZE - i; j++)
      c[i] = c[i] + tempBuffer[j] * tempBuffer[j + i];

  let d = 0;
  while (c[d] > c[d + 1]) d++;
  let maxval = -1,
    maxpos = -1;
  for (let i = d; i < SIZE; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }
  let T0 = maxpos;

  return sampleRate / T0;
};
