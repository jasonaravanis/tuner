import React from "react";
import { motion, SVGMotionProps } from "framer-motion";

type Props = SVGMotionProps<SVGCircleElement>;

const Circle = (props: Props) => {
  return (
    <motion.circle
      animate={{ cx: props.cx as number }}
      transition={{ ease: "linear" }}
      filter="url(#glow)"
      fill={props.fill}
      r="1.5%"
      {...props}
    />
  );
};

export { Circle };
