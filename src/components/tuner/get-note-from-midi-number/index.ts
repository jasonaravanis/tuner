import { NOTES } from "../../../constants";

export const getNoteFromMidiNumber = (note: number): string => {
  const noteLetter = NOTES[note % 12];
  const octave = Math.floor(note / 12) - 1;
  return `${noteLetter}${octave}`;
};
