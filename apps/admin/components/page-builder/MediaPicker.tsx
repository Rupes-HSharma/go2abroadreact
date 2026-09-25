"use client";
import { useEffect, useRef, useState } from "react";
import { API_BASE, cmsApi, messageOf } from "../../lib/cms-api";
import { Button } from "../ui/button";
import { useCanPublish } from "./CmsBoundary";
type Media = {
  id: string;
  name: string;
  mimeType: string;
  url: string;
  size: number;
};
export function MediaPicker({
  kind,
  onSelect,
  onClose,
}: {
  kind: string;
  onSelect: (url: string) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(kind);
  const [offset, setOffset] = useState(0);
  const [reload, setReload] = useState(0);
  const [data, setData] = useState<{ items: Media[]; total: number }>({
    items: [],
    total: 0,
  });
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const canDelete = useCanPublish();
  useEffect(() => {
    dialog.current?.showModal();
  }, []);
  useEffect(() => {
    let active = true;
    setLoading(true);
    const timer = setTimeout(() => {
      cmsApi<typeof data>(
        `/api/media?q=${encodeURIComponent(search)}&kind=${filter}&offset=${offset}`,
      )
        .then((value) => {
          if (active) setData(value);
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
  }, [search, filter, offset, reload]);
  async function upload(file?: File) {
    if (!file) return;
    if (
      (kind === "image" && !file.type.startsWith("image/")) ||
      (kind === "video" && !file.type.startsWith("video/"))
    ) {
      setError("Choose a " + kind + " file for this field.");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError("Maximum upload size is 20 MB.");
      return;
    }
    setBusy(true);
    setError("");
    const body = new FormData();
    body.append("file", file);
    try {
      const media = await cmsApi<Media>("/api/media", { method: "POST", body });
      onSelect(media.url);
      onClose();
    } catch (e) {
      setError(messageOf(e));
    } finally {
      setBusy(false);
    }
  }
  async function remove(media: Media) {
    if (
      !confirm(
        `Permanently delete ${media.name}? Files used by saved pages or versions cannot be deleted.`,
      )
    )
      return;
    setBusy(true);
    setError("");
    try {
      await cmsApi("/api/media/" + media.id, { method: "DELETE" });
      setReload(reload + 1);
    } catch (e) {
      setError(messageOf(e));
    } finally {
      setBusy(false);
    }
  }
  return (
    <dialog
      ref={dialog}
      onCancel={onClose}
      aria-label="Media library"
      className="w-[900px] max-w-[95vw] rounded-2xl p-6 shadow-2xl backdrop:bg-slate-950/60"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Media library</h2>
        <Button variant="ghost" onClick={onClose}>
          Close
        </Button>
      </div>
      <p className="my-2 text-sm text-slate-500">
        PNG, JPEG, WebP, GIF, MP4, WebM, PDF and TXT. Up to 20 MB. Uploaded
        assets are publicly accessible.
      </p>
      <div className="my-4 grid gap-3 sm:grid-cols-3">
        <input
          aria-label="Search media"
          placeholder="Search files…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOffset(0);
          }}
        />
        <select
          aria-label="Media filter"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setOffset(0);
          }}
        >
          <option value="">All files</option>
          <option value="image">Images</option>
          <option value="video">Videos</option>
          <option value="file">Documents and video</option>
        </select>
        <label className="m-0 text-sm">
          Upload file
          <input
            type="file"
            disabled={busy}
            accept="image/png,image/jpeg,image/webp,image/gif,video/mp4,video/webm,application/pdf,text/plain"
            onChange={(e) => void upload(e.target.files?.[0])}
          />
        </label>
      </div>
      {error && (
        <p role="alert" className="my-3 text-red-700">
          {error}
        </p>
      )}
      {loading ? (
        <p role="status">Loading media…</p>
      ) : !data.items.length ? (
        <p className="py-12 text-center text-slate-500">
          No files found. Upload your first asset.
        </p>
      ) : (
        <div className="grid max-h-[50vh] grid-cols-2 gap-3 overflow-auto sm:grid-cols-4">
          {data.items.map((media) => (
            <div key={media.id} className="rounded-xl border p-2">
              <button
                type="button"
                className="w-full bg-white p-1 text-slate-800 hover:bg-slate-50"
                disabled={
                  busy ||
                  (kind === "image" && !media.mimeType.startsWith("image/")) ||
                  (kind === "video" && !media.mimeType.startsWith("video/"))
                }
                onClick={() => {
                  onSelect(media.url);
                  onClose();
                }}
              >
                {media.mimeType.startsWith("image/") ? (
                  <img
                    src={API_BASE + media.url}
                    alt={media.name}
                    className="h-24 w-full rounded bg-slate-50 object-contain"
                  />
                ) : (
                  <div className="grid h-24 place-items-center bg-slate-50 text-sm">
                    {media.mimeType}
                  </div>
                )}
                <span className="mt-2 block truncate text-xs">
                  {media.name}
                </span>
              </button>
              {canDelete && (
                <Button
                  size="sm"
                  variant="destructive"
                  disabled={busy}
                  onClick={() => void remove(media)}
                >
                  Delete file
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 flex justify-between">
        <Button
          variant="outline"
          disabled={!offset || loading}
          onClick={() => setOffset(Math.max(0, offset - 24))}
        >
          Previous
        </Button>
        <span className="text-sm">{data.total} files</span>
        <Button
          variant="outline"
          disabled={offset + 24 >= data.total || loading}
          onClick={() => setOffset(offset + 24)}
        >
          Next
        </Button>
      </div>
    </dialog>
  );
}
