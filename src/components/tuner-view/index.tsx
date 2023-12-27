import { blueDot, greenDot } from "../../constants";
import { TunerOutput } from "../../types";
import { Circle } from "../circle";
import { Oscilloscope } from "../oscilloscope";
import {
  rim,
  container,
  innerRim,
  wallPaperTexture,
  wallpaper,
  innerRimTwo,
  screenContainer,
  screen,
  screenContentContainer,
  currentTargetNote,
  sharpOrFlat,
  frequency,
  tunerSVG,
  hz,
} from "./index.css";

const dotsXvalues = [10, 20, 30, 40, 50, 60, 70, 80, 90];

type Props = {
  error: string | null;
  isTunerOn: boolean;
  startTuner: () => Promise<void>;
  stopTuner: () => void;
  analyser: AnalyserNode | null;
  tunerOutput: TunerOutput;
};

export const TunerView = ({
  startTuner,
  stopTuner,
  isTunerOn,
  tunerOutput,
  analyser,
}: Props) => {
  return (
    <div className={container}>
      <svg className={wallpaper}>
        <filter id="noise">
          <feTurbulence
            baseFrequency="0.5"
            type="fractalNoise"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect className={wallPaperTexture} filter="url(#noise)" />
      </svg>
      <div className={rim}>
        <div className={innerRim}>
          <div className={innerRimTwo}>
            <div className={screenContainer}>
              <div className={screen}>
                {isTunerOn ? (
                  <div className={screenContentContainer}>
                    <svg className={tunerSVG} viewBox="0 0 560 140">
                      <filter
                        id="glow"
                        x="-100%"
                        y="-100%"
                        width="300%"
                        height="300%"
                      >
                        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      {dotsXvalues.map((dot) => {
                        return (
                          <Circle
                            key={dot}
                            color={greenDot}
                            cx={`${dot}%`}
                            cy="70%"
                          />
                        );
                      })}
                      <polygon
                        filter="url(#glow)"
                        fill={greenDot}
                        points="275,125 280,115 285,125"
                      />
                      <Circle
                        color={blueDot}
                        cx={`${tunerOutput.centGap + 50}%`}
                        cy="60%"
                      />
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
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isTunerOn ? (
        <button onClick={stopTuner}>Stop</button>
      ) : (
        <button onClick={startTuner}>Start</button>
      )}
    </div>
  );
};

// return (
//   <>

//     <Oscilloscope analyser={analyser} isActive={isTunerOn} />
//     <FrequencySampler analyser={analyser} />
//     {error && <p className="text-red-500">{error}</p>}
//   </>
// );
