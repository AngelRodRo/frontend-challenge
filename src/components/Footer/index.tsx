
import styles from './styles.module.scss';

import logoLight from '../../assets/icons/logo-light.svg';

interface Props {

}

export const Footer: React.FC<Props> = () => {
    return (<footer className={styles.Footer}>
        <img src={logoLight} alt='Footer logo' />
        <hr className={styles.Footer__divider}  />
        <p className={styles.Footer__tradeMark}>© 2023 RIMAC Seguros y Reaseguros.</p>
    </footer>);
};