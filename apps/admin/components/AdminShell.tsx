"use client";
import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";
import { signOut } from "../lib/cms-api";

type AdminShellProps = {
  children: React.ReactNode;
  title?: string;
  onLogout?: () => void;
};

export function AdminShell({ children, title, onLogout = () => void signOut() }: AdminShellProps) {
  return (
    <main className="dashboard">
      <AdminSidebar onLogout={onLogout} />
      <section className="content">
        <AdminHeader title={title} />
        {children}
      </section>
    </main>
  );
}
