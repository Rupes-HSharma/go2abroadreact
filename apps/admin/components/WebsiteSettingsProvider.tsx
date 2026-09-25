"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { API_BASE, WEBSITE_BASE } from "../lib/cms-api";
import defaultLogo from "../../frontend/public/images/logo.png";
import defaultLightLogo from "../../frontend/public/images/logo-white.svg";

type WebsiteSettings = {
  siteName?: string;
  logoUrl?: string;
  logoLightUrl?: string;
};

type WebsiteSettingsContextValue = {
  settings: WebsiteSettings;
  assetUrl: (value?: string) => string;
};

const WebsiteSettingsContext = createContext<WebsiteSettingsContextValue>({
  settings: {},
  assetUrl: (value) => value ?? "",
});

function importedAssetUrl(asset: string | { src: string }) {
  return typeof asset === "string" ? asset : asset.src;
}

const defaultLogoUrl = importedAssetUrl(defaultLogo);
const defaultLightLogoUrl = importedAssetUrl(defaultLightLogo);

const defaultSettings: WebsiteSettings = {
  siteName: "Go2Abroad",
  logoUrl: defaultLogoUrl,
  logoLightUrl: defaultLightLogoUrl,
};

function assetUrl(value?: string) {
  if (!value) return "";
  if (/^(https?:|data:|blob:)/i.test(value)) return value;
  if (value.startsWith("/uploads/")) return `${API_BASE}${value}`;
  if (value === "/images/logo.svg" || value === "/images/logo.png") {
    return defaultLogoUrl;
  }
  if (value === "/images/logo-white.svg") return defaultLightLogoUrl;
  if (value.startsWith("/images/") || value.startsWith("/favicon")) {
    return `${WEBSITE_BASE}${value}`;
  }
  return value;
}

export function WebsiteSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<WebsiteSettings>(defaultSettings);

  useEffect(() => {
    fetch(`${API_BASE}/settings/website`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data) {
          setSettings((current) => ({
            ...current,
            ...data,
            siteName: data.siteName || current.siteName,
            logoUrl: data.logoUrl || current.logoUrl,
            logoLightUrl: data.logoLightUrl || current.logoLightUrl,
          }));
        }
      })
      .catch(() => undefined);
  }, []);

  const value = useMemo(() => ({ settings, assetUrl }), [settings]);
  return <WebsiteSettingsContext.Provider value={value}>{children}</WebsiteSettingsContext.Provider>;
}

export function useWebsiteSettings() {
  return useContext(WebsiteSettingsContext);
}
