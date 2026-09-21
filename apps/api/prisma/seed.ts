import "dotenv/config";
import * as bcrypt from "bcrypt";
import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) throw new Error(`${name} is required`);
  return value;
}

async function main(): Promise<void> {
  const adminEmail = required("SEED_ADMIN_EMAIL", "admin@go2abroad.local").toLowerCase();
  const counsellorEmail = required("SEED_COUNSELLOR_EMAIL", "counsellor@go2abroad.local").toLowerCase();
  const studentEmail = required("SEED_STUDENT_EMAIL", "student@go2abroad.local").toLowerCase();
  const adminPassword = required("SEED_ADMIN_PASSWORD");
  const counsellorPassword = required("SEED_COUNSELLOR_PASSWORD");
  const studentPassword = required("SEED_STUDENT_PASSWORD");

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { name: "Go2Abroad Admin", role: UserRole.ADMIN, passwordHash: await bcrypt.hash(adminPassword, 12), status: "ACTIVE" },
    create: { email: adminEmail, name: "Go2Abroad Admin", role: UserRole.ADMIN, passwordHash: await bcrypt.hash(adminPassword, 12) },
  });

  const student = await prisma.user.upsert({
    where: { email: studentEmail },
    update: { name: "Demo Student", role: UserRole.STUDENT, passwordHash: await bcrypt.hash(studentPassword, 12), status: "ACTIVE" },
    create: { email: studentEmail, name: "Demo Student", role: UserRole.STUDENT, passwordHash: await bcrypt.hash(studentPassword, 12) },
  });

  const counsellor = await prisma.user.upsert({
    where: { email: counsellorEmail },
    update: { name: "Demo Counsellor", role: UserRole.COUNSELLOR, passwordHash: await bcrypt.hash(counsellorPassword, 12), status: "ACTIVE" },
    create: { email: counsellorEmail, name: "Demo Counsellor", role: UserRole.COUNSELLOR, passwordHash: await bcrypt.hash(counsellorPassword, 12) },
  });

  await prisma.studentProfile.upsert({
    where: { userId: student.id },
    update: { nationality: "Indian", country: "United Kingdom", highestEducation: "Bachelor's degree" },
    create: { userId: student.id, nationality: "Indian", country: "United Kingdom", highestEducation: "Bachelor's degree" },
  });

  await prisma.websiteSetting.upsert({
    where: { key: "default" },
    update: {},
    create: {
      key: "default", siteName: "Go2Abroad", slogan: "Connecting Dreams",
      logoUrl: "/images/logo.svg", logoLightUrl: "/images/logo-white.svg", faviconUrl: "/favicon.png",
      footerTitle: "Your journey starts here", footerDescription: "Expert guidance for your global education journey.",
      copyrightText: "© 2026 Go2Abroad. All rights reserved.", seoTitle: "Go2Abroad | Study Abroad Consultancy",
      seoDescription: "Your trusted guide to studying abroad.", seoKeywords: "study abroad, international education, universities",
      contactEmail: "hello@go2abroad.com", contactPhone: "+91 00000 00000", whatsappNumber: "+910000000000",
      address: "India", officeHours: "Monday - Saturday, 9:00 AM - 6:00 PM",
      socialLinks: { facebook: "https://facebook.com", instagram: "https://instagram.com", linkedin: "https://linkedin.com", youtube: "https://youtube.com" },
    },
  });

  const university = await prisma.university.upsert({
    where: { slug: "university-of-demo" },
    update: { name: "University of Demo", country: "United Kingdom", city: "London", isPublished: true },
    create: { name: "University of Demo", slug: "university-of-demo", country: "United Kingdom", city: "London", isPublished: true },
  });

  await prisma.course.upsert({
    where: { slug: "msc-international-business" },
    update: { universityId: university.id, isPublished: true },
    create: { title: "MSc International Business", slug: "msc-international-business", level: "Postgraduate", field: "Business", duration: "1 year", universityId: university.id, isPublished: true },
  });

  const faq = await prisma.faq.findFirst({ where: { question: "How can I start my study abroad journey?" } });
  if (!faq) {
    await prisma.faq.create({ data: { question: "How can I start my study abroad journey?", answer: "Contact our counsellors for a free profile assessment and shortlist of suitable universities.", category: "Getting started", sortOrder: 1, isPublished: true } });
  }

  const review = await prisma.review.findFirst({ where: { name: "Demo Student", quote: { startsWith: "The Go2Abroad team" } } });
  if (!review) {
    await prisma.review.create({ data: { name: "Demo Student", role: "International student", quote: "The Go2Abroad team made my application journey simple and clear.", rating: 5, isPublished: true } });
  }

  const lead = await prisma.lead.findFirst({ where: { email: "demo.lead@go2abroad.local" } });
  if (!lead) {
    await prisma.lead.create({ data: { firstName: "Demo Lead", email: "demo.lead@go2abroad.local", phone: "+91 90000 00000", destination: "United Kingdom", interest: "International Business", message: "I would like guidance choosing a university.", source: "seed", status: "NEW" } });
  }

  await prisma.blogPost.upsert({
    where: { slug: "how-to-start-studying-abroad" },
    update: { title: "How to Start Studying Abroad", status: "PUBLISHED", publishedAt: new Date("2026-01-15T09:00:00.000Z"), authorId: admin.id },
    create: { title: "How to Start Studying Abroad", slug: "how-to-start-studying-abroad", excerpt: "A practical starting point for planning your international education journey.", content: "Start by defining your preferred destination, course, budget, and intake. Our counsellors can help you turn those goals into a clear application plan.", status: "PUBLISHED", publishedAt: new Date("2026-01-15T09:00:00.000Z"), authorId: admin.id },
  });

  const homePage = await prisma.page.upsert({
    where: { slug: "home" }, update: {}, create: { title: "Home", slug: "home", metaTitle: "Go2Abroad | Study Abroad Consultancy", metaDescription: "Your trusted guide to studying abroad." },
  });
  if (await prisma.pageSection.count({ where: { pageId: homePage.id } }) === 0) {
    await prisma.pageSection.create({ data: { pageId: homePage.id, type: "hero", order: 0, data: { title: "Study abroad with confidence", description: "Expert guidance for your global education journey.", buttonText: "Start your journey", buttonUrl: "/contact" } } });
  }

  console.log(`Seeded admin: ${admin.email}`);
  console.log(`Seeded counsellor: ${counsellor.email}`);
  console.log(`Seeded student: ${student.email}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
}).finally(async () => prisma.$disconnect());
