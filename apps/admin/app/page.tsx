"use client";
import { FormEvent, useEffect, useState } from "react";
import { AdminShell } from "../components/AdminShell";
import { useWebsiteSettings } from "../components/WebsiteSettingsProvider";
import { API_BASE } from "../lib/cms-api";

export default function AdminPage() {
  const { settings, assetUrl } = useWebsiteSettings();
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    () => setLoggedIn(Boolean(localStorage.getItem("admin_access_token"))),
    [],
  );
  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const f = new FormData(e.currentTarget);
    try {
      const r = await fetch(`${API_BASE}/auth/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: f.get("email"),
          password: f.get("password"),
        }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) return setError(d.message ?? "Login failed");
      localStorage.setItem("admin_access_token", d.accessToken);
      localStorage.setItem("admin_refresh_token", d.refreshToken);
      setLoggedIn(true);
    } catch {
      setError(`Cannot reach the API at ${API_BASE}. Start the API server and try again.`);
    }
  }
  if (!loggedIn)
    return (
      <main className="auth-shell">
        <section className="auth-card">
          {settings.logoUrl ? <img className="auth-logo" src={assetUrl(settings.logoUrl)} alt={`${settings.siteName || "Go2Abroad"} logo`} /> : <div className="brand-mark">G<span>2</span>A</div>}
          <p className="eyebrow">{settings.siteName || "GO2ABROAD"} ADMIN</p>
          <h1>Admin login</h1>
          <form onSubmit={login}>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Password
              <input name="password" type="password" required />
            </label>
            {error && <p className="error">{error}</p>}
            <button>Sign in</button>
          </form>
        </section>
      </main>
    );
  return (
    <AdminShell
      onLogout={() => {
        localStorage.clear();
        setLoggedIn(false);
      }}
    >
      <div className="body">
        <h2>Overview</h2>
        <p className="muted">
          Here is what is happening with your platform today.
        </p>
        <div className="stats">
          <Stat label="Total leads" value="1,284" />
          <Stat label="Active students" value="486" />
          <Stat label="Applications" value="238" />
          <Stat label="Conversion rate" value="18.6%" />
        </div>
        <div className="panels">
          <section className="panel">
            <h3>Lead overview</h3>
            <p className="muted">Enquiries received this month</p>
            <div className="chart" />
          </section>
          <section className="panel">
            <h3>Lead sources</h3>
            <p>
              Website forms <b>42%</b>
            </p>
            <p>
              WhatsApp <b>28%</b>
            </p>
            <p>
              Referrals <b>18%</b>
            </p>
          </section>
        </div>
        <section className="panel">
          <h3>Recent activity</h3>
          <p>Priya Sharma — Application moved to Offer received</p>
          <p>Arjun Mehta — New counselling enquiry received</p>
        </section>
      </div>
    </AdminShell>
  );
}
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <article className="stat">
      <p className="muted">{label}</p>
      <strong>{value}</strong>
      <small>↗ Growing this month</small>
    </article>
  );
}
