"use client";

import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./checkbox.module.css";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: ReactNode;
};

export function Checkbox({ className, disabled, id, label, ...props }: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? `checkbox-${generatedId}`;

  return (
    <div className={[styles.field, className].filter(Boolean).join(" ")}>
      <input
        {...props}
        className={styles.input}
        disabled={disabled}
        id={inputId}
        type="checkbox"
      />
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
}
