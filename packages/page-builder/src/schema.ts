import { z } from "zod";

export type Json =
  string | number | boolean | null | Json[] | { [key: string]: Json };
export type Data = { [key: string]: Json };
export type Field = {
  name: string;
  label: string;
  type:
    | "text"
    | "textarea"
    | "richtext"
    | "number"
    | "boolean"
    | "select"
    | "color"
    | "image"
    | "file"
    | "video"
    | "url"
    | "icon"
    | "repeater";
  required?: boolean;
  options?: string[];
  fields?: Field[];
  default?: Json;
};
export const safeUrl = (value: string, media = false): boolean =>
  value === "" ||
  (!/[\s\\<>]/.test(value) &&
    (/^\/(?!\/)/.test(value) ||
      (!media && /^#[\w-]+$/.test(value)) ||
      /^https?:\/\/[^/]+/i.test(value) ||
      (!media && /^(mailto:[^@]+@[^@]+|tel:\+?[\d-]+)$/i.test(value))));
const url = z
  .string()
  .max(2048)
  .refine(
    (s) => safeUrl(s),
    "Use an http(s) URL, a site path, email or telephone link.",
  );
const mediaUrl = z
  .string()
  .max(2048)
  .refine((s) => safeUrl(s, true), "Use an http(s) URL or a site path.");
const color = z.string().regex(/^#[0-9a-fA-F]{6}$/);
export const sectionSettingsFields: Field[] = [
  {
    name: "background",
    label: "Background",
    type: "color",
    default: "#ffffff",
  },
  { name: "color", label: "Text color", type: "color", default: "#172b29" },
  {
    name: "padding",
    label: "Section spacing",
    type: "select",
    options: ["compact", "normal", "spacious"],
    default: "normal",
  },
  {
    name: "align",
    label: "Text alignment",
    type: "select",
    options: ["left", "center"],
    default: "left",
  },
];
export const sectionSettingsSchema = z
  .object({
    background: color.optional(),
    color: color.optional(),
    padding: z.enum(["compact", "normal", "spacious"]).optional(),
    align: z.enum(["left", "center"]).optional(),
  })
  .strict();

export function schemaForFields(fields: Field[]): z.ZodType<Data> {
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const field of fields) {
    let value: z.ZodTypeAny;
    switch (field.type) {
      case "repeater":
        value = z.array(schemaForFields(field.fields ?? [])).max(50);
        break;
      case "boolean":
        value = z.boolean();
        break;
      case "number":
        value = z.number().finite().min(0).max(1000000000);
        break;
      case "select":
        value = z
          .string()
          .refine(
            (s) => field.options?.includes(s),
            "Select a supported option.",
          );
        break;
      case "color":
        value = color;
        break;
      case "url":
        value = url;
        break;
      case "image":
      case "video":
      case "file":
        value = mediaUrl;
        break;
      default:
        value = z.string().max(field.type === "richtext" ? 30000 : 3000);
    }
    if (field.required) {
      value = value.refine(
        (s) => typeof s !== "string" || s.trim().length > 0,
        field.label + " is required.",
      );
    } else {
      value = value.optional();
    }
    shape[field.name] = value;
  }
  return z.object(shape).strict() as z.ZodType<Data>;
}
export function defaultsFor(fields: Field[]): Data {
  return Object.fromEntries(
    fields.map((f) => [
      f.name,
      f.default ??
        (f.type === "repeater"
          ? []
          : f.type === "boolean"
            ? false
            : f.type === "number"
              ? 0
              : ""),
    ]),
  );
}
export const themeFields: Field[] = [
  {
    name: "primary",
    label: "Primary color",
    type: "color",
    default: "#245b4f",
  },
  {
    name: "secondary",
    label: "Secondary color",
    type: "color",
    default: "#172b29",
  },
  { name: "accent", label: "Accent color", type: "color", default: "#e6a35a" },
  {
    name: "headingFont",
    label: "Heading font",
    type: "select",
    options: ["sans-serif", "serif", "monospace"],
    default: "sans-serif",
  },
  {
    name: "bodyFont",
    label: "Body font",
    type: "select",
    options: ["sans-serif", "serif"],
    default: "sans-serif",
  },
  { name: "radius", label: "Corner radius (px)", type: "number", default: 12 },
];
export const themeSchema = z
  .object({
    primary: color,
    secondary: color,
    accent: color,
    headingFont: z.enum(["sans-serif", "serif", "monospace"]),
    bodyFont: z.enum(["sans-serif", "serif"]),
    radius: z.number().min(0).max(40),
  })
  .strict();
export type ThemeConfig = z.infer<typeof themeSchema>;
export const defaultTheme = defaultsFor(themeFields) as ThemeConfig;

export type NavigationNode = {
  id: string;
  label: string;
  url: string;
  isVisible: boolean;
  children: NavigationNode[];
};
function navigationSchema(depth: number): z.ZodType<NavigationNode> {
  return z
    .object({
      id: z.string().uuid(),
      label: z.string().trim().min(1).max(100),
      url,
      isVisible: z.boolean(),
      children:
        depth > 0
          ? z.array(navigationSchema(depth - 1)).max(20)
          : z.array(z.never()).max(0),
    })
    .strict();
}
export const navigationTreeSchema = z
  .array(navigationSchema(2))
  .max(20)
  .superRefine((nodes, ctx) => {
    const ids = new Set<string>();
    const visit = (items: NavigationNode[]) =>
      items.forEach((item) => {
        if (ids.has(item.id))
          ctx.addIssue({
            code: "custom",
            message: "Navigation IDs must be unique.",
          });
        ids.add(item.id);
        visit(item.children);
      });
    visit(nodes);
  });
export const metadataSchema = z
  .object({
    title: z.string().trim().min(1).max(200),
    slug: z
      .string()
      .min(1)
      .max(180)
      .regex(/^[a-z0-9]+(?:[-/][a-z0-9]+)*$/)
      .refine(
        (s) => !["api", "preview", "_next"].includes(s.split("/")[0]),
        "This path is reserved.",
      ),
    metaTitle: z.string().max(200).default(""),
    metaDescription: z.string().max(500).default(""),
    canonicalUrl: mediaUrl.default(""),
    ogTitle: z.string().max(200).default(""),
    ogDescription: z.string().max(500).default(""),
    ogImage: mediaUrl.default(""),
    robots: z
      .enum(["index,follow", "noindex,nofollow"])
      .default("index,follow"),
  })
  .strict();
export const seoFields: Field[] = [
  { name: "title", label: "Page title", type: "text", required: true },
  {
    name: "slug",
    label: "Page path (home for /)",
    type: "text",
    required: true,
  },
  { name: "metaTitle", label: "SEO title", type: "text" },
  { name: "metaDescription", label: "SEO description", type: "textarea" },
  { name: "canonicalUrl", label: "Canonical URL", type: "url" },
  { name: "ogTitle", label: "Social title", type: "text" },
  { name: "ogDescription", label: "Social description", type: "textarea" },
  { name: "ogImage", label: "Social image", type: "image" },
  {
    name: "robots",
    label: "Search indexing",
    type: "select",
    options: ["index,follow", "noindex,nofollow"],
  },
];
export type SectionNode = {
  id: string;
  type: string;
  order: number;
  data: Data;
  settings: z.infer<typeof sectionSettingsSchema>;
  isVisible: boolean;
};
export type PageDocument = z.infer<typeof metadataSchema> & {
  sections: SectionNode[];
  theme: ThemeConfig;
  navigation: NavigationNode[];
};
