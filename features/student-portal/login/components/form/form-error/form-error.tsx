import type { HTMLAttributes, ReactNode } from "react";
import styles from "./form-error.module.css";

type FieldErrorProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};

export function FieldError({ children, className, ...props }: FieldErrorProps) {
  return (
    <p className={[styles.fieldError, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </p>
  );
}

type FormErrorProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function FormError({ children, className, ...props }: FormErrorProps) {
  return (
    <div
      className={[styles.formError, className].filter(Boolean).join(" ")}
      role="alert"
      {...props}
    >
      <span className={styles.formErrorIcon} aria-hidden="true" />
      <p className={styles.formErrorText}>{children}</p>
    </div>
  );
}
