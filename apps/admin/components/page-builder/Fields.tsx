"use client";
import { useId, useState } from "react";
import {
  type Data,
  type Field,
  type Json,
  defaultsFor,
} from "@go2abroad/page-builder";
import { API_BASE } from "../../lib/cms-api";
import { Button } from "../ui/button";
import { MediaPicker } from "./MediaPicker";
import { SortableList } from "./SortableList";
export function Fields({
  fields,
  value,
  onChange,
}: {
  fields: Field[];
  value: Data;
  onChange: (value: Data) => void;
}) {
  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <FieldInput
          key={field.name}
          field={field}
          value={value[field.name] ?? field.default ?? ""}
          onChange={(next) => onChange({ ...value, [field.name]: next })}
        />
      ))}
    </div>
  );
}
function FieldInput({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: Json;
  onChange: (value: Json) => void;
}) {
  const id = useId();
  const [media, setMedia] = useState(false);
  if (field.type === "repeater") {
    const items = Array.isArray(value) ? (value as Data[]) : [];
    return (
      <fieldset className="min-w-0 rounded-lg border p-2">
        <legend className="px-1 text-sm font-semibold">{field.label}</legend>
        <SortableList
          items={items}
          id={(_, index) => id + index}
          onChange={onChange}
        >
          {(item, index) => (
            <details className="mb-2 rounded-lg border bg-slate-50 p-2">
              <summary className="cursor-pointer text-sm font-medium">
                {String(
                  item.title ||
                    item.name ||
                    item.question ||
                    item.label ||
                    `Item ${index + 1}`,
                )}
              </summary>
              <div className="mt-3">
                <Fields
                  fields={field.fields ?? []}
                  value={item}
                  onChange={(next) =>
                    onChange(items.map((old, i) => (i === index ? next : old)))
                  }
                />
              </div>
              <div className="mt-3 flex gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    onChange([
                      ...items.slice(0, index + 1),
                      structuredClone(item),
                      ...items.slice(index + 1),
                    ])
                  }
                >
                  Duplicate item
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onChange(items.filter((_, i) => i !== index))}
                >
                  Delete item
                </Button>
              </div>
            </details>
          )}
        </SortableList>
        <Button
          size="sm"
          variant="outline"
          disabled={items.length >= 50}
          onClick={() => onChange([...items, defaultsFor(field.fields ?? [])])}
        >
          Add item
        </Button>
      </fieldset>
    );
  }
  const text = String(value ?? "");
  const asset = text.startsWith("/uploads/") ? API_BASE + text : text;
  return (
    <div>
      <label htmlFor={id} className="mb-1 text-xs font-semibold text-slate-600">
        {field.label}
        {field.required && " *"}
      </label>
      {field.type === "boolean" ? (
        <input
          id={id}
          className="h-4 w-4"
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => onChange(e.target.checked)}
        />
      ) : field.type === "select" ? (
        <select id={id} value={text} onChange={(e) => onChange(e.target.value)}>
          {field.options?.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : ["textarea", "richtext"].includes(field.type) ? (
        <>
          <textarea
            id={id}
            rows={field.type === "richtext" ? 8 : 3}
            value={text}
            onChange={(e) => onChange(e.target.value)}
          />
          {field.type === "richtext" && (
            <p className="text-xs text-slate-500">
              Use **bold**, ## headings, - lists and [links](/path). Raw HTML is
              displayed as text.
            </p>
          )}
        </>
      ) : (
        <input
          id={id}
          type={
            field.type === "number"
              ? "number"
              : field.type === "color"
                ? "color"
                : "text"
          }
          className={field.type === "color" ? "h-10 p-1" : ""}
          value={text}
          onChange={(e) =>
            onChange(
              field.type === "number" ? Number(e.target.value) : e.target.value,
            )
          }
        />
      )}
      {["image", "video", "file"].includes(field.type) && (
        <div className="mt-2 space-y-2">
          {field.type === "image" && text && (
            <img
              key={asset}
              src={asset}
              alt="Selected asset"
              className="h-20 w-full rounded border bg-slate-50 object-contain"
              onError={(e) => {
                e.currentTarget.alt =
                  "Image unavailable. Check the URL or choose another file.";
              }}
            />
          )}
          <Button size="sm" variant="outline" onClick={() => setMedia(true)}>
            Choose / upload {field.type}
          </Button>
          {text && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onChange("")}
            >
              Remove {field.type}
            </Button>
          )}
          {media && (
            <MediaPicker
              kind={field.type}
              onSelect={onChange}
              onClose={() => setMedia(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}
