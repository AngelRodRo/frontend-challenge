import cn from "classnames";

import ProgressBar from "@ramonak/react-progress-bar";
import { useMemo } from "react";
import { BackArrow } from "../BackArrow";
import { Step } from "../Breadcrumb";
import styles from "./styles.module.scss";

interface Props {
  className: string;
  activeIndex: number;
  steps: Step[];
  onBack: () => void;
}

export const StepperProgress: React.FC<Props> = ({
  className,
  steps,
  activeIndex,
  onBack,
}) => {
  const currentProgress = useMemo(() => {
    return ((activeIndex + 1) / steps.length) * 100;
  }, [activeIndex, steps.length]);

  return (
    <div className={cn(className, styles.StepperProgress)}>
      <BackArrow onClick={onBack} />
      <div>
        Paso {activeIndex + 1} de {steps.length}
      </div>
      <ProgressBar
        bgColor="#4F4FFF"
        width="215px"
        height="10px"
        completed={currentProgress}
        isLabelVisible={false}
      />
    </div>
  );
};
