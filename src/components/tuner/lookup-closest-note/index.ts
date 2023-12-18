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

  // Derive MIDI note number, credit to https://newt.phys.unsw.edu.au/jw/notes.html
  const midi = Math.round(12 * Math.log2(frequency / A4_FREQUENCY)) + 69;
  const index = midi % 12;
  return notes[index];
};
