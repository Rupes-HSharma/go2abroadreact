import {useLocation, Link} from "react-router-dom";
import { useEffect } from "react";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    // Legacy script.js adds .active once on initial load. React Router
    // owns the active state, so remove the stale legacy class on every route change.
    document
      .querySelectorAll("#sisf-page-header .nav-link.active")
      .forEach((link) => link.classList.remove("active"));
  }, [location.pathname]);

  const navCls = (base, path) =>
    location.pathname === path ? `${base} sis-nav-active` : base;

  return (
    <header id="sisf-page-header" className="sisf-main-header sisf-standerd-header">
      <div id="sisf-page-header-inner" className="sisf-skin--dark position-relative d-flex align-items-center">
        <div className="container">
          <Link className="navbar-brand sisf-header-logo-link mobile-block" to="/">
            <img src={img("/images/logo.png")} alt="Go2Abroad Logo" style={{width: '190px'}} />
          </Link>
          <div className="sisf-centered-header-wrapper sisf--header d-flex justify-content-between align-items-center">
            <Link className="navbar-brand sisf-header-logo-link" to="/">
              <img src={img("/images/logo.png")} alt="Go2Abroad Logo" style={{width: '190px'}} />
            </Link>
            <nav className="navbar navbar-expand-lg">
              <div className="collapse navbar-collapse sis-main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav" id="menu">
                    <li className={navCls("nav-item", "/")}>
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className={navCls("nav-item", "/about-us")}>
                      <Link className="nav-link" to="/about-us">
                        About Us
                      </Link>
                    </li>
                    <li className={navCls("nav-item", "/services")}>
                      <Link className="nav-link" to="/services">
                        Services
                        <i className="fas fa-chevron-down custom-toggle-icon ps-2"></i>
                      </Link>
                      <ul className="sub-menu sis-menu-columns-2">
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#counselling">
                            Profile & Career Counselling
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#profile-building">
                            Portfolio & Profile Building
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#university-shortlisting">
                            University Shortlisting
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#scholarship-guidance">
                            Scholarship Guidance
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#sop-writing">
                            SOP & LOR Writing
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#visa-assistance">
                            Visa Assistance
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#loan-assistance">
                            Education Loan Assistance
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#test-preparation">
                            English Proficiency Test Prep
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#interview-preparation">
                            Interview Preparation
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#accommodation">
                            Accommodation Assistance
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#forex">
                            Forex Services
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#post-arrival">
                            Post-Arrival Support
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#alumni">
                            Alumni Meets & Mentorship
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/services#helpline">
                            24×7 Helpline Support
                          </Link>
                        </li>
                        <li className="nav-item sis-submenu-view-all">
                          <Link className="nav-link" to="/services">
                            View All Services
                            <i className="fa-solid fa-arrow-right-long ps-2"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={navCls("nav-item", "/destinations")}>
                      <Link className="nav-link" to="/destinations">
                        Study Destinations
                        <i className="fas fa-chevron-down custom-toggle-icon ps-2"></i>
                      </Link>
                      <ul className="sub-menu sis-menu-columns-2">
                        <li className="nav-item">
                          <Link className="nav-link" to="/usa">
                            United States of America (USA)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/destinations#uk">
                            United Kingdom (UK)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/destinations#canada">
                            Canada
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/destinations#australia">
                            Australia
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/destinations#new-zealand">
                            New Zealand
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/destinations#germany">
                            Germany
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/destinations#ireland">
                            Ireland
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/destinations#singapore">
                            Singapore
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/destinations#france">
                            France
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/destinations#italy">
                            Italy
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/destinations#europe">
                            Europe (More Countries)
                          </Link>
                        </li>
                        <li className="nav-item sis-submenu-view-all">
                          <Link className="nav-link" to="/destinations">
                            View All Destinations
                            <i className="fa-solid fa-arrow-right-long ps-2"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={navCls("nav-item", "/courses")}>
                      <Link className="nav-link" to="/courses">
                        Courses
                        <i className="fas fa-chevron-down custom-toggle-icon ps-2"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li className="nav-item">
                          <Link className="nav-link" to="/courses#undergraduate">
                            Undergraduate (Bachelor's)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/courses#postgraduate">
                            Postgraduate (Master's)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/courses#mba">
                            MBA & Management
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/courses#phd">
                            PhD & Doctorate
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/courses#diploma">
                            Diploma & Certificate
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/courses#language">
                            English Language Programs
                          </Link>
                        </li>
                        <li className="nav-item sis-submenu-view-all">
                          <Link className="nav-link" to="/courses">
                            View All Courses
                            <i className="fa-solid fa-arrow-right-long ps-2"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={navCls("nav-item submenu", "/success-stories")}>
                      <Link className="nav-link" to="/success-stories">
                        Success Stories
                      </Link>
                    </li>
                    <li className={navCls("nav-item submenu", "/faq")}>
                      <Link className="nav-link" to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li className={navCls("nav-item submenu", "/contact")}>
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="sisf-widget-holder sisf--two d-flex align-items-center">
              <div className="header-btn">
                <Link className="sis-btn-default shadow-none" to="/contact">
                  Book Free Consultation
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-toggle"></div>
          <div className="responsive-menu"></div>
        </div>
      </div>
    </header>
  );
}
