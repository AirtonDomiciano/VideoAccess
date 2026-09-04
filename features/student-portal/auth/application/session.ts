import { hasMockPortalSession } from "../infrastructure/mock-session";

export async function hasStudentPortalSession(): Promise<boolean> {
  return hasMockPortalSession();
}
