import { style, styleVariants } from "@vanilla-extract/css";

const rimBase = style({
  width: "100%",
  aspectRatio: "1 / 1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(205deg, rgb(69 75 85) 0%, rgb(22 25 32) 100%)",
  borderRadius: "20%",
});

export const rim = styleVariants({
  primary: [
    rimBase,
    {
      boxShadow:
        "-40px 40px 30px 10px rgb(0, 0, 0, 0.4), -80px 80px 40px 10px rgb(0, 0, 0, 0.6), -120px 120px 80px 10px rgb(0, 0, 0, 0.6)",
    },
  ],
  secondary: [
    rimBase,
    {
      boxShadow:
        "-20px 20px 630px 10px rgb(0, 0, 0, 0.4), -40px 40px 40px 10px rgb(0, 0, 0, 0.6), -80px 80px 80px 10px rgb(0, 0, 0, 0.6)",
    },
  ],
});

const innerRimBase = style({
  width: "97%",
  height: "97%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20%",
});

export const innerRim = styleVariants({
  primary: [
    innerRimBase,
    {
      boxShadow:
        "2px -2px 2px 0 rgb(108, 115, 129, 0.8), -30px 30px 12px 10px rgb(0, 0, 0, 0.5), inset -2px 2px 2px 0 rgb(108, 115, 129, 0.2), inset 2px -2px 2px 0px rgb(0, 0, 0, 0.3)",
    },
  ],
  secondary: [
    innerRimBase,
    {
      boxShadow:
        "2px -2px 2px 0 rgb(108, 115, 129, 0.8), -30px 30px 25px 10px rgb(0, 0, 0, 0.4), inset -2px 2px 2px 0 rgb(108, 115, 129, 0.2), inset 2px -2px 2px 0px rgb(0, 0, 0, 0.3)",
    },
  ],
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
