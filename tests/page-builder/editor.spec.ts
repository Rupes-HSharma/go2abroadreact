import { test, expect } from "@playwright/test";

test("content editor changes predefined fields without exposing design controls", async ({
  page,
  request,
}) => {
  const login = await request.post("http://127.0.0.1:4100/auth/admin/login", {
    data: { email: "admin@cms-test.example", password: "Cms-Test-only-123!" },
  });
  const session = await login.json();
  await page.addInitScript(({ accessToken, refreshToken }) => {
    localStorage.setItem("admin_access_token", accessToken);
    localStorage.setItem("admin_refresh_token", refreshToken);
  }, session);

  const headers = { Authorization: "Bearer " + session.accessToken };
  const created = await request.post("http://127.0.0.1:4100/api/pages", {
    headers,
    data: { title: "Content editor page", slug: "content-editor-page" },
  });
  expect(created.status()).toBe(201);
  const pageRecord = await created.json();
  const section = await request.post(
    "http://127.0.0.1:4100/api/pages/" + pageRecord.id + "/sections",
    {
      headers,
      data: {
        type: "hero",
        data: {
          eyebrow: "",
          title: "Initial content title",
          description: "Initial description",
          image: "",
          imageAlt: "",
          buttonText: "Get started",
          buttonUrl: "/contact",
        },
      },
    },
  );
  expect(section.status()).toBe(201);

  await page.goto("/pages/" + pageRecord.id);
  await expect(page.getByRole("heading", { name: "Content editor page" })).toBeVisible();
  await expect(page.getByText("Edit the content below.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Hero", exact: true })).toBeVisible();
  await expect(page.getByTestId("builder-canvas")).toHaveCount(0);
  await expect(page.getByText("Component library")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Undo" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Theme" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Navigation" })).toHaveCount(0);

  await page.getByLabel("Title *", { exact: true }).fill("Updated content title");
  await page.getByRole("button", { name: "Save Changes", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("saved as a draft");
  await page.reload();
  await expect(page.getByLabel("Title *", { exact: true })).toHaveValue(
    "Updated content title",
  );
});
