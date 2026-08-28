"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  elevated?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  loadingLabel?: ReactNode;
  size?: "md" | "lg";
};

export function Button({
  children,
  className,
  disabled,
  elevated,
  fullWidth,
  loading,
  loadingLabel = "Entrando...",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      aria-busy={loading ? true : undefined}
      className={[
        styles.button,
        size === "lg" ? styles.large : undefined,
        elevated ? styles.elevated : undefined,
        fullWidth ? styles.fullWidth : undefined,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={isDisabled}
      type={type}
    >
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      <span className={styles.label}>{loading ? loadingLabel : children}</span>
    </button>
  );
}
