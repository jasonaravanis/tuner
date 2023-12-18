import { Canvas } from "../canvas";
import { useRef, useEffect } from "react";

const CANVAS = {
  width: 600,
  height: 300,
};

type Props = {
  analyser: AnalyserNode | null;
  isActive: boolean;
};

const Oscilloscope = ({ analyser, isActive }: Props) => {
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
        animationFrameRef.current = requestAnimationFrame(
          generateAnimationFrame
        );
      };
      generateAnimationFrame();
    };
    if (isActive) {
      animate();
    }
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isActive, analyser]);

  return <Canvas {...CANVAS} ref={canvasRef} />;
};

export { Oscilloscope };
