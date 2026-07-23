"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:hidden bg-[#f2e4d1] border-b border-white/15 px-6 py-0">
      <div className="flex h-[72px] items-center justify-between">
        <div>
          <Link href="/" className="block text-sm font-serif uppercase tracking-[0.44em] text-[#2d2117] md:text-base">
            RELACIONAMENTOS
          </Link>
          <span className="block pt-1 text-[10px] uppercase tracking-[0.32em] text-[#5a4b3f] opacity-90">
            UMA PROFISSÃO QUE EXIGE PREPARO
          </span>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu mobile" : "Abrir menu mobile"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border border-[#d8c7b2] bg-white/90 text-[#2d2117] transition hover:bg-white"
        >
          <span className="h-[2px] w-5 bg-current rounded-full" />
          <span className="h-[2px] w-5 bg-current rounded-full" />
          <span className="h-[2px] w-5 bg-current rounded-full" />
        </button>
      </div>
    </header>
  );
}
