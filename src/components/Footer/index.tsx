
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';
import logoLight from '../../assets/icons/logo-light.svg';

interface Props {

}

export const Footer: React.FC<Props> = () => {
    return (<footer className={styles.Footer}>
        <Link to='/'>
            <img src={logoLight} alt='Footer logo' />
        </Link>
        <hr className={styles.Footer__divider}  />
        <p className={styles.Footer__tradeMark}>© 2023 RIMAC Seguros y Reaseguros.</p>
    </footer>);
};