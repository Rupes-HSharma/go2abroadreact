import { createContext, useContext, useEffect, useMemo, useState } from "react";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/$/, "");

const defaults = {
  siteName: "Go2Abroad",
  slogan: "Connecting Dreams",
  logoUrl: "/images/logo.png",
  logoLightUrl: "/images/logo-white.svg",
  faviconUrl: "/images/favicon.png",
  footerTitle: "BRAND & IDENTITY",
  footerDescription:
    "As a leading study abroad consultant, we help Indian students connect with trusted institutions across the globe and plan the career that follows — at zero consultation cost.",
  copyrightText: "© Copyright 2026 Go2Abroad. All Rights Reserved.",
  contactEmail: "info@go2abroad.co",
  contactPhone: "+91-7068821760",
  address: "B-395, 2nd Floor, Nehru Ground, Neelam Chowk, Faridabad, Haryana - 121001",
  officeHours: "Mon - Sat: 11:00 AM - 07:00 PM",
  socialLinks: {},
};

const WebsiteSettingsContext = createContext({
  settings: defaults,
  loading: true,
  assetUrl: (value) => value,
});

function assetUrl(value) {
  if (!value) return "";
  if (/^(https?:|data:|blob:)/i.test(value)) return value;
  if (value.startsWith("/uploads/")) return `${API_URL}${value}`;
  return `${import.meta.env.BASE_URL}${value.replace(/^\/+/, "")}`;
}

export function WebsiteSettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaults);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_URL}/settings/website`)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load website settings");
        return response.json();
      })
      .then((data) => {
        if (!cancelled && data) setSettings((current) => ({ ...current, ...data }));
      })
      .catch(() => {
        // Keep the built-in content available while the API is unavailable.
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    document.title = settings.seoTitle || settings.siteName || defaults.siteName;

    const setMeta = (selector, attributes, content) => {
      if (!content) return;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        Object.entries(attributes).forEach(([key, value]) => meta.setAttribute(key, value));
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta('meta[name="description"]', { name: "description" }, settings.seoDescription);
    setMeta('meta[name="keywords"]', { name: "keywords" }, settings.seoKeywords);
    setMeta('meta[property="og:title"]', { property: "og:title" }, settings.seoTitle || settings.siteName);
    setMeta('meta[property="og:description"]', { property: "og:description" }, settings.seoDescription);
    setMeta('meta[property="og:image"]', { property: "og:image" }, assetUrl(settings.ogImageUrl));

    if (settings.faviconUrl) {
      let favicon = document.querySelector('link[rel="icon"]');
      if (!favicon) {
        favicon = document.createElement("link");
        favicon.rel = "icon";
        document.head.appendChild(favicon);
      }
      favicon.href = assetUrl(settings.faviconUrl);
    }

    if (settings.primaryColor) document.documentElement.style.setProperty("--primary-color", settings.primaryColor);
    if (settings.secondaryColor) document.documentElement.style.setProperty("--secondary-color", settings.secondaryColor);
  }, [settings]);

  const value = useMemo(() => ({ settings, loading, assetUrl }), [settings, loading]);
  return <WebsiteSettingsContext.Provider value={value}>{children}</WebsiteSettingsContext.Provider>;
}

export function useWebsiteSettings() {
  return useContext(WebsiteSettingsContext);
}
