"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, FileText } from "lucide-react";
import { cmsApi, messageOf } from "../../lib/cms-api";
import { Button } from "../../components/ui/button";
import { useCanPublish } from "../../components/page-builder/CmsBoundary";
type PageRow = {
  id: string;
  title: string;
  slug: string;
  status: string;
  _count: { sections: number };
};
export default function Pages() {
  const router = useRouter();
  const canPublish = useCanPublish();
  const [data, setData] = useState<{ items: PageRow[]; total: number }>({
    items: [],
    total: 0,
  });
  const [query, setQuery] = useState("");
  const [offset, setOffset] = useState(0);
  const [reload, setReload] = useState(0);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  useEffect(() => {
    let active = true;
    setLoading(true);
    const timer = setTimeout(() => {
      cmsApi<typeof data>(
        `/api/pages?q=${encodeURIComponent(query)}&offset=${offset}`,
      )
        .then((value) => {
          if (active) {
            setData(value);
            setError("");
          }
        })
        .catch((e) => {
          if (active) setError(messageOf(e));
        })
        .finally(() => {
          if (active) setLoading(false);
        });
    }, 250);
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [query, offset, reload]);
  async function create(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const page = await cmsApi<{ id: string }>("/api/pages", {
        method: "POST",
        body: JSON.stringify({ title, slug }),
      });
      router.push("/pages/" + page.id);
    } catch (e) {
      setError(messageOf(e));
    } finally {
      setBusy(false);
    }
  }
  async function action(
    page: PageRow,
    operation: "duplicate" | "archive" | "delete",
  ) {
    if (
      operation !== "duplicate" &&
      !confirm(
        operation === "delete"
          ? `Permanently delete ${page.title}, its sections and versions?`
          : `Unpublish ${page.title}?`,
      )
    )
      return;
    setBusy(true);
    setError("");
    try {
      const result = await cmsApi<{ id: string }>(
        "/api/pages/" +
          page.id +
          (operation === "delete" ? "" : "/" + operation),
        { method: operation === "delete" ? "DELETE" : "POST" },
      );
      if (operation === "duplicate") router.push("/pages/" + result.id);
      else setReload(reload + 1);
    } catch (e) {
      setError(messageOf(e));
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Website workspace
          </p>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight">
            Your pages
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Manage the approved website content without changing its design.
          </p>
        </div>
        <Button onClick={() => setCreating(!creating)}>
          <Plus size={16} />
          Create page
        </Button>
      </div>
      {error && (
        <div
          role="alert"
          className="mb-4 rounded-lg bg-red-50 p-4 text-red-700"
        >
          {error}{" "}
          <Button variant="outline" onClick={() => setReload(reload + 1)}>
            Retry
          </Button>
        </div>
      )}
      {creating && (
        <form
          onSubmit={create}
          className="mb-6 grid gap-4 rounded-xl border bg-white p-5 md:grid-cols-[1fr_1fr_auto]"
        >
          <label className="m-0">
            Page title
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="About us"
            />
          </label>
          <label className="m-0">
            Page path
            <input
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="about-us (home for /)"
              pattern="[a-z0-9]+([-/][a-z0-9]+)*"
            />
          </label>
          <Button type="submit" className="self-end" disabled={busy}>
            Create draft
          </Button>
        </form>
      )}
      <div className="rounded-xl border bg-white">
        <div className="border-b p-4">
          <input
            aria-label="Search pages"
            className="mt-0 max-w-sm"
            placeholder="Search pages…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOffset(0);
            }}
          />
        </div>
        {loading ? (
          <p role="status" className="p-12 text-center">
            Loading pages…
          </p>
        ) : !data.items.length ? (
          <div className="p-16 text-center">
            <FileText className="mx-auto mb-3 text-slate-400" />
            <h3 className="font-semibold">No pages found</h3>
            <p className="mt-2 text-sm text-slate-500">
              Create a draft to edit its approved content fields.
            </p>
          </div>
        ) : (
          <div className="divide-y">
            {data.items.map((page) => (
              <div
                key={page.id}
                className="flex flex-wrap items-center gap-4 p-5"
              >
                <FileText className="text-emerald-700" size={22} />
                <Link href={"/pages/" + page.id} className="min-w-40 flex-1">
                  <strong className="text-sm hover:text-emerald-700">
                    {page.title}
                  </strong>
                  <p className="mt-1 text-xs text-slate-500">
                    /{page.slug === "home" ? "" : page.slug} ·{" "}
                    {page._count.sections} sections
                  </p>
                </Link>
                <span
                  className={
                    "rounded-full px-3 py-1 text-xs font-medium " +
                    (page.status === "PUBLISHED"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-slate-100 text-slate-600")
                  }
                >
                  {page.status}
                </span>
                <Button asChild variant="outline">
                  <Link href={"/pages/" + page.id}>Edit page</Link>
                </Button>
                <Button
                  variant="ghost"
                  disabled={busy}
                  onClick={() => void action(page, "duplicate")}
                >
                  Duplicate
                </Button>
                {canPublish && (
                  <>
                    <Button
                      variant="ghost"
                      disabled={busy || page.status === "ARCHIVED"}
                      onClick={() => void action(page, "archive")}
                    >
                      Archive
                    </Button>
                    <Button
                      variant="destructive"
                      disabled={busy}
                      onClick={() => void action(page, "delete")}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between border-t p-4">
          <Button
            variant="outline"
            disabled={!offset || loading}
            onClick={() => setOffset(Math.max(0, offset - 20))}
          >
            Previous
          </Button>
          <span className="text-xs text-slate-500">{data.total} pages</span>
          <Button
            variant="outline"
            disabled={offset + 20 >= data.total || loading}
            onClick={() => setOffset(offset + 20)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
