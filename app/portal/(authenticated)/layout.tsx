import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { hasStudentPortalSession } from "@/features/student-portal/auth/application/session";
import { PortalSidebar } from "@/features/student-portal/layout/components/portal-sidebar/portal-sidebar";

import styles from "./layout.module.css";

export default async function StudentPortalLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (!(await hasStudentPortalSession())) {
    redirect("/portal/login");
  }

  return (
    <div className={styles.portalShell}>
      <PortalSidebar />
      <main className={styles.portalMain}>{children}</main>
    </div>
  );
}
