const { createRequire } = require("node:module");
const { resolve, join } = require("node:path");
const { randomUUID } = require("node:crypto");
const { mkdtemp, rm } = require("node:fs/promises");
const { tmpdir } = require("node:os");
const { execFileSync } = require("node:child_process");
const apiDir = resolve(__dirname, "../apps/api");
const apiRequire = createRequire(join(apiDir, "package.json"));
apiRequire("dotenv").config({ path: join(apiDir, ".env"), quiet: true });
const { PrismaClient } = apiRequire("@prisma/client");
const bcrypt = apiRequire("bcrypt");
const schema = "pb_test_" + randomUUID().replaceAll("-", "");
const sourceUrl = process.env.DATABASE_URL;
const admin = new PrismaClient({ datasources: { db: { url: sourceUrl } } });
let app;
let db;
let mediaDirectory;
let stopping = false;
async function stop() {
  if (stopping) return;
  stopping = true;
  if (app) await app.close();
  if (db) await db.$disconnect();
  // Only the unique schema and temporary directory created by this run are removed.
  if (/^pb_test_[a-f0-9]{32}$/.test(schema))
    await admin.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
  await admin.$disconnect();
  if (mediaDirectory)
    await rm(mediaDirectory, { recursive: true, force: true });
}
async function main() {
  await admin.$executeRawUnsafe(`CREATE SCHEMA "${schema}"`);
  const url = new URL(sourceUrl);
  url.searchParams.set("schema", schema);
  process.env.DATABASE_URL = url.toString();
  process.env.JWT_SECRET =
    "page-builder-isolated-test-secret-not-for-production";
  process.env.CORS_ORIGINS = "http://127.0.0.1:3100,http://127.0.0.1:3101";
  mediaDirectory = await mkdtemp(join(tmpdir(), "go2abroad-cms-test-"));
  process.env.MEDIA_DIRECTORY = mediaDirectory;
  execFileSync(
    process.execPath,
    [apiRequire.resolve("prisma/build/index.js"), "migrate", "deploy"],
    { cwd: apiDir, env: process.env, stdio: "pipe" },
  );
  db = new PrismaClient();
  const passwordHash = await bcrypt.hash("Cms-Test-only-123!", 10);
  for (const role of ["ADMIN", "EDITOR", "STUDENT"])
    await db.user.create({
      data: {
        email: role.toLowerCase() + "@cms-test.example",
        name: role,
        role,
        passwordHash,
      },
    });
  apiRequire("reflect-metadata");
  const { NestFactory } = apiRequire("@nestjs/core");
  const { AppModule } = apiRequire("./dist/app.module");
  const { configureApp } = apiRequire("./dist/configure-app");
  app = await NestFactory.create(AppModule, { logger: ["error", "warn"] });
  configureApp(app, false);
  await app.listen(4100, "127.0.0.1");
  console.log("Isolated CMS API ready on 4100");
}
for (const signal of ["SIGTERM", "SIGINT"])
  process.on(signal, () => {
    stop().finally(() => process.exit());
  });
main().catch(async (error) => {
  console.error(error.message);
  await stop();
  process.exitCode = 1;
});
