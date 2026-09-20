import { Link } from "react-router-dom";
export default function DestinationsList() {
  return (
    <div className="sis-destinations-list-section section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle">
                MOST POPULAR
              </span>
              <h2 className="sisf-m-title">
                Top Study Destinations for
                <span className="sisf-e-colored">
                  Indian Students
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6" id="usa">
            <div className="sis-country-card" data-aos="fade-up--" data-aos-delay="100">
              <div className="sis-country-card-top">
                <div className="sis-country-flag" style={{fontSize: '24px'}}>
                  🇺🇸
                </div>
                <div>
                  <h3>
                    United States
                  </h3>
                  <span className="sis-country-tag">
                    Ivy League & STEM
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Home to 4,000+ universities & top STEM programs
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Up to 3 years OPT work authorization
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Strong on-campus assistantships & scholarships
                  </li>
                </ul>
                <Link className="sis-country-card-link" to="/usa">
                  Explore USA
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" id="uk">
            <div className="sis-country-card" data-aos="fade-up--" data-aos-delay="150">
              <div className="sis-country-card-top">
                <div className="sis-country-flag" style={{fontSize: '24px'}}>
                  🇬🇧
                </div>
                <div>
                  <h3>
                    United Kingdom
                  </h3>
                  <span className="sis-country-tag">
                    1-Year Master's
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    One-year Master's saves time & tuition cost
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    2-year Graduate Route post-study work visa
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    World-ranked universities & rich culture
                  </li>
                </ul>
                <Link className="sis-country-card-link" to="/contact">
                  Explore UK
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" id="canada">
            <div className="sis-country-card" data-aos="fade-up--" data-aos-delay="200">
              <div className="sis-country-card-top">
                <div className="sis-country-flag" style={{fontSize: '24px'}}>
                  🇨🇦
                </div>
                <div>
                  <h3>
                    Canada
                  </h3>
                  <span className="sis-country-tag">
                    PR-Friendly
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Post-Graduation Work Permit up to 3 years
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    One of the clearest pathways to permanent residency
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Affordable tuition vs. USA/UK
                  </li>
                </ul>
                <Link className="sis-country-card-link" to="/contact">
                  Explore Canada
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" id="australia">
            <div className="sis-country-card" data-aos="fade-up--" data-aos-delay="250">
              <div className="sis-country-card-top">
                <div className="sis-country-flag" style={{fontSize: '24px'}}>
                  🇦🇺
                </div>
                <div>
                  <h3>
                    Australia
                  </h3>
                  <span className="sis-country-tag">
                    Post-Study Work
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    2-6 years post-study work visa by qualification
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Globally ranked universities in Group of Eight
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Strong skilled-migration pathway
                  </li>
                </ul>
                <Link className="sis-country-card-link" to="/contact">
                  Explore Australia
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" id="new-zealand">
            <div className="sis-country-card" data-aos="fade-up--" data-aos-delay="100">
              <div className="sis-country-card-top">
                <div className="sis-country-flag" style={{fontSize: '24px'}}>
                  🇳🇿
                </div>
                <div>
                  <h3>
                    New Zealand
                  </h3>
                  <span className="sis-country-tag">
                    Safe & Scenic
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Up to 3-year post-study work visa
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Consistently ranked among safest countries
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Smaller class sizes, strong student support
                  </li>
                </ul>
                <Link className="sis-country-card-link" to="/contact">
                  Explore New Zealand
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" id="germany">
            <div className="sis-country-card" data-aos="fade-up--" data-aos-delay="150">
              <div className="sis-country-card-top">
                <div className="sis-country-flag" style={{fontSize: '24px'}}>
                  🇩🇪
                </div>
                <div>
                  <h3>
                    Germany
                  </h3>
                  <span className="sis-country-tag">
                    Low / No Tuition
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Public universities with little to no tuition fees
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    18-month post-study job search visa
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Engineering & research powerhouse
                  </li>
                </ul>
                <Link className="sis-country-card-link" to="/contact">
                  Explore Germany
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" id="ireland">
            <div className="sis-country-card" data-aos="fade-up--" data-aos-delay="200">
              <div className="sis-country-card-top">
                <div className="sis-country-flag" style={{fontSize: '24px'}}>
                  🇮🇪
                </div>
                <div>
                  <h3>
                    Ireland
                  </h3>
                  <span className="sis-country-tag">
                    Tech & Pharma Hub
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    European base for Google, Meta, Pfizer & more
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    2-year post-study stay-back visa
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    English-speaking gateway to the EU
                  </li>
                </ul>
                <Link className="sis-country-card-link" to="/contact">
                  Explore Ireland
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" id="singapore">
            <div className="sis-country-card" data-aos="fade-up--" data-aos-delay="250">
              <div className="sis-country-card-top">
                <div className="sis-country-flag" style={{fontSize: '24px'}}>
                  🇸🇬
                </div>
                <div>
                  <h3>
                    Singapore
                  </h3>
                  <span className="sis-country-tag">
                    Asia's Finance Hub
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Top-ranked business & finance programs
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Close proximity to India, shorter travel time
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Gateway to Southeast Asian job markets
                  </li>
                </ul>
                <Link className="sis-country-card-link" to="/contact">
                  Explore Singapore
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
