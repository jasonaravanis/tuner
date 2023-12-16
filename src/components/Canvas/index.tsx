import React, { forwardRef, type ForwardedRef } from "react";

type Props = {
  width: number;
  height: number;
};

const Canvas = (
  { width, height }: Props,
  ref: ForwardedRef<HTMLCanvasElement>
) => {
  return (
    <canvas
      width={width}
      height={height}
      className="border border-rose-500"
      ref={ref}
    >
      An animated display of the detected sound frequencies
    </canvas>
  );
};

const CanvasWithRef = forwardRef(Canvas);

export { CanvasWithRef as Canvas };
