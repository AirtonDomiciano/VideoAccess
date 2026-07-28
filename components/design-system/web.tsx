import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";
import { Avatar, VideoAccessButton, cx } from "./primitives";

type NavItem = {
  href: string;
  label: string;
};

const defaultNavItems: NavItem[] = [
  { href: "#livro", label: "O Livro" },
  { href: "#videos", label: "Videos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function MarketingHeader({
  className,
  navItems = defaultNavItems,
}: HTMLAttributes<HTMLElement> & {
  navItems?: NavItem[];
}) {
  return (
    <header
      className={cx(
        "flex h-[72px] w-full items-center justify-between bg-va-bg-primary px-5 md:px-20",
        className,
      )}
    >
      <Link
        href="/"
        className="font-display text-lg italic leading-none text-va-text-primary md:text-[18px]"
      >
        Valeria Schuster
      </Link>
      <nav className="hidden items-center gap-8 text-sm text-va-text-secondary md:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-va-accent-primary">
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/portal"
        className="hidden h-[45px] items-center justify-center rounded-va-md border border-va-accent-hover bg-va-accent-primary px-6 text-[13px] font-semibold text-va-text-inverse transition hover:bg-va-accent-hover md:inline-flex"
      >
        Area do Aluno
      </Link>
      <button
        type="button"
        aria-label="Abrir menu"
        className="flex size-10 flex-col items-center justify-center gap-1.5 text-va-text-primary md:hidden"
      >
        <span className="h-0.5 w-5 rounded-full bg-current" />
        <span className="h-0.5 w-5 rounded-full bg-current" />
        <span className="h-0.5 w-5 rounded-full bg-current" />
      </button>
    </header>
  );
}

export function SectionHeader({
  className,
  kicker = "SECAO DESTAQUE",
  title = "Titulo da Secao",
  description = "Descricao complementar da secao com informacoes adicionais para o visitante.",
}: HTMLAttributes<HTMLDivElement> & {
  kicker?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className={cx("mx-auto flex max-w-[600px] flex-col items-center gap-3 text-center", className)}>
      <p className="font-display text-sm font-semibold leading-none tracking-[0.8em] text-va-accent-primary">
        {kicker}
      </p>
      <h2 className="font-serif text-5xl font-bold leading-[1.2] text-va-text-primary">
        {title}
      </h2>
      <p className="max-w-[500px] text-base leading-[1.6] text-va-text-tertiary">{description}</p>
    </div>
  );
}

export function VideoCard({
  className,
  title = "Como Reconectar Apos uma Crise",
  meta = "12:34 - Videoaula",
}: HTMLAttributes<HTMLElement> & {
  title?: string;
  meta?: string;
}) {
  return (
    <article className={cx("w-full max-w-[360px]", className)}>
      <div className="flex aspect-[1.8] items-center justify-center rounded-va-lg bg-va-surface-tan">
        <span className="flex size-14 items-center justify-center rounded-full bg-va-bg-white text-va-accent-primary shadow-[0_4px_12px_rgba(0,0,0,0.13)]">
          <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-current" />
        </span>
      </div>
      <div className="pt-3">
        <h3 className="font-serif text-lg font-semibold leading-tight text-va-text-secondary">{title}</h3>
        <p className="mt-1 font-ui text-xs text-va-text-tertiary">{meta}</p>
      </div>
    </article>
  );
}

export function TestimonialCard({
  className,
  quote = "O livro nos trouxe clareza. Paramos de tentar adivinhar e comecamos a ouvir de verdade.",
  author = "Mariana & Roberto",
}: HTMLAttributes<HTMLElement> & {
  quote?: string;
  author?: string;
}) {
  return (
    <article
      className={cx(
        "flex min-h-[240px] w-full max-w-[380px] flex-col justify-between rounded-va-lg bg-va-bg-white px-7 py-8 shadow-[0_8px_12px_rgba(59,32,15,0.02)]",
        className,
      )}
    >
      <p className="font-serif text-lg italic leading-[1.5] text-va-text-secondary">
        "{quote}"
      </p>
      <div className="mt-5 flex items-center gap-3">
        <Avatar size="sm" initials="MR" />
        <p className="text-sm font-semibold text-va-text-primary">{author}</p>
      </div>
    </article>
  );
}

export function FaqItem({
  className,
  question = "O que e o metodo REMAR?",
  children = "O metodo REMAR e uma metodologia pratica desenvolvida por Valeria Schuster baseada em quatro pilares fundamentais para casais.",
  open = true,
}: HTMLAttributes<HTMLDivElement> & {
  question?: string;
  open?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={cx("w-full max-w-[700px] border border-va-border-light bg-va-bg-white py-5", className)}>
      <div className="flex items-center justify-between gap-6 px-5">
        <h3 className="font-serif text-[22px] font-semibold text-va-text-primary">{question}</h3>
        <span className="text-2xl leading-none text-va-accent-primary">{open ? "-" : "+"}</span>
      </div>
      {open ? <div className="mt-3 max-w-[660px] px-5 text-[15px] leading-[1.6] text-va-text-tertiary">{children}</div> : null}
    </div>
  );
}

export function MarketingFooter({ className }: HTMLAttributes<HTMLElement>) {
  const links = ["O livro", "Videos exclusivos", "Sobre a Autora", "Depoimentos"];

  return (
    <footer
      className={cx(
        "flex flex-col gap-8 bg-va-dark-primary px-5 py-8 text-va-text-inverse md:px-20 md:py-12",
        className,
      )}
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div>
          <p className="text-sm font-bold">NAVEGACAO</p>
          <div className="mt-2 grid gap-2 text-sm text-va-surface-sand">
            {links.map((link) => (
              <a key={link} href="#" className="transition hover:text-va-text-inverse">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold">CONECTE-SE</p>
          <a
            href="mailto:contato@valeriaschuster.com.br"
            className="mt-2 block text-[13px] text-va-surface-sand"
          >
            contato@valeriaschuster.com.br
          </a>
        </div>
      </div>
      <p className="text-[13px] text-va-text-warm-gray">
        (c) 2025 Valeria Schuster. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export function WebShowcaseCard({
  className,
  children,
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <div className={cx("rounded-va-lg border border-va-border-lighter bg-va-bg-white p-6", className)}>
      {children}
      <div className="mt-6 flex gap-3">
        <VideoAccessButton size="sm">Acao primaria</VideoAccessButton>
        <VideoAccessButton size="sm" variant="outline">
          Secundaria
        </VideoAccessButton>
      </div>
    </div>
  );
}
