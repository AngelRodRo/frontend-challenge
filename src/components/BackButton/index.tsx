import { BackArrow } from '../BackArrow';
import styles from './styles.module.scss';

interface Props  {
    onBack: () => void;
    text: string;
}

export const BackButton: React.FC<Props> = ({ text, onBack }) => {
    return (
        <div className={styles.backButton} onClick={onBack}>
            <BackArrow />
            <div>
                {text}
            </div>
        </div>
      );
};