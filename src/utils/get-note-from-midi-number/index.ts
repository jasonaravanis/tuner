import { NOTES } from "../../constants";
import { Note } from "../../types";

export const getNoteFromMidiNumber = (note: number): Note => {
  const character = NOTES[note % 12];
  const octave = Math.floor(note / 12) - 1;

  const accidental = (character.charAt(1) ? character.charAt(1) : null) as
    | "#"
    | null;
  return {
    character: character.charAt(0),
    accidental,
    octave,
  };
};
