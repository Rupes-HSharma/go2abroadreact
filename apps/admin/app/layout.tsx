import type { Metadata } from "next";
import "./globals.css";
import "@go2abroad/page-builder/styles.css";
import { WebsiteSettingsProvider } from "../components/WebsiteSettingsProvider";

export const metadata: Metadata = { title: "Go2Abroad Admin" };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><WebsiteSettingsProvider>{children}</WebsiteSettingsProvider></body></html>;
}
