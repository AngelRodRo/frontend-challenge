import cn from "classnames";
import { useCallback } from "react";
import styles from "./styles.module.scss";

export interface Step<T = string> {
  index: number;
  text: string;
  path: T;
  disabled?: boolean;
}

interface Props {
  steps: Step[];
  activeIndex: number;
  className: string;
  onStepSelected: (path: string) => void;
}

interface DotProps extends Omit<Step, "path"> {
  active?: boolean;
  className?: string;

  onClick: () => void;
}

const Dot: React.FC<DotProps> = ({
  index,
  text,
  active,
  disabled,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    if (!disabled) {
      return onClick();
    }
  }, [disabled, onClick]);

  return (
    <div
      onClick={handleClick}
      className={cn(styles.Breadcrumb__dot, {
        [styles["Breadcrumb__dot--active"]]: !disabled && active,
      })}
    >
      <div
        className={cn(styles.Breadcrumb__number, {
          [styles["Breadcrumb__number--active"]]: active,
        })}
      >
        {index}
      </div>
      <div className={styles.Breadcrumb__dotText}>{text}</div>
    </div>
  );
};

export const Breadcrumb: React.FC<Props> = ({
  steps,
  activeIndex,
  className,
  onStepSelected,
}) => {
  return (
    <div className={cn(styles.Breadcrumb, className)}>
      {steps.map((step, idx) => (
        <>
          <Dot
            index={step.index + 1}
            active={activeIndex === step.index}
            text={step.text}
            onClick={() => onStepSelected(step.path)}
            disabled={step.disabled}
          />
          {idx !== steps.length - 1 && (
            <div
              style={{
                borderStyle: "dashed",
                borderWidth: 0.75,
                width: 30,
                height: 0,
                borderColor: "#4F4FFF",
              }}
            ></div>
          )}
        </>
      ))}
    </div>
  );
};
