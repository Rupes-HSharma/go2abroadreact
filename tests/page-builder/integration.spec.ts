import { test, expect, type APIRequestContext } from "@playwright/test";
import { randomUUID } from "node:crypto";
import {
  componentRegistry,
  type PageDocument,
} from "../../packages/page-builder/src";
const api = "http://127.0.0.1:4100";
type PageRecord = {
  id: string;
  revision: number;
  document: PageDocument;
  status: string;
};
export async function login(request: APIRequestContext, role = "admin") {
  const response = await request.post(
    api + "/auth/" + (role === "student" ? "student" : "admin") + "/login",
    {
      data: {
        email: role + "@cms-test.example",
        password: "Cms-Test-only-123!",
      },
    },
  );
  expect(response.ok()).toBeTruthy();
  return response.json() as Promise<{
    accessToken: string;
    refreshToken: string;
    user: { role: string };
  }>;
}
test("PostgreSQL/API lifecycle, snapshots, versions, authorization and media", async ({
  request,
}) => {
  const session = await login(request);
  expect(session.user).not.toHaveProperty("passwordHash");
  const headers = { Authorization: "Bearer " + session.accessToken };
  const call = (method: string, path: string, data?: unknown) =>
    request.fetch(api + path, { method, headers, data });
  expect((await request.get(api + "/api/pages")).status()).toBe(401);
  const student = await login(request, "student");
  const studentHeaders = { Authorization: "Bearer " + student.accessToken };
  expect(
    (
      await request.get(api + "/api/pages", { headers: studentHeaders })
    ).status(),
  ).toBe(403);
  let response = await call("POST", "/api/pages", {
    title: "Lifecycle",
    slug: "lifecycle",
  });
  expect(response.status()).toBe(201);
  let page: PageRecord = await response.json();
  const path = "/api/pages/" + page.id;
  expect(
    (await request.get(api + "/api/public/page?slug=lifecycle")).status(),
  ).toBe(404);
  page.document.sections = Object.entries(componentRegistry).map(
    ([type, entry], order) => ({
      id: randomUUID(),
      type,
      order,
      isVisible: true,
      settings: {},
      data: structuredClone(entry.defaults),
    }),
  );
  page.document.sections[1].data.title = "PUBLIC HERO";
  page.document.metaTitle = "PUBLIC SEO";
  page.document.navigation = [
    {
      id: randomUUID(),
      label: "Public nav",
      url: "/",
      isVisible: true,
      children: [],
    },
  ];
  const save = async (doc = page.document) => {
    const res = await call("PATCH", path + "/draft", {
      revision: page.revision,
      document: doc,
    });
    expect(res.status(), await res.text()).toBe(200);
    page = await res.json();
  };
  await save();
  const loaded: PageRecord = await (await call("GET", path)).json();
  expect(loaded.document.sections).toEqual(page.document.sections);
  // Design configuration is developer-owned and cannot be changed by a content save.
  expect(loaded.document.navigation).toEqual([]);
  expect(loaded.document.sections).toHaveLength(11);
  const wrong = structuredClone(page.document);
  wrong.sections[0].type = "bad";
  expect(
    (
      await call("PATCH", path + "/draft", {
        revision: page.revision,
        document: wrong,
      })
    ).status(),
  ).toBe(400);
  expect(
    (
      await call("PATCH", path + "/draft", {
        revision: 0,
        document: page.document,
      })
    ).status(),
  ).toBe(409);
  const editor = await login(request, "editor");
  expect(
    (
      await request.post(api + path + "/publish", {
        headers: { Authorization: "Bearer " + editor.accessToken },
        data: { revision: page.revision },
      })
    ).status(),
  ).toBe(403);
  response = await call("POST", path + "/publish", { revision: page.revision });
  expect(response.status(), await response.text()).toBe(201);
  page = await response.json();
  const live = await (
    await request.get(api + "/api/public/page?slug=lifecycle")
  ).json();
  expect(live.sections[1].data.title).toBe("PUBLIC HERO");
  page.document.sections[1].data.title = "SECRET DRAFT";
  page.document.metaTitle = "SECRET SEO";
  page.document.slug = "draft-path";
  page.document.navigation = [
    {
      id: randomUUID(),
      label: "SECRET NAV",
      url: "/",
      isVisible: true,
      children: [],
    },
  ];
  await save();
  response = await request.get(api + "/api/public/page?slug=lifecycle");
  expect(await response.json()).toEqual(live);
  expect(
    (await request.get(api + "/api/public/page?slug=draft-path")).status(),
  ).toBe(404);
  const html = await (
    await request.get("http://127.0.0.1:3100/lifecycle")
  ).text();
  expect(html).toContain("PUBLIC HERO");
  expect(html).not.toContain("SECRET");
  expect(html).toContain("PUBLIC SEO");
  const preview = await (
    await call("POST", path + "/preview", page.document)
  ).json();
  expect((await request.get(api + "/api/public/preview")).status()).toBe(401);
  expect(
    (
      await request.get(api + "/api/public/preview", {
        headers: { Authorization: "Bearer " + preview.token + "tampered" },
      })
    ).status(),
  ).toBe(401);
  response = await request.get(api + "/api/public/preview", {
    headers: { Authorization: "Bearer " + preview.token },
  });
  expect(response.headers()["cache-control"]).toContain("no-store");
  expect(await response.text()).toContain("SECRET DRAFT");
  const previewHtml = await (
    await request.get("http://127.0.0.1:3100/preview?token=" + preview.token)
  ).text();
  expect(previewHtml).toContain("SECRET DRAFT");
  expect(previewHtml).toContain("noindex");
  response = await call("POST", path + "/versions/1/restore", {
    revision: page.revision,
  });
  expect(response.status()).toBe(201);
  page = await response.json();
  expect(page.document.sections[1].data.title).toBe("PUBLIC HERO");
  expect(
    await (await request.get(api + "/api/public/page?slug=lifecycle")).json(),
  ).toEqual(live);
  const hidden = {
    ...structuredClone(page.document.sections[1]),
    id: randomUUID(),
    order: 11,
    isVisible: false,
    data: { ...page.document.sections[1].data, title: "HIDDEN SECRET" },
  };
  page.document.sections.push(hidden);
  expect(
    (
      await call("PATCH", path + "/draft", {
        revision: page.revision,
        document: page.document,
      })
    ).status(),
  ).toBe(400);
  page = await (
    await call("POST", path + "/publish", { revision: page.revision })
  ).json();
  expect(
    await (await request.get(api + "/api/public/page?slug=lifecycle")).text(),
  ).not.toContain("HIDDEN SECRET");
  const ids = page.document.sections.map((s) => s.id).reverse();
  expect(
    (
      await call("PATCH", path + "/sections/reorder", {
        sectionIds: [ids[0], ids[0]],
      })
    ).status(),
  ).toBe(400);
  expect(
    (
      await call("PATCH", path + "/sections/reorder", { sectionIds: ids })
    ).status(),
  ).toBe(200);
  page = await (await call("GET", path)).json();
  expect(page.document.sections.map((s) => s.id)).toEqual(ids);
  const other: PageRecord = await (
    await call("POST", "/api/pages", { title: "Other", slug: "other" })
  ).json();
  expect(
    (
      await call("PATCH", "/api/pages/" + other.id + "/draft", {
        revision: other.revision,
        document: {
          ...other.document,
          sections: [{ ...page.document.sections[0], order: 0 }],
        },
      })
    ).status(),
  ).toBe(400);
  const duplicate: PageRecord = await (
    await call("POST", path + "/duplicate")
  ).json();
  expect(duplicate.status).toBe("DRAFT");
  expect(duplicate.document.sections).toHaveLength(11);
  expect(duplicate.document.sections[0].id).not.toBe(
    page.document.sections[0].id,
  );
  response = await call("POST", "/api/pages/" + other.id + "/sections", {
    type: "hero",
    data: componentRegistry.hero.defaults,
  });
  expect(response.status()).toBe(201);
  const otherLoaded: PageRecord = await (
    await call("GET", "/api/pages/" + other.id)
  ).json();
  const sectionId = otherLoaded.document.sections[0].id;
  expect(
    (
      await call("PATCH", "/api/sections/" + sectionId, {
        data: {
          ...componentRegistry.hero.defaults,
          title: "Updated via section API",
        },
      })
    ).status(),
  ).toBe(200);
  expect((await call("DELETE", "/api/sections/" + sectionId)).status()).toBe(
    200,
  );
  expect(
    await (await call("GET", "/api/pages/" + other.id + "/sections")).json(),
  ).toHaveLength(0);
  const design = {
    theme: { ...page.document.theme, primary: "#123456" },
    navigation: [
      {
        id: randomUUID(),
        label: "Top",
        url: "/",
        isVisible: true,
        children: [
          {
            id: randomUUID(),
            label: "Nested",
            url: "/nested",
            isVisible: false,
            children: [],
          },
        ],
      },
    ],
  };
  expect((await call("PUT", "/api/site", design)).status()).toBe(200);
  expect(await (await call("GET", "/api/site")).json()).toEqual(design);
  const upload = await request.post(api + "/api/media", {
    headers,
    multipart: {
      file: {
        name: "tiny.png",
        mimeType: "image/png",
        buffer: Buffer.from(
          "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAE0lEQVQImWP4z8DwnwGM/zMwAAAf7gP9qS/A4gAAAABJRU5ErkJggg==",
          "base64",
        ),
      },
    },
  });
  expect(upload.status(), await upload.text()).toBe(201);
  const media = await upload.json();
  expect((await request.get(api + media.url)).status()).toBe(200);
  expect((await call("GET", "/api/media?q=tiny&kind=image")).status()).toBe(
    200,
  );
  page.document.ogImage = media.url;
  await save();
  expect((await call("DELETE", "/api/media/" + media.id)).status()).toBe(409);
  const badUpload = await request.post(api + "/api/media", {
    headers,
    multipart: {
      file: {
        name: "attack.svg",
        mimeType: "image/svg+xml",
        buffer: Buffer.from('<svg onload="alert(1)"/>'),
      },
    },
  });
  expect(badUpload.status()).toBe(400);
  expect((await call("POST", path + "/archive")).status()).toBe(201);
  expect(
    (await request.get(api + "/api/public/page?slug=lifecycle")).status(),
  ).toBe(404);
  expect((await call("DELETE", path)).status()).toBe(200);
  expect((await call("GET", path + "/versions")).status()).toBe(404);
  expect((await call("DELETE", "/api/media/" + media.id)).status()).toBe(200);
  expect((await request.get(api + media.url)).status()).toBe(404);
  expect(
    (await call("GET", "/api/pages/" + duplicate.id + "/audit")).status(),
  ).toBe(200);
  const refresh = await request.post(api + "/auth/refresh", {
    data: { refreshToken: session.refreshToken },
  });
  expect(refresh.status()).toBe(200);
  expect((await call("GET", "/api/pages")).status()).toBe(401);
  expect(
    (
      await request.post(api + "/auth/refresh", {
        data: { refreshToken: session.refreshToken },
      })
    ).status(),
  ).toBe(401);
  const renewed = await refresh.json();
  await request.post(api + "/auth/logout", {
    data: { refreshToken: renewed.refreshToken },
  });
  expect(
    (
      await request.get(api + "/api/pages", {
        headers: { Authorization: "Bearer " + renewed.accessToken },
      })
    ).status(),
  ).toBe(401);
});
