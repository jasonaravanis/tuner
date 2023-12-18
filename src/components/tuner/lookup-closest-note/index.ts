const A4_FREQUENCY = 440; // Standard tuning frequency for the note of A4 in Hz

export const getClosestNote = (frequency: number) => {
  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  // Based on formula found in https://newt.phys.unsw.edu.au/jw/notes.html
  const result = Math.round(12 * Math.log2(frequency / A4_FREQUENCY) + 69);
  const index = result % 12;
  return notes[index];
};
