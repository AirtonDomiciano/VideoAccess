import Image from "next/image";

export default function BookSection() {
  return (
    <section id="livro" className="relative aspect-[1672/941] w-full overflow-hidden bg-va-bg-secondary">
      <Image
        src="/images/landing/secao-livro-fundo.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
    </section>
  );
}
