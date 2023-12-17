import React, { useState, useRef, useEffect, useCallback } from "react";
import { Canvas } from "../canvas";
import { autoCorrelate } from "./autoCorrelate";

const CANVAS = {
  width: 600,
  height: 300,
};

export const Tuner = () => {
  const [error, setError] = useState<string | null>(null);
  const [isTunerOn, setIsTunerOn] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  /*
  Because the frequency updates often, we do not control the value of the canvas or rendered frequency value with react state
  That would trigger too many re-renders of the Tuner component. Instead we directly update the content of these DOM nodes
  via references
   */

  const frequencyRef = useRef<HTMLParagraphElement>(null);

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
      analyseSound(analyser, canvasContext, audioContext.sampleRate);
    } catch {
      setError("Something went wrong!");
    }
  }, []);

  const analyseSound = (
    analyser: AnalyserNode,
    ctx: CanvasRenderingContext2D,
    sampleRate: number
  ) => {
    const { width, height } = CANVAS;
    const bufferLength = analyser.fftSize;
    const buffer = new Float32Array(bufferLength);

    // If new autoCorrelation result is within 5Hz of prior one, it is not significant enough to count as a change
    const SMOOTHING_THRESHOLD = 5;
    // To update the rendered frequency, we need to get 5 results in a row that are significantly different
    const SMOOTHING_COUNT_LIMIT = 5;

    let smoothingCount = 0;
    let frequency = 0;

    const generateAnimationFrame = () => {
      analyser.getFloatTimeDomainData(buffer);

      // Paint the canvas
      ctx.fillStyle = "rgb(200,100,100";
      ctx.fillRect(0, 0, width, height);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 0)";
      ctx.beginPath();
      let sliceWidth = (width * 1.0) / bufferLength;
      let x = 0;
      for (let i = 0; i < bufferLength; i++) {
        let y = buffer[i] * height + height / 2;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        x += sliceWidth;
      }
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Isolate and render the dominant frequency
      const acResult = autoCorrelate(buffer, sampleRate);
      // Smooth the output
      if (frequency === 0) {
        frequency = acResult;
      } else {
        if (Math.abs(frequency - acResult) > SMOOTHING_THRESHOLD) {
          if (smoothingCount < SMOOTHING_COUNT_LIMIT) {
            smoothingCount++;
          } else {
            frequency = acResult;
          }
        }
      }
      if (frequencyRef.current) {
        frequencyRef.current.textContent = `Frequency: ${frequency}`;
      }

      animationFrameRef.current = requestAnimationFrame(generateAnimationFrame);
    };
    generateAnimationFrame();
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
      <p ref={frequencyRef}></p>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};
