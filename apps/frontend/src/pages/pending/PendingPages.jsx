import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useSearchParams, useParams } from "react-router-dom";
import { submitContactForm } from "../../utils/submitContactForm";
import ModernInnerHero from "../../components/ModernInnerHero";
import { SERVICE_CATALOG } from "../../data/serviceCatalog";
import { SUCCESS_STORIES } from "../../data/successStories";
import "./pending-pages.css";

const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const SERVICES = [
  { icon: "fa-user-check", title: "Profile Evaluation", text: "Understand how your academics, experience, budget and goals translate into suitable study options.", points: ["Academic profile review", "Course-level matching", "Intake planning"] },
  { icon: "fa-list-check", title: "University Shortlisting", text: "Build a practical shortlist around your preferred country, course, budget and admission profile.", points: ["Course and university comparison", "Intake availability", "Application planning"] },
  { icon: "fa-award", title: "Scholarship Guidance", text: "Identify scholarship opportunities and organise the documents normally required for consideration.", points: ["Scholarship search", "Eligibility review", "Document checklist"] },
  { icon: "fa-file-signature", title: "SOP & LOR Support", text: "Structure your academic story and supporting documents around the requirements of your chosen applications.", points: ["SOP structure", "LOR guidance", "Application document review"] },
  { icon: "fa-passport", title: "Visa Assistance", text: "Prepare your visa documentation and understand the steps that come after receiving your offer.", points: ["Document checklist", "Application guidance", "Pre-departure preparation"] },
  { icon: "fa-building-columns", title: "Education Loan Assistance", text: "Understand education-finance options and organise the information needed to compare funding routes.", points: ["Funding requirement review", "Partner-finance options", "Document coordination"] },
  { icon: "fa-house", title: "Accommodation Assistance", text: "Plan your first stay abroad with guidance around student accommodation and arrival preparation.", points: ["Accommodation options", "Location planning", "Pre-arrival checklist"] },
  { icon: "fa-plane-arrival", title: "Post-Arrival Support", text: "Get practical guidance for the transition from your home country to your new study destination.", points: ["Arrival guidance", "Student support", "Next-step information"] },
];

const COUNTRIES = [
  { slug: "usa", flag: "🇺🇸", name: "United States", image: "/images/hero-usa-modern.png", tag: "Flexible programs", text: "Explore a wide range of universities and career-focused programs across the USA." },
  { slug: "uk", flag: "🇬🇧", name: "United Kingdom", image: "/images/hero-uk.png", tag: "Global recognition", text: "Compare UK universities, shorter degree pathways and a strong international student environment." },
  { slug: "canada", flag: "🇨🇦", name: "Canada", image: "/images/hero-canada.png", tag: "Career-focused", text: "Explore university and college pathways with practical planning for applications and arrival." },
  { slug: "australia", flag: "🇦🇺", name: "Australia", image: "/images/hero-australia.png", tag: "Student cities", text: "Plan programs across major Australian study destinations with end-to-end application support." },
  { slug: "new-zealand", flag: "🇳🇿", name: "New Zealand", image: "/images/hero-new-zealand-modern.png", tag: "Balanced lifestyle", text: "Discover study options in a welcoming environment with a focus on practical learning." },
  { slug: "germany", flag: "🇩🇪", name: "Germany", image: "/images/hero-germany.png", tag: "Research & tech", text: "Compare German programs, language requirements and application timelines." },
  { slug: "ireland", flag: "🇮🇪", name: "Ireland", image: "/images/hero-ireland.png", tag: "Tech & business", text: "Explore English-taught study options across technology, business, healthcare and more." },
  { slug: "singapore", flag: "🇸🇬", name: "Singapore", image: "/images/hero-singapore-modern.png", tag: "Asia hub", text: "Plan a study journey close to home with internationally oriented programs." },
];

const UNIVERSITIES = [
  { slug: "university-of-surrey", name: "University of Surrey", city: "Guildford, England", logo: "/images/topUniversity/ArizonaStateUniversity.jpg", url: "https://www.surrey.ac.uk/", areas: "Engineering, Computer Science & Business" },
  { slug: "university-of-east-london", name: "University of East London", city: "London, England", logo: "/images/topUniversity/eastLondon.png", url: "https://www.uel.ac.uk/", areas: "Business, Computer Science & Healthcare" },
  { slug: "coventry-university", name: "Coventry University", city: "Coventry, England", logo: "/images/topUniversity/CoventryUniversity.png", url: "https://www.coventry.ac.uk/", areas: "Computer Science, Engineering & Business" },
  { slug: "brunel-university-london", name: "Brunel University London", city: "London, England", logo: "/images/topUniversity/BrunelUniversityLondon.png", url: "https://www.brunel.ac.uk/", areas: "Engineering, Computer Science & Business" },
  { slug: "university-of-hertfordshire", name: "University of Hertfordshire", city: "Hatfield, England", logo: "/images/topUniversity/Uni_Of_Hertfordshire.png", url: "https://www.herts.ac.uk/", areas: "Computer Science, Engineering & Business" },
  { slug: "university-of-greenwich", name: "University of Greenwich", city: "London, England", logo: "/images/topUniversity/Greenwich.png", url: "https://www.gre.ac.uk/", areas: "Business, Engineering & Computing" },
];

const STORIES = SUCCESS_STORIES;

const BLOGS = [
  { slug: "study-in-the-uk-planning-your-university-journey", title: "Study in the UK: Planning Your University Journey", category: "UK", image: "/images/blog-image1.jpg", excerpt: "A practical overview of shortlisting universities, preparing documents and planning your application timeline.", read: "5 min read" },
  { slug: "study-in-australia-what-students-should-plan-first", title: "Study in Australia: What Students Should Plan First", category: "Australia", image: "/images/blog-image2.jpg", excerpt: "Key planning areas to consider when comparing courses, institutions, locations and living arrangements.", read: "6 min read" },
  { slug: "study-in-canada-choosing-the-right-pathway", title: "Study in Canada: Choosing the Right Pathway", category: "Canada", image: "/images/blog-image3.jpg", excerpt: "Understand the difference between common study pathways and how to structure your shortlist.", read: "5 min read" },
  { slug: "scholarship-planning-for-international-students", title: "Scholarship Planning for International Students", category: "Scholarships", image: "/images/blog-image4.jpg", excerpt: "Organise your profile, documents and deadlines so you can approach scholarship opportunities systematically.", read: "4 min read" },
  { slug: "student-visa-preparation-document-checklist", title: "Student Visa Preparation: A Document Checklist", category: "Visa", image: "/images/blog-image5.jpg", excerpt: "A simple checklist to help you prepare documents and keep your visa process organised.", read: "5 min read" },
  { slug: "how-to-build-a-study-abroad-shortlist", title: "How to Build a Study Abroad Shortlist", category: "Guidance", image: "/images/blog-image6.jpg", excerpt: "Compare course fit, location, budget and entry requirements before making your final shortlist.", read: "6 min read" },
];

const COURSES = [
  { slug: "undergraduate", title: "Undergraduate", level: "UG", image: "/images/hero-undergraduate.png", text: "Bachelor's and undergraduate pathways for students beginning their international academic journey." },
  { slug: "postgraduate", title: "Postgraduate / Master's", level: "PG", image: "/images/hero-postgraduate-modern.png", text: "Specialised master's pathways designed around academic progression and career goals." },
  { slug: "mba", title: "MBA & Management", level: "MBA", image: "/images/hero-mba.png", text: "Management and business programs for students looking to strengthen leadership and commercial skills." },
  { slug: "phd", title: "PhD & Doctorate", level: "PHD", image: "/images/hero-phd-modern.png", text: "Research-led doctoral pathways with planning around supervisors, institutions and research goals." },
  { slug: "diploma", title: "Diploma / Certificate", level: "DIPLOMA", image: "/images/hero-diploma.png", text: "Focused programs for practical learning, career preparation or academic progression." },
  { slug: "language", title: "English Language", level: "LANGUAGE", image: "/images/hero-language-modern.png", text: "English-language study and test-preparation pathways for international study plans." },
];

const PARTNERS = [
  ["HDFC Credila", "/images/partners/credila.png", "Education finance"],
  ["Avanse", "/images/partners/avanse.png", "Education finance"],
  ["Poonawalla Fincorp", "/images/partners/poonawalla-fincorp.png", "Education finance"],
  ["YES BANK", "/images/partners/yes-bank.png", "Banking"],
  ["Axis Bank", "/images/partners/axis-bank.png", "Banking"],
  ["ICICI Bank", "/images/partners/icici-bank.png", "Banking"],
  ["IDFC FIRST Bank", "/images/partners/idfc-first.png", "Banking"],
  ["Auxilo", "/images/partners/auxilo.png", "Education finance"],
  ["InCred", "/images/partners/incred.png", "Education finance"],
  ["Edgro", "/images/partners/edgro.png", "Education finance"],
  ["Tata Capital", "/images/partners/tata-capital.png", "Education finance"],
  ["MPOWER", "/images/partners/mpower.png", "International student finance"],
  ["Prodigy Finance", "/images/partners/prodigy.png", "International student finance"],
  ["US Cosigner", "/images/partners/us-cosigner.jpg", "Student finance"],
  ["Saraswat Bank", "/images/partners/saraswat-bank.png", "Banking"],
];

function setPageMeta(title, description) {
  document.title = `${title} | Go2Abroad`;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = description;
}

function PendingHero({ eyebrow = "GO2ABROAD", title, intro, image = "/images/inner-heroes/hero-inner-services.png", children, showActions = true, showMeta = true, compact = false }) {
  return (
    <ModernInnerHero
      eyebrow={eyebrow}
      title={title}
      intro={intro}
      image={image}
      imageAlt={title}
      badge="Go2Abroad guidance"
      primaryLabel="Get Free Counselling"
      primaryTo="/inquiry-form"
      secondaryLabel="Explore Destinations"
      secondaryTo="/destinations"
      meta={["Student-first guidance", "Application support", "Visa preparation"]}
      icon="fa-graduation-cap"
      tone="destination"
      themeKey="brand"
      className="pending-modern-hero"
      showActions={showActions}
      showMeta={showMeta}
      compact={compact}
    >
      {children}
    </ModernInnerHero>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="pending-section-heading">
      <span className="pending-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ActionBand({ title = "Ready to plan your next step?", text = "Share your profile and our team can help you understand the right options." }) {
  return (
    <section className="pending-action-band">
      <div className="container">
        <div className="pending-action-inner">
          <div>
            <span className="pending-eyebrow">FREE GUIDANCE</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link className="pending-btn" to="/inquiry-form">Start an Enquiry <i className="fa-solid fa-arrow-right" /></Link>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICE_CATALOG.find((item) => item.slug === slug) || SERVICE_CATALOG[0];
  useEffect(() => { setPageMeta(service.title, `${service.title} | Go2Abroad study abroad support.`); }, [service.title]);
  return (
    <>
      <PendingHero eyebrow="GO2ABROAD SERVICES" title={service.title} intro={service.text} image="/images/inner-heroes/hero-inner-services.png">
        <div className="pending-hero-actions"><Link className="pending-btn" to="/inquiry-form">Get Service Guidance <i className="fa-solid fa-arrow-right" /></Link><Link className="pending-text-link" to="/services">View All Services <i className="fa-solid fa-arrow-right" /></Link></div>
      </PendingHero>
      <main className="pending-page pending-rich-page">
        <div className="container">
          <SectionHeading eyebrow="SERVICE OVERVIEW" title={`How ${service.title} supports your journey`} text="The exact scope of support can vary by destination, institution and student profile. Use this page as a clear starting point and confirm the details with the Go2Abroad team." />
          <div className="g2-service-detail-layout">
            <article className="g2-service-detail-main">
              <div className="g2-service-detail-icon"><i className={`fa-solid ${service.icon}`} /></div>
              <span className="pending-eyebrow">WHAT'S INCLUDED</span>
              <h2>Practical support, from planning to the next step.</h2>
              <p>{service.text}</p>
              <div className="g2-service-points">
                {service.points.map((point, index) => <div key={point}><span>0{index + 1}</span><strong>{point}</strong></div>)}
              </div>
              {service.slug === "university-shortlisting" && (
                <div className="g2-university-shortlist-panel">
                  <div className="g2-university-shortlist-heading">
                    <span className="pending-eyebrow">FEATURED UNIVERSITY OPTIONS</span>
                    <h3>Explore universities before building your final shortlist.</h3>
                    <p>Open any university below for a dedicated profile page with temporary overview content, popular study areas and application-planning notes.</p>
                  </div>
                  <div className="row g-3">
                    {UNIVERSITIES.map((university) => (
                      <div className="col-md-6" key={university.slug}>
                        <Link to={`/university/${university.slug}`} className="g2-university-mini-card">
                          <span className="g2-university-mini-logo"><img src={img(university.logo)} alt="" /></span>
                          <span className="g2-university-mini-copy"><strong>{university.name}</strong><small>{university.city}</small><em>View University Details <i className="fa-solid fa-arrow-right" /></em></span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
            <aside className="g2-service-detail-side">
              <span className="pending-eyebrow">READY TO START?</span>
              <h3>Tell us your destination, course and intake.</h3>
              <p>A counsellor can help you understand how this service fits into your wider application journey.</p>
              <Link className="pending-btn" to="/inquiry-form">Start an Enquiry <i className="fa-solid fa-arrow-right" /></Link>
            </aside>
          </div>
        </div>
      </main>
      <ActionBand title="Need this service for your application?" text="Share your study plan and ask the team about the right next step." />
    </>
  );
}

export function ServiceDetails() {
  useEffect(() => { setPageMeta("Study Abroad Services", "Explore Go2Abroad's study abroad counselling, university, application, visa, finance and post-arrival support services."); }, []);
  return (
    <>
      <PendingHero eyebrow="OUR SERVICES" title="One journey. Guidance at every important step." intro="From your first profile discussion to application, visa and pre-departure planning, our service flow is built to keep your study abroad journey clear and organised." image="/images/inner-heroes/hero-inner-services.png">
        <div className="pending-hero-actions"><Link className="pending-btn" to="/inquiry-form">Get Free Counselling</Link><Link className="pending-text-link" to="/destinations">Explore Destinations <i className="fa-solid fa-arrow-right" /></Link></div>
      </PendingHero>
      <main className="pending-page pending-rich-page">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE HELP WITH" title="A complete support system for your study plan" text="Choose the area where you need help, or start with a profile evaluation and let the team map the next steps." />
          <div className="row g-4">
            {SERVICES.map((service, index) => (
              <div className="col-md-6 col-xl-3" key={service.title}>
                <article className="pending-service-card">
                  <div className="pending-icon"><i className={`fa-solid ${service.icon}`} /></div>
                  <span className="pending-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>{service.points.map((point) => <li key={point}><i className="fa-solid fa-check" />{point}</li>)}</ul>
                </article>
              </div>
            ))}
          </div>
          <div className="pending-process-grid">
            {[
              ["01", "Understand", "Profile, goals, budget and preferred destination."],
              ["02", "Shortlist", "Compare courses, universities and available intakes."],
              ["03", "Apply", "Prepare documents and track applications and offers."],
              ["04", "Prepare", "Organise visa, finance, accommodation and departure."],
            ].map(([no, title, text]) => <div className="pending-process-card" key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </main>
      <ActionBand />
    </>
  );
}

export function CountryDetails() {
  useEffect(() => { setPageMeta("Study Abroad Destinations", "Explore study destinations including the USA, UK, Canada, Australia, New Zealand, Germany, Ireland and Singapore."); }, []);
  return (
    <>
      <PendingHero eyebrow="STUDY DESTINATIONS" title="Compare destinations before you choose your next chapter." intro="Explore the countries already supported across the Go2Abroad website, then open the detailed country page for program, planning and application information." image="/images/inner-heroes/hero-inner-destinations.png">
        <div className="pending-hero-actions"><Link className="pending-btn" to="/destinations">View Main Destinations</Link><Link className="pending-text-link" to="/inquiry-form">Get Country Guidance <i className="fa-solid fa-arrow-right" /></Link></div>
      </PendingHero>
      <main className="pending-page pending-rich-page">
        <div className="container">
          <SectionHeading eyebrow="COUNTRY GUIDE" title="Popular study destinations" text="Each destination has its own academic, financial and application considerations. Use the cards below to move to the existing detailed country experience." />
          <div className="row g-4">
            {COUNTRIES.map((country) => (
              <div className="col-md-6 col-xl-3" key={country.slug}>
                <article className="pending-country-card">
                  <div className="pending-country-image"><img src={img(country.image)} alt={`${country.name} study abroad`} /><span>{country.flag}</span></div>
                  <div className="pending-country-body"><span className="pending-country-tag">{country.tag}</span><h3>{country.name}</h3><p>{country.text}</p><Link to={`/${country.slug}`} className="pending-link">Explore {country.name} <i className="fa-solid fa-arrow-right" /></Link></div>
                </article>
              </div>
            ))}
          </div>
          <div className="pending-info-strip"><div><strong>Need a country shortlist?</strong><span>Tell us your academic background, budget and preferred intake.</span></div><Link to="/inquiry-form" className="pending-outline-btn">Ask a Counsellor</Link></div>
        </div>
      </main>
    </>
  );
}

export function UniversityDetail() {
  const { slug } = useParams();
  const university = UNIVERSITIES.find((item) => item.slug === slug) || UNIVERSITIES[0];
  useEffect(() => { setPageMeta(university.name, `${university.name} | University profile and study planning with Go2Abroad.`); }, [university.name]);
  return (
    <>
      <PendingHero eyebrow="UNIVERSITY PROFILE" title={university.name} intro={`${university.city} • ${university.areas}`} image="/images/inner-heroes/hero-inner-university.png">
        <div className="pending-hero-actions"><Link className="pending-btn" to="/inquiry-form">Discuss This University <i className="fa-solid fa-arrow-right" /></Link><Link className="pending-text-link" to="/service/university-shortlisting">Back to Shortlisting <i className="fa-solid fa-arrow-right" /></Link></div>
      </PendingHero>
      <main className="pending-page pending-rich-page g2-university-detail-page">
        <div className="container">
          <div className="g2-university-detail-layout">
            <article className="g2-university-detail-main">
              <span className="pending-eyebrow">UNIVERSITY OVERVIEW</span>
              <h2>Plan your application with a clear shortlist.</h2>
              <p>{university.name} is one of the university options currently featured in the Go2Abroad website content. This temporary profile is designed to give students a starting point while the final university-specific content is prepared.</p>
              <div className="g2-university-detail-facts">
                <div><span>LOCATION</span><strong>{university.city}</strong></div>
                <div><span>POPULAR AREAS</span><strong>{university.areas}</strong></div>
                <div><span>NEXT STEP</span><strong>Course &amp; intake comparison</strong></div>
              </div>
              <h3>What to compare before applying</h3>
              <div className="g2-university-detail-points">
                <div><i className="fa-solid fa-book-open" /><strong>Course fit</strong><p>Review the course structure, modules and entry requirements for your intended program.</p></div>
                <div><i className="fa-solid fa-calendar-days" /><strong>Intake &amp; deadlines</strong><p>Check the current intake, application deadlines and document timeline on the official university website.</p></div>
                <div><i className="fa-solid fa-wallet" /><strong>Budget planning</strong><p>Compare tuition, living costs and available funding options before making a final decision.</p></div>
                <div><i className="fa-solid fa-file-circle-check" /><strong>Application readiness</strong><p>Prepare academic documents, English-language scores and any university-specific requirements.</p></div>
              </div>
            </article>
            <aside className="g2-university-detail-side">
              <div className="g2-university-detail-logo"><img src={img(university.logo)} alt={`${university.name} logo`} /></div>
              <span className="pending-eyebrow">OFFICIAL INFORMATION</span>
              <h3>Always verify current university requirements.</h3>
              <p>Fees, courses, intakes and eligibility can change. Use the official university website for the latest information.</p>
              <a className="pending-btn" href={university.url} target="_blank" rel="noopener noreferrer">Visit Official Website <i className="fa-solid fa-arrow-up-right-from-square" /></a>
              <Link className="g2-university-detail-outline" to="/inquiry-form">Get Shortlist Guidance</Link>
            </aside>
          </div>
        </div>
      </main>
      <ActionBand title="Want this university in your shortlist?" text="Share your course, intake and academic profile and ask Go2Abroad about the next step." />
    </>
  );
}

export function UniversityDetails() {
  useEffect(() => { setPageMeta("University Details", "Explore selected university profiles and use Go2Abroad's counselling support to compare courses, intakes and application options."); }, []);
  return (
    <>
      <PendingHero eyebrow="TOP UNIVERSITIES" title="Shortlist universities around your course and career goals." intro="Review selected university options already featured on the Go2Abroad website. Use the external university links for official information and contact Go2Abroad for shortlist support." image="/images/inner-heroes/hero-inner-university.png">
        <div className="pending-hero-actions"><Link className="pending-btn" to="/inquiry-form">Build My Shortlist</Link><Link className="pending-text-link" to="/courses">Explore Courses <i className="fa-solid fa-arrow-right" /></Link></div>
      </PendingHero>
      <main className="pending-page pending-rich-page">
        <div className="container">
          <SectionHeading eyebrow="UNIVERSITY DIRECTORY" title="Featured university options" text="The list below uses the universities already represented in the current website content. Always confirm current courses, fees, intakes and entry requirements on the institution's official website." />
          <div className="row g-4">
            {UNIVERSITIES.map((university) => (
              <div className="col-md-6 col-lg-4" key={university.name}>
                <article className="pending-university-card">
                  <div className="pending-university-logo"><img src={img(university.logo)} alt={`${university.name} logo`} /></div>
                  <div className="pending-university-content"><span>{university.city}</span><h3>{university.name}</h3><p>{university.areas}</p><div className="pending-card-actions"><Link to={`/university/${university.slug}`} className="pending-outline-btn">View University</Link><a href={university.url} target="_blank" rel="noopener noreferrer" className="pending-link">Official Website <i className="fa-solid fa-arrow-up-right-from-square" /></a></div></div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ActionBand title="Need help comparing universities?" text="Share your preferred course and destination and we can help you structure a shortlist." />
    </>
  );
}

export function SuccessDetails() {
  const { slug } = useParams();
  const story = SUCCESS_STORIES.find((item) => item.slug === slug) || SUCCESS_STORIES[0];
  useEffect(() => { setPageMeta(`${story.name} Success Story`, `Read the Go2Abroad study abroad journey shared by ${story.name}.`); }, [story.name]);
  return (
    <>
      <PendingHero eyebrow="STUDENT SUCCESS STORY" title={story.name} intro={`${story.role} • ${story.university}`} image="/images/inner-heroes/hero-inner-success.png" compact>
        <div className="pending-hero-actions"><Link className="pending-btn" to="/inquiry-form">Start Your Journey <i className="fa-solid fa-arrow-right" /></Link><Link className="pending-text-link" to="/success-stories">View All Stories <i className="fa-solid fa-arrow-right" /></Link></div>
      </PendingHero>
      <main className="pending-page pending-rich-page">
        <div className="container">
          <div className="g2-story-detail-shell">
            <div className="g2-story-detail-profile"><img src={img(story.image)} alt={story.name} /><div><span className="pending-eyebrow">STUDENT EXPERIENCE</span><h2>{story.name}</h2><p>{story.role}</p><small><i className="fa-solid fa-location-dot" /> {story.university}</small></div></div>
            <div className="g2-story-detail-quote"><span className="g2-story-quote-mark">“</span><blockquote>{story.quote}</blockquote><div className="pending-stars">★★★★★</div></div>
            <div className="g2-story-detail-grid"><div><span>01</span><strong>Guidance</strong><p>Step-by-step support through the relevant study abroad process.</p></div><div><span>02</span><strong>Application</strong><p>Practical help with planning, documents and the next application stage.</p></div><div><span>03</span><strong>Journey</strong><p>A student-focused experience designed to keep the process organised.</p></div></div>
          </div>
        </div>
      </main>
      <ActionBand title="Want to create your own study abroad story?" text="Tell us your destination and course and start with a free enquiry." />
    </>
  );
}

function BlogCard({ blog }) {
  return (
    <article className="pending-blog-card">
      <div className="pending-blog-image"><img src={img(blog.image)} alt={blog.title} /><span>{blog.category}</span></div>
      <div className="pending-blog-body"><small>{blog.read}</small><h3>{blog.title}</h3><p>{blog.excerpt}</p><Link to={`/blog/${blog.slug}`} className="pending-link">Read Article <i className="fa-solid fa-arrow-right" /></Link></div>
    </article>
  );
}

export function BlogDetails() {
  useEffect(() => { setPageMeta("Study Abroad Blog", "Study abroad guides covering destinations, scholarships, visas and application planning."); }, []);
  return (
    <>
      <PendingHero eyebrow="LATEST INSIGHTS" title="Useful study abroad information, without the noise." intro="Browse practical guides covering destinations, applications, scholarships and visa preparation." image="/images/inner-heroes/hero-inner-blog.png" />
      <main className="pending-page pending-rich-page">
        <div className="container">
          <SectionHeading eyebrow="FROM THE BLOG" title="Guides for the decisions ahead" text="Use these articles as planning resources. For current university and visa rules, always verify details with the relevant official source." />
          <div className="row g-4">
            {BLOGS.map((blog) => <div className="col-md-6 col-lg-4" key={blog.slug}><BlogCard blog={blog} /></div>)}
          </div>
        </div>
      </main>
      <ActionBand title="Want guidance specific to your profile?" text="A blog can explain the process; a counsellor can help you apply it to your goals." />
    </>
  );
}

export function BlogArticleDetail() {
  const { slug } = useParams();
  const blog = BLOGS.find((item) => item.slug === slug) || BLOGS[0];
  useEffect(() => { setPageMeta(blog.title, blog.excerpt); }, [blog.title, blog.excerpt]);
  return (
    <>
      <PendingHero
        eyebrow={blog.category}
        title={blog.title}
        intro={blog.excerpt}
        image="/images/inner-heroes/hero-inner-blog.png"
        showMeta={false}
        compact
      />
      <main className="g2-blog-article-body">
        <div className="container">
          <article className="g2-blog-article-card">
            <p className="g2-blog-lead">{blog.excerpt}</p>
            <h2>Start with the right questions</h2>
            <p>Before choosing a university or course, compare the destination, academic fit, total budget, entry requirements and the intake you are targeting. A clear shortlist makes the rest of the application process easier to organise.</p>
            <h2>Build a practical shortlist</h2>
            <p>Keep a balanced set of options and review each institution using the same criteria. Check official university information for current course availability, fees, deadlines and entry requirements before you submit an application.</p>
            <h2>Keep documents and deadlines organised</h2>
            <p>Create a simple checklist for academic documents, English-language scores, financial evidence, application dates and visa preparation. Updating the checklist as you progress helps reduce last-minute gaps.</p>
            <div className="g2-blog-article-cta"><div><span className="pending-eyebrow">NEED PERSONAL GUIDANCE?</span><h3>Turn this information into your own study plan.</h3></div><Link className="pending-btn" to="/inquiry-form">Ask for Guidance <i className="fa-solid fa-arrow-right" /></Link></div>
          </article>
        </div>
      </main>
    </>
  );
}

export function CourseDetails() {
  useEffect(() => { setPageMeta("Courses Abroad", "Explore undergraduate, postgraduate, MBA, PhD, diploma and English-language study pathways abroad."); }, []);
  return (
    <>
      <PendingHero eyebrow="COURSES" title="Choose a course pathway that fits what comes next." intro="Compare course levels, understand the type of planning involved and open the existing course-detail pages for more information." image="/images/inner-heroes/hero-inner-courses.png" />
      <main className="pending-page pending-rich-page">
        <div className="container">
          <SectionHeading eyebrow="COURSE DIRECTORY" title="Study pathways" text="Course availability, duration, entry requirements and intakes vary by university and destination. Use the detail pages as a starting point for your shortlist." />
          <div className="row g-4">
            {COURSES.map((course) => (
              <div className="col-md-6 col-lg-4" key={course.slug}>
                <article className="pending-course-card"><div className="pending-course-image"><img src={img(course.image)} alt="" /></div><div className="pending-course-body"><span>{course.level}</span><h3>{course.title}</h3><p>{course.text}</p><Link className="pending-link" to={`/course/${course.slug}`}>View Course Details <i className="fa-solid fa-arrow-right" /></Link></div></article>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ActionBand title="Not sure which course level is right?" text="Share your current qualification and goals and we can help you compare pathways." />
    </>
  );
}

export function PartnerDetails() {
  useEffect(() => { setPageMeta("Our Partners", "Explore the education finance and banking partners displayed on the Go2Abroad website."); }, []);
  return (
    <>
      <PendingHero eyebrow="OUR PARTNERS" title="A wider support network for your study abroad plan." intro="Go2Abroad works with a range of organisations represented on the website across education finance and banking support." image="/images/inner-heroes/hero-inner-partners.png" />
      <main className="pending-page pending-rich-page">
        <div className="container">
          <SectionHeading eyebrow="PARTNER NETWORK" title="Finance and banking partners" text="Partner availability, products and eligibility can change. Confirm current terms directly with the partner before making a financial decision." />
          <div className="row g-4">
            {PARTNERS.map(([name, logo, category]) => (
              <div className="col-6 col-md-4 col-lg-3" key={name}><article className="pending-partner-card"><div className="pending-partner-logo"><img src={img(logo)} alt={name} /></div><strong>{name}</strong><span>{category}</span></article></div>
            ))}
          </div>
        </div>
      </main>
      <ActionBand title="Need help understanding your funding options?" text="Share your destination and course plan and ask the team about the next steps." />
    </>
  );
}

const campaignDestinations = ["USA", "UK", "Canada", "Australia", "Germany", "New Zealand", "Ireland", "Singapore", "Other"];
const campaignInterests = ["Undergraduate Program", "Postgraduate / Master's", "MBA", "PhD / Doctorate", "Diploma / Certificate", "English Language / Test Preparation"];

function LeadForm({ source = "Google Campaign", campaignMode = false }) {
  const [searchParams] = useSearchParams();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const tracking = useMemo(() => ({
    source,
    campaign: searchParams.get("utm_campaign") || "",
    medium: searchParams.get("utm_medium") || "",
    term: searchParams.get("utm_term") || "",
    content: searchParams.get("utm_content") || "",
    gclid: searchParams.get("gclid") || "",
  }), [searchParams, source]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const form = event.currentTarget;
    try {
      await submitContactForm(form);
      const values = Object.fromEntries(new FormData(form).entries());
      sessionStorage.setItem("go2abroad_lead", JSON.stringify({ ...values, ...tracking, submittedAt: new Date().toISOString() }));
      setSuccess(true);
      window.dispatchEvent(new CustomEvent("go2abroad:notification", { detail: { message: "Your enquiry has been received." } }));
    } catch (submissionError) {
      setError(submissionError.message || "Unable to submit the enquiry right now.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="pending-campaign-form" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="source" value={tracking.source} />
      <input type="hidden" name="utm_campaign" value={tracking.campaign} />
      <input type="hidden" name="utm_medium" value={tracking.medium} />
      <input type="hidden" name="utm_term" value={tracking.term} />
      <input type="hidden" name="utm_content" value={tracking.content} />
      <input type="hidden" name="gclid" value={tracking.gclid} />
      <div className="pending-form-grid">
        <label>Full Name <span>*</span><input name="name" required autoComplete="name" placeholder="Enter your full name" /></label>
        <label>Email Address <span>*</span><input type="email" name="email" required autoComplete="email" placeholder="you@example.com" /></label>
        <label>Phone Number <span>*</span><input name="phone" required inputMode="tel" autoComplete="tel" placeholder="Enter phone number" /></label>
        <label>Preferred Destination<select name="destination" defaultValue=""><option value="">Select destination</option>{campaignDestinations.map((item) => <option value={item} key={item}>{item}</option>)}</select></label>
        <label>Interested In<select name="course" defaultValue=""><option value="">Select course level</option>{campaignInterests.map((item) => <option value={item} key={item}>{item}</option>)}</select></label>
        <label>Preferred Intake<input name="intake" placeholder="e.g. Jan 2027 / Sep 2027" /></label>
        <label className="pending-form-full">Message<textarea name="message" rows="4" placeholder="Tell us about your study plans..." /></label>
      </div>
      <label className="pending-consent"><input type="checkbox" name="consent" required /><span>I agree to be contacted by Go2Abroad regarding my study abroad enquiry.</span></label>
      {error && <div className="pending-form-error" role="alert">{error}</div>}
      {success && <div className="pending-form-success" role="status">Thanks! Your enquiry has been received.</div>}
      <button className="pending-btn pending-submit" type="submit" disabled={submitting}>{submitting ? "Submitting…" : campaignMode ? "Get Free Counselling" : "Submit Enquiry"} <i className="fa-solid fa-arrow-right" /></button>
    </form>
  );
}

export function LeadGeneration() {
  useEffect(() => { setPageMeta("Free Study Abroad Consultation", "Submit a study abroad enquiry through the Go2Abroad campaign landing page."); }, []);
  return (
    <main className="pending-campaign-page">
      <div className="container">
        <div className="pending-campaign-shell">
          <div className="pending-campaign-copy">
            <span className="pending-eyebrow">GO2ABROAD • GOOGLE CAMPAIGN</span>
            <h1>Plan your study abroad journey with a clear next step.</h1>
            <p>Tell us your destination, course and intake preferences. Our counselling team can help you understand suitable options and the application journey.</p>
            <div className="pending-campaign-benefits"><span><i className="fa-solid fa-circle-check" /> Profile guidance</span><span><i className="fa-solid fa-circle-check" /> Course & university shortlist</span><span><i className="fa-solid fa-circle-check" /> Application & visa support</span></div>
            <img src={img("/images/hero-img-right.png")} alt="Study abroad guidance" />
          </div>
          <div className="pending-campaign-form-wrap"><div className="pending-form-title"><span>FREE CONSULTATION</span><h2>Tell us about your plans</h2><p>Fields marked * are required.</p></div><LeadForm campaignMode /></div>
        </div>
      </div>
    </main>
  );
}

export function InquiryForm() {
  useEffect(() => { setPageMeta("Inquiry Form", "Send your study abroad enquiry to Go2Abroad."); }, []);
  return (
    <main className="pending-campaign-page pending-inquiry-page">
      <div className="container">
        <div className="pending-campaign-shell pending-inquiry-shell">
          <div className="pending-campaign-copy"><span className="pending-eyebrow">START HERE</span><h1>Tell us what you want to study and where you want to go.</h1><p>Use this form for a general website enquiry. You can include your preferred destination, course and intake so the team has useful context before contacting you.</p><div className="pending-campaign-benefits"><span><i className="fa-solid fa-shield-halved" /> Your details stay with the enquiry team</span><span><i className="fa-solid fa-clock" /> Quick follow-up</span><span><i className="fa-solid fa-user-graduate" /> Student-focused guidance</span></div><img src={img("/images/hero-img-right.png")} alt="Go2Abroad counselling" /></div>
          <div className="pending-campaign-form-wrap"><div className="pending-form-title"><span>WE'RE HERE TO HELP</span><h2>Send an enquiry</h2><p>Share as much detail as you are comfortable providing.</p></div><LeadForm source="Website Inquiry" /></div>
        </div>
      </div>
    </main>
  );
}

export function ThankYou() {
  const [lead, setLead] = useState(null);
  useEffect(() => {
    setPageMeta("Thank You", "Thank you for contacting Go2Abroad.");
    try { setLead(JSON.parse(sessionStorage.getItem("go2abroad_lead") || "null")); } catch { setLead(null); }
  }, []);
  return (
    <main className="pending-thankyou">
      <div className="container">
        <div className="thankyou-card thankyou-card-modern">
          <div className="thank-icon"><i className="fa-solid fa-check" /></div>
          <span className="pending-eyebrow">SUBMISSION RECEIVED</span>
          <h1>Thank you{lead?.name ? `, ${lead.name}` : ""}!</h1>
          <p>Your enquiry has been received. Our team will review the details and contact you using the information you provided.</p>
          <div className="thankyou-next"><span>01</span><div><strong>We review your enquiry</strong><small>We use the information you shared to understand your requirements.</small></div></div>
          <div className="thankyou-next"><span>02</span><div><strong>We contact you</strong><small>A counsellor can discuss the next steps and relevant options with you.</small></div></div>
          <div className="thankyou-actions"><Link className="pending-btn" to="/">Back to Home</Link><Link className="pending-outline-btn" to="/destinations">Explore Destinations</Link></div>
        </div>
      </div>
    </main>
  );
}

export function TermsAndConditions() {
  useEffect(() => { setPageMeta("Terms & Conditions", "Terms and conditions for using the Go2Abroad website and its information and enquiry services."); }, []);
  const sections = [
    ["1. Website use", "The information on this website is provided for general study-abroad guidance. You may use the website for lawful personal and educational planning purposes."],
    ["2. Information accuracy", "Course availability, fees, intakes, admissions criteria, visa rules, scholarship conditions and other requirements can change. Please verify current requirements with the relevant university, government authority or service provider before making a decision."],
    ["3. Counselling and applications", "Go2Abroad may provide counselling and application-support services described on the website. The availability of a service can depend on destination, institution, profile and the specific application."],
    ["4. University and third-party information", "References to universities, banks, lenders, accommodation providers or other third parties are provided for informational or service-support purposes. Their own terms, eligibility rules and privacy policies apply to their services."],
    ["5. No guarantee of admission or visa", "Guidance and application assistance do not guarantee admission, scholarships, visa approval, employment, migration status or any other outcome. Final decisions are made by the relevant institution or authority."],
    ["6. Fees and payments", "Where a third-party institution or service provider charges a fee, that fee is governed by the provider's terms. Any Go2Abroad service fee, if applicable to a particular service, should be confirmed before proceeding."],
    ["7. Enquiry information", "When you submit an enquiry, you confirm that the information provided is accurate to the best of your knowledge and that Go2Abroad may contact you about your enquiry through the details you provide."],
    ["8. Intellectual property", "Website text, branding, layouts, graphics and other original materials are protected by applicable intellectual-property laws. They may not be copied, republished or commercially reused without appropriate permission."],
    ["9. External links", "Links to external websites are provided for convenience. Go2Abroad is not responsible for the content, availability or policies of external websites."],
    ["10. Changes", "Go2Abroad may update website content, services or these terms from time to time. The version published on this page is the version applicable to future website use unless otherwise stated."],
    ["11. Contact", "For questions about these terms or a specific service, please use the Contact Us or Inquiry Form on the website."],
  ];
  return (
    <main className="pending-legal-page">
      <div className="container">
        <PendingHero eyebrow="LEGAL" title="Terms & Conditions" intro="Please read these website terms before using the information and enquiry features provided by Go2Abroad." image="/images/inner-heroes/hero-inner-legal.png" showActions={false} showMeta={false} compact />
        <div className="pending-legal-shell">
          <div className="pending-legal-note"><i className="fa-solid fa-circle-info" /><span>These website terms are intended as a general publishing-ready framework. Have your final legal wording reviewed by the appropriate legal adviser before production use.</span></div>
          {sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}
          <div className="pending-legal-actions"><Link className="pending-btn" to="/contact">Contact Us</Link><Link className="pending-outline-btn" to="/faq">Read FAQs</Link></div>
        </div>
      </div>
    </main>
  );
}

export function PrivacyPolicy() {
  useEffect(() => { setPageMeta("Privacy Policy", "Privacy information for the Go2Abroad website, enquiries and lead-generation forms."); }, []);
  const sections = [
    ["1. Information we collect", "When you contact Go2Abroad or submit an enquiry form, we may collect information such as your name, email address, phone number, preferred destination, course interest and the message or requirements you provide."],
    ["2. How we use your information", "We use enquiry information to respond to your request, provide counselling or application guidance, understand your requirements and communicate with you about the services or information you asked for."],
    ["3. Marketing and campaign information", "If you arrive through a campaign or advertising link, the website may record campaign parameters such as UTM values or a Google click identifier so that the enquiry can be associated with the relevant campaign."],
    ["4. Sharing of information", "We may share relevant information with universities, service providers or other partners only when it is needed to support an enquiry or service and where appropriate for the request. Third parties may have their own privacy policies."],
    ["5. Data security", "We take reasonable steps to protect information submitted through the website. No internet transmission or storage system can be guaranteed to be completely secure."],
    ["6. Cookies and browser storage", "The website may use standard browser technologies and session storage for features such as form-flow information and campaign attribution. You can control cookies and browser storage through your browser settings."],
    ["7. External websites", "Links to universities, social networks, banks, lenders and other external websites are governed by the privacy policies of those websites. Please review their policies before submitting information to them."],
    ["8. Your choices", "You can contact Go2Abroad if you have questions about an enquiry you submitted or want to understand how your information is being used. Certain legal or operational requirements may affect what information can be changed or deleted."],
    ["9. Updates to this policy", "This policy may be updated when website features, services or legal requirements change. The latest version published on this page will apply to future website use unless otherwise stated."],
    ["10. Contact", "For privacy-related questions, please use the Contact Us page or the Inquiry Form on the website."],
  ];
  return (
    <main className="pending-legal-page">
      <div className="container">
        <PendingHero eyebrow="LEGAL" title="Privacy Policy" intro="This page explains how information submitted through the Go2Abroad website may be collected and used." image="/images/inner-heroes/hero-inner-legal.png" showActions={false} showMeta={false} compact />
        <div className="pending-legal-shell">
          <div className="pending-legal-note"><i className="fa-solid fa-shield-halved" /><span>This website privacy page is a general publishing-ready framework. Have the final legal wording reviewed by the appropriate legal adviser before production use.</span></div>
          {sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}
          <div className="pending-legal-actions"><Link className="pending-btn" to="/contact">Contact Us</Link><Link className="pending-outline-btn" to="/terms-and-conditions">Terms &amp; Conditions</Link></div>
        </div>
      </div>
    </main>
  );
}
