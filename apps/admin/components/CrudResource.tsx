"use client";

import { useEffect, useState } from "react";
import { cmsApi, messageOf } from "../lib/cms-api";
import { AdminShell } from "./AdminShell";

export type CrudField = { name: string; label: string; type?: "text" | "email" | "password" | "textarea" | "url" | "select" | "checkbox"; required?: boolean; options?: { value: string; label: string }[]; optionsEndpoint?: string };
type CrudRow = { id: string; [key: string]: unknown };

export function CrudResource({ title, description, endpoint, fields, columns }: { title: string; description: string; endpoint: string; fields: CrudField[]; columns: { key: string; label: string }[] }) {
  const [rows, setRows] = useState<CrudRow[]>([]);
  const [form, setForm] = useState<Record<string, string | boolean>>({});
  const [editing, setEditing] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [optionLists, setOptionLists] = useState<Record<string, { value: string; label: string }[]>>({});

  async function load() {
    setLoading(true); setError("");
    try { setRows(await cmsApi<CrudRow[]>(endpoint)); } catch (reason) { setError(messageOf(reason)); } finally { setLoading(false); }
  }
  useEffect(() => { void load(); }, [endpoint]);
  useEffect(() => {
    const optionFields = fields.filter((field) => field.optionsEndpoint);
    Promise.all(optionFields.map(async (field) => [field.name, await cmsApi<CrudRow[]>(field.optionsEndpoint!)] as const))
      .then((lists) => setOptionLists(Object.fromEntries(lists.map(([name, values]) => [name, values.map((value) => ({ value: value.id, label: String(value.name ?? value.title ?? value.id) }))]))))
      .catch(() => undefined);
  }, [fields]);

  function reset() { setEditing(null); setForm({}); }
  function edit(row: CrudRow) { setEditing(row.id); setForm(Object.fromEntries(fields.map((field) => [field.name, row[field.name] as string | boolean ?? ""]))); }
  function change(name: string, value: string | boolean) { setForm((current) => ({ ...current, [name]: value })); }
  function valueAt(row: CrudRow, key: string) { return key.split(".").reduce<unknown>((value, part) => (value && typeof value === "object" ? (value as Record<string, unknown>)[part] : undefined), row); }
  async function save(event: React.FormEvent) {
    event.preventDefault(); setSaving(true); setError("");
    try {
      const payload = Object.fromEntries(Object.entries(form).map(([key, value]) => [key, value === "" ? undefined : value]));
      if (editing) await cmsApi(`${endpoint}/${editing}`, { method: "PATCH", body: JSON.stringify(payload) });
      else await cmsApi(endpoint, { method: "POST", body: JSON.stringify(payload) });
      reset(); await load();
    } catch (reason) { setError(messageOf(reason)); } finally { setSaving(false); }
  }
  async function remove(id: string) {
    if (!window.confirm("Delete this record?")) return;
    try { await cmsApi(`${endpoint}/${id}`, { method: "DELETE" }); await load(); } catch (reason) { setError(messageOf(reason)); }
  }

  return <AdminShell title={title}>
    <div className="body">
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Workspace</p><h2>{title}</h2><p className="muted">{description}</p></div><button onClick={reset}>{editing ? "Cancel edit" : `Add ${title.slice(0, -1)}`}</button></div>
    {error && <p className="error mb-4">{error}</p>}
    {(editing || Object.keys(form).length > 0) && <form onSubmit={save} className="panel mb-6 grid gap-4 md:grid-cols-2">
      {fields.map((field) => <label className={field.type === "textarea" ? "md:col-span-2" : ""} key={field.name}>{field.label}{field.type === "textarea" ? <textarea rows={4} required={field.required && !editing} value={String(form[field.name] ?? "")} onChange={(event) => change(field.name, event.target.value)} /> : field.type === "select" || field.optionsEndpoint ? <select required={field.required && !editing} value={String(form[field.name] ?? "")} onChange={(event) => change(field.name, event.target.value)}><option value="">Select…</option>{(field.options || optionLists[field.name] || []).map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select> : field.type === "checkbox" ? <input className="mt-3 h-4 w-4" type="checkbox" checked={Boolean(form[field.name])} onChange={(event) => change(field.name, event.target.checked)} /> : <input type={field.type || "text"} required={field.required && !editing} value={String(form[field.name] ?? "")} onChange={(event) => change(field.name, event.target.value)} />}</label>)}
      <div className="md:col-span-2"><button disabled={saving}>{saving ? "Saving…" : editing ? "Update" : "Create"}</button><button type="button" className="ml-3 bg-slate-200 text-slate-700 hover:bg-slate-300" onClick={reset}>Cancel</button></div>
    </form>}
    <section className="panel overflow-x-auto p-0">{loading ? <p className="p-6 muted">Loading…</p> : rows.length === 0 ? <p className="p-6 muted">No records found.</p> : <table className="w-full min-w-[760px] text-left text-sm"><thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr>{columns.map((column) => <th className="px-5 py-3" key={column.key}>{column.label}</th>)}<th className="px-5 py-3">Actions</th></tr></thead><tbody>{rows.map((row) => <tr className="border-b border-slate-100 last:border-0" key={row.id}>{columns.map((column) => { const value = valueAt(row, column.key); return <td className="px-5 py-4" key={column.key}>{typeof value === "boolean" ? (value ? "Yes" : "No") : String(value ?? "—")}</td>; })}<td className="whitespace-nowrap px-5 py-4"><button className="bg-slate-200 px-3 py-2 text-slate-700 hover:bg-slate-300" onClick={() => edit(row)}>Edit</button><button className="ml-2 bg-red-100 px-3 py-2 text-red-700 hover:bg-red-200" onClick={() => remove(row.id)}>Delete</button></td></tr>)}</tbody></table>}</section>
    </div>
  </AdminShell>;
}
