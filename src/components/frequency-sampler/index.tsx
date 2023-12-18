import { useState } from "react";
import { autoCorrelate } from "../tuner/autocorrelate";
import useInterval from "../../hooks/use-interval";
import { getClosestMidiNote } from "../tuner/get-closest-midi-note";
import { getNoteFromMidiNumber } from "../tuner/get-note-from-midi-number";
type Props = {
  analyser: AnalyserNode | null;
};

const FrequencySampler = ({ analyser }: Props) => {
  const [frequency, setFrequency] = useState(-1);

  const analyseSound = () => {
    if (!analyser) {
      return;
    }
    const bufferLength = analyser.fftSize;
    const buffer = new Float32Array(bufferLength);
    analyser.getFloatTimeDomainData(buffer);
    const acResult = autoCorrelate(buffer, analyser.context.sampleRate);
    setFrequency(acResult);
  };

  /*
  analyser could populate the buffer up to 2048 times per second, but that is way faster than React could (or should) update the UI
  So we limit to taking a snapshot every 200 ms which is a good balance between resource intensity and live updates.
  */
  useInterval(analyseSound, 200);

  // TODO: use closest midi note to calculate cents difference between detected and target pitch
  const closestNote = getNoteFromMidiNumber(getClosestMidiNote(frequency));

  return (
    <>
      <p>Frequency: {frequency}</p>
      <p>Closest note: {closestNote}</p>
    </>
  );
};

export { FrequencySampler };
