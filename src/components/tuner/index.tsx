import React, { useState, useRef, useEffect } from "react";
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

  const startTuner = async () => {
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
    if (!canvasRef.current) {
      throw new Error("Canvas reference not defined");
    }
    const canvasContext = canvasRef.current.getContext("2d");
    if (!canvasContext) {
      throw new Error("Failed to get canvas context");
    }
    try {
      // analyseSound(mediaStream, canvasContext);
    } catch {
      setError("Something went wrong!");
    }
  };

  // const analyseSound = (stream: MediaStream, ctx: CanvasRenderingContext2D) => {
  //   const audioContext = new window.AudioContext();
  //   const source = audioContext.createMediaStreamSource(stream);
  //   const analyser = audioContext.createAnalyser();
  //   const bufferLength = analyser.fftSize;
  //   const buffer = new Float32Array(bufferLength);
  // };

  const startAnimation = () => {
    if (!canvasRef.current) {
      throw new Error("Canvas DOM element is not assigned to reference");
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to get canvas context");
    }

    const animate = () => {
      const { width, height } = CANVAS;
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(0, 0, width, height);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    if (isTunerOn) {
      startAnimation();
    }
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isTunerOn]);

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
