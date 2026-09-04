import type { AuthUser, SignInCredentials } from "../domain/auth-user";

export type { SignInCredentials };

export interface AuthRepository {
  signIn(credentials: SignInCredentials): Promise<AuthUser | null>;
}
