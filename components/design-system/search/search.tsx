"use client";

import { useId, type InputHTMLAttributes } from "react";

import styles from "./search.module.css";

export type SearchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  error?: boolean;
};

export function Search({
  className,
  disabled,
  error,
  id,
  placeholder = "Pesquisar capítulo...",
  value,
  defaultValue,
  "aria-describedby": ariaDescribedBy,
  ...props
}: SearchProps) {
  const generatedId = useId();
  const inputId = id ?? `search-${generatedId}`;
  const isFilled =
    typeof value === "string"
      ? value.length > 0
      : defaultValue !== undefined && String(defaultValue).length > 0;

  return (
    <div
      className={[styles.search, className].filter(Boolean).join(" ")}
      data-disabled={disabled ? "true" : undefined}
      data-error={error ? "true" : undefined}
      data-filled={isFilled ? "true" : undefined}
    >
      <span className={styles.icon} aria-hidden="true" />
      <input
        {...props}
        aria-describedby={ariaDescribedBy}
        aria-invalid={error ? true : undefined}
        className={styles.input}
        disabled={disabled}
        id={inputId}
        placeholder={placeholder}
        type="search"
        value={value}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export const SearchField = Search;
