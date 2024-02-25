import cn from "classnames";
import styles from "./styles.module.scss";

interface Props {
  onClick?: () => void;
}

export const BackArrow: React.FC<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.backIcon}>
      <div className={styles.arrowWrap}>
        <span className={cn(styles.arrowPart, styles.arrowPart1)}></span>
        <span className={cn(styles.arrowPart, styles.arrowPart2)}></span>
      </div>
    </div>
  );
};
