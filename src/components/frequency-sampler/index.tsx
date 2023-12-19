import { useState } from "react";
import { autoCorrelate } from "../tuner/autocorrelate";
import useInterval from "../../hooks/use-interval";
import { getClosestMidiNote } from "../tuner/get-closest-midi-note";
import { getNoteFromMidiNumber } from "../tuner/get-note-from-midi-number";
import { getCentsFromFrequency } from "../tuner/get-cents-from-frequency";
import { getFrequencyFromMidiNumber } from "../tuner/get-frequency-from-midi-number";

type Props = {
  analyser: AnalyserNode | null;
};

type TunerOutput = {
  closestNote: string;
  centGap: number;
  frequency: number;
};

const FrequencySampler = ({ analyser }: Props) => {
  const [tunerOutput, setTunerOutput] = useState<TunerOutput>({
    closestNote: "",
    centGap: 0,
    frequency: 0,
  });

  const analyseSound = () => {
    if (!analyser) {
      return;
    }
    const bufferLength = analyser.fftSize;
    const buffer = new Float32Array(bufferLength);
    analyser.getFloatTimeDomainData(buffer);

    const frequency: number = autoCorrelate(
      buffer,
      analyser.context.sampleRate
    );
    const closestMidiNote: number = getClosestMidiNote(frequency);
    const frequencyOfClosestNote: number =
      getFrequencyFromMidiNumber(closestMidiNote);
    const closestNote: string = getNoteFromMidiNumber(closestMidiNote);
    const centGap: number = getCentsFromFrequency(
      frequency,
      frequencyOfClosestNote
    );

    setTunerOutput({
      closestNote,
      centGap,
      frequency,
    });
  };

  /*
  analyser could populate the buffer up to 2048 times per second, but that is way faster than React could (or should) update the UI
  So we limit to taking a snapshot every 200 ms which is a good balance between resource intensity and live updates.
  */
  useInterval(analyseSound, 200);

  return (
    <>
      <p>Frequency: {tunerOutput.frequency}</p>
      <p>Closest note: {tunerOutput.closestNote}</p>
      <p>Cents: {tunerOutput.centGap}</p>
    </>
  );
};

export { FrequencySampler };
