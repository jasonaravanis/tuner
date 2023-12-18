import { useState } from "react";
import { autoCorrelate } from "../tuner/autocorrelate";
import useInterval from "../../hooks/use-interval";
import { lookupClosestNote } from "../tuner/lookup-closest-note";
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

  return (
    <>
      <p>Frequency: {frequency}</p>
      <p>Closest note: {lookupClosestNote(frequency)}</p>
    </>
  );
};

export { FrequencySampler };
