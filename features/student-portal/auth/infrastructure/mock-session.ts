import { cookies } from "next/headers";

const MOCK_SESSION_COOKIE_NAME = "portal_mock_session";
const MOCK_SESSION_COOKIE_VALUE = "true";
const MOCK_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

export async function createMockPortalSession(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(MOCK_SESSION_COOKIE_NAME, MOCK_SESSION_COOKIE_VALUE, {
    httpOnly: true,
    maxAge: MOCK_SESSION_MAX_AGE_SECONDS,
    path: "/portal",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function clearMockPortalSession(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(MOCK_SESSION_COOKIE_NAME, "", {
    maxAge: 0,
    path: "/portal",
  });
}

export async function hasMockPortalSession(): Promise<boolean> {
  const cookieStore = await cookies();

  return (
    cookieStore.get(MOCK_SESSION_COOKIE_NAME)?.value === MOCK_SESSION_COOKIE_VALUE
  );
}
