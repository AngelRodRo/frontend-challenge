import cn from "classnames";

import styles from "./styles.module.scss";

export enum ButtonVariants {
  primary = "Primary",
  secondary = "Secondary",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  fullWidth?: boolean;
}

const variantsClassNamesDictionary: { [K in ButtonVariants]: string } = {
  [ButtonVariants.primary]: cn(styles.Button, styles["Button--primary"]),
  [ButtonVariants.secondary]: cn(styles.Button, styles["Button--secondary"]),
};

export const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariants.primary,
  fullWidth,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        variantsClassNamesDictionary[variant],
        { [styles["Button--fullWidth"]]: fullWidth },
        className
      )}
    />
  );
};
