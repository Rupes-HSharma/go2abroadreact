import { Link } from "react-router-dom";
export default function Cta2() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-navy" data-aos="fade-up">
          <div className="sis-cta-pattern"></div>
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-bolt"></i>
                Free Course & University Match
              </span>
              <h3 className="sis-cta-title">
                Get a shortlist built around your marks and budget.
              </h3>
              <p className="sis-cta-desc">
                Share your academic profile and we'll return a realistic shortlist of courses and universities within 48 hours.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default" to="/contact">
                Get My Free Shortlist
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
