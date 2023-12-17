import React, { useState, useRef, useEffect, useCallback } from "react";
import { Canvas } from "../canvas";

const CANVAS = {
  width: 600,
  height: 300,
};

export const Tuner = () => {
  const [error, setError] = useState<string | null>(null);
  const [isTunerOn, setIsTunerOn] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

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
    if (!canvasRef.current) {
      throw new Error("Canvas reference not defined");
    }
    const canvasContext = canvasRef.current.getContext("2d");
    if (!canvasContext) {
      throw new Error("Failed to get canvas context");
    }
    try {
      const audioContext = new window.AudioContext();
      const source = audioContext.createMediaStreamSource(mediaStream);
      const analyser = audioContext.createAnalyser();
      source.connect(analyser);
      analyseSound(analyser, canvasContext);
    } catch {
      setError("Something went wrong!");
    }
  }, []);

  const analyseSound = (
    analyser: AnalyserNode,
    ctx: CanvasRenderingContext2D
  ) => {
    const { width, height } = CANVAS;
    const bufferLength = analyser.fftSize;
    const buffer = new Float32Array(bufferLength);

    const animate = () => {
      ctx.fillStyle = "rgb(200,100,100";

      ctx.fillRect(0, 0, width, height);
      analyser.getFloatTimeDomainData(buffer);

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 0)";
      ctx.beginPath();

      let sliceWidth = (width * 1.0) / bufferLength;
      let x = 0;

      /*
      buffer array contains time-series array of floats from -1 to 1. Each float represents magnitude of sound at a given point in time.
      Assuming you have a microphone with a sample rate of 48,000Hz, a 'given point in time' is approx 43 ms. This is
      because each audio sample is 1/48,000 seconds long and fftSize is 2048, meaning we have 2048 samples to work with
      so 2048/48,000 is about 42.6 milliseconds.
      */

      for (let i = 0; i < bufferLength; i++) {
        let y = buffer[i] * height + height / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        x += sliceWidth;
      }
      ctx.lineTo(width, height / 2);
      ctx.stroke();
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();
  };

  useEffect(() => {
    if (isTunerOn) {
      startTuner();
    }
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isTunerOn, startTuner]);

  return (
    <>
      <button onClick={() => setIsTunerOn(!isTunerOn)}>
        {isTunerOn ? "Stop" : "Start"}
      </button>
      <Canvas {...CANVAS} ref={canvasRef} />
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};
