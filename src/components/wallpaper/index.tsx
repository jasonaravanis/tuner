import { wallPaperTexture, wallpaper } from "./index.css";

export const Wallpaper = () => {
  return (
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
  );
};
