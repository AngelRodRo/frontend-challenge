import cn from "classnames";
import { forwardRef } from "react";

import styles from "./styles.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, className, ...props }, ref) => {
    return (
      <div
        className={className}
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        <input
          type="checkbox"
          {...props}
          className={cn(styles.Checkbox)}
          ref={ref}
        />
        <label>{label}</label>
      </div>
    );
  }
);
