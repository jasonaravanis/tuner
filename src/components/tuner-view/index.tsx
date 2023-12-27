import { blueDot, greenDot } from "../../constants";
import { TunerOutput } from "../../types";
import { DialPixel } from "../dial-pixel";
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
}: Props) => {
  console.log("thing", tunerOutput.closestNote ?? "-");

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
                <div className={screenContentContainer}>
                  <svg className={tunerSVG}>
                    {dotsXvalues.map((dot) => {
                      return (
                        <DialPixel
                          key={dot}
                          color={greenDot}
                          cx={`${dot}%`}
                          cy="80%"
                        />
                      );
                    })}
                    <DialPixel
                      color={blueDot}
                      cx={`${tunerOutput.centGap + 50}%`}
                      cy="60%"
                    />
                  </svg>
                  <div className={frequency}>
                    <span>{Math.round(tunerOutput.frequency)}</span>
                    <span>hz</span>
                  </div>
                  <div className={currentTargetNote}>
                    <span>{tunerOutput.closestNote?.character ?? "-"}</span>
                    <span className={sharpOrFlat}>
                      {tunerOutput.closestNote?.accidental}
                    </span>
                  </div>
                </div>
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
