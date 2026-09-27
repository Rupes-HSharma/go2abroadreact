import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWebsiteSettings } from "../context/WebsiteSettingsContext";

const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const menuGroups = [
  { label: "Services", path: "/services", items: [["Profile & Career Counselling", "counselling"], ["Portfolio & Profile Building", "profile-building"], ["University Shortlisting", "university-shortlisting"], ["Scholarship Guidance", "scholarship-guidance"], ["SOP & LOR Writing", "sop-writing"], ["Visa Assistance", "visa-assistance"], ["Education Loan Assistance", "loan-assistance"], ["English Proficiency Test Prep", "test-preparation"], ["Interview Preparation", "interview-preparation"], ["Accommodation Assistance", "accommodation"], ["Forex Services", "forex"], ["Post-Arrival Support", "post-arrival"], ["Alumni Meets & Mentorship", "alumni"], ["24×7 Helpline Support", "helpline"]] },
  { label: "Study Destinations", path: "/destinations", items: [["United States of America (USA)", "/usa"], ["United Kingdom (UK)", "uk"], ["Canada", "canada"], ["Australia", "australia"], ["New Zealand", "new-zealand"], ["Germany", "germany"], ["Ireland", "ireland"], ["Singapore", "singapore"], ["France", "france"], ["Italy", "italy"], ["Europe (More Countries)", "europe"]] },
  { label: "Courses", path: "/courses", items: [["Undergraduate (Bachelor's)", "undergraduate"], ["Postgraduate (Master's)", "postgraduate"], ["MBA & Management", "mba"], ["PhD & Doctorate", "phd"], ["Diploma & Certificate", "diploma"], ["English Language Programs", "language"]] },
];

function groupHref(group, target) {
  return target.startsWith("/") ? target : `${group.path}#${target}`;
}

export default function Header() {
  const location = useLocation();
  const { settings, assetUrl } = useWebsiteSettings();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", mobileOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [mobileOpen]);

  const navClass = (path) => location.pathname === path ? "nav-item sis-nav-active" : "nav-item";
  const logo = assetUrl(settings.logoUrl) || img("/images/logo.png");

  const renderGroup = (group, mobile = false) => {
    const expanded = openGroup === group.path;
    return (
      <li className={`${navClass(group.path)} ${mobile ? "mobile-nav-group" : ""}`} key={group.path}>
        <div className="sis-nav-group-heading">
          <Link className="nav-link" to={group.path} onClick={() => mobile && setMobileOpen(false)}>{group.label}</Link>
          <button type="button" className="sis-nav-toggle" aria-label={`Toggle ${group.label} submenu`} aria-expanded={expanded} onClick={() => setOpenGroup(expanded ? null : group.path)}>
            <i className="fas fa-chevron-down" aria-hidden="true" />
          </button>
        </div>
        <ul className={`sub-menu ${mobile ? "mobile-sub-menu" : "sis-menu-columns-2"} ${expanded ? "is-open" : ""}`}>
          {group.items.map(([label, target]) => (
            <li className="nav-item" key={target}><Link className="nav-link" to={groupHref(group, target)} onClick={() => mobile && setMobileOpen(false)}>{label}</Link></li>
          ))}
          <li className="nav-item sis-submenu-view-all"><Link className="nav-link" to={group.path} onClick={() => mobile && setMobileOpen(false)}>View All {group.label} <i className="fa-solid fa-arrow-right-long ps-2" aria-hidden="true" /></Link></li>
        </ul>
      </li>
    );
  };

  const simpleItems = [["/", "Home"], ["/about-us", "About Us"], ["/success-stories", "Success Stories"], ["/faq", "FAQ"], ["/contact", "Contact Us"]];

  return (
    <header id="sisf-page-header" className="sisf-main-header sisf-standerd-header">
      <div id="sisf-page-header-inner" className="sisf-skin--dark position-relative d-flex align-items-center">
        <div className="container">
          <Link className="navbar-brand sisf-header-logo-link mobile-block" to="/"><img src={logo} alt={`${settings.siteName || "Go2Abroad"} Logo`} style={{ width: "190px" }} /></Link>
          <div className="sisf-centered-header-wrapper sisf--header d-flex justify-content-between align-items-center">
            <Link className="navbar-brand sisf-header-logo-link" to="/"><img src={logo} alt={`${settings.siteName || "Go2Abroad"} Logo`} style={{ width: "190px" }} /></Link>
            <nav className="navbar navbar-expand-lg" aria-label="Main navigation"><div className="collapse navbar-collapse sis-main-menu"><div className="nav-menu-wrapper"><ul className="navbar-nav" id="menu">
              {simpleItems.slice(0, 2).map(([path, label]) => <li className={navClass(path)} key={path}><Link className="nav-link" to={path}>{label}</Link></li>)}
              {menuGroups.map((group) => renderGroup(group))}
              {simpleItems.slice(2).map(([path, label]) => <li className={navClass(path)} key={path}><Link className="nav-link" to={path}>{label}</Link></li>)}
            </ul></div></div></nav>
            <div className="sisf-widget-holder sisf--two d-flex align-items-center"><div className="header-btn"><Link className="sis-btn-default shadow-none" to="/contact">Book Free Consultation <i className="fa-solid fa-arrow-right-long" aria-hidden="true" /></Link></div></div>
          </div>
          <button type="button" className={`navbar-toggle ${mobileOpen ? "is-open" : ""}`} aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}><span /><span /><span /></button>
          <div className={`responsive-menu ${mobileOpen ? "is-open" : ""}`}><nav aria-label="Mobile navigation"><ul className="mobile-nav-list">
            {simpleItems.slice(0, 2).map(([path, label]) => <li key={path}><Link className="nav-link" to={path}>{label}</Link></li>)}
            {menuGroups.map((group) => renderGroup(group, true))}
            {simpleItems.slice(2).map(([path, label]) => <li key={path}><Link className="nav-link" to={path}>{label}</Link></li>)}
          </ul></nav></div>
        </div>
      </div>
    </header>
  );
}
