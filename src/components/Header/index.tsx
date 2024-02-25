import logo from '../../assets/icons/logo.svg';
import { Icon, IconName } from '../Icon';
import styles from './styles.module.scss';

interface Props {

}

export const Header: React.FC<Props> = () => {
    return (<header className={styles.Header}>
        <img src={logo} alt='Rimac Logo' />
        <div className={styles.Header__contact}>
            <p className={styles.Header__text}>¡Compra por este medio!</p>
            <div>
                <p className={styles.Header__phone}>
                    <Icon name={IconName.phone} />
                    (01) 411 6001
                </p>
            </div>
        </div>
    </header>);
};