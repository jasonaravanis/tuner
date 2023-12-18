import { getClosestMidiNote } from ".";

it("gets closest note", () => {
  expect(getClosestMidiNote(440)).toBe(69);
  expect(getClosestMidiNote(260)).toBe(60);
});
