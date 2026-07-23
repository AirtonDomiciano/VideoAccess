import Image from "next/image";
import Link from "next/link";
import MobileHeader from "@/components/ui/MobileHeader";

const dashboardLinks = [
  {
    href: "/admin",
    label: "Painel",
    description: "Visão geral para administrar acessos e conteúdos.",
  },
  {
    href: "/admin/videos",
    label: "Vídeos",
    description: "Organize a biblioteca e gerencie aulas publicadas.",
  },
  {
    href: "/admin/accesses",
    label: "Acessos",
    description: "Crie links exclusivos e acompanhe permissões.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#10100f] text-white">
      <section className="relative isolate flex min-h-screen w-full overflow-hidden">
        <Image
          src="/hero-lake-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <MobileHeader />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,12,10,0.82)_0%,rgba(20,18,14,0.58)_42%,rgba(20,18,14,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#10100f] to-transparent" />

        <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.36em] text-white">
              VideoAccess
            </Link>
            <nav className="hidden items-center gap-8 text-sm font-medium text-white/78 md:flex">
              <Link href="/admin" className="transition hover:text-white">
                Painel
              </Link>
              <Link href="/admin/videos" className="transition hover:text-white">
                Vídeos
              </Link>
              <Link href="/admin/accesses" className="transition hover:text-white">
                Acessos
              </Link>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.58fr)]">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#f7d9ad]">
                Plataforma privada de vídeos
              </p>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Entregue aulas com acesso simples, seguro e controlado.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/82">
                O VideoAccess centraliza sua biblioteca de vídeos, cria links
                exclusivos para alunos e mantém a gestão de permissões em uma
                experiência direta.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/admin"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#3f7799] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_45px_rgba(21,52,73,0.34)] transition hover:bg-[#346b8c]"
                >
                  Acessar painel
                </Link>
                <Link
                  href="/admin/accesses"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/55 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/10"
                >
                  Gerar acesso
                </Link>
              </div>
            </div>

            <aside className="w-full max-w-md justify-self-start border border-white/18 bg-black/22 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.3)] backdrop-blur-md lg:justify-self-end">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7d9ad]">
                Páginas do VideoAccess
              </p>
              <div className="mt-6 grid gap-3">
                {dashboardLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group border border-white/14 bg-white/[0.07] p-4 transition hover:border-white/40 hover:bg-white/[0.11]"
                  >
                    <span className="flex items-center justify-between gap-5 text-base font-semibold text-white">
                      {item.label}
                      <span aria-hidden="true" className="transition group-hover:translate-x-1">
                        -&gt;
                      </span>
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-white/68">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
