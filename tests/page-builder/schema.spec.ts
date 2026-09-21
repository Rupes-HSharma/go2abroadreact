import { test, expect } from "@playwright/test";
import { randomUUID } from "node:crypto";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import {
  componentRegistry,
  defaultTheme,
  documentSchema,
  PageRenderer,
  safeUrl,
  type PageDocument,
} from "../../packages/page-builder/dist";
test("all eleven registry defaults validate and render; unknown sections and HTML are safe", () => {
  const sections = Object.entries(componentRegistry).map(
    ([type, entry], order) => ({
      id: randomUUID(),
      type,
      order,
      data: structuredClone(entry.defaults),
      settings: {},
      isVisible: true,
    }),
  );
  const document: PageDocument = {
    title: "Test",
    slug: "test",
    metaTitle: "",
    metaDescription: "",
    canonicalUrl: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    robots: "index,follow",
    sections,
    theme: defaultTheme,
    navigation: [],
  };
  expect(sections).toHaveLength(11);
  expect(documentSchema.safeParse(document).success).toBe(true);
  let html = renderToStaticMarkup(createElement(PageRenderer, { document }));
  for (const section of sections)
    expect(html).toContain(`data-section-type="${section.type}"`);
  document.sections.push({ ...sections[0], id: randomUUID(), type: "unknown" });
  expect(documentSchema.safeParse(document).success).toBe(false);
  expect(() =>
    renderToStaticMarkup(createElement(PageRenderer, { document })),
  ).not.toThrow();
  document.sections = [
    {
      ...sections[2],
      data: {
        title: "Safe text",
        body: "<script>alert(1)</script> [bad](javascript:alert)",
      },
    },
  ];
  html = renderToStaticMarkup(createElement(PageRenderer, { document }));
  expect(html).not.toContain("<script>");
  expect(html).not.toContain('href="javascript:');
  for (const url of [
    "javascript:alert(1)",
    "data:text/html,test",
    "//evil.example",
    "/\\evil.example",
  ])
    expect(safeUrl(url)).toBe(false);
});
