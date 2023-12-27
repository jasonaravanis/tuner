import { AnimatePresence } from "framer-motion";
import { TunerOutput } from "../../types";
import { SvgGlow } from "../svg-glow";
import {
  container,
  powerSymbolOn,
  powerSymbolOff,
  powerButton,
  mainScreen,
  buttonContainer,
} from "./index.css";
import { Wallpaper } from "../wallpaper";
import { ScreenContent } from "../screen-content";
import { ScreenBox } from "../screen-box";

type Props = {
  error: string | null;
  isTunerOn: boolean;
  startTuner: () => Promise<void>;
  stopTuner: () => void;
  analyser: AnalyserNode | null;
  tunerOutput: TunerOutput;
};

export const TunerView = ({
  startTuner,
  stopTuner,
  isTunerOn,
  tunerOutput,
  analyser,
}: Props) => {
  return (
    <div className={container}>
      <Wallpaper />
      <div className={mainScreen}>
        <ScreenBox boxShadowVariant="primary">
          <AnimatePresence>
            {isTunerOn ? (
              <ScreenContent tunerOutput={tunerOutput} analyser={analyser} />
            ) : null}
          </AnimatePresence>
        </ScreenBox>
      </div>
      <div className={buttonContainer}>
        <ScreenBox boxShadowVariant="secondary">
          <button
            className={powerButton}
            onClick={isTunerOn ? stopTuner : startTuner}
          >
            <svg
              viewBox="0 0 240 240"
              xmlns="http://www.w3.org/2000/svg"
              className={isTunerOn ? powerSymbolOn : powerSymbolOff}
            >
              <SvgGlow />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M120 76.9375C121.829 76.9375 123.312 78.4206 123.312 80.25V120C123.312 121.829 121.829 123.312 120 123.312C118.171 123.312 116.688 121.829 116.688 120V80.25C116.688 78.4206 118.171 76.9375 120 76.9375ZM94.2348 89.5502C95.5284 90.8438 95.5284 92.9412 94.2348 94.2348C80.0051 108.465 80.0051 131.535 94.2348 145.765C108.465 159.995 131.535 159.995 145.765 145.765C159.995 131.535 159.995 108.465 145.765 94.2348C144.472 92.9412 144.472 90.8438 145.765 89.5502C147.059 88.2566 149.156 88.2566 150.45 89.5502C167.267 106.367 167.267 133.633 150.45 150.45C133.633 167.267 106.367 167.267 89.5502 150.45C72.7333 133.633 72.7333 106.367 89.5502 89.5502C90.8438 88.2566 92.9412 88.2566 94.2348 89.5502Z"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
              />
            </svg>
          </button>
        </ScreenBox>
      </div>
    </div>
  );
};
