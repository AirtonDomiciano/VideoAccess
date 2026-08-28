import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const navItems = [
  { href: "#livro", label: "O livro" },
  { href: "#videos", label: "Vídeos exclusivos" },
  { href: "#sobre", label: "Sobre a Autora" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#perguntas", label: "Perguntas" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoName}>
            Valeria Schuster
          </span>
          <span className={styles.logoSubtitle}>
            Terapeuta e mentora
          </span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/portal"
          className={styles.portalLink}
        >
          Portal do aluno
        </Link>

        <button type="button" className={styles.menuButton} aria-label="Abrir menu">
          <Image src="/images/landing/mobile-menu.svg" alt="" width={24} height={24} className={styles.menuIcon} />
        </button>
      </div>
    </header>
  );
}
