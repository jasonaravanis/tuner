import { blue, green } from "../../constants";
import { TunerOutput } from "../../types";
import { Circle } from "../circle";
import { Oscilloscope } from "../oscilloscope";
import { SvgGlow } from "../svg-glow";
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
  buttonScreenContainer,
  buttonRimContainer,
  buttonInnerRim,
  powerSymbolOn,
  powerSymbolOff,
  powerButton,
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
                      <SvgGlow />
                      {dotsXvalues.map((dot) => {
                        return (
                          <Circle
                            key={dot}
                            color={green}
                            cx={`${dot}%`}
                            cy="70%"
                          />
                        );
                      })}
                      <polygon
                        filter="url(#glow)"
                        fill={green}
                        points="275,125 280,115 285,125"
                      />
                      <Circle
                        color={blue}
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
      <div className={buttonRimContainer}>
        <div className={buttonInnerRim}>
          <div className={innerRimTwo}>
            <div className={screenContainer}>
              <div className={buttonScreenContainer}>
                <button
                  className={powerButton}
                  onClick={isTunerOn ? stopTuner : startTuner}
                >
                  <svg
                    viewBox="0 0 240 240"
                    xmlns="http://www.w3.org/2000/svg"
                    className={isTunerOn ? powerSymbolOn : powerSymbolOff}
                  >
                    <SvgGlow />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M120 76.9375C121.829 76.9375 123.312 78.4206 123.312 80.25V120C123.312 121.829 121.829 123.312 120 123.312C118.171 123.312 116.688 121.829 116.688 120V80.25C116.688 78.4206 118.171 76.9375 120 76.9375ZM94.2348 89.5502C95.5284 90.8438 95.5284 92.9412 94.2348 94.2348C80.0051 108.465 80.0051 131.535 94.2348 145.765C108.465 159.995 131.535 159.995 145.765 145.765C159.995 131.535 159.995 108.465 145.765 94.2348C144.472 92.9412 144.472 90.8438 145.765 89.5502C147.059 88.2566 149.156 88.2566 150.45 89.5502C167.267 106.367 167.267 133.633 150.45 150.45C133.633 167.267 106.367 167.267 89.5502 150.45C72.7333 133.633 72.7333 106.367 89.5502 89.5502C90.8438 88.2566 92.9412 88.2566 94.2348 89.5502Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      filter="url(#glow)"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
