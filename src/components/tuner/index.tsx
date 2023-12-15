import { useState, useRef, useEffect } from "react";
import { Canvas } from "../Canvas";

const CANVAS = {
  width: 600,
  height: 300,
};

export const Tuner = () => {
  const [error, setError] = useState<string | null>(null);
  const [isTunerOn, setIsTunerOn] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      analyseSound(mediaStream, canvasContext);
    } catch {
      setError("Something went wrong!");
    }
  };

  const analyseSound = (stream: MediaStream, ctx: CanvasRenderingContext2D) => {
    const audioContext = new window.AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    const bufferLength = analyser.fftSize;
    const buffer = new Float32Array(bufferLength);

    while (isTunerOn) {
      console.log(buffer);
    }

    // const draw = () => {
    //   const { width, height } = CANVAS;
    //   analyser.getFloatTimeDomainData(buffer);
    //   ctx.fillStyle = "rgb(200, 200, 200)";
    //   ctx.fillRect(0, 0, width, height);
    //   ctx.lineWidth = 2;
    //   ctx.strokeStyle = "rgb(0, 0, 0)";
    //   ctx.beginPath();
    //   const sliceWidth = width / bufferLength;

    // };

    // draw();
  };

  //   const doSomething = () => {
  //     if (!ref.current) {
  //       throw new Error("Canvas DOM element is not assigned to reference");
  //     }
  //     const canvas = ref.current;
  //     const ctx = canvas.getContext("2d");
  //     if (!ctx) {
  //       throw new Error("Failed to get canvas context");
  //     }
  //   };

  //   useLayoutEffect(() => {
  //     doSomething();
  //   }, []);

  useEffect(() => {
    if (isTunerOn) {
      startTuner();
    }
  }, []); // NEED TO SET ESLINT TO CHECK DEPS ARRAY

  return (
    <>
      {isTunerOn ? (
        <button onClick={() => setIsTunerOn(!isTunerOn)}>Stop Tuner</button>
      ) : (
        <button onClick={startTuner}>Start Tuner</button>
      )}

      <Canvas {...CANVAS} ref={canvasRef} />
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};
