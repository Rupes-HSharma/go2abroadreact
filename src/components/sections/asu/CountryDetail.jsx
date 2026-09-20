import { Link } from "react-router-dom";
export default function CountryDetail() {
  return (
    <div className="sis-country-detail-section section" data-university-page="asu">
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
                    <a href="#overview">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#location-campus">
                      Location & Campus
                    </a>
                  </li>
                  <li>
                    <a href="#rankings">
                      Rankings
                    </a>
                  </li>
                  <li>
                    <a href="#international-students">
                      International Students
                    </a>
                  </li>
                  <li>
                    <a href="#popular-courses">
                      Popular Courses
                    </a>
                  </li>
                  <li>
                    <a href="#tuition-fees">
                      Tuition Fees
                    </a>
                  </li>
                  <li>
                    <a href="#intakes">
                      Intakes
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
                    <a href="#scholarships">
                      Scholarships
                    </a>
                  </li>
                  <li>
                    <a href="#application-deadlines">
                      Application Deadlines
                    </a>
                  </li>
                  <li>
                    <a href="#career-outcomes">
                      Career Outcomes
                    </a>
                  </li>
                  <li>
                    <a href="#accommodation">
                      Accommodation
                    </a>
                  </li>
                  <li>
                    <a href="#student-life">
                      Student Life
                    </a>
                  </li>
                  <li>
                    <a href="#application-process">
                      Application Process
                    </a>
                  </li>
                </ul>
                <div className="sisf-m-btn">
                  <Link className="sis-btn-default" to="/contact">
                    Get Free Application Help
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-lg-9 sis-country-content-col">
            <section id="overview" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-building-columns"></i>
                University Profile
              </span>
              <h2>
                Overview
              </h2>
              <p>
                Arizona State University (ASU) is one of the largest public research universities in the United States, known for combining large-scale research strength with genuine flexibility for international students — multiple intakes, strong industry partnerships, and one of the country's most active international student communities.
              </p>
              <ul className="sis-country-list">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Public research university
                  </strong>
                  , founded in 1885
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    150,000+ students
                  </strong>
                  across in-person and online programs
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Multiple 7.5-week sessions
                  </strong>
                  giving flexible start dates for many programs
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Strong Indian student community
                  </strong>
                  with active cultural associations
                </li>
              </ul>
            </section>
            <section id="location-campus" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-location-dot"></i>
                Location
              </span>
              <h2>
                Location & Campus
              </h2>
              <p>
                ASU's main Tempe campus sits in the greater Phoenix metro area — a fast-growing tech and business hub with a large Indian diaspora, warm year-round climate, and easy access to internships across Arizona's semiconductor and technology corridor.
              </p>
              <div className="sis-fact-table">
                <div className="sis-fact-item">
                  <span>
                    Main Campus
                  </span>
                  <strong>
                    Tempe, Arizona
                  </strong>
                  <small>
                    15 minutes from Phoenix Sky Harbor Airport
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Other Campuses
                  </span>
                  <strong>
                    Downtown Phoenix, West, Polytechnic
                  </strong>
                  <small>
                    Plus ASU Online
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Climate
                  </span>
                  <strong>
                    Desert, sunny
                  </strong>
                  <small>
                    300+ days of sunshine a year
                  </small>
                </div>
              </div>
            </section>
            <section id="rankings" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-trophy"></i>
                Rankings
              </span>
              <h2>
                Rankings
              </h2>
              <div className="sis-fact-table">
                <div className="sis-fact-item">
                  <span>
                    #1 in the US for Innovation
                  </span>
                  <strong>
                    8+ Consecutive Years
                  </strong>
                  <small>
                    Source: U.S. News & World Report, most recent cycle
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    W. P. Carey Supply Chain Program
                  </span>
                  <strong>
                    Consistently Top-Ranked
                  </strong>
                  <small>
                    Source: U.S. News & World Report (Graduate Business)
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Global Standing
                  </span>
                  <strong>
                    Top 200 Band
                  </strong>
                  <small>
                    Source: QS World University Rankings
                  </small>
                </div>
              </div>
              <p className="mt-3 mb-0">
                <small>
                  Rankings shift year to year and by methodology — we verify the current standing for your specific program before you apply.
                </small>
              </p>
            </section>
            <section id="international-students" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-earth-americas"></i>
                Global Community
              </span>
              <h2>
                International Student Information
              </h2>
              <ul className="sis-country-list">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    15,000+ international students
                  </strong>
                  from 150+ countries
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Dedicated
                  <strong>
                    International Students & Scholars Center (ISSC)
                  </strong>
                  for visa, CPT/OPT and settling-in support
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Airport pickup & orientation week
                  </strong>
                  for new international students
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Active
                  <strong>
                    Indian Students' Association
                  </strong>
                  and 20+ related cultural clubs
                </li>
              </ul>
            </section>
            <section id="popular-courses" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-book"></i>
                Programmes
              </span>
              <h2>
                Popular Courses
              </h2>
              <ul className="sis-country-list">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    MS Computer Science / Software Engineering
                  </strong>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    MS Business Analytics (W. P. Carey School of Business)
                  </strong>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    MS Supply Chain Management
                  </strong>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    MS Electrical / Industrial Engineering
                  </strong>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Master of Mass Communication (Cronkite School)
                  </strong>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    MBA (Full-Time & Online)
                  </strong>
                </li>
              </ul>
            </section>
            <section id="tuition-fees" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-sack-dollar"></i>
                Cost
              </span>
              <h2>
                Tuition Fees
              </h2>
              <div className="sis-fact-table">
                <div className="sis-fact-item">
                  <span>
                    Undergraduate
                  </span>
                  <strong>
                    $29,000 – $33,000
                  </strong>
                  <small>
                    per year, international rate
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Master's (MS)
                  </span>
                  <strong>
                    $28,000 – $38,000
                  </strong>
                  <small>
                    per year, program-dependent
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    MBA
                  </span>
                  <strong>
                    $45,000 – $65,000
                  </strong>
                  <small>
                    full program
                  </small>
                </div>
              </div>
              <p className="mt-3 mb-0">
                <small>
                  Indicative figures for planning purposes — exact tuition varies by college and program; we confirm current fees before you apply.
                </small>
              </p>
            </section>
            <section id="intakes" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-calendar-days"></i>
                Intakes
              </span>
              <h2>
                Intakes
              </h2>
              <div className="sis-fact-table">
                <div className="sis-fact-item">
                  <span>
                    Fall
                  </span>
                  <strong>
                    August
                  </strong>
                  <small>
                    Primary intake, widest program choice
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Spring
                  </span>
                  <strong>
                    January
                  </strong>
                  <small>
                    Strong secondary intake
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Summer
                  </span>
                  <strong>
                    May
                  </strong>
                  <small>
                    Select programs only
                  </small>
                </div>
              </div>
              <p className="mt-3 mb-0">
                Many programs also run on 7.5-week sessions within each semester, giving added flexibility for eligible students.
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
                  Academic transcripts, typically a 3.0/4.0 GPA or equivalent
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Statement of Purpose (SOP)
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  2–3 Letters of Recommendation (graduate programs)
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Updated resume / CV
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  GRE/GMAT optional for many graduate programs
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  English proficiency test score
                </li>
              </ul>
            </section>
            <section id="english-requirements" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-language"></i>
                English
              </span>
              <h2>
                English Requirements
              </h2>
              <div className="sis-fact-table">
                <div className="sis-fact-item">
                  <span>
                    IELTS
                  </span>
                  <strong>
                    6.0 (UG) / 6.5 (PG)
                  </strong>
                  <small>
                    Minimum overall band
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    TOEFL iBT
                  </span>
                  <strong>
                    61 (UG) / 80 (PG)
                  </strong>
                  <small>
                    Widely accepted
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Duolingo English Test
                  </span>
                  <strong>
                    105+
                  </strong>
                  <small>
                    Accepted as an alternative
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
                    New American University Scholarship
                  </strong>
                  for high-achieving international students
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    College & department-specific merit awards
                  </strong>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Graduate Teaching & Research Assistantships
                  </strong>
                  (tuition + stipend)
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    International Distinction Award
                  </strong>
                  for select applicants
                </li>
              </ul>
            </section>
            <div className="sis-cta-wrap py-3">
              <div className="sis-cta-banner cta-blue" data-aos="fade-up--">
                <div className="sis-cta-pattern"></div>
                <div className="sis-cta-inner">
                  <div className="sis-cta-text">
                    <span className="sis-cta-eyebrow">
                      <i className="fa-solid fa-award"></i>
                      Funding Your ASU Degree?
                    </span>
                    <h3 className="sis-cta-title">
                      Find out which ASU scholarships you actually qualify for.
                    </h3>
                    <p className="sis-cta-desc">
                      Our counsellors check your profile against merit awards and assistantships — free of cost.
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
            <section id="application-deadlines" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-timeline"></i>
                Deadlines
              </span>
              <h2>
                Application Deadlines
              </h2>
              <div className="sis-fact-table">
                <div className="sis-fact-item">
                  <span>
                    Fall Intake
                  </span>
                  <strong>
                    Priority: Feb — Final: Jul
                  </strong>
                  <small>
                    Apply early for scholarship priority
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Spring Intake
                  </span>
                  <strong>
                    Final: Nov
                  </strong>
                  <small>
                    Fewer program options open
                  </small>
                </div>
              </div>
              <p className="mt-3 mb-0">
                <small>
                  Exact deadlines vary by college and program each cycle — we track the current dates for your target course.
                </small>
              </p>
            </section>
            <section id="career-outcomes" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-briefcase"></i>
                Outcomes
              </span>
              <h2>
                Career Outcomes
              </h2>
              <ul className="sis-country-list sis-single-col">
                <li>
                  <i className="fa-solid fa-check"></i>
                  Dedicated
                  <strong>
                    Career & Professional Development Services
                  </strong>
                  with resume, mock interview and recruiting support
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  On-campus recruiting pipeline into Arizona's growing
                  <strong>
                    semiconductor & tech corridor
                  </strong>
                  (Intel, major chipmakers and tech employers hire locally)
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Strong OPT/CPT support through the International Students & Scholars Center
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
                    On-Campus Residence Halls
                  </span>
                  <strong>
                    $800 – $1,400
                  </strong>
                  <small>
                    per month
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Off-Campus Shared Apartment
                  </span>
                  <strong>
                    $600 – $1,100
                  </strong>
                  <small>
                    per month, near Tempe campus
                  </small>
                </div>
                <div className="sis-fact-item">
                  <span>
                    Homestay
                  </span>
                  <strong>
                    $700 – $1,000
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
            <section id="student-life" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-people-group"></i>
                Campus Culture
              </span>
              <h2>
                Student Life
              </h2>
              <ul className="sis-country-list">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    1,000+ student clubs & organizations
                  </strong>
                  to join
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>
                    Sun Devil Athletics
                  </strong>
                  — Big 12 Conference sports & game-day culture
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Year-round outdoor lifestyle with a warm, sunny desert climate
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Active
                  <strong>
                    Indian cultural associations
                  </strong>
                  , festivals and food scene nearby
                </li>
              </ul>
            </section>
            <section id="application-process" className="sis-country-block">
              <span className="sis-country-block-eyebrow">
                <i className="fa-solid fa-list-check"></i>
                How To Apply
              </span>
              <h2>
                Application Process
              </h2>
              <ol className="sis-step-vertical">
                <li>
                  <strong>
                    Create your application account
                  </strong>
                  <p>
                    Start your ASU application online and select your intended program.
                  </p>
                </li>
                <li>
                  <strong>
                    Submit academic records
                  </strong>
                  <p>
                    Upload transcripts and mark sheets from your previous institution(s).
                  </p>
                </li>
                <li>
                  <strong>
                    Add supporting documents
                  </strong>
                  <p>
                    SOP, resume, LORs (for graduate programs) and English test scores.
                  </p>
                </li>
                <li>
                  <strong>
                    Pay the application fee
                  </strong>
                  <p>
                    Complete the non-refundable application fee to submit your file.
                  </p>
                </li>
                <li>
                  <strong>
                    Track your application
                  </strong>
                  <p>
                    Monitor status and respond to any additional document requests.
                  </p>
                </li>
                <li>
                  <strong>
                    Receive your admit & I-20
                  </strong>
                  <p>
                    Once accepted, confirm your seat and receive your I-20 for the visa process.
                  </p>
                </li>
              </ol>
            </section>
            <section id="final-cta" className="sis-country-block" style={{borderBottom: 'none'}}>
              <div className="sis-cta-banner cta-navy" data-aos="fade-up--">
                <div className="sis-cta-pattern"></div>
                <div className="sis-cta-inner">
                  <div className="sis-cta-text">
                    <span className="sis-cta-eyebrow">
                      <i className="fa-solid fa-graduation-cap"></i>
                      Considering ASU?
                    </span>
                    <h3 className="sis-cta-title">
                      Get a free, personalised Arizona State application plan.
                    </h3>
                    <p className="sis-cta-desc">
                      One call with a Go2Abroad counsellor to check your fit, shortlist the right program and map your complete application timeline — at zero cost.
                    </p>
                  </div>
                  <div className="sis-cta-actions">
                    <Link className="sis-btn-default" to="/contact">
                      Talk to a Counsellor â€” Free
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <Link className="sis-btn-default btn-light" to="/usa">
                      Back to Study in USA
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
