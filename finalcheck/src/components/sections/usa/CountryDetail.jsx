import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function CountryDetail() {
  return (
    <div className="sis-country-detail-section section" data-country-page="usa">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 sis-country-toc-col">
            <nav className="sis-country-toc" aria-label="On this page">
              <div className="sis-country-toc-inner">
                <span className="sis-country-toc-label">
                  On This Page
                </span>
                <ul>
                  <li>
                    <a href="#why-study">
                      Why Study Here
                    </a>
                  </li>
                  <li>
                    <a href="#top-universities">
                      Top Universities
                    </a>
                  </li>
                  <li>
                    <a href="#popular-programmes">
                      Popular Programmes
                    </a>
                  </li>
                  <li>
                    <a href="#upcoming-intakes">
                      Upcoming Intakes
                    </a>
                  </li>
                  <li>
                    <a href="#admission-requirements">
                      Admission Requirements
                    </a>
                  </li>
                  <li>
                    <a href="#english-requirements">
                      English Requirements
                    </a>
                  </li>
                  <li>
                    <a href="#average-tuition">
                      Average Tuition
                    </a>
                  </li>
                  <li>
                    <a href="#living-costs">
                      Living Costs
                    </a>
                  </li>
                  <li>
                    <a href="#scholarships">
                      Scholarships
                    </a>
                  </li>
                  <li>
                    <a href="#visa-process">
                      Student Visa Process
                    </a>
                  </li>
                  <li>
                    <a href="#part-time-work">
                      Part-Time Work Rules
                    </a>
                  </li>
                  <li>
                    <a href="#post-study-options">
                      Post-Study Options
                    </a>
                  </li>
                  <li>
                    <a href="#accommodation">
                      Accommodation
                    </a>
                  </li>
                  <li>
                    <a href="#application-timeline">
                      Application Timeline
                    </a>
                  </li>
                  <li>
                    <a href="#faqs">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#cost-calculator">
                      Cost Calculator
                    </a>
                  </li>
                  <li>
                    <a href="#university-finder">
                      University Finder
                    </a>
                  </li>
                  <li>
                    <a href="#free-counselling">
                      Free Counselling
                    </a>
                  </li>
                </ul>
                <div className="sisf-m-btn">
                  <Link className="sis-btn-default" to="/contact">
                    Book Free Counselling
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-lg-9 sis-country-content-col">
            <section id="why-study" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-star"></i>
                Overview
              </span>
              <h2>
                Why Study in the USA
              </h2>
              <p>
                The United States is home to the world's largest and most diverse higher-education system — from Ivy League research powerhouses to career-focused state universities. For Indian students, it remains the top choice for STEM, business and research-driven degrees.
              </p>
              <ul className="sis-country-list">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    4,000+ accredited universities
                  </strong>
                  across every field and budget
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Flexible curriculum
                  </strong>
                  — switch majors, combine minors, choose electives
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Strong industry links
                  </strong>
                  with co-ops, internships and campus recruiting
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Up to 3 years OPT
                  </strong>
                  work authorization after STEM degrees
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Large Indian student community
                  </strong>
                  — 330,000+ Indians currently enrolled
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Assistantships & scholarships
                  </strong>
                  that can significantly offset tuition
                </li>
              </ul>
            </section>
            <section id="top-universities" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-building-columns"></i>
                Universities
              </span>
              <h2>
                Top Universities in the USA
              </h2>
              <p>
                A mix of research universities and career-focused institutions that consistently welcome Indian students with strong placement outcomes.
              </p>
              <div className="sis-uni-card">
                <div className="d-flex align-items-start gap-3">
                  <div className="sis-uni-icon">
                    <i className="fa-solid fa-building-columns"></i>
                  </div>
                  <div>
                    <h4 className="mb-0">
                      Arizona State University
                    </h4>
                    <div className="sis-uni-meta">
                      Tempe, Arizona — Engineering, Computer Science, Business
                    </div>
                  </div>
                </div>
                <Link className="sis-country-card-link" style={{whiteSpace: 'nowrap'}} to="/arizona-state-university">
                  View Details
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
              <div className="sis-uni-card">
                <div className="d-flex align-items-start gap-3">
                  <div className="sis-uni-icon">
                    <i className="fa-solid fa-building-columns"></i>
                  </div>
                  <div>
                    <h4 className="mb-0">
                      University of Texas at Dallas
                    </h4>
                    <div className="sis-uni-meta">
                      Dallas, Texas — Business Analytics, Computer Science
                    </div>
                  </div>
                </div>
              </div>
              <div className="sis-uni-card">
                <div className="d-flex align-items-start gap-3">
                  <div className="sis-uni-icon">
                    <i className="fa-solid fa-building-columns"></i>
                  </div>
                  <div>
                    <h4 className="mb-0">
                      Northeastern University
                    </h4>
                    <div className="sis-uni-meta">
                      Boston, Massachusetts — Computer Science, Co-op Programs
                    </div>
                  </div>
                </div>
              </div>
              <div className="sis-uni-card">
                <div className="d-flex align-items-start gap-3">
                  <div className="sis-uni-icon">
                    <i className="fa-solid fa-building-columns"></i>
                  </div>
                  <div>
                    <h4 className="mb-0">
                      University at Buffalo (SUNY)
                    </h4>
                    <div className="sis-uni-meta">
                      Buffalo, New York — Engineering, Management
                    </div>
                  </div>
                </div>
              </div>
              <div className="sis-uni-card">
                <div className="d-flex align-items-start gap-3">
                  <div className="sis-uni-icon">
                    <i className="fa-solid fa-building-columns"></i>
                  </div>
                  <div>
                    <h4 className="mb-0">
                      Illinois Institute of Technology
                    </h4>
                    <div className="sis-uni-meta">
                      Chicago, Illinois — Engineering, Computer Science
                    </div>
                  </div>
                </div>
              </div>
              <div className="sis-uni-card">
                <div className="d-flex align-items-start gap-3">
                  <div className="sis-uni-icon">
                    <i className="fa-solid fa-building-columns"></i>
                  </div>
                  <div>
                    <h4 className="mb-0">
                      Clark University
                    </h4>
                    <div className="sis-uni-meta">
                      Worcester, Massachusetts — Business Analytics, Arts
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="popular-programmes" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-book"></i>
                Programmes
              </span>
              <h2>
                Popular Programmes
              </h2>
              <ul className="sis-country-list">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    MS in Computer Science
                  </strong>
                  — AI, Data Science & Software Engineering tracks
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    MS in Electrical & Computer Engineering
                  </strong>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    MBA & MS in Business Analytics
                  </strong>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    MS in Information Systems / Data Science
                  </strong>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Bachelor's in Computer Science & Engineering
                  </strong>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    MS in Biotechnology & Public Health
                  </strong>
                </li>
              </ul>
            </section>
            <section id="upcoming-intakes" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-calendar-days"></i>
                Intakes
              </span>
              <h2>
                Upcoming Intakes
              </h2>
              <div className="sis-fact-table">
                <div className="sis-fact-item">
                  <span>
                    Fall Intake
                  </span>
                  <strong>
                    August / September
                  </strong>
                  <small>
                    Primary intake — widest course choice
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Spring Intake
                  </span>
                  <strong>
                    January
                  </strong>
                  <small>
                    Good secondary option, fewer seats
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Summer Intake
                  </span>
                  <strong>
                    May
                  </strong>
                  <small>
                    Limited programs only
                  </small>
                </div>
              </div>
              <p className="mt-3 mb-0">
                Start your application 8–10 months before your target intake to allow time for tests, documentation and visa processing.
              </p>
            </section>
            <section id="admission-requirements" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-clipboard-check"></i>
                Requirements
              </span>
              <h2>
                Admission Requirements
              </h2>
              <ul className="sis-country-list">
                <li>
                  <i className="fa-solid fa-check"></i>
                  Academic transcripts & consistent GPA (grading scale conversion provided)
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Statement of Purpose (SOP)
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  2–3 Letters of Recommendation (LORs)
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Updated resume / CV
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  GRE / GMAT (optional at many universities now)
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  English proficiency test score
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Valid passport & proof of funds
                </li>
              </ul>
            </section>
            <section id="english-requirements" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-language"></i>
                English
              </span>
              <h2>
                English-Language Requirements
              </h2>
              <div className="sis-fact-table">
                <div className="sis-fact-item">
                  <span>
                    IELTS
                  </span>
                  <strong>
                    6.0 – 7.0
                  </strong>
                  <small>
                    Higher for competitive programs
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    TOEFL iBT
                  </span>
                  <strong>
                    80 – 100
                  </strong>
                  <small>
                    Widely accepted across the US
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    PTE Academic
                  </span>
                  <strong>
                    58 – 68
                  </strong>
                  <small>
                    Accepted by a growing number of universities
                  </small>
                </div>
              </div>
              <p className="mt-3 mb-0">
                Some universities offer conditional admission with a bridge English program if your score falls slightly short.
              </p>
            </section>
            <section id="average-tuition" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-sack-dollar"></i>
                Tuition
              </span>
              <h2>
                Average Tuition
              </h2>
              <div className="sis-fact-table">
                <div className="sis-fact-item">
                  <span>
                    Undergraduate
                  </span>
                  <strong>
                    $20,000 – $45,000
                  </strong>
                  <small>
                    per year
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Postgraduate (MS)
                  </span>
                  <strong>
                    $25,000 – $50,000
                  </strong>
                  <small>
                    per year
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    MBA
                  </span>
                  <strong>
                    $40,000 – $80,000
                  </strong>
                  <small>
                    per year
                  </small>
                </div>
              </div>
              <p className="mt-3 mb-0">
                <small>
                  Indicative figures for planning purposes — confirm exact tuition with your shortlisted university.
                </small>
              </p>
            </section>
            <section id="living-costs" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-house-chimney"></i>
                Cost of Living
              </span>
              <h2>
                Living Costs
              </h2>
              <div className="sis-fact-table">
                <div className="sis-fact-item">
                  <span>
                    Total Annual
                  </span>
                  <strong>
                    $12,000 – $20,000
                  </strong>
                  <small>
                    varies by city
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Rent (shared)
                  </span>
                  <strong>
                    $600 – $1,200
                  </strong>
                  <small>
                    per month
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Food & Groceries
                  </span>
                  <strong>
                    $250 – $450
                  </strong>
                  <small>
                    per month
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Local Transport
                  </span>
                  <strong>
                    $60 – $120
                  </strong>
                  <small>
                    per month
                  </small>
                </div>
              </div>
            </section>
            <section id="scholarships" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-award"></i>
                Funding
              </span>
              <h2>
                Scholarships
              </h2>
              <ul className="sis-country-list">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Fulbright-Nehru Fellowships
                  </strong>
                  for research & graduate study
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    University merit scholarships
                  </strong>
                  — 25% to full tuition waivers
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Teaching & Research Assistantships
                  </strong>
                  (TA/RA) for PG students
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Global Study Awards
                  </strong>
                  & department-specific grants
                </li>
              </ul>
            </section>
            <div className="sis-cta-wrap py-3">
              <div className="sis-cta-banner cta-blue" data-aos="fade-up">
                <div className="sis-cta-pattern"></div>
                <div className="sis-cta-inner">
                  <div className="sis-cta-text">
                    <span className="sis-cta-eyebrow">
                      <i className="fa-solid fa-award"></i>
                      Funding Your USA Degree?
                    </span>
                    <h3 className="sis-cta-title">
                      Find out which scholarships you actually qualify for.
                    </h3>
                    <p className="sis-cta-desc">
                      Our counsellors match your profile against university and external scholarships — free of cost.
                    </p>
                  </div>
                  <div className="sis-cta-actions">
                    <Link className="sis-btn-default btn-light" to="/contact">
                      Check Scholarships
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <section id="visa-process" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-stamp"></i>
                Visa
              </span>
              <h2>
                Student Visa Process (F-1)
              </h2>
              <ol className="sis-step-vertical">
                <li>
                  <strong>
                    Get your I-20
                  </strong>
                  <p>
                    Receive Form I-20 from your admitting university after confirming your seat.
                  </p>
                </li>
                <li>
                  <strong>
                    Pay the SEVIS fee
                  </strong>
                  <p>
                    Pay the I-901 SEVIS fee online and keep the receipt.
                  </p>
                </li>
                <li>
                  <strong>
                    Complete the DS-160
                  </strong>
                  <p>
                    Fill the online non-immigrant visa application form.
                  </p>
                </li>
                <li>
                  <strong>
                    Schedule your interview
                  </strong>
                  <p>
                    Book a visa interview slot at your nearest US consulate.
                  </p>
                </li>
                <li>
                  <strong>
                    Attend the interview
                  </strong>
                  <p>
                    Carry I-20, DS-160 confirmation, financial proof and academic documents.
                  </p>
                </li>
                <li>
                  <strong>
                    Visa decision & travel
                  </strong>
                  <p>
                    Once approved, plan travel no earlier than 30 days before your program start date.
                  </p>
                </li>
              </ol>
            </section>
            <section id="part-time-work" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-briefcase"></i>
                Work Rules
              </span>
              <h2>
                Part-Time Work Rules
              </h2>
              <ul className="sis-country-list sis-single-col">
                <li>
                  <i className="fa-solid fa-check"></i>
                  Up to
                  <strong>
                    20 hours/week
                  </strong>
                  on-campus during academic terms
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Full-time
                  </strong>
                  permitted during official school breaks
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Off-campus work requires CPT (Curricular Practical Training) authorization tied to your program
                </li>
              </ul>
            </section>
            <section id="post-study-options" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-plane-departure"></i>
                After Graduation
              </span>
              <h2>
                Post-Study Options
              </h2>
              <ul className="sis-country-list sis-single-col">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    OPT (Optional Practical Training):
                  </strong>
                  12 months of work authorization for all degree levels
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    STEM OPT Extension:
                  </strong>
                  Additional 24 months for STEM-designated degrees (36 months total)
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    H-1B Work Visa:
                  </strong>
                  Long-term skilled work visa sponsored by an employer
                </li>
              </ul>
            </section>
            <section id="accommodation" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-house-chimney"></i>
                Housing
              </span>
              <h2>
                Accommodation
              </h2>
              <div className="sis-fact-table">
                <div className="sis-fact-item">
                  <span>
                    On-Campus Dorms
                  </span>
                  <strong>
                    $800 – $1,500
                  </strong>
                  <small>
                    per month
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Off-Campus Shared Apt.
                  </span>
                  <strong>
                    $600 – $1,200
                  </strong>
                  <small>
                    per month
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Homestay
                  </span>
                  <strong>
                    $700 – $1,100
                  </strong>
                  <small>
                    per month, meals often included
                  </small>
                </div>
              </div>
              <p className="mt-3 mb-0">
                We help you shortlist and book verified housing before you fly — see our
                <Link to="/services#accommodation">
                  Accommodation Assistance
                </Link>
                service.
              </p>
            </section>
            <div className="sis-cta-wrap py-3">
              <div className="sis-cta-banner cta-image" style={{backgroundImage: `url(${img("/images/video-bg.jpg")})`}} data-aos="fade-up">
                <div className="sis-cta-inner">
                  <div className="sis-cta-text">
                    <span className="sis-cta-eyebrow">
                      <i className="fa-solid fa-stamp"></i>
                      F-1 Visa Support
                    </span>
                    <h3 className="sis-cta-title">
                      Nail your visa interview on the first attempt.
                    </h3>
                    <p className="sis-cta-desc">
                      Mock interviews, documentation checks and SEVIS guidance from consultants who've done this hundreds of times.
                    </p>
                  </div>
                  <div className="sis-cta-actions">
                    <Link className="sis-btn-default" to="/services#visa-assistance">
                      Get Visa Assistance
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <section id="application-timeline" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-timeline"></i>
                Roadmap
              </span>
              <h2>
                Application Timeline
              </h2>
              <ol className="sis-step-vertical">
                <li>
                  <strong>
                    12–14 months before intake
                  </strong>
                  <p>
                    Shortlist universities, plan IELTS/TOEFL & GRE if needed.
                  </p>
                </li>
                <li>
                  <strong>
                    10–12 months before
                  </strong>
                  <p>
                    Draft SOP, request LORs, take standardized tests.
                  </p>
                </li>
                <li>
                  <strong>
                    8–10 months before
                  </strong>
                  <p>
                    Submit applications with all supporting documents.
                  </p>
                </li>
                <li>
                  <strong>
                    4–6 months before
                  </strong>
                  <p>
                    Receive admits, confirm seat, get I-20, apply for education loan.
                  </p>
                </li>
                <li>
                  <strong>
                    1–3 months before
                  </strong>
                  <p>
                    Pay SEVIS fee, complete visa interview, book flights.
                  </p>
                </li>
                <li>
                  <strong>
                    Final weeks
                  </strong>
                  <p>
                    Pre-departure briefing, accommodation confirmation, pack & fly.
                  </p>
                </li>
              </ol>
            </section>
            <section id="faqs" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-circle-question"></i>
                Questions
              </span>
              <h2>
                FAQs About Studying in the USA
              </h2>
              <div className="sisf-page-accordian sisf-sis-page-accordian">
                <div className="accordion" id="usaFaq">
                  <div className="accordion-item mt-0">
                    <h2 className="accordion-header sis-comman-title">
                      <button className="accordion-button mt-0" data-bs-toggle="collapse" data-bs-target="#usa-f1">
                        <span>
                          Do I need GRE/GMAT for a US Master's?
                        </span>
                      </button>
                    </h2>
                    <div id="usa-f1" className="accordion-collapse collapse show" data-bs-parent="#usaFaq">
                      <div className="accordion-body pt-0">
                        <div className="sisf-e-content-inner">
                          <p className="mb-0">
                            Not always — a growing number of universities have made GRE/GMAT optional. We'll check your target university's specific requirement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-0">
                    <h2 className="accordion-header sis-comman-title">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#usa-f2">
                        <span>
                          How much does an MS in the USA cost overall?
                        </span>
                      </button>
                    </h2>
                    <div id="usa-f2" className="accordion-collapse collapse" data-bs-parent="#usaFaq">
                      <div className="accordion-body pt-0">
                        <div className="sisf-e-content-inner">
                          <p className="mb-0">
                            Typically $37,000–$70,000 total for a 2-year program including tuition and living costs — use our cost calculator below for an estimate specific to you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-0">
                    <h2 className="accordion-header sis-comman-title">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#usa-f3">
                        <span>
                          Can I work while studying in the USA?
                        </span>
                      </button>
                    </h2>
                    <div id="usa-f3" className="accordion-collapse collapse" data-bs-parent="#usaFaq">
                      <div className="accordion-body pt-0">
                        <div className="sisf-e-content-inner">
                          <p className="mb-0">
                            Yes, up to 20 hours/week on-campus during term time, and full-time during official breaks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-0">
                    <h2 className="accordion-header sis-comman-title">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#usa-f4">
                        <span>
                          What's the F-1 visa approval process like?
                        </span>
                      </button>
                    </h2>
                    <div id="usa-f4" className="accordion-collapse collapse" data-bs-parent="#usaFaq">
                      <div className="accordion-body pt-0">
                        <div className="sisf-e-content-inner">
                          <p className="mb-0">
                            It centres on your I-20, SEVIS payment, DS-160 form and a consulate interview. We prepare you for every step — see our visa process above.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="cost-calculator" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-calculator"></i>
                Plan Your Budget
              </span>
              <h2>
                Cost Calculator
              </h2>
              <div className="sis-tool-card">
                <div className="sis-tool-note">
                  <i className="fa-solid fa-circle-info"></i>
                  Get an instant estimate of your total cost of studying in the USA.
                </div>
                <form id="costCalcForm">
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="calcLevel">
                        Course Level
                      </label>
                      <select id="calcLevel">
                        <option value="ug">
                          Undergraduate
                        </option>
                        <option value="pg" defaultSelected>
                          Postgraduate (MS)
                        </option>
                        <option value="mba">
                          MBA
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="calcYears">
                        Duration (Years)
                      </label>
                      <input type="number" id="calcYears" min="1" max="5" step="0.5" defaultValue="2" />
                    </div>
                  </div>
                  <button type="submit" className="sis-btn-default">
                    Calculate Total Cost
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </form>
                <div className="sis-calc-result" id="costCalcResult">
                  <div className="sis-calc-total" id="calcTotal">
                    —
                  </div>
                  <div className="sis-calc-sub" id="calcTotalInr">
                    —
                  </div>
                  <div className="sis-calc-breakdown">
                    <div>
                      <strong id="calcTuitionOut">
                        —
                      </strong>
                      <span>
                        Tuition (
                        <span id="calcYearsOut">
                          2
                        </span>
                        yrs)
                      </span>
                    </div>
                    <div>
                      <strong id="calcLivingOut">
                        —
                      </strong>
                      <span>
                        Living Costs
                      </span>
                    </div>
                  </div>
                </div>
                <p className="sis-tool-disclaimer">
                  Estimates only, based on typical university ranges. Actual cost varies by university and lifestyle — your counsellor will confirm exact figures.
                </p>
              </div>
            </section>
            <section id="university-finder" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-magnifying-glass"></i>
                Find Your Fit
              </span>
              <h2>
                University Finder
              </h2>
              <div className="sis-tool-card">
                <div className="sis-tool-note">
                  <i className="fa-solid fa-circle-info"></i>
                  Filter our USA university list by your field of interest.
                </div>
                <form id="uniFinderForm">
                  <div className="row">
                    <div className="col-md-8">
                      <label htmlFor="finderField">
                        Field of Study
                      </label>
                      <select id="finderField">
                        <option value="">
                          All Fields
                        </option>
                        <option value="engineering">
                          Engineering
                        </option>
                        <option value="computer-science">
                          Computer Science
                        </option>
                        <option value="business">
                          Business & Management
                        </option>
                        <option value="arts">
                          Arts & Humanities
                        </option>
                      </select>
                    </div>
                    <div className="col-md-4 d-flex align-items-end">
                      <button type="submit" className="sis-btn-default w-100 justify-content-center">
                        Find Universities
                      </button>
                    </div>
                  </div>
                </form>
                <div className="sis-finder-result" id="uniFinderResult"></div>
              </div>
            </section>
            <section id="free-counselling" className="sis-country-block">
              <div className="sis-cta-banner cta-navy" data-aos="fade-up">
                <div className="sis-cta-pattern"></div>
                <div className="sis-cta-inner">
                  <div className="sis-cta-text">
                    <span className="sis-cta-eyebrow">
                      <i className="fa-solid fa-flag-usa"></i>
                      Ready For The USA?
                    </span>
                    <h3 className="sis-cta-title">
                      Get a free, personalised USA study plan.
                    </h3>
                    <p className="sis-cta-desc">
                      One call with a Go2Abroad counsellor to map your universities, costs, visa timeline and next steps — at zero cost.
                    </p>
                  </div>
                  <div className="sis-cta-actions">
                    <Link className="sis-btn-default" to="/contact">
                      Talk to a Counsellor â€” Free
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <Link className="sis-btn-default btn-light" to="/destinations">
                      Compare Other Countries
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
