"use client";

import { useId, type InputHTMLAttributes } from "react";
import { FieldError } from "../form-error/form-error";
import styles from "./text-input.module.css";

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  error?: string;
  label?: string;
  type?: "email" | "text";
};

export function TextInput({
  className,
  disabled,
  error,
  id,
  label,
  placeholder,
  required,
  type = "text",
  value,
  defaultValue,
  "aria-describedby": ariaDescribedBy,
  ...props
}: TextInputProps) {
  const generatedId = useId();
  const inputId = id ?? `text-input-${generatedId}`;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;
  const isFilled =
    typeof value === "string"
      ? value.length > 0
      : defaultValue !== undefined && String(defaultValue).length > 0;

  return (
    <div
      className={[styles.field, className].filter(Boolean).join(" ")}
      data-disabled={disabled ? "true" : undefined}
      data-error={error ? "true" : undefined}
      data-filled={isFilled ? "true" : undefined}
    >
      {label ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}

      <div className={styles.control}>
        <span className={styles.icon} aria-hidden="true" />
        <input
          {...props}
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
          className={styles.input}
          disabled={disabled}
          id={inputId}
          placeholder={placeholder ?? " "}
          required={required}
          type={type}
          value={value}
          defaultValue={defaultValue}
        />
      </div>

      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </div>
  );
}
