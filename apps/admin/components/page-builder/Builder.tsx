"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye } from "lucide-react";
import {
  componentRegistry,
  documentSchema,
  seoFields,
  type Data,
  type PageDocument,
  type SectionNode,
} from "@go2abroad/page-builder";
import { WEBSITE_BASE, cmsApi, messageOf } from "../../lib/cms-api";
import { Button } from "../ui/button";
import { useCanPublish } from "./CmsBoundary";
import { Fields } from "./Fields";

type PageRecord = {
  id: string;
  revision: number;
  status: string;
  document: PageDocument;
};

const normalize = (sections: SectionNode[]) =>
  sections.map((section, order) => ({ ...section, order }));
const fingerprint = (value: unknown) => JSON.stringify(value);

// Section types, order, settings, theme, navigation and layout are developer-owned.
// This screen exposes only the content fields defined in the component registry.
export function Builder({ id }: { id: string }) {
  const router = useRouter();
  const canPublish = useCanPublish();
  const [record, setRecord] = useState<PageRecord>();
  const [document, setDocument] = useState<PageDocument>();
  const [saved, setSaved] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const dirty = !!document && fingerprint(document) !== saved;

  useEffect(() => {
    let active = true;
    cmsApi<PageRecord>("/api/pages/" + id)
      .then((value) => {
        if (!active) return;
        setRecord(value);
        setDocument(value.document);
        setSaved(fingerprint(value.document));
        setError("");
      })
      .catch((e) => active && setError(messageOf(e)));
    return () => {
      active = false;
    };
  }, [id, attempt]);

  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => {
      if (dirty) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function updateSection(sectionId: string, data: Data) {
    setDocument((current) =>
      current
        ? {
            ...current,
            sections: current.sections.map((section) =>
              section.id === sectionId ? { ...section, data } : section,
            ),
          }
        : current,
    );
    setNotice("");
  }

  function validateDocument() {
    const result = documentSchema.safeParse(document);
    if (!result.success)
      throw new Error(
        result.error.issues
          .map((issue) => issue.path.join(".") + ": " + issue.message)
          .join("; "),
      );
    return result.data;
  }

  async function save() {
    if (!record) throw new Error("Page is still loading.");
    const value = await cmsApi<PageRecord>("/api/pages/" + id + "/draft", {
      method: "PATCH",
      body: JSON.stringify({ revision: record.revision, document: validateDocument() }),
    });
    setRecord(value);
    setDocument(value.document);
    setSaved(fingerprint(value.document));
    return value;
  }

  async function run(task: () => Promise<void>) {
    if (busy) return;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      await task();
    } catch (e) {
      setError(messageOf(e));
    } finally {
      setBusy(false);
    }
  }

  if (!record || !document)
    return (
      <div className="p-8">
        {error ? (
          <>
            <p role="alert">{error}</p>
            <Button onClick={() => setAttempt((value) => value + 1)}>Retry</Button>
          </>
        ) : (
          <p role="status">Loading page content…</p>
        )}
      </div>
    );

  return (
    <div className="mx-auto max-w-4xl p-4 md:p-8">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Button
          variant="ghost"
          aria-label="Back to pages"
          size="icon"
          onClick={() => {
            if (!dirty || confirm("Leave without saving your changes?"))
              router.push("/pages");
          }}
        >
          <ArrowLeft size={18} />
        </Button>
        <div className="mr-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Page content
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">{document.title}</h2>
          <p className="text-sm text-slate-500">
            /{document.slug === "home" ? "" : document.slug} · {record.status} ·{" "}
            {dirty ? "Unsaved changes" : "All changes saved"}
          </p>
        </div>
        <Button
          variant="outline"
          disabled={busy}
          onClick={() =>
            void run(async () => {
              const value = await cmsApi<{ token: string }>(
                "/api/pages/" + id + "/preview",
                { method: "POST", body: JSON.stringify(validateDocument()) },
              );
              window.open(
                WEBSITE_BASE + "/preview?token=" + encodeURIComponent(value.token),
                "_blank",
                "noopener,noreferrer",
              );
            })
          }
        >
          <Eye size={16} /> Preview
        </Button>
        <Button
          disabled={busy}
          onClick={() =>
            void run(async () => {
              await save();
              setNotice("Changes saved as a draft. The live website has not changed.");
            })
          }
        >
          Save Changes
        </Button>
        {canPublish && (
          <Button
            disabled={busy}
            onClick={() =>
              void run(async () => {
                const draft = await save();
                await cmsApi<PageRecord>("/api/pages/" + id + "/publish", {
                  method: "POST",
                  body: JSON.stringify({ revision: draft.revision }),
                });
                setRecord((current) =>
                  current ? { ...current, status: "PUBLISHED" } : current,
                );
                setNotice("Published successfully.");
              })
            }
          >
            Publish
          </Button>
        )}
      </div>

      {error && (
        <p role="alert" className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {error}
        </p>
      )}
      {notice && (
        <p role="status" className="mb-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          {notice}
        </p>
      )}
      <p className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
        Edit the content below. Layout, styling, section order and responsive behavior
        are managed by the development team.
      </p>

      <section className="mb-5 rounded-xl border bg-white p-5 shadow-sm">
        <h3 className="mb-4 border-b pb-3 text-lg font-semibold">SEO</h3>
        <Fields
          fields={seoFields.filter((field) =>
            ["metaTitle", "metaDescription", "ogImage"].includes(field.name),
          )}
          value={document}
          onChange={(data) =>
            setDocument((current) => (current ? { ...current, ...data } : current))
          }
        />
      </section>

      <div className="space-y-5">
        {normalize(document.sections).map((section) => {
          const definition = componentRegistry[section.type];
          if (!definition) return null;
          return (
            <section key={section.id} className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="mb-4 border-b pb-3 text-lg font-semibold">{definition.name}</h3>
              <Fields
                fields={definition.fields}
                value={section.data}
                onChange={(data) => updateSection(section.id, data)}
              />
            </section>
          );
        })}
      </div>
    </div>
  );
}
