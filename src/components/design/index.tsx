import { container, wallpaper } from "./index.css";

export const DesignDemo = () => {
  return (
    <svg className={container}>
      <filter id="noise">
        <feTurbulence
          baseFrequency="0.5"
          type="fractalNoise"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect className={wallpaper} filter="url(#noise)" />
    </svg>
  );
};
