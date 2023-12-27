import { getCentsFromFrequency } from ".";

it("gets cents between frequencies", () => {
  expect(getCentsFromFrequency(440, 450)).toBe(-38.9);
});
