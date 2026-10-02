import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ModernInnerHero from "../components/ModernInnerHero";

const COURSES = {
  undergraduate: { title: "Undergraduate (Bachelor's)", intro: "Explore bachelor's pathways across business, engineering, technology, healthcare, arts and other disciplines.", image: "/images/hero-undergraduate.png", badge: "Undergraduate pathways", items: ["Course and university matching", "Entry requirement review", "Application and SOP support", "Scholarship and funding guidance"] },
  postgraduate: { title: "Postgraduate (Master's)", intro: "Find master's programs that build on your academic background and move you toward your next career goal.", image: "/images/hero-postgraduate-modern.png", badge: "Postgraduate pathways", items: ["Profile-to-course matching", "University shortlisting", "SOP and application support", "Offer comparison and next steps"] },
  mba: { title: "MBA & Management", intro: "Compare MBA and management programs based on your academic profile, experience, budget and career direction.", image: "/images/hero-mba.png", badge: "Business & management", items: ["MBA pathway planning", "Specialisation selection", "University and business-school shortlist", "Application preparation"] },
  phd: { title: "PhD & Doctorate", intro: "Plan a research-focused doctoral journey with guidance on institutions, research areas and application preparation.", image: "/images/hero-phd-modern.png", badge: "Research pathways", items: ["Research-area discussion", "University and supervisor research", "Research proposal guidance", "Application document support"] },
  diploma: { title: "Diploma & Certificate", intro: "Explore shorter and career-focused study options for building practical knowledge or progressing into a new field.", image: "/images/hero-diploma.png", badge: "Career-focused study", items: ["Course comparison", "Career-focused options", "Entry requirement guidance", "Application support"] },
  language: { title: "English Language Programs", intro: "Explore English-language study options for academic preparation, communication skills and progression to further study.", image: "/images/hero-language-modern.png", badge: "Language preparation", items: ["Program selection", "Duration and intake planning", "Institution comparison", "Application guidance"] }
};

export default function CourseDetail({ slug: fixedSlug }) {
  const { slug: routeSlug } = useParams();
  const slug = fixedSlug || routeSlug;
  const data = COURSES[slug] || COURSES.undergraduate;
  useEffect(() => { document.title = `${data.title} | Go2Abroad`; window.scrollTo(0, 0); }, [data.title]);

  return (
    <main className="g2-detail-page g2-course-detail-page">
      <ModernInnerHero
        eyebrow={`GO2ABROAD • ${data.title}`}
        title={data.title}
        intro={data.intro}
        image={data.image}
        imageAlt={data.title}
        badge={data.badge}
        icon="fa-book-open-reader"
        tone="course"
        primaryLabel="Talk to a counsellor"
        secondaryLabel="View all courses"
        secondaryTo="/courses"
        meta={["Course matching", "Application support", "Visa guidance"]}
        themeKey={`course-${slug || "brand"}`}
      />

      <section className="g2-detail-section">
        <div className="container">
          <div className="g2-detail-heading">
            <span>WHAT WE HELP WITH</span>
            <h2>Choose a course path that fits your goals</h2>
            <p>We help you compare course structure, institution, entry requirements and next steps before you apply.</p>
          </div>
          <div className="g2-detail-grid">
            {data.items.map((item, i) => (
              <article className="g2-detail-card" key={item}>
                <b>0{i + 1}</b>
                <h3>{item}</h3>
                <p>Get clear guidance and practical next steps based on your profile.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="g2-detail-section g2-detail-soft">
        <div className="container">
          <div className="g2-detail-two">
            <div>
              <span className="g2-detail-kicker">COURSE PLANNING</span>
              <h2>From profile to application</h2>
              <p>We keep the process simple: understand your background, identify suitable programs, shortlist institutions and prepare the required documents.</p>
            </div>
            <ul className="g2-detail-list">
              <li><i className="fa-solid fa-check" />Profile and eligibility review</li>
              <li><i className="fa-solid fa-check" />Course and university shortlisting</li>
              <li><i className="fa-solid fa-check" />SOP and application support</li>
              <li><i className="fa-solid fa-check" />Visa and pre-departure guidance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="g2-detail-cta">
        <div className="container">
          <h2>Need help choosing your course?</h2>
          <p>Share your education background and career goal. We can help you build a practical shortlist.</p>
          <Link to="/contact" className="sis-btn-default">Book Free Consultation <i className="fa-solid fa-arrow-right-long" /></Link>
        </div>
      </section>
    </main>
  );
}
