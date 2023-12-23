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
} from "./index.css";

export const DesignDemo = () => {
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
                  <span className={currentTargetNote}>D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
