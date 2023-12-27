import React, { forwardRef, type ForwardedRef } from "react";
import { container } from "./index.css";

type Props = {
  width: number;
  height: number;
};

const Canvas = (
  { width, height }: Props,
  ref: ForwardedRef<HTMLCanvasElement>
) => {
  return (
    <canvas className={container} width={width} height={height} ref={ref}>
      An animated display of the detected sound frequencies
    </canvas>
  );
};

const CanvasWithRef = forwardRef(Canvas);

export { CanvasWithRef as Canvas };
