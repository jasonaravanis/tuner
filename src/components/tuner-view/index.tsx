import { AnimatePresence } from "framer-motion";
import { TunerOutput } from "../../types";
import { container, mainScreen } from "./index.css";
import { Wallpaper } from "../wallpaper";
import { ScreenContent } from "../screen-content";
import { ScreenBox } from "../screen-box";
import { PowerButton } from "../power-button";

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
      <PowerButton
        isTunerOn={isTunerOn}
        startTuner={startTuner}
        stopTuner={stopTuner}
      />
    </div>
  );
};
