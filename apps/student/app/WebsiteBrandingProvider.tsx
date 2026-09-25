"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000").replace(/\/$/, "");

type Branding = { siteName?: string; logoUrl?: string; logoLightUrl?: string };
const BrandingContext = createContext<{ branding: Branding; assetUrl: (value?: string) => string }>({
  branding: {},
  assetUrl: (value) => value ?? "",
});

function assetUrl(value?: string) {
  if (!value) return "";
  if (/^(https?:|data:|blob:)/i.test(value)) return value;
  return value.startsWith("/") ? `${API_BASE}${value}` : value;
}

export function WebsiteBrandingProvider({ children }: { children: React.ReactNode }) {
  const [branding, setBranding] = useState<Branding>({});

  useEffect(() => {
    fetch(`${API_BASE}/settings/website`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data) setBranding(data);
      })
      .catch(() => undefined);
  }, []);

  const value = useMemo(() => ({ branding, assetUrl }), [branding]);
  return <BrandingContext.Provider value={value}>{children}</BrandingContext.Provider>;
}

export function useWebsiteBranding() {
  return useContext(BrandingContext);
}
