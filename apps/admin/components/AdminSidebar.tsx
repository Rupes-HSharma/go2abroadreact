"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useWebsiteSettings } from "./WebsiteSettingsProvider";
import { cmsApi } from "../lib/cms-api";

export function AdminSidebar({ onLogout }: { onLogout: () => void }) {
  const pathname = usePathname();
  const { settings, assetUrl } = useWebsiteSettings();
  const [role, setRole] = useState<string>();
  const navigation = [
    ["⌂", "Overview", "/"],
    ["◉", "Leads", "/leads"],
    ["◎", "Students", "/students"],
    ["◇", "Universities", "/universities"],
    ["▤", "Courses", "/courses"],
    ["☆", "Reviews", "/reviews"],
    ["?", "FAQs", "/faqs"],
    ["✎", "Blog", "/blog"],
    ["♙", "Users", "/users"],
    ["▧", "Page builder", "/pages"],
    ["⚙", "Website settings", "/settings"],
  ] as const;
  useEffect(() => {
    void cmsApi<{ role: string }>("/auth/cms-session")
      .then((session) => setRole(session.role))
      .catch(() => setRole(undefined));
  }, []);
  const isAdmin = ["SUPER_ADMIN", "ADMIN", "CONTENT_MANAGER", "SEO_MANAGER", "EDITOR"].includes(role ?? "");
  const visibleNavigation = isAdmin
    ? navigation
    : navigation.filter(([, , href]) => href === "/" || href === "/leads" || href === "/students");
  return (
    <aside className="sidebar">
      <div className="logo">
        {settings.logoLightUrl || settings.logoUrl ? (
          <img
            className="admin-logo-image"
            src={assetUrl(settings.logoLightUrl || settings.logoUrl)}
            alt={`${settings.siteName || "Go2Abroad"} logo`}
          />
        ) : (
          <>
            G<span>2</span>A
          </>
        )}
      </div>
      <small>WORKSPACE</small>
      <nav>
        {visibleNavigation.map(([icon, label, href]) => (
          <Link
            className={
              (href === "/" ? pathname === href : pathname.startsWith(href))
                ? "active"
                : ""
            }
            href={href}
            key={href}
          >
            <span className="sidebar-nav-icon" aria-hidden="true">{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <button onClick={onLogout}>↪ Sign out</button>
    </aside>
  );
}
