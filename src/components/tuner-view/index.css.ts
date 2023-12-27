import { style } from "@vanilla-extract/css";
import { blue, green, white } from "../../constants";

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
});

export const buttonContainer = style({
  width: "min(20vh, 20vw)",
  marginLeft: "10rem",
});

export const powerButton = style({
  transition: "all 0.5s ease",
  width: "100%",
  height: "100%",
  ":hover": {
    backgroundColor: `${blue}19`,
  },
});

const powerSymbol = style({
  width: "100%",
  height: "100%",
  transition: "all 0.5s ease",
});

export const powerSymbolOn = style([
  powerSymbol,
  {
    fill: green,
  },
]);

export const powerSymbolOff = style([
  powerSymbol,
  {
    fill: white,
    selectors: {
      "&:hover": {
        fill: blue,
      },
    },
  },
]);
