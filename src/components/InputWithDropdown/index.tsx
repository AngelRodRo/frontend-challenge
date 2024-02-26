import { forwardRef } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Input } from "../Input";

import styles from "./styles.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options: string[];
}

export const InputWithDropdown: React.FC<Props> = forwardRef<
  HTMLInputElement,
  Props
>(({ label, options, ...props }, ref) => {
  return (
    <div className={styles.InputWithDropdown}>
      <Dropdown controlClassName={styles.InputWithDropdown__dropdown} arrowClassName={styles.InputWithDropdown__dropdownArrow} value={options[0]} options={options} />
      <Input
        {...props}
        label={label}
        rounded={false}
        bordered={false}
        ref={ref}
      />
    </div>
  );
});
