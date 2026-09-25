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

  const courseCards = [
    {
      title: "Bachelor's Degree",
      slug: "undergraduate",
      sortOrder: 1,
      level: "Undergraduate",
      duration: "3–4 year full-time programs",
      description: "3–4 year full-time programs across Business, Engineering, Computer Science, Arts and more — ideal for students right after Class 12.",
      highlights: "Direct entry after Class 12\nFoundation / pathway options available\nCo-op & internship pathways\nPopular in Canada, UK, Australia, USA",
      popularCountries: "Canada, UK, Australia, USA",
      isPublished: true,
    },
    {
      title: "Master's Degree",
      slug: "postgraduate",
      sortOrder: 2,
      level: "Postgraduate",
      duration: "1–2 year specialised programs",
      description: "1–2 year specialised programs (MS/MA/MSc) to deepen expertise and unlock higher-paying, skilled-migration-eligible roles.",
      highlights: "Thesis & non-thesis tracks\nStrong PR / PGWP pathways\nSTEM & Humanities specialisations\nPopular in Germany, Canada, UK, Australia",
      popularCountries: "Germany, Canada, UK, Australia",
      isPublished: true,
    },
    {
      title: "MBA & Management",
      slug: "mba",
      sortOrder: 3,
      level: "Management",
      duration: "1–2 year formats available",
      description: "Full-time, executive or online MBA programs for working professionals and career-switchers aiming for leadership roles.",
      highlights: "1–2 year formats available\nGMAT / GRE waiver options\nStrong global alumni networks\nPopular in USA, UK, Canada, Singapore",
      popularCountries: "USA, UK, Canada, Singapore",
      isPublished: true,
    },
    {
      title: "PhD & Research",
      slug: "phd",
      sortOrder: 4,
      level: "Doctorate",
      duration: "Funded research programs",
      description: "Funded research programs with stipends — ideal for students pursuing academia or advanced research careers.",
      highlights: "Fully-funded stipend options\nResearch supervisor matching\nPublication & conference support\nPopular in Germany, USA, UK, Australia",
      popularCountries: "Germany, USA, UK, Australia",
      isPublished: true,
    },
    {
      title: "Diploma & Certificate",
      slug: "diploma",
      sortOrder: 5,
      level: "Diploma",
      duration: "6 months – 2 years",
      description: "Short, skill-focused programs (6 months – 2 years) offering fast, affordable entry into the global job market.",
      highlights: "Lower tuition & faster completion\nStrong for vocational & trade careers\nPathway to Bachelor's / PR\nPopular in Canada, Australia, Ireland",
      popularCountries: "Canada, Australia, Ireland",
      isPublished: true,
    },
    {
      title: "English Language Programs",
      slug: "language",
      sortOrder: 6,
      level: "Foundation",
      duration: "Foundation and intensive English programs",
      description: "Foundation and intensive English programs, linked to IELTS/TOEFL/PTE, to meet university admission requirements.",
      highlights: "Conditional admission pathways\nAcademic & General training tracks\nScore-improvement guarantee programs\nAvailable before any destination country",
      popularCountries: "Available before any destination country",
      isPublished: true,
    },
  ];

  for (const course of courseCards) {
    await prisma.course.upsert({
      where: { slug: course.slug },
      update: course,
      create: course,
    });
  }

  await prisma.course.upsert({
    where: { slug: "msc-international-business" },
    update: { universityId: university.id, isPublished: true },
    create: { title: "MSc International Business", slug: "msc-international-business", level: "Postgraduate", field: "Business", duration: "1 year", universityId: university.id, isPublished: true },
  });

  const faqEntries = [
    ["General", "What services does Go2Abroad offer?", "We help with study abroad admissions, profile building, university shortlisting, scholarships, SOP/LOR writing, visa filing, education loans, forex, accommodation and post-arrival support — see our full services list.", 1],
    ["General", "How do I get started with Go2Abroad?", "Book a free counselling session from our Contact page or WhatsApp us directly. We'll review your profile and recommend the right countries and courses within 48 hours.", 2],
    ["General", "Is the first consultation really free?", "Yes. Your first counselling session and profile evaluation are completely free, with no obligation to continue with us.", 3],
    ["General", "Which class 12 / graduation percentage do I need?", "Requirements vary by country, university and course. Many destinations accept 55%+ with the right profile and English score — we'll assess your specific case for free.", 4],
    ["Visa & Documentation", "How long does a student visa take to process?", "Processing times depend on the destination country, visa category and application complexity. We give you a realistic, country-specific timeline once your file is ready.", 5],
    ["Visa & Documentation", "Do you help if my visa was previously refused?", "Yes. We review the refusal reasons carefully, strengthen your documentation and financials, and help you explore reapplication or alternative pathways.", 6],
    ["Visa & Documentation", "Will I get interview preparation for my visa?", "Yes, we run personalised mock interviews and coaching sessions so you can approach your visa interview with confidence.", 7],
    ["Visa & Documentation", "What documents will I need for my application?", "Typically academic transcripts, English test scores, SOP, LORs, passport and financial proof. We give you a checklist tailored to your target country.", 8],
    ["Finances & Loans", "Can you help me get an education loan?", "Yes, we work with partner banks and NBFCs to help you compare and secure the best interest rates and repayment terms for your education loan.", 9],
    ["Finances & Loans", "Are scholarships available for Indian students?", "Many universities offer merit and need-based scholarships. We identify the ones you qualify for and help you apply on time.", 10],
    ["Finances & Loans", "Do you provide forex services for tuition payment?", "Yes, we offer competitive forex rates and hassle-free transfers for both tuition fees and living expenses.", 11],
    ["Destinations & After Arrival", "Which countries do you help students apply to?", "USA, UK, Canada, Australia, New Zealand, Germany, Ireland, Singapore and 15+ more — see our full Study Destinations list.", 12],
    ["Destinations & After Arrival", "Will you help me find accommodation abroad?", "Yes, we help you find safe, affordable and verified housing near your university before you even fly out.", 13],
    ["Destinations & After Arrival", "Do you provide support after I land abroad?", "Yes — airport pickup guidance, local bank account setup, SIM card and settling-in support are all part of our post-arrival services.", 14],
  ] as const;

  for (const [category, question, answer, sortOrder] of faqEntries) {
    const existingFaq = await prisma.faq.findFirst({ where: { question } });
    if (existingFaq) {
      await prisma.faq.update({ where: { id: existingFaq.id }, data: { category, answer, sortOrder, isPublished: true } });
    } else {
      await prisma.faq.create({ data: { category, question, answer, sortOrder, isPublished: true } });
    }
  }

  const serviceEntries = [
    ["Profile & Career Counselling", "counselling", "fa-user-graduate", "One-on-one sessions to map your academic profile, career goals and the right study-abroad path for you."],
    ["Portfolio & Profile Building", "profile-building", "fa-id-card", "We help build a strong academic and extracurricular profile that stands out to admission committees."],
    ["University Shortlisting", "university-shortlisting", "fa-building-columns", "A curated shortlist of universities matched to your budget, scores, and career goals — not just rankings."],
    ["Scholarship Guidance", "scholarship-guidance", "fa-award", "We identify and help you apply for scholarships, grants and assistantships you're genuinely eligible for."],
    ["SOP & LOR Writing", "sop-writing", "fa-pen-nib", "Expert-reviewed Statements of Purpose and Letters of Recommendation that tell your story compellingly."],
    ["Visa Assistance", "visa-assistance", "fa-stamp", "End-to-end visa filing support — documentation checks, mock interviews and real-time application tracking."],
    ["Education Loan Assistance", "loan-assistance", "fa-hand-holding-dollar", "We help you compare and secure the best education loan offers from partner banks and NBFCs."],
    ["English Proficiency Test Prep", "test-preparation", "fa-headset", "IELTS, TOEFL and PTE coaching with mock tests and a personalised score-improvement plan."],
    ["Interview Preparation", "interview-preparation", "fa-comments", "Mock visa and university interviews so you walk in prepared, confident and ready for any question."],
    ["Accommodation Assistance", "accommodation", "fa-house-chimney", "Safe, affordable and verified housing options near your university, booked before you even land."],
    ["Forex Services", "forex", "fa-money-bill-transfer", "Competitive forex rates and zero-hassle transfers for tuition payments and living expenses."],
    ["Post-Arrival Support", "post-arrival", "fa-plane-arrival", "Airport pickup guidance, local bank account setup and settling-in assistance once you land abroad."],
    ["Alumni Meets & Mentorship", "alumni", "fa-people-group", "Connect with Go2Abroad alumni already studying and working in your destination country."],
    ["24×7 Helpline Support", "helpline", "fa-phone-volume", "Round-the-clock support for emergencies and queries — peace of mind for students and parents alike."],
  ] as const;

  for (const [title, slug, icon, description] of serviceEntries) {
    const sortOrder = serviceEntries.findIndex((entry) => entry[1] === slug) + 1;
    await prisma.serviceItem.upsert({
      where: { slug },
      update: { title, icon, description, sortOrder, isPublished: true },
      create: { title, slug, icon, description, sortOrder, isPublished: true },
    });
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
