import { getNoteFromMidiNumber } from ".";

it("gets note from midi number", () => {
  expect(getNoteFromMidiNumber(69)).toBe("A");
  expect(getNoteFromMidiNumber(60)).toBe("C");
});
