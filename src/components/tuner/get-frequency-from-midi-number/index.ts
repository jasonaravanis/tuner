export const getFrequencyFromMidiNumber = (midi: number): number => {
  const exp = (midi - 69) / 12;
  return Number((Math.pow(2, exp) * 440).toFixed(4));
};
