import { style } from "@vanilla-extract/css";
export const wallpaper = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(205deg, rgb(238 233 245) 0%, rgb(30 34 42) 100%)",
  zIndex: -1,
});

export const wallPaperTexture = style({
  opacity: 0.1,
  width: "100%",
  height: "100%",
});
