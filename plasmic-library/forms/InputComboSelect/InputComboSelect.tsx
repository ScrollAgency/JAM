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
        min={0}
        max={20}
        value={value ?? ""}
        onChange={handleChange}
        className={styles.input}
      />
      {/* icône visuelle */}
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#505050"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
      {/* select en superposition */}
      <select
        className={styles.select}
        value={value ?? ""}
        onChange={handleChange}
        size={5}
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
