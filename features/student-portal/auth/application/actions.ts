"use server";

import { MockAuthRepository } from "../infrastructure/mock-auth-repository";
import {
  clearMockPortalSession,
  createMockPortalSession,
} from "../infrastructure/mock-session";
import type { SignInCredentials } from "./auth-repository";

type SignInResult =
  | {
      status: "authenticated";
    }
  | {
      status: "invalid_credentials";
    };

const authRepository = new MockAuthRepository();

export async function signInToStudentPortal(
  credentials: SignInCredentials,
): Promise<SignInResult> {
  const username = credentials.username.trim();

  if (!username || !credentials.password) {
    return { status: "invalid_credentials" };
  }

  const user = await authRepository.signIn({
    password: credentials.password,
    username,
  });

  if (!user) {
    return { status: "invalid_credentials" };
  }

  await createMockPortalSession();

  return { status: "authenticated" };
}

export async function signOutFromStudentPortal(): Promise<void> {
  await clearMockPortalSession();
}
