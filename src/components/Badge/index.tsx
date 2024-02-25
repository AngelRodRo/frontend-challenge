import cn from "classnames";
import React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  text: string | React.ReactNode;
}

export const Badge: React.FC<Props> = ({ text, className }) => {
  return <div className={cn(styles.Badge, className)}>{text}</div>;
};
