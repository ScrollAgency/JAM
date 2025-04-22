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
  const [open, setOpen] = React.useState(false);

  const toggleDropdown = () => setOpen(!open);
  const closeDropdown = () => setOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number.parseInt(e.target.value, 10);
    if (!Number.isNaN(val)) {
      onChange?.(val);
    }
  };

  const handleSelect = (val: number) => {
    onChange?.(val);
    closeDropdown();
  };

  return (
    <div className={`${styles.wrapper} ${className}`} ref={ref}>
      <input
        type="number"
        value={value ?? ""}
        onChange={handleInputChange}
        className={styles.input}
      />
      <div className={styles.icon} onClick={toggleDropdown}>
        ▼
      </div>
      {open && (
        <div className={styles.dropdown}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={styles.option}
              onClick={() => handleSelect(i + 1)}
            >
              {i + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const InputComboSelect = React.forwardRef(InputComboSelect_);
export default InputComboSelect;
