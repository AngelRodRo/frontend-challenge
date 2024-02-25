import { forwardRef } from "react";
import { Input } from "../Input";
import styles from "./styles.module.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const InputWithDropdown: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({ label, ...props }, ref) => {
    return (<div className={styles.InputWithDropdown}>
        <select className={styles.InputWithDropdown__dropdown}>
            <option>DNI</option>
        </select>
        <Input {...props} label={label} rounded={false} bordered={false} ref={ref} />
    </div>);
});