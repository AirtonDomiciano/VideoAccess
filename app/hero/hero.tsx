import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import styles from "./hero.module.css";

const avatars = [
  "/images/avatars/couple-1.png",
  "/images/avatars/couple-2.png",
  "/images/avatars/couple-3.png",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Navbar />

      <div className={styles.heroBody}>
        <Image
          src="/images/landing/hero-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBackground}
        />

        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <p className={styles.badge}>
              MÉTODO REMAR®
            </p>

            <div className={styles.titleGroup}>
              <h1 className={styles.title}>
                RELACIONAMENTOS.
              </h1>

              <p className={styles.subtitle}>
                UMA PROFISSÃO QUE EXIGE PREPARO
              </p>
            </div>

            <div className={styles.divider} />

            <p className={styles.lead}>
              Construa o relacionamento que vocês sempre sonharam...
            </p>

            <p className={styles.description}>
              Um método prático e transformador para casais que desejam viver um
              amor forte, leve e duradouro.
            </p>

            <div className={styles.mobileBook}>
              <Image
                src="/images/livro/relacionamentos-book.png"
                alt=""
                width={989}
                height={1020}
                priority
                className={styles.mobileBookImage}
              />
            </div>

            <div className={styles.ctaGroup}>
              <Link
                href="#livro"
                className={styles.primaryButton}
              >
                QUERO CONHECER -&gt;
              </Link>

              <Link
                href="#sobre"
                className={styles.secondaryButton}
              >
                SAIBA MAIS
              </Link>
            </div>

            <div className={styles.socialProof}>
              <div className={styles.avatars}>
                {avatars.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={24}
                    height={24}
                    className={styles.avatar}
                    style={{ marginLeft: index === 0 ? 0 : -8 }}
                  />
                ))}
              </div>

              <p className={styles.socialText}>
                + de 1.200 casais transformados
              </p>
            </div>
          </div>

          <div className={styles.heroBook}>
            <Image
              src="/images/livro/relacionamentos-book.png"
              alt="Capa do livro Relacionamentos. Uma profissão que exige preparo"
              width={989}
              height={1020}
              priority
              className={styles.bookImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
