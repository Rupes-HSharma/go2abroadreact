"use client";
import { FormEvent, useEffect, useState } from "react";
import { AdminShell } from "../../components/AdminShell";

type Settings = Record<string, string>;
const fields = {
  branding: [
    ["siteName", "Site name"],
    ["slogan", "Slogan"],
    ["logoUrl", "Logo URL"],
    ["logoLightUrl", "Light logo URL"],
    ["faviconUrl", "Favicon URL"],
  ],
  seo: [
    ["seoTitle", "SEO title"],
    ["seoDescription", "SEO description"],
    ["seoKeywords", "SEO keywords"],
    ["ogImageUrl", "Social image URL"],
  ],
  contact: [
    ["contactEmail", "Contact email"],
    ["contactPhone", "Contact phone"],
    ["whatsappNumber", "WhatsApp number"],
    ["address", "Address"],
    ["officeHours", "Office hours"],
    ["googleMapsUrl", "Google Maps URL"],
  ],
  footer: [
    ["footerTitle", "Footer title"],
    ["footerDescription", "Footer description"],
    ["copyrightText", "Copyright text"],
    ["privacyPolicyUrl", "Privacy policy URL"],
    ["termsUrl", "Terms URL"],
  ],
} as const;

export default function WebsiteSettingsPage() {
  const [values, setValues] = useState<Settings>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/settings/website")
      .then(async (r) => {
        if (!r.ok) throw new Error("Unable to load settings");
        const data = await r.json();
        setValues({
          ...data,
          socialLinks: JSON.stringify(data.socialLinks ?? {}, null, 2),
        });
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);
  function change(key: string, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }
  async function uploadImage(key: string, file?: File) {
    if (!file) return; setUploading(key); setError(""); const form = new FormData(); form.append("file", file);
    try { const response = await fetch("http://localhost:4000/settings/website/upload", { method: "POST", body: form }); const data = await response.json(); if (!response.ok) throw new Error(data.message ?? "Upload failed"); change(key, data.url); } catch (e) { setError(e instanceof Error ? e.message : "Upload failed"); } finally { setUploading(""); }
  }
  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");
    const { socialLinks, ...rest } = values;
    let social: Record<string, string>;
    try {
      social = JSON.parse(socialLinks || "{}");
    } catch {
      setSaving(false);
      setError("Social links must contain valid JSON.");
      return;
    }
    try {
      const response = await fetch("http://localhost:4000/settings/website", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...rest, socialLinks: social }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message ?? "Unable to save settings");
      }
      setMessage("Website settings saved successfully.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to save settings");
    } finally {
      setSaving(false);
    }
  }
  async function remove() {
    if (!window.confirm("Delete website settings?")) return;
    const response = await fetch("http://localhost:4000/settings/website", { method: "DELETE" });
    if (!response.ok) return setError("Unable to delete settings");
    setValues({}); setMessage("Website settings deleted.");
  }
  return (
    <AdminShell
      title="Website settings"
      onLogout={() => {
        localStorage.clear();
        window.location.href = "/";
      }}
    >
      <div className="body settings-body">
        <p className="muted">
          Manage branding, SEO, contact details, social links, and footer
          content.
        </p>
        {loading ? (
          <p>Loading settings…</p>
        ) : (
          <form className="settings-form" onSubmit={save}>
            {Object.entries(fields).map(([section, sectionFields]) => (
              <section className="panel settings-section" key={section}>
                <h2>{section[0].toUpperCase() + section.slice(1)}</h2>
                <div className="form-grid">
                  {sectionFields.map(([key, label]) => (
                    <label key={key}>
                      {label}
                      {key === "logoUrl" || key === "logoLightUrl" || key === "faviconUrl" ? <><input type="file" accept="image/png,image/jpeg,image/svg+xml,image/webp,image/x-icon" onChange={(e) => uploadImage(key, e.target.files?.[0])} />{uploading === key && <small>Uploading…</small>}{values[key] && <><img className="image-preview" style={{ width: key === "faviconUrl" ? 48 : 180, height: key === "faviconUrl" ? 48 : 64, objectFit: "contain", display: "block", marginTop: 8 }} src={values[key].startsWith("/") ? `http://localhost:4000${values[key]}` : values[key]} alt={`${label} preview`} /><small>{values[key]}</small></>}</> : <input value={values[key] ?? ""} onChange={(e) => change(key, e.target.value)} />}
                    </label>
                  ))}
                </div>
              </section>
            ))}
            <section className="panel settings-section">
              <h2>Social links</h2>
              <label>
                Social links JSON
                <textarea
                  rows={6}
                  value={values.socialLinks ?? "{}"}
                  onChange={(e) => change("socialLinks", e.target.value)}
                />
              </label>
              <p className="hint">
                Example: {`{"facebook":"https://facebook.com/go2abroad"}`}
              </p>
            </section>
            {error && <p className="error">{error}</p>}
            {message && <p className="success">{message}</p>}
            <button className="save-button" disabled={saving}>
              {saving ? "Saving…" : "Save website settings"}
            </button>
            <button type="button" className="delete-button" onClick={remove}>Delete website settings</button>
          </form>
        )}
      </div>
    </AdminShell>
  );
}
