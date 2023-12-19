import { getNoteFromMidiNumber } from ".";

it("gets note from midi number", () => {
  expect(getNoteFromMidiNumber(69)).toBe("A4");
  expect(getNoteFromMidiNumber(60)).toBe("C4");
  expect(getNoteFromMidiNumber(37)).toBe("C#2");
});
