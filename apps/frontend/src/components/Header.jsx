import {useLocation, Link} from "react-router-dom";
import { SERVICE_CATALOG } from "../data/serviceCatalog";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export default function Header() {
  const location = useLocation();

  const navCls = (base, path) => {
    const pathname = location.pathname;
    let active = pathname === path;

    // Keep the parent menu highlighted while visiting any of its detail pages.
    if (path === "/destinations") {
      active = active || pathname.startsWith("/destination/") || [
        "/usa", "/uk", "/canada", "/australia", "/new-zealand",
        "/germany", "/ireland", "/singapore", "/france", "/italy", "/europe"
      ].includes(pathname);
    }
    if (path === "/courses") {
      active = active || pathname.startsWith("/course/") || [
        "/undergraduate", "/postgraduate", "/mba", "/phd", "/diploma", "/language"
      ].includes(pathname);
    }
    if (path === "/services") active = active || pathname.startsWith("/services/") || pathname === "/service" || pathname.startsWith("/service/");
    return active ? `${base} sis-nav-active` : base;
  };

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
                        {SERVICE_CATALOG.map((service) => (
                          <li className="nav-item" key={service.slug}>
                            <Link className="nav-link" to={`/service/${service.slug}`}>
                              {service.title}
                            </Link>
                          </li>
                        ))}
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
                          <Link className="nav-link" to="/uk">
                            United Kingdom (UK)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/canada">
                            Canada
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/australia">
                            Australia
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/new-zealand">
                            New Zealand
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/germany">
                            Germany
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/ireland">
                            Ireland
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/singapore">
                            Singapore
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/france">
                            France
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/italy">
                            Italy
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/europe">
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
                          <Link className="nav-link" to="/undergraduate">
                            Undergraduate (Bachelor's)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/postgraduate">
                            Postgraduate (Master's)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/mba">
                            MBA & Management
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/phd">
                            PhD & Doctorate
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/diploma">
                            Diploma & Certificate
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/language">
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
                    <li className={navCls("nav-item submenu", "/blog")}>
                      <Link className="nav-link" to="/blog">
                        Blog
                      </Link>
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
