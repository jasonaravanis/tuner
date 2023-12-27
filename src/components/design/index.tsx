import { blueDot, greenDot } from "../../constants";
import { DialPixel } from "../dial-pixel";
import {
  rim,
  container,
  innerRim,
  wallPaperTexture,
  wallpaper,
  innerRimTwo,
  windowContainer,
  window,
  windowContentContainer,
  currentTargetNote,
  dialSVG,
  sharpOrFlat,
  frequency,
} from "./index.css";

const dotsXvalues = [10, 20, 30, 40, 50, 60, 70, 80, 90];

export const DesignDemo = () => {
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
            <div className={windowContainer}>
              <div className={window}>
                <div className={windowContentContainer}>
                  <svg className={dialSVG}>
                    {dotsXvalues.map((dot) => {
                      return (
                        <DialPixel
                          key={dot}
                          color={greenDot}
                          cx={`${dot}%`}
                          cy="25%"
                        />
                      );
                    })}
                    <DialPixel color={blueDot} cx="50%" cy="15%" />
                  </svg>
                  <div className={frequency}>
                    <span>164</span>
                    <span>hz</span>
                  </div>
                  <div className={currentTargetNote}>
                    <span>A</span>
                    {/* <span className={sharpOrFlat}>#</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
