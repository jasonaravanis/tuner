import { centsIndicator } from "./index.css";
import React from "react";

const DialPixel = (props: React.SVGProps<SVGCircleElement>) => {
  return (
    <>
      <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <circle filter="url(#glow)" className={centsIndicator} r="2%" {...props} />
    </>
  );
};

export { DialPixel };
