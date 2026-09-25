import type { Metadata } from "next";
import "./globals.css";
import { WebsiteBrandingProvider } from "./WebsiteBrandingProvider";

export const metadata: Metadata = { title: "Go2Abroad Student Portal" };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><WebsiteBrandingProvider>{children}</WebsiteBrandingProvider></body></html>;
}
