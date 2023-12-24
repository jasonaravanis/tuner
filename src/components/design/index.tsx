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
} from "./index.css";

export const DesignDemo = () => {
  const formula = (x: number): string => {
    // radius
    const r = 80;
    // center of circle x coordinate
    const a = 100;
    // center of circle y coordinate
    const b = -100;
    const yCoord = Math.sqrt(Math.pow(r, 2) - Math.pow(2 * x - a, 2)) + b;
    const y = Math.abs(yCoord);
    const result = `${y}%`;
    console.log("result", result);
    return result;
  };

  const dots = [12, 18, 27, 38, 50, 62, 73, 82, 88];

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
                    {dots.map((dot) => {
                      return <DialPixel cx={`${dot}%`} cy={formula(dot)} />;
                    })}
                    {/* {dots} */}
                    {/* <DialPixel cx="0%" cy={formula(100)} /> */}
                    {/* <DialPixel cx="0%" cy={formula(0)} />
                    <DialPixel cx="5%" cy={formula(5)} />
                    <DialPixel cx="10%" cy={formula(10)} />
                    <DialPixel cx="20%" cy={formula(20)} />
                    <DialPixel cx="30%" cy={formula(30)} />
                    <DialPixel cx="40%" cy={formula(40)} />
                    <DialPixel cx="50%" cy={formula(50)} />
                    <DialPixel cx="60%" cy={formula(60)} />
                    <DialPixel cx="70%" cy={formula(70)} />
                    <DialPixel cx="80%" cy={formula(80)} />
                    <DialPixel cx="90%" cy={formula(90)} />
                    <DialPixel cx="95%" cy={formula(95)} />
                    <DialPixel cx="100%" cy={formula(100)} /> */}
                  </svg>
                  {/* <span className={currentTargetNote}>A</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
