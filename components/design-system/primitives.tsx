import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

type ClassValue = string | false | null | undefined;

export function cx(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "success";
type ButtonSize = "sm" | "md" | "lg" | "icon";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border-va-accent-hover bg-va-accent-primary text-va-text-inverse hover:bg-va-accent-hover",
  secondary:
    "border-va-border-light bg-va-surface-warm text-va-text-secondary hover:bg-va-surface-light-tan",
  outline:
    "border-va-border-default bg-transparent text-va-text-secondary hover:bg-va-bg-secondary",
  ghost:
    "border-transparent bg-transparent text-va-text-secondary hover:bg-va-bg-secondary",
  success:
    "border-va-success bg-va-success text-va-text-inverse hover:brightness-95",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-8 px-4 text-[13px]",
  md: "h-[45px] px-6 text-sm",
  lg: "h-[55px] px-8 text-[15px]",
  icon: "size-[45px] px-0 text-xl",
};

export type VideoAccessButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function VideoAccessButton({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: VideoAccessButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        "inline-flex shrink-0 items-center justify-center gap-2 rounded-va-md border font-semibold leading-none transition disabled:pointer-events-none disabled:opacity-45",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    />
  );
}

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export function TextField({ className, error, ...props }: TextFieldProps) {
  return (
    <input
      className={cx(
        "h-[45px] w-full rounded-va-md border bg-va-bg-white px-4 text-sm text-va-text-primary outline-none transition placeholder:text-va-text-warm-gray disabled:bg-va-surface-warm disabled:text-va-text-warm-gray",
        error
          ? "border-va-error focus:border-va-error"
          : "border-va-border-light focus:border-va-accent-primary",
        className,
      )}
      {...props}
    />
  );
}

type BadgeStatus =
  | "not-started"
  | "in-progress"
  | "playing"
  | "completed"
  | "locked"
  | "available";

const badgeStyles: Record<BadgeStatus, string> = {
  "not-started": "bg-va-bg-white text-va-text-tertiary ring-va-border-lighter",
  "in-progress": "bg-va-bg-tertiary text-va-accent-primary ring-va-border-lighter",
  playing: "bg-va-error-bg text-va-accent-primary ring-va-border-lighter",
  completed: "bg-va-success-bg text-va-success ring-va-success-bg",
  locked: "bg-va-surface-warm text-va-text-warm-gray ring-va-border-lighter opacity-80",
  available: "bg-va-success-bg text-va-success ring-va-success-bg",
};

export function Badge({
  className,
  status = "not-started",
  children,
}: HTMLAttributes<HTMLSpanElement> & {
  status?: BadgeStatus;
}) {
  return (
    <span
      className={cx(
        "inline-flex h-[22px] items-center rounded-va-md px-3 text-[12px] font-semibold leading-none ring-1",
        badgeStyles[status],
        className,
      )}
    >
      {children}
    </span>
  );
}

export type ContentStateValue =
  | "not-started"
  | "in-progress"
  | "playing"
  | "completed"
  | "locked"
  | "favorite"
  | "available"
  | "unavailable";

const contentStateConfig: Record<
  ContentStateValue,
  { label: string; className: string; dot: string }
> = {
  "not-started": {
    label: "Nao iniciado",
    className: "bg-va-bg-white text-va-text-tertiary",
    dot: "bg-va-surface-light-tan",
  },
  "in-progress": {
    label: "Em andamento",
    className: "bg-va-bg-tertiary text-va-accent-primary",
    dot: "bg-va-accent-primary",
  },
  playing: {
    label: "Reproduzindo",
    className: "bg-va-error-bg text-va-accent-primary",
    dot: "bg-va-accent-primary",
  },
  completed: {
    label: "Concluido",
    className: "bg-va-success-bg text-va-success",
    dot: "bg-va-success",
  },
  locked: {
    label: "Bloqueado",
    className: "bg-va-surface-warm text-va-text-warm-gray opacity-70",
    dot: "bg-va-text-warm-gray",
  },
  favorite: {
    label: "Favorito",
    className: "bg-va-error-bg text-va-accent-primary",
    dot: "bg-va-accent-primary",
  },
  available: {
    label: "Disponivel",
    className: "bg-va-success-bg text-va-success",
    dot: "bg-va-success",
  },
  unavailable: {
    label: "Indisponivel",
    className: "bg-va-surface-warm text-va-text-warm-gray opacity-70",
    dot: "bg-va-text-warm-gray",
  },
};

export function ContentStatePill({
  className,
  state = "not-started",
}: HTMLAttributes<HTMLDivElement> & {
  state?: ContentStateValue;
}) {
  const config = contentStateConfig[state];

  return (
    <div
      className={cx(
        "inline-flex h-10 items-center gap-3 rounded-va-lg border border-va-border-lighter px-4 text-[13px] font-semibold",
        config.className,
        className,
      )}
    >
      <span className={cx("size-2.5 rounded-full", config.dot)} />
      {config.label}
      {state === "favorite" ? " *" : null}
    </div>
  );
}

type AlertVariant = "success" | "error" | "warning" | "info";

const alertStyles: Record<AlertVariant, string> = {
  success: "border-va-success bg-va-success-bg text-va-success",
  error: "border-va-error bg-va-error-bg text-va-error",
  warning: "border-va-warning bg-va-surface-warm text-va-warning",
  info: "border-va-info bg-va-bg-white text-va-info",
};

export function Alert({
  className,
  variant = "info",
  title,
  children,
}: HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
  title: string;
}) {
  return (
    <div className={cx("rounded-va-lg border p-4", alertStyles[variant], className)}>
      <p className="text-sm font-semibold">{title}</p>
      {children ? (
        <div className="mt-1 text-sm leading-6 text-va-text-tertiary">{children}</div>
      ) : null}
    </div>
  );
}

export function Avatar({
  className,
  size = "md",
  initials = "VS",
}: HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
  initials?: string;
}) {
  return (
    <div
      className={cx(
        "inline-flex items-center justify-center rounded-full bg-va-surface-sand font-semibold text-va-text-secondary",
        size === "sm" && "size-8 text-[11px]",
        size === "md" && "size-10 text-xs",
        size === "lg" && "size-14 text-sm",
        className,
      )}
    >
      {initials}
    </div>
  );
}

export function ProgressBar({
  className,
  value = 0,
}: HTMLAttributes<HTMLDivElement> & {
  value?: number;
}) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cx("h-1.5 w-full overflow-hidden rounded-full bg-va-border-lighter", className)}>
      <div
        className={cx(
          "h-full rounded-full",
          clampedValue === 100 ? "bg-va-success" : "bg-va-accent-primary",
        )}
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
}

export function ModalShell({
  className,
  title = "Confirmar acao",
  children,
}: HTMLAttributes<HTMLDivElement> & {
  title?: string;
}) {
  return (
    <div className={cx("w-full max-w-[480px] rounded-va-lg bg-va-bg-white p-8 shadow-2xl", className)}>
      <h2 className="font-serif text-2xl font-bold leading-tight text-va-text-primary">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-va-text-tertiary">{children}</div>
      <div className="mt-6 flex justify-end gap-3">
        <VideoAccessButton variant="ghost" size="sm">
          Cancelar
        </VideoAccessButton>
        <VideoAccessButton size="sm">Confirmar</VideoAccessButton>
      </div>
    </div>
  );
}

export function LoadingSpinner({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx("flex items-center gap-3 text-sm font-medium text-va-text-tertiary", className)}>
      <span className="size-6 animate-spin rounded-full border-2 border-va-border-light border-t-va-accent-primary" />
      Carregando
    </div>
  );
}

export function EmptyState({
  className,
  title = "Nenhum conteudo encontrado",
  children,
}: HTMLAttributes<HTMLDivElement> & {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cx("rounded-va-lg border border-va-border-lighter bg-va-bg-white p-8 text-center", className)}>
      <p className="font-serif text-2xl font-semibold text-va-text-primary">{title}</p>
      {children ? <p className="mt-2 text-sm leading-6 text-va-text-tertiary">{children}</p> : null}
    </div>
  );
}

export function Tooltip({
  className,
  children = "Dica rapida",
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="tooltip"
      className={cx("inline-flex rounded-va-md bg-va-dark-primary px-3 py-2 text-xs text-va-text-inverse", className)}
    >
      {children}
    </div>
  );
}
