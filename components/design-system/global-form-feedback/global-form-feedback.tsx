import type { HTMLAttributes, ReactNode } from "react";
import styles from "./global-form-feedback.module.css";

type GlobalFormFeedbackProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  title?: ReactNode;
  variant: "error" | "loading";
};

export function GlobalFormFeedback({
  children,
  className,
  title,
  variant,
  ...props
}: GlobalFormFeedbackProps) {
  return (
    <div
      className={[styles.feedback, styles[variant], className].filter(Boolean).join(" ")}
      role={variant === "error" ? "alert" : "status"}
      {...props}
    >
      {title ? <p className={styles.title}>{title}</p> : null}
      <div className={styles.body}>
        <span className={styles.icon} aria-hidden="true" />
        <p className={styles.message}>{children}</p>
      </div>
    </div>
  );
}
