import React from 'react';
import styles from './styles.module.scss';

interface Props {
    text: string;
}

export const Badge: React.FC<Props> = ({ text }) =>{
    return (<div className={styles.Badge}>{text}</div>);
}