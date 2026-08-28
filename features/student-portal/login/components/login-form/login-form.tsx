"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button, Checkbox, PasswordInput, TextInput } from "../form";
import styles from "./login-form.module.css";

type LoginFormErrors = {
  email?: string;
  password?: string;
};

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    setErrors((current) => ({ ...current, email: undefined }));
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    setErrors((current) => ({ ...current, password: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: LoginFormErrors = {};
    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      nextErrors.email = "Este campo é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      nextErrors.email = "Por favor, insira um endereço de e-mail válido.";
    }

    if (!password) {
      nextErrors.password = "Este campo é obrigatório.";
    }

    if (nextErrors.email || nextErrors.password) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    // TODO: integrar autenticação do Portal do Aluno
    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 600);
  }

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <TextInput
          autoComplete="email"
          className={styles.field}
          disabled={isSubmitting}
          error={errors.email}
          id="student-portal-email"
          label="E-mail de acesso"
          name="email"
          onChange={handleEmailChange}
          placeholder="exemplo@email.com"
          required
          type="email"
          value={email}
        />

        <PasswordInput
          autoComplete="current-password"
          className={styles.field}
          disabled={isSubmitting}
          error={errors.password}
          id="student-portal-password"
          label="Senha"
          name="password"
          onChange={handlePasswordChange}
          placeholder="••••••••"
          required
          value={password}
        />
      </div>

      <div className={styles.options}>
        <Checkbox
          checked={remember}
          className={styles.remember}
          disabled={isSubmitting}
          label="Lembrar de mim"
          name="remember"
          onChange={(event) => setRemember(event.target.checked)}
        />
        <button className={styles.forgotPassword} type="button">
          Esqueceu sua senha?
        </button>
      </div>

      <Button
        className={styles.submit}
        elevated
        fullWidth
        loading={isSubmitting}
        loadingLabel="Entrando..."
        size="lg"
        type="submit"
      >
        Entrar no Portal
      </Button>
    </form>
  );
}
