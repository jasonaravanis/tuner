import { Color } from "../../types";
import React from "react";

type Props = {
  color: Color;
} & React.SVGProps<SVGCircleElement>;

const DialPixel = (props: Props) => {
  const { color } = props;
  // TODO: pull filter out so only render once?
  return (
    <>
      <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <circle filter="url(#glow)" fill={color} r="1.5%" {...props} />
    </>
  );
};

export { DialPixel };
