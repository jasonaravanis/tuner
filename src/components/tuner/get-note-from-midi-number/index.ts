import { NOTES } from "../../../constants";

export const getNoteFromMidiNumber = (note: number): string => {
  const index = note % 12;
  return NOTES[index];
};
