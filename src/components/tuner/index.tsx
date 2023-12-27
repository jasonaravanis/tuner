import React, { useState, useCallback } from "react";
import { TunerView } from "../tuner-view";
import { useFrequencySampler } from "../../hooks/use-frequency-sampler";

export const Tuner = () => {
  const [error, setError] = useState<string | null>(null);
  const [isTunerOn, setIsTunerOn] = useState(false);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  const tunerOutput = useFrequencySampler({ analyser });

  const startTuner = useCallback(async () => {
    setIsTunerOn(true);
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

  const stopTuner = () => {
    setIsTunerOn(false);
    setAnalyser(null);
    setError(null);
  };

  return (
    <TunerView
      error={error}
      isTunerOn={isTunerOn}
      startTuner={startTuner}
      stopTuner={stopTuner}
      analyser={analyser}
      tunerOutput={tunerOutput}
    />
  );
};
