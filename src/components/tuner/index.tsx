import React, { useState, useCallback, useEffect } from "react";
import { TunerView } from "../tuner-view";
import { useFrequencySampler } from "../../hooks/use-frequency-sampler";

export const Tuner = () => {
  const [error, setError] = useState<string | null>(null);
  const [isTunerOn, setIsTunerOn] = useState(false);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  const tunerOutput = useFrequencySampler({ analyser });

  const startTuner = useCallback(async () => {
    setError(null);
    const isSupportedBrowser = Boolean(navigator.mediaDevices.getUserMedia);
    if (!isSupportedBrowser) {
      throw new Error(
        "Sorry, your browser doesn't support the getUserMedia API!"
      );
    }
    let mediaStream;
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    } catch (err) {
      if (!mediaStream) {
        setError(
          "Please grant permission to access the microphone to use the tuner"
        );
      }
    }
    try {
      if (mediaStream) {
        const audioContext = new window.AudioContext();
        const source = audioContext.createMediaStreamSource(mediaStream);
        const initialisedAnalyser = audioContext.createAnalyser();
        source.connect(initialisedAnalyser);
        setAnalyser(initialisedAnalyser);
        setIsTunerOn(true);
      }
    } catch (err) {
      setError(String(err) ? String(err) : "Something went wrong");
    }
  }, []);

  const stopTuner = () => {
    setIsTunerOn(false);
    setAnalyser(null);
    setError(null);
  };

  useEffect(() => {
    if (error) {
      window.alert(error);
    }
  }, [error]);

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
