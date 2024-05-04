import { useState } from "react";
import useInterval from "../../hooks/use-interval";
import { getClosestMidiNote } from "../../utils/get-closest-midi-note";
import { getNoteFromMidiNumber } from "../../utils/get-note-from-midi-number";
import { getCentsFromFrequency } from "../../utils/get-cents-from-frequency";
import { getFrequencyFromMidiNumber } from "../../utils/get-frequency-from-midi-number";
import { autoCorrelate } from "../../utils/auto-correlate";
import { Note, TunerOutput } from "../../types";
type Props = {
  analyser: AnalyserNode | null;
};

const INIT_TUNER_STATE: TunerOutput = {
  closestNote: {
    character: null,
    accidental: null,
    octave: 0,
  },
  centGap: 0,
  frequency: 0,
};

const useFrequencySampler = ({ analyser }: Props): TunerOutput => {
  const [tunerOutput, setTunerOutput] = useState<TunerOutput>(INIT_TUNER_STATE);

  const analyseSound = () => {
    if (!analyser) {
      return;
    }
    const bufferLength = analyser.frequencyBinCount;
    const buffer = new Float32Array(bufferLength);
    analyser.getFloatTimeDomainData(buffer);

    const frequency: number = autoCorrelate(
      buffer,
      analyser.context.sampleRate
    );

    if (frequency === -1) {
      setTunerOutput(INIT_TUNER_STATE);
      return;
    }

    const closestMidiNote: number = getClosestMidiNote(frequency);
    const frequencyOfClosestNote: number =
      getFrequencyFromMidiNumber(closestMidiNote);
    const closestNote: Note = getNoteFromMidiNumber(closestMidiNote);
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
  Limit to taking a snapshot every 100 ms which is a good balance between resource intensity and live updates.
  */
  useInterval(analyseSound, analyser ? 100 : null);

  return tunerOutput;
};

export { useFrequencySampler };
