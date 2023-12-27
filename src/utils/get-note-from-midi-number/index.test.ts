import { getNoteFromMidiNumber } from ".";

it("gets note from midi number", () => {
  expect(getNoteFromMidiNumber(69)).toMatchObject({
    character: "A",
    accidental: null,
    octave: 4,
  });
  expect(getNoteFromMidiNumber(60)).toMatchObject({
    character: "C",
    accidental: null,
    octave: 4,
  });
  expect(getNoteFromMidiNumber(37)).toMatchObject({
    character: "C",
    accidental: "#",
    octave: 2,
  });
});
