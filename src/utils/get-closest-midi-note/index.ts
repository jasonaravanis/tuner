import { A4_FREQUENCY } from "../../constants";

/*
Derive MIDI note number, credit to https://newt.phys.unsw.edu.au/jw/notes.html
Each note on a keyboard has a number (lowest note is number 21)
This function returns the number of the note that is closest to the provided frequency
*/

export const getClosestMidiNote = (frequency: number): number => {
  return Math.round(12 * Math.log2(frequency / A4_FREQUENCY)) + 69;
};
