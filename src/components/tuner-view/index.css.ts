import { style } from "@vanilla-extract/css";
import { greenDot, greenDotGlow } from "../../constants";

export const container = style({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

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

export const rim = style({
  width: "min(80vh, 80vw)",
  aspectRatio: "1 / 1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(205deg, rgb(69 75 85) 0%, rgb(22 25 32) 100%)",
  borderRadius: "20%",
  boxShadow:
    "-40px 40px 30px 10px rgb(0, 0, 0, 0.4), -80px 80px 40px 10px rgb(0, 0, 0, 0.6), -120px 120px 80px 10px rgb(0, 0, 0, 0.6)",
});

export const innerRim = style({
  width: "97%",
  height: "97%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20%",
  boxShadow:
    "2px -2px 2px 0 rgb(108, 115, 129, 0.8), -30px 30px 12px 10px rgb(0, 0, 0, 0.5), inset -2px 2px 2px 0 rgb(108, 115, 129, 0.2), inset 2px -2px 2px 0px rgb(0, 0, 0, 0.3)",
});

export const innerRimTwo = style({
  width: "92%",
  height: "92%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20%",
  boxShadow:
    "-2px 2px 2px 0 rgba(108, 115, 129, 0.4), 2px -2px 1px 0px rgba(0, 0, 0, 0.2), inset -3px 3px 2px 1px rgba(0, 0, 0, 0.5)",
});

export const screenContainer = style({
  width: "90%",
  height: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const screen = style({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  background: "rgb(0, 0, 0, 0.5);",
  borderRadius: "20%",
  boxShadow:
    "-2px 2px 2px 0 rgba(108, 115, 129, 0.4), 2px -2px 1px 0px rgba(0, 0, 0, 0.2), inset -3px 3px 2px 1px rgba(0, 0, 0, 1), inset 2px -2px 1px 0px rgba(0, 0, 0, 1)",
});

export const screenContentContainer = style({
  position: "relative",
  width: "100%",
  height: "100%",
  containerType: "inline-size",
});

export const currentTargetNote = style({
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-30%)",
  color: greenDot,
  fontSize: "20cqw",
  fontFamily: "Bazaronite",
  textShadow: `0 0 10px ${greenDotGlow}, 0 0 25px ${greenDotGlow}`,
  marginBottom: "5%",
});

export const sharpOrFlat = style({
  fontSize: "10cqw",
});

export const tunerSVG = style({
  position: "absolute",
  width: "100%",
  height: "25%",
});

export const frequency = style({
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, 25%)",
  color: greenDot,
  fontSize: "5cqw",
  fontFamily: "Bazaronite",
  textShadow: `0 0 10px ${greenDotGlow}, 0 0 25px ${greenDotGlow}`,
});

export const hz = style({
  marginLeft: "0.5rem",
});
