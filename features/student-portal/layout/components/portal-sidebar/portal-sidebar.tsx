"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

import { signOutFromStudentPortal } from "@/features/student-portal/auth/application/actions";

import styles from "./portal-sidebar.module.css";

type PortalNavItem = {
  href: string;
  icon: string;
  id: string;
  label: string;
};

const PORTAL_NAV_ITEMS = [
  {
    href: "/portal",
    icon: "/images/portal/sidebar/book-open.svg",
    id: "library",
    label: "Biblioteca",
  },
  {
    href: "/portal/meus-capitulos",
    icon: "/images/portal/sidebar/bookmark.svg",
    id: "chapters",
    label: "Meus capítulos",
  },
  {
    href: "/portal/favoritos",
    icon: "/images/portal/sidebar/star.svg",
    id: "favorites",
    label: "Favoritos",
  },
  {
    href: "/portal/exercicios",
    icon: "/images/portal/sidebar/clipboard.svg",
    id: "exercises",
    label: "Exercícios",
  },
  {
    href: "/portal/materiais",
    icon: "/images/portal/sidebar/download.svg",
    id: "materials",
    label: "Materiais",
  },
  {
    href: "/portal/sobre-a-autora",
    icon: "/images/portal/sidebar/user.svg",
    id: "author",
    label: "Sobre a autora",
  },
  {
    href: "/portal/configuracoes",
    icon: "/images/portal/sidebar/settings.svg",
    id: "settings",
    label: "Configurações",
  },
] satisfies PortalNavItem[];

function isRouteActive(pathname: string, href: string): boolean {
  if (href === "/portal") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PortalSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleSignOut() {
    startTransition(async () => {
      await signOutFromStudentPortal();
      router.replace("/portal/login");
      router.refresh();
    });
  }

  return (
    <aside className={styles.sidebar} aria-label="Portal do Aluno">
      <div className={styles.top}>
        <PortalSidebarAuthor />
        <PortalSidebarNavigation pathname={pathname} />
      </div>

      <button
        className={styles.logout}
        disabled={isPending}
        onClick={handleSignOut}
        type="button"
      >
        <Image
          alt=""
          aria-hidden="true"
          className={styles.itemIcon}
          height={18}
          src="/images/portal/sidebar/logout.svg"
          width={18}
        />
        <span className={styles.itemLabel}>Sair do Portal</span>
      </button>
    </aside>
  );
}

function PortalSidebarAuthor() {
  return (
    <div className={styles.author}>
      <Image
        alt="Foto de Valeria Schuster"
        className={styles.authorPhoto}
        height={56}
        src="/images/portal/sidebar/author-photo.png"
        width={56}
      />
      <div className={styles.authorText}>
        <p className={styles.authorName}>Valeria Schuster</p>
        <p className={styles.authorPortal}>Portal do Aluno</p>
      </div>
    </div>
  );
}

function PortalSidebarNavigation({ pathname }: { pathname: string }) {
  return (
    <nav aria-label="Navegação do Portal do Aluno" className={styles.nav}>
      <ul className={styles.navList}>
        {PORTAL_NAV_ITEMS.map((item) => (
          <PortalSidebarNavItem
            isActive={isRouteActive(pathname, item.href)}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </nav>
  );
}

function PortalSidebarNavItem({
  isActive,
  item,
}: {
  isActive: boolean;
  item: PortalNavItem;
}) {
  return (
    <li className={styles.navListItem}>
      <Link
        aria-current={isActive ? "page" : undefined}
        className={[styles.navLink, isActive ? styles.navLinkActive : undefined]
          .filter(Boolean)
          .join(" ")}
        href={item.href}
      >
        <Image
          alt=""
          aria-hidden="true"
          className={styles.itemIcon}
          height={18}
          src={item.icon}
          width={18}
        />
        <span className={styles.itemLabel}>{item.label}</span>
      </Link>
    </li>
  );
}
