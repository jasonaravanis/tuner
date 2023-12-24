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

export const DesignDemo = () => {
  const formula = (x: number, radius: number): string => {
    // center of circle x coordinate
    const a = 100;
    // center of circle y coordinate
    const b = -100;
    // scale x value by 2 as painting to svg with width equal to 2 * height
    const yCoord = Math.sqrt(Math.pow(radius, 2) - Math.pow(2 * x - a, 2)) + b;
    const y = Math.abs(yCoord);
    const result = `${y}%`;
    return result;
  };

  /*
  dotsXValues chosen to have an even spacing of dots like an analog clock face.
  Eyeballed this, but would be better to work it out mathemtatically.
  */
  const dotsXvalues = [12, 18, 27, 38, 50, 62, 73, 82, 88];

  return (
    <div className={container}>
      <svg className={wallpaper}>
        <filter id="noise">
          <feTurbulence baseFrequency="0.5" type="fractalNoise" numOctaves="3" stitchTiles="stitch" />
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
                      return <DialPixel color={greenDot} cx={`${dot}%`} cy={formula(dot, 80)} />;
                    })}
                    <DialPixel color={blueDot} cx="50%" cy={formula(50, 90)} />
                  </svg>
                  <div className={frequency}>
                    <span>164</span>
                    <span>hz</span>
                  </div>
                  <div className={currentTargetNote}>
                    <span>A</span>
                    <span className={sharpOrFlat}>#</span>
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
