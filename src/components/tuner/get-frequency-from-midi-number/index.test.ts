import { getFrequencyFromMidiNumber } from ".";

it("gets frequency from midi number", () => {
  expect(getFrequencyFromMidiNumber(69)).toBe(440);
  expect(getFrequencyFromMidiNumber(60)).toBe(261.6256);
});
