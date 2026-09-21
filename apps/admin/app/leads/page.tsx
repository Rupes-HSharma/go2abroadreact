"use client";

import { useEffect, useState } from "react";
import { cmsApi, messageOf } from "../../lib/cms-api";
import { AdminShell } from "../../components/AdminShell";

type Lead = {
  id: string;
  firstName: string;
  email: string;
  phone: string;
  destination?: string | null;
  interest?: string | null;
  message: string;
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "LOST";
  createdAt: string;
};

const statuses = ["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "LOST"] as const;

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    cmsApi<Lead[]>(status ? `/leads?status=${status}` : "/leads")
      .then((data) => {
        if (active) setLeads(data);
      })
      .catch((reason) => {
        if (active) setError(messageOf(reason));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [status]);

  async function updateStatus(id: string, nextStatus: Lead["status"]) {
    try {
      const updated = await cmsApi<Lead>(`/leads/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: nextStatus }),
      });
      setLeads((current) => current.map((lead) => (lead.id === id ? updated : lead)));
    } catch (reason) {
      setError(messageOf(reason));
    }
  }

  return (
    <AdminShell title="Leads">
      <div className="body">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Lead management</p>
          <h2>Website enquiries</h2>
          <p className="muted">Contact form submissions from the public website.</p>
        </div>
        <label className="m-0 min-w-44">
          Filter by status
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="">All leads</option>
            {statuses.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
      </div>
      {error && <p className="error mb-4">{error}</p>}
      <section className="panel overflow-x-auto p-0">
        {loading ? <p className="p-6 muted">Loading leads…</p> : leads.length === 0 ? <p className="p-6 muted">No enquiries found.</p> : (
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr><th className="px-5 py-3">Name</th><th className="px-5 py-3">Contact</th><th className="px-5 py-3">Study interest</th><th className="px-5 py-3">Message</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Received</th></tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr className="border-b border-slate-100 align-top last:border-0" key={lead.id}>
                  <td className="px-5 py-4 font-semibold">{lead.firstName}</td>
                  <td className="px-5 py-4"><a className="text-indigo-600" href={`mailto:${lead.email}`}>{lead.email}</a><br />{lead.phone}</td>
                  <td className="px-5 py-4">{lead.destination || "—"}<br /><span className="text-slate-500">{lead.interest || "—"}</span></td>
                  <td className="max-w-xs whitespace-pre-wrap px-5 py-4 text-slate-600">{lead.message}</td>
                  <td className="px-5 py-4"><select value={lead.status} onChange={(event) => updateStatus(lead.id, event.target.value as Lead["status"])}>{statuses.map((value) => <option key={value} value={value}>{value}</option>)}</select></td>
                  <td className="whitespace-nowrap px-5 py-4 text-slate-500">{new Date(lead.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
      </div>
    </AdminShell>
  );
}
