"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import { signInToStudentPortal } from "@/features/student-portal/auth/application/actions";

import {
  Button,
  Checkbox,
  GlobalFormFeedback,
  PasswordInput,
  TextInput,
} from "@/components/design-system";
import styles from "./login-form.module.css";

type LoginFormErrors = {
  password?: string;
  username?: string;
};

export function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [formFeedback, setFormFeedback] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
    setErrors((current) => ({ ...current, username: undefined }));
    setFormFeedback(undefined);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    setErrors((current) => ({ ...current, password: undefined }));
    setFormFeedback(undefined);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const nextErrors: LoginFormErrors = {};
    const normalizedUsername = username.trim();

    if (!normalizedUsername) {
      nextErrors.username = "Este campo é obrigatório.";
    }

    if (!password) {
      nextErrors.password = "Este campo é obrigatório.";
    }

    if (nextErrors.username || nextErrors.password) {
      setErrors(nextErrors);
      setFormFeedback(undefined);
      return;
    }

    setIsSubmitting(true);
    setFormFeedback(undefined);

    try {
      const result = await signInToStudentPortal({
        password,
        username: normalizedUsername,
      });

      if (result.status === "authenticated") {
        router.replace("/portal");
        router.refresh();
        return;
      }

      setFormFeedback("E-mail ou senha incorretos.");
      setIsSubmitting(false);
    } catch {
      setFormFeedback("E-mail ou senha incorretos.");
      setIsSubmitting(false);
    }
  }

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <TextInput
          autoComplete="username"
          className={styles.field}
          disabled={isSubmitting}
          error={errors.username}
          id="student-portal-email"
          label="E-mail de acesso"
          name="username"
          onChange={handleUsernameChange}
          placeholder="exemplo@email.com"
          required
          type="text"
          value={username}
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

      {formFeedback ? (
        <GlobalFormFeedback className={styles.feedback} variant="error">
          {formFeedback}
        </GlobalFormFeedback>
      ) : null}

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
