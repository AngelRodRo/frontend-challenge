import cn from 'classnames';
import { forwardRef } from "react";

import styles from './styles.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const Checkbox: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({ label, name, className, ...props }, ref) => {
    return (
        <div className={className} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <input  type="checkbox" name={name} {...props}  ref={ref} className={cn(styles.Checkbox)}/>
            <label htmlFor={name}>{label}</label>
        </div>
    );
});