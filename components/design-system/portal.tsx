import type { HTMLAttributes } from "react";
import { ProgressBar, VideoAccessButton, cx } from "./primitives";

type SidebarItem = {
  label: string;
  active?: boolean;
  disabled?: boolean;
};

const portalItems: SidebarItem[] = [
  { label: "Meus capitulos", active: true },
  { label: "Biblioteca" },
  { label: "Favoritos" },
  { label: "Exercicios" },
  { label: "Materiais" },
  { label: "Sobre a autora" },
  { label: "Configuracoes" },
];

export function PortalSidebar({
  className,
  items = portalItems,
}: HTMLAttributes<HTMLElement> & {
  items?: SidebarItem[];
}) {
  return (
    <aside
      className={cx(
        "flex h-[600px] w-60 flex-col gap-1 border border-va-border-lighter bg-va-bg-white py-6",
        className,
      )}
    >
      <div className="px-6 pb-5">
        <p className="font-display text-sm italic text-va-text-primary">Valeria Schuster</p>
        <p className="mt-1 font-ui text-[9px] text-va-text-tertiary">Portal do Aluno</p>
      </div>
      {items.map((item) => (
        <SidebarNavItem key={item.label} active={item.active} disabled={item.disabled}>
          {item.label}
        </SidebarNavItem>
      ))}
    </aside>
  );
}

export function SidebarNavItem({
  className,
  active,
  disabled,
  children = "Item de Navegacao",
}: HTMLAttributes<HTMLDivElement> & {
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <div
      className={cx(
        "flex h-9 w-60 items-center px-6 text-[13px] transition",
        active && "border-2 border-va-accent-primary bg-va-bg-primary font-semibold text-va-text-primary",
        !active && "text-va-text-tertiary hover:bg-va-bg-primary hover:text-va-text-primary",
        disabled && "pointer-events-none opacity-40",
        className,
      )}
    >
      {children}
    </div>
  );
}

type LearningState = "default" | "in-progress" | "playing" | "completed" | "locked";

export function ChapterCard({
  className,
  state = "default",
  title = "Reconexao Emocional",
}: HTMLAttributes<HTMLElement> & {
  state?: Exclude<LearningState, "playing">;
  title?: string;
}) {
  const completed = state === "completed";
  const inProgress = state === "in-progress";
  const locked = state === "locked";

  return (
    <article
      className={cx(
        "flex w-full max-w-[400px] items-center gap-4 rounded-va-lg border border-va-border-lighter bg-va-bg-white p-4",
        locked && "opacity-60",
        className,
      )}
    >
      <div
        className={cx(
          "flex size-10 shrink-0 items-center justify-center rounded-va-lg font-ui text-sm font-bold",
          completed || inProgress
            ? "bg-va-accent-primary text-va-text-inverse"
            : "bg-va-border-lighter text-va-text-tertiary",
          completed && "bg-va-success",
        )}
      >
        01
      </div>
      <div>
        <h3 className="text-sm font-semibold text-va-text-primary">{title}</h3>
        <p className={cx("mt-1 font-ui text-xs", completed ? "text-va-success" : "text-va-text-tertiary")}>
          {locked ? "Bloqueado" : completed ? "Concluido" : inProgress ? "38% concluido" : "Nao iniciado"}
        </p>
      </div>
    </article>
  );
}

export function LessonCard({
  className,
  state = "default",
  title = "Aula 01: Introducao",
}: HTMLAttributes<HTMLElement> & {
  state?: Extract<LearningState, "default" | "playing" | "completed" | "locked">;
  title?: string;
}) {
  const completed = state === "completed";
  const locked = state === "locked";
  const playing = state === "playing";

  return (
    <article
      className={cx(
        "flex w-full max-w-[358px] items-center gap-3 rounded-va-lg border bg-va-bg-white py-3 pl-3 pr-4",
        playing ? "border-2 border-va-accent-primary" : "border-va-border-lighter",
        locked && "opacity-50",
        className,
      )}
    >
      <div className="h-12 w-16 shrink-0 rounded-va-sm bg-va-surface-tan" />
      <div>
        <h3 className="text-[13px] font-semibold text-va-text-primary">{title}</h3>
        <p className={cx("mt-1 font-ui text-[11px]", completed ? "text-va-success" : "text-va-text-tertiary")}>
          {locked ? "Bloqueado" : completed ? "8:30 - Concluido" : playing ? "8:30 - Reproduzindo" : "8:30 - Nao iniciado"}
        </p>
      </div>
    </article>
  );
}

export function StatIndicator({
  className,
  label = "Completos",
  value = "1 / 12",
}: HTMLAttributes<HTMLDivElement> & {
  label?: string;
  value?: string;
}) {
  return (
    <div className={cx("w-[140px] rounded-va-lg border border-va-border-lighter bg-va-bg-white px-5 py-4", className)}>
      <p className="font-ui text-[11px] text-va-text-tertiary">{label}</p>
      <p className="mt-1 font-serif text-2xl font-bold leading-none text-va-text-primary">{value}</p>
    </div>
  );
}

export function BottomNavigation({ className }: HTMLAttributes<HTMLElement>) {
  const items = ["Inicio", "Biblioteca", "Favoritos", "Perfil"];

  return (
    <nav
      className={cx(
        "flex h-14 w-full max-w-[390px] items-center justify-between border border-va-border-lighter bg-va-bg-white px-8",
        className,
      )}
    >
      {items.map((item, index) => (
        <a
          key={item}
          href="#"
          className={cx(
            "flex flex-col items-center gap-1 font-ui text-[10px]",
            index === 0 ? "text-va-accent-primary" : "text-va-text-warm-gray",
          )}
        >
          <span
            className={cx(
              "size-4 rounded-full",
              index === 0 ? "bg-va-accent-primary" : "bg-va-surface-sand",
            )}
          />
          {item}
        </a>
      ))}
    </nav>
  );
}

export function MaterialCard({
  className,
  type = "PDF",
}: HTMLAttributes<HTMLElement> & {
  type?: "PDF" | "Audio" | "Spreadsheet";
}) {
  const data = {
    PDF: ["Guia Pratico REMAR", "PDF - 2.4 MB"],
    Audio: ["Meditacao Guiada", "MP3 - 12:00"],
    Spreadsheet: ["Planilha de Exercicios", "XLSX - 180 KB"],
  }[type];

  return (
    <article
      className={cx(
        "flex w-full max-w-[358px] items-center justify-between rounded-va-lg border border-va-border-lighter bg-va-bg-white px-4 py-3.5",
        className,
      )}
    >
      <div>
        <h3 className="text-[13px] font-semibold text-va-text-primary">{data[0]}</h3>
        <p className="mt-1 font-ui text-[11px] text-va-text-tertiary">{data[1]}</p>
      </div>
      <span className="flex size-8 items-center justify-center rounded-va-md bg-va-surface-warm text-sm font-bold text-va-accent-primary">
        v
      </span>
    </article>
  );
}

export function PlayerControls({ className, progress = 38 }: HTMLAttributes<HTMLDivElement> & { progress?: number }) {
  return (
    <div className={cx("w-full max-w-[358px] rounded-va-lg bg-va-dark-bg px-5 py-4", className)}>
      <div className="flex items-center gap-2">
        <p className="font-ui text-[11px] text-va-surface-sand">3:42</p>
        <ProgressBar className="h-1 bg-va-text-tertiary" value={progress} />
        <p className="font-ui text-[11px] text-va-surface-sand">8:30</p>
      </div>
      <div className="mt-3 flex h-11 items-center gap-3">
        <button type="button" aria-label="Voltar" className="size-5 rounded-full bg-va-text-warm-gray" />
        <button type="button" aria-label="Reproduzir" className="size-9 rounded-full bg-va-bg-white" />
        <button type="button" aria-label="Avancar" className="size-5 rounded-full bg-va-text-warm-gray" />
      </div>
    </div>
  );
}

export function ExerciseField({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx("w-full max-w-[358px] rounded-va-lg border border-va-border-light bg-va-bg-white p-4", className)}>
      <h3 className="text-sm font-semibold text-va-text-primary">Exercicio 1: Escuta Ativa</h3>
      <p className="mt-2 text-[13px] leading-5 text-va-text-tertiary">
        Descreva um momento recente em que voce poderia ter praticado a escuta ativa.
      </p>
      <textarea
        className="mt-3 h-20 w-full resize-none rounded-va-md border border-va-border-lighter bg-va-bg-primary p-3 text-[13px] text-va-text-primary outline-none placeholder:text-va-text-warm-gray focus:border-va-accent-primary"
        placeholder="Escreva sua resposta aqui..."
      />
    </div>
  );
}

export function MarkCompleteButton() {
  return <VideoAccessButton variant="success">Marcar como concluido</VideoAccessButton>;
}

export function ContinueWatchingButton() {
  return <VideoAccessButton>Continuar assistindo</VideoAccessButton>;
}
