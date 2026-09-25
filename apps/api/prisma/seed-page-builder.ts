import "dotenv/config";
import { randomUUID } from "node:crypto";
import { PrismaClient, Prisma } from "@prisma/client";
import {
  componentRegistry,
  defaultTheme,
  documentSchema,
} from "@go2abroad/page-builder";
const prisma = new PrismaClient();
async function main() {
  const sections = Object.entries(componentRegistry).map(
    ([type, config], order) => ({
      id: randomUUID(),
      type,
      order,
      isVisible: true,
      settings: {},
      data: config.defaults,
    }),
  );
  const document = documentSchema.parse({
    title: "Go2Abroad Home",
    slug: "home",
    sections,
    theme: defaultTheme,
    navigation: [],
  });
  await prisma.theme.upsert({
    where: { id: "default" },
    update: {},
    create: { id: "default", configuration: defaultTheme },
  });
  await prisma.navigation.upsert({
    where: { id: "default" },
    update: {},
    create: { id: "default" },
  });
  await prisma.page.upsert({
    where: { slug: document.slug },
    update: {},
    create: {
      title: document.title,
      slug: document.slug,
      draftTheme: defaultTheme,
      draftNavigation: [],
      sections: {
        create: sections.map((section) => ({
          ...section,
          data: JSON.parse(
            JSON.stringify(section.data),
          ) as Prisma.InputJsonValue,
        })),
      },
    },
  });
  console.log(
    "Go2Abroad home draft and site defaults are ready. Existing pages and users were not changed.",
  );
}
main()
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
