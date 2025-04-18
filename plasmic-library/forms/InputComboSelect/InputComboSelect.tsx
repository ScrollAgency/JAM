import * as React from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import styles from "./InputComboSelect.module.css";

export interface InputComboSelectProps {
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

function InputComboSelect_(
  props: InputComboSelectProps,
  ref: HTMLElementRefOf<"div">
) {
  const { value, onChange, className } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      onChange?.(val);
    }
  };

  return (
    <div className={`${styles.wrapper} ${className}`} ref={ref}>
      <input
        type="number"
        min={1}
        max={20}
        value={value ?? ""}
        onChange={handleChange}
        className={styles.input}
      />
      <select
        className={styles.select}
        value={value ?? ""}
        onChange={handleChange}
      >
        {[...Array(20)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

const InputComboSelect = React.forwardRef(InputComboSelect_);
export default InputComboSelect;
