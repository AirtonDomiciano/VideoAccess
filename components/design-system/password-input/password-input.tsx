"use client";

import { useId, useState, type InputHTMLAttributes } from "react";
import { FieldError } from "../form-error/form-error";
import styles from "./password-input.module.css";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  error?: string;
  label?: string;
};

export function PasswordInput({
  className,
  disabled,
  error,
  id,
  label,
  placeholder,
  required,
  value,
  defaultValue,
  "aria-describedby": ariaDescribedBy,
  ...props
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);
  const generatedId = useId();
  const inputId = id ?? `password-input-${generatedId}`;
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
      data-visible={isVisible ? "true" : undefined}
    >
      {label ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}

      <div className={styles.control}>
        <span className={styles.lockIcon} aria-hidden="true" />
        <input
          {...props}
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
          className={styles.input}
          disabled={disabled}
          id={inputId}
          placeholder={placeholder ?? " "}
          required={required}
          type={isVisible ? "text" : "password"}
          value={value}
          defaultValue={defaultValue}
        />
        <button
          aria-label={isVisible ? "Ocultar senha" : "Mostrar senha"}
          aria-pressed={isVisible}
          className={styles.visibilityButton}
          disabled={disabled}
          onClick={() => setIsVisible((current) => !current)}
          type="button"
        >
          <span className={styles.visibilityIcon} aria-hidden="true" />
        </button>
      </div>

      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </div>
  );
}
