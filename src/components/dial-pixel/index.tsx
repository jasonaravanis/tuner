import { Color } from "../../types";
import React from "react";

type Props = {
  color: Color;
} & React.SVGProps<SVGCircleElement>;

const DialPixel = (props: Props) => {
  const { color } = props;
  return <circle filter="url(#glow)" fill={color} r="1.5%" {...props} />;
};

export { DialPixel };
