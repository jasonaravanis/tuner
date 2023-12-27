import { greenDot, greenDotGlow } from "../../constants";
import { useRef, useEffect } from "react";
import { element } from "./index.css";

const CANVAS = {
  width: 1000,
  height: 200,
};

// Playing some notes can cause waveform to clip off the canvas, so scale down to make it look nicer
const SCALE_FACTOR = 0.3;

type Props = {
  analyser: AnalyserNode | null;
};

const Oscilloscope = ({ analyser }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!analyser) {
        return;
      }
      const { width, height } = CANVAS;
      if (!canvasRef.current) {
        throw new Error("Canvas reference not defined");
      }
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) {
        throw new Error("Failed to get canvas context");
      }
      const bufferLength = analyser.fftSize;
      const buffer = new Float32Array(bufferLength);

      const generateAnimationFrame = () => {
        analyser.getFloatTimeDomainData(buffer);

        ctx.clearRect(0, 0, width, height);
        ctx.lineWidth = 6;
        ctx.strokeStyle = greenDot;
        ctx.shadowBlur = 30;
        ctx.shadowColor = greenDotGlow;
        ctx.beginPath();
        let sliceWidth = (width * 1.0) / bufferLength;
        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
          let y = buffer[i] * height * SCALE_FACTOR + height / 2;
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          x += sliceWidth;
        }
        ctx.lineTo(width, height / 2);
        ctx.stroke();
        animationFrameRef.current = requestAnimationFrame(
          generateAnimationFrame
        );
      };
      generateAnimationFrame();
    };
    animate();
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [analyser]);

  return (
    <canvas {...CANVAS} ref={canvasRef} className={element}>
      An animated display of the detected sound frequencies
    </canvas>
  );
};

export { Oscilloscope };
