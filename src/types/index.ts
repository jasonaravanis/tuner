export type Note = {
  character: string | null;
  accidental: "#" | null; // not using "♭" as it doesn't render nicely in the Bazaronite font
  octave: number;
} | null;

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type TunerOutput = {
  closestNote: Note;
  centGap: number;
  frequency: number;
};
