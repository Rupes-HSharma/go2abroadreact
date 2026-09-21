import { defineConfig } from "@playwright/test";
import { existsSync } from "node:fs";
const chrome =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
export default defineConfig({
  testDir: "./tests/page-builder",
  fullyParallel: false,
  workers: 1,
  timeout: 60000,
  expect: { timeout: 15000 },
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:3101",
    headless: true,
    viewport: { width: 1600, height: 1000 },
    launchOptions: existsSync(chrome) ? { executablePath: chrome } : {},
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: [
    {
      command: "node scripts/cms-test-server.cjs",
      url: "http://127.0.0.1:4100/health",
      timeout: 60000,
      gracefulShutdown: { signal: "SIGTERM", timeout: 10000 },
    },
    {
      command:
        "cd apps/admin && NEXT_PUBLIC_API_URL=http://127.0.0.1:4100 NEXT_PUBLIC_WEBSITE_URL=http://127.0.0.1:3100 NEXT_BUILD_DIR=.next-test ../../node_modules/.bin/next dev -p 3101",
      url: "http://127.0.0.1:3101",
      timeout: 120000,
    },
    {
      command:
        "cd apps/frontend && NEXT_PUBLIC_API_URL=http://127.0.0.1:4100 NEXT_BUILD_DIR=.next-test ../../node_modules/.bin/next dev -p 3100",
      url: "http://127.0.0.1:3100/preview",
      timeout: 120000,
    },
  ],
});
