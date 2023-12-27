import { greenDot, greenDotGlow } from "../../constants";
import { Canvas } from "../canvas";
import { useRef, useEffect } from "react";

const CANVAS = {
  width: 1000,
  height: 300,
};

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
        ctx.lineWidth = 5;
        ctx.strokeStyle = greenDot;
        ctx.shadowBlur = 20;
        ctx.shadowColor = greenDotGlow;
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

  return <Canvas {...CANVAS} ref={canvasRef} />;
};

export { Oscilloscope };
