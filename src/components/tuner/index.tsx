import React, { useState, useEffect, useCallback } from "react";
import { Oscilloscope } from "../oscilloscope";
import { FrequencySampler } from "../frequency-sampler";

export const Tuner = () => {
  const [error, setError] = useState<string | null>(null);
  const [isTunerOn, setIsTunerOn] = useState(false);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  const startTuner = useCallback(async () => {
    setError(null);
    const isSupportedBrowser = Boolean(navigator.mediaDevices.getUserMedia);
    if (!isSupportedBrowser) {
      setError(
        "Sorry, your browser doesn't support audio the getUserMedia API!"
      );
      return;
    }
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    if (!mediaStream) {
      setError(
        "Please grant permission to access the microphone to use the tuner"
      );
      return;
    }
    try {
      const audioContext = new window.AudioContext();
      const source = audioContext.createMediaStreamSource(mediaStream);
      const initialisedAnalyser = audioContext.createAnalyser();
      source.connect(initialisedAnalyser);
      setAnalyser(initialisedAnalyser);
    } catch {
      setError("Something went wrong!");
    }
  }, []);

  useEffect(() => {
    if (isTunerOn) {
      startTuner();
    }
    return () => {};
  }, [isTunerOn, startTuner]);

  return (
    <>
      <button onClick={() => setIsTunerOn(!isTunerOn)}>
        {isTunerOn ? "Stop" : "Start"}
      </button>
      <Oscilloscope analyser={analyser} isActive={isTunerOn} />
      <FrequencySampler analyser={analyser} />
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};
