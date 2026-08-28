"use client";

import type { FormEvent } from "react";

export function LoginForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: integrar autenticação do Portal do Aluno
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="student-portal-email">E-mail</label>
        <input
          id="student-portal-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div>
        <label htmlFor="student-portal-password">Senha</label>
        <input
          id="student-portal-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </div>

      <button type="submit">Entrar</button>
    </form>
  );
}
