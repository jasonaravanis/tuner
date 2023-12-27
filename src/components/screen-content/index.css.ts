import { style } from "@vanilla-extract/css";
import { green, greenDotGlow } from "../../constants";

export const screenContentContainer = style({
  position: "relative",
  width: "100%",
  height: "100%",
  containerType: "inline-size",
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
  color: green,
  fontSize: "5cqw",
  fontFamily: "Bazaronite",
  textShadow: `0 0 10px ${greenDotGlow}, 0 0 25px ${greenDotGlow}`,
});

export const hz = style({
  marginLeft: "0.5rem",
});

export const currentTargetNote = style({
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-30%)",
  color: green,
  fontSize: "20cqw",
  fontFamily: "Bazaronite",
  textShadow: `0 0 10px ${greenDotGlow}, 0 0 25px ${greenDotGlow}`,
  marginBottom: "5%",
});

export const sharpOrFlat = style({
  fontSize: "10cqw",
});
