import { redirect } from "next/navigation";

import { hasStudentPortalSession } from "@/features/student-portal/auth/application/session";
import { LoginPage } from "@/features/student-portal/login/login-page";

export default async function PortalLoginPage() {
  if (await hasStudentPortalSession()) {
    redirect("/portal");
  }

  return <LoginPage />;
}
