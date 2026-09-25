import { Link } from "react-router-dom";
export default function Cta2() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-blue" data-aos="fade-up--">
          <div className="sis-cta-pattern"></div>
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-bolt"></i>
                Free Eligibility Check
              </span>
              <h3 className="sis-cta-title">
                One profile, matched against 20+ countries.
              </h3>
              <p className="sis-cta-desc">
                Let our counsellors tell you honestly where you have the best chance of admission, funding and a visa.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default btn-light" to="/contact">
                Check My Eligibility
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
