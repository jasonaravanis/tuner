import { motion } from "framer-motion";
import {
  currentTargetNote,
  frequency,
  hz,
  screenContentContainer,
  sharpOrFlat,
  tunerSVG,
} from "./index.css";
import { SvgGlow } from "../svg-glow";
import { Circle } from "../circle";
import { blue, green } from "../../constants";
import { TunerOutput } from "../../types";
import { Oscilloscope } from "../oscilloscope";

const dotsXvalues = [10, 20, 30, 40, 50, 60, 70, 80, 90];

type Props = {
  tunerOutput: TunerOutput;
  analyser: AnalyserNode | null;
};

export const ScreenContent = ({ tunerOutput, analyser }: Props) => {
  return (
    <motion.div
      key="screen-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={screenContentContainer}
    >
      <svg className={tunerSVG} viewBox="0 0 560 140">
        <SvgGlow />
        {dotsXvalues.map((dot) => {
          return <Circle key={dot} fill={green} cx={`${dot}%`} cy="70%" />;
        })}
        <polygon
          filter="url(#glow)"
          fill={green}
          points="275,125 280,115 285,125"
        />
        <Circle fill={blue} cx={`${tunerOutput.centGap + 50}%`} cy="60%" />
      </svg>
      <div className={frequency}>
        <span>{Math.round(tunerOutput.frequency)}</span>
        <span className={hz}>hz</span>
      </div>
      <div className={currentTargetNote}>
        <span>{tunerOutput.closestNote?.character ?? "-"}</span>
        <span className={sharpOrFlat}>
          {tunerOutput.closestNote?.accidental}
        </span>
      </div>
      <Oscilloscope analyser={analyser} />
    </motion.div>
  );
};
