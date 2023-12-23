import { style } from "@vanilla-extract/css";

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
  background: "linear-gradient(205deg, rgb(238 233 245) 0%, rgb(30 34 42) 100%)",
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
  borderRadius: "50%",
  boxShadow:
    "-40px 40px 30px 10px rgb(0, 0, 0, 0.4), -80px 80px 40px 10px rgb(0, 0, 0, 0.6), -120px 120px 80px 10px rgb(0, 0, 0, 0.6)",
});

export const innerRim = style({
  width: "97%",
  height: "97%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  boxShadow:
    "2px -2px 2px 0 rgb(108, 115, 129, 0.8), -30px 30px 12px 10px rgb(0, 0, 0, 0.5), inset -2px 2px 2px 0 rgb(108, 115, 129, 0.2), inset 2px -2px 2px 0px rgb(0, 0, 0, 0.3)",
});

export const innerRimTwo = style({
  width: "92%",
  height: "92%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: "50%",
  boxShadow:
    "-2px 2px 2px 0 rgba(108, 115, 129, 0.4), 2px -2px 1px 0px rgba(0, 0, 0, 0.2), inset -3px 3px 2px 1px rgba(0, 0, 0, 0.5)",
});

export const windowContainer = style({
  marginTop: "5%",
  width: "90%",
  height: "45%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  borderRadius: "20px",
  overflow: "hidden",
});

export const window = style({
  width: "100%",
  height: "200%",
  background: "rgb(0, 0, 0, 0.5);",
  borderRadius: "50%",
  boxShadow:
    "-2px 2px 2px 0 rgba(108, 115, 129, 0.4), 2px -2px 1px 0px rgba(0, 0, 0, 0.2), inset -3px 3px 2px 1px rgba(0, 0, 0, 1), inset 2px -2px 1px 0px rgba(0, 0, 0, 1)",
});

export const windowContentContainer = style({
  width: "100%",
  height: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "lightseagreen",
  containerType: "inline-size",
});

const color = "#04E762";
const glowColor = "#03C956";

export const currentTargetNote = style({
  color: color,
  fontSize: "25cqw",
  fontFamily: "Bazaronite",
  textShadow: `0 0 10px ${glowColor}, 0 0 25px ${glowColor}`,
  textAlign: "center",
  marginTop: "20cqw",
  marginLeft: "6cqw",
});
