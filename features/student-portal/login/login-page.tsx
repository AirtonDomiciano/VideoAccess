import Image from "next/image";
import { MethodRemarIcon } from "@/components/ui";
import { LoginForm } from "./components/login-form/login-form";
import styles from "./login-page.module.css";

export function LoginPage() {
  return (
    <main className={styles.page}>
      <section className={styles.shell} aria-labelledby="portal-login-title">
        <div className={styles.visualPanel}>
          <Image
            alt=""
            className={styles.visualImage}
            fill
            priority
            sizes="(min-width: 1440px) 720px, 50vw"
            src="/images/portal/login/desktop-visual-panel.png"
          />
          <div className={styles.visualOverlay} aria-hidden="true" />

          <div className={styles.visualBrand}>
            <p className={styles.brandName}>Valeria Schuster</p>
            <p className={styles.brandRole}>Terapeuta &amp; Escritora</p>
          </div>

          <div className={styles.visualCopy}>
            <p className={styles.eyebrow}>Portal do Aluno</p>
            <p className={styles.visualTitle}>
              &quot;Relacionamentos. Uma Profissão que Exige Preparo&quot;
            </p>
            <p className={styles.visualText}>
              Acesse seu espaço exclusivo de estudos. Continue acompanhando seus
              capítulos, assista às videoaulas estruturadas e realize seus
              exercícios terapêuticos de onde parou.
            </p>
          </div>

          <div className={styles.mentor}>
            <Image
              alt=""
              className={styles.mentorAvatar}
              height={48}
              src="/images/portal/login/desktop-avatar.png"
              width={48}
            />
            <div className={styles.mentorText}>
              <p className={styles.mentorName}>Valeria Schuster</p>
              <p className={styles.mentorRole}>
                Sua mentora de desenvolvimento emocional
              </p>
            </div>
          </div>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.formContent}>
            <header className={styles.formHeader}>
              <div className={styles.portalLabel}>
                <MethodRemarIcon
                  alt=""
                  className={styles.portalIcon}
                  size={24}
                />
                <p className={styles.portalLabelText}>Portal do Aluno</p>
              </div>

              <div className={styles.headingGroup}>
                <h1 className={styles.title} id="portal-login-title">
                  Bem-vindo de volta
                </h1>
                <p className={styles.subtitle}>
                  Continue sua jornada pelo Método REMAR®.
                </p>
              </div>
            </header>

            <LoginForm />

            <ul className={styles.benefits} aria-label="Benefícios do portal">
              <li className={styles.benefit}>Capítulos liberados</li>
              <li className={styles.benefit}>Material de apoio</li>
              <li className={styles.benefit}>Progresso salvo</li>
            </ul>

            <p className={styles.copyright}>
              © 2025 Valeria Schuster · Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
