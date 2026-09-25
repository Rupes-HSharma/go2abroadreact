import { Link } from "react-router-dom";
export default function Cta() {
  return (
    <div className="sis-cta-wrap py-5 pt-0">
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
                Not sure where you belong? Find out in 2 minutes.
              </h3>
              <p className="sis-cta-desc">
                Share your profile, budget and goals — our counsellors match you with the right country, university and course, absolutely free.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default btn-light" to="/contact">
                Check My Eligibility
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <Link className="sis-btn-default" to="/destinations">
                Explore Destinations
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
