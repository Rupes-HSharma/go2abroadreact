"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { API_BASE } from "../lib/cms-api";

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

function assetUrl(value?: string) {
  if (!value) return "";
  if (/^(https?:|data:|blob:)/i.test(value)) return value;
  return value.startsWith("/") ? `${API_BASE}${value}` : value;
}

export function WebsiteSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<WebsiteSettings>({});

  useEffect(() => {
    fetch(`${API_BASE}/settings/website`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data) setSettings(data);
      })
      .catch(() => undefined);
  }, []);

  const value = useMemo(() => ({ settings, assetUrl }), [settings]);
  return <WebsiteSettingsContext.Provider value={value}>{children}</WebsiteSettingsContext.Provider>;
}

export function useWebsiteSettings() {
  return useContext(WebsiteSettingsContext);
}
