import { ReactNode } from "react";
import {
  rim,
  innerRim,
  innerRimTwo,
  screenContainer,
  screen,
} from "./index.css";

type Props = {
  children: ReactNode;
  boxShadowVariant: "primary" | "secondary";
};

export const ScreenBox = ({ children, boxShadowVariant }: Props) => {
  return (
    <div className={rim[boxShadowVariant]}>
      <div className={innerRim[boxShadowVariant]}>
        <div className={innerRimTwo}>
          <div className={screenContainer}>
            <div className={screen}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
