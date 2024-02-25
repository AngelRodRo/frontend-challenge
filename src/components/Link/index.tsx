import cn from "classnames";
import styles from "./styles.module.scss";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link: React.FC<Props> = ({ className, ...props }) => {
  return <a {...props} className={cn(styles.Link, className)} />;
};
