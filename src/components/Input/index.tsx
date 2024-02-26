import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: ForwardedRef<HTMLInputElement>;
  label?: string;
  rounded?: boolean;
  bordered?: boolean;
}

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, rounded = true, bordered = true, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          styles.Input,
          { [styles["Input--rounded"]]: rounded },
          { [styles["Input--bordered"]]: bordered },
          className
        )}
      >
        <label className={styles.Input__label} htmlFor="">
          {label}
        </label>
        <input {...props} ref={ref} className={styles.Input__content} />
      </div>
    );
  }
);
