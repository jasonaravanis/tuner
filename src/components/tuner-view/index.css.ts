import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10rem",
});

export const mainScreen = style({
  width: "min(80vh, 80vw)",
  minWidth: "150px",
});
