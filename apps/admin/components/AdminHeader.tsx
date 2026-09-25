import { useWebsiteSettings } from "./WebsiteSettingsProvider";

export function AdminHeader({ title = "Good morning, Admin" }: { title?: string }) {
  const { settings } = useWebsiteSettings();
  return <header><div><p className="eyebrow">{settings.siteName || "GO2ABROAD"} ADMIN</p><h1>{title}</h1></div><div className="avatar">GA</div></header>;
}
