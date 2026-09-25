import type { ComponentType } from "react";
import { z } from "zod";
import * as C from "./components";
import {
  Data,
  defaultsFor,
  Field,
  metadataSchema,
  navigationTreeSchema,
  schemaForFields,
  sectionSettingsSchema,
  themeSchema,
} from "./schema";

type Definition = {
  name: string;
  category: string;
  fields: Field[];
  schema: z.ZodType<Data>;
  defaults: Data;
  component: ComponentType<C.SectionProps>;
};
const f = (
  name: string,
  label: string,
  type: Field["type"] = "text",
  value: string = "",
  required = false,
): Field => ({ name, label, type, default: value, required });
const title = f(
  "title",
  "Title",
  "text",
  "Your next chapter starts here",
  true,
);
const description = f(
  "description",
  "Description",
  "textarea",
  "Share what makes your service different.",
);
const photo = [
  f("image", "Image", "image"),
  f("imageAlt", "Image description"),
];
const button = [
  f("buttonText", "Button text", "text", "Get started"),
  f("buttonUrl", "Button link", "url", "/contact"),
];
const cardFields = [
  f("title", "Title", "text", "Personal guidance", true),
  description,
  f("icon", "Icon", "icon", "✦"),
  ...photo,
  f("url", "Link", "url", "/contact"),
];
function define(
  name: string,
  category: string,
  component: Definition["component"],
  fields: Field[],
): Definition {
  return {
    name,
    category,
    component,
    fields,
    schema: schemaForFields(fields),
    defaults: defaultsFor(fields),
  };
}
function repeat(fields: Field[], values: Data[]): Field {
  return {
    name: "items",
    label: "Items",
    type: "repeater",
    fields,
    default: values,
  };
}
const testimonialFields = [
  f("name", "Name", "text", "Student name", true),
  f("quote", "Quote", "textarea", "Share an authentic student story.", true),
  f("detail", "Course / university"),
  ...photo,
];
const statFields: Field[] = [
  f("label", "Label", "text", "Destinations", true),
  { name: "value", label: "Value", type: "number", default: 12 },
  f("suffix", "Suffix", "text", "+"),
];
const faqFields = [
  f("question", "Question", "text", "How do I get started?", true),
  f("answer", "Answer", "textarea", "Book a consultation with our team.", true),
];
export const componentRegistry: Record<string, Definition> = {
  header: define("Header", "Layout", C.HeaderSection, [
    f("siteName", "Site name", "text", "Go2Abroad", true),
    ...photo,
    ...button,
  ]),
  hero: define("Hero", "Marketing", C.HeroSection, [
    f("eyebrow", "Eyebrow", "text", "CONNECTING DREAMS"),
    title,
    description,
    ...photo,
    ...button,
  ]),
  richtext: define("Rich Text", "Content", C.RichTextSection, [
    title,
    f(
      "body",
      "Content (Markdown)",
      "richtext",
      "Tell your story. Use **bold**, ## headings, - lists and [links](/contact).",
      true,
    ),
  ]),
  imageText: define("Image + Text", "Content", C.ImageTextSection, [
    title,
    f(
      "body",
      "Content (Markdown)",
      "richtext",
      "Support every step of the journey.",
    ),
    ...photo,
    {
      name: "imagePosition",
      label: "Image position",
      type: "select",
      options: ["left", "right"],
      default: "left",
    },
    ...button,
    f("video", "Video", "video"),
    f("file", "Download", "file"),
  ]),
  services: define("Services", "Content", C.ServicesSection, [
    title,
    description,
    repeat(cardFields, [defaultsFor(cardFields)]),
  ]),
  features: define("Features", "Content", C.FeaturesSection, [
    title,
    description,
    repeat(cardFields, [defaultsFor(cardFields)]),
  ]),
  statistics: define("Statistics", "Social proof", C.StatisticsSection, [
    title,
    repeat(statFields, [defaultsFor(statFields)]),
  ]),
  testimonials: define("Testimonials", "Social proof", C.TestimonialsSection, [
    title,
    repeat(testimonialFields, [defaultsFor(testimonialFields)]),
  ]),
  faq: define("FAQ", "Content", C.FAQSection, [
    title,
    {
      name: "expanded",
      label: "Expand answers by default",
      type: "boolean",
      default: false,
    },
    repeat(faqFields, [defaultsFor(faqFields)]),
  ]),
  cta: define("CTA", "Marketing", C.CTASection, [
    title,
    description,
    ...button,
  ]),
  footer: define("Footer", "Layout", C.FooterSection, [
    title,
    description,
    f("contact", "Contact details"),
    f("copyright", "Copyright", "text", "© Go2Abroad. All rights reserved."),
  ]),
};
export const sectionSchema = z
  .object({
    id: z.string().uuid(),
    type: z.string(),
    order: z.number().int().min(0),
    data: z.record(z.string(), z.unknown()),
    settings: sectionSettingsSchema.default({}),
    isVisible: z.boolean(),
  })
  .strict()
  .superRefine((section, ctx) => {
    const definition = Object.hasOwn(componentRegistry, section.type)
      ? componentRegistry[section.type]
      : undefined;
    if (!definition) {
      ctx.addIssue({
        code: "custom",
        path: ["type"],
        message: "Unknown component type.",
      });
      return;
    }
    const result = definition.schema.safeParse(section.data);
    if (!result.success)
      result.error.issues.forEach((issue) =>
        ctx.addIssue({ ...issue, path: ["data", ...issue.path] }),
      );
  });
export const documentSchema = metadataSchema
  .extend({
    sections: z.array(sectionSchema).max(100),
    theme: themeSchema,
    navigation: navigationTreeSchema,
  })
  .strict()
  .superRefine((doc, ctx) => {
    const ids = new Set<string>();
    doc.sections.forEach((section, index) => {
      if (ids.has(section.id))
        ctx.addIssue({
          code: "custom",
          message: "Section IDs must be unique.",
        });
      ids.add(section.id);
      if (section.order !== index)
        ctx.addIssue({
          code: "custom",
          message: "Section order must match the component tree.",
        });
    });
  });
