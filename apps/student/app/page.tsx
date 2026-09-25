"use client";
import { FormEvent, useState } from "react";
import { useWebsiteBranding } from "./WebsiteBrandingProvider";

export default function StudentLogin() {
  const { branding, assetUrl } = useWebsiteBranding();
  const [error, setError] = useState(""); const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setLoading(true); const form = new FormData(event.currentTarget);
    try { const response = await fetch("http://localhost:4000/auth/student/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: form.get("email"), password: form.get("password") }) }); const data = await response.json(); if (!response.ok) throw new Error(data.message ?? "Login failed"); localStorage.setItem("student_access_token", data.accessToken); localStorage.setItem("student_refresh_token", data.refreshToken); window.location.reload(); } catch (err) { setError(err instanceof Error ? err.message : "Login failed"); } finally { setLoading(false); }
  }
  return <main className="auth-shell"><section className="card">{branding.logoUrl ? <img className="brand-logo" src={assetUrl(branding.logoUrl)} alt={`${branding.siteName || "Go2Abroad"} logo`} /> : <div className="brand-mark">G<span>2</span>A</div>}<p className="eyebrow">{branding.siteName || "GO2ABROAD"} STUDENT</p><h1>Student login</h1><p className="muted">Sign in to manage your applications.</p><form onSubmit={submit}><label>Email<input name="email" type="email" required autoComplete="email" /></label><label>Password<input name="password" type="password" required autoComplete="current-password" /></label>{error && <p className="error">{error}</p>}<button disabled={loading}>{loading ? "Signing in…" : "Sign in"}</button></form></section></main>;
}
