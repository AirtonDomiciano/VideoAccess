import type { AuthRepository } from "../application/auth-repository";
import type { AuthUser, SignInCredentials } from "../domain/auth-user";

const MOCK_AUTH_USER = {
  displayName: "Admin",
  id: "mock-admin",
  username: "admin",
} satisfies AuthUser;

const MOCK_AUTH_PASSWORD = "asd123";

export class MockAuthRepository implements AuthRepository {
  async signIn(credentials: SignInCredentials): Promise<AuthUser | null> {
    if (
      credentials.username === MOCK_AUTH_USER.username &&
      credentials.password === MOCK_AUTH_PASSWORD
    ) {
      return MOCK_AUTH_USER;
    }

    return null;
  }
}
