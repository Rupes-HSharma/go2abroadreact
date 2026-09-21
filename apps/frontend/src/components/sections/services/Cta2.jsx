import { Link } from "react-router-dom";
export default function Cta2() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-navy" data-aos="fade-up--">
          <div className="sis-cta-pattern"></div>
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-bolt"></i>
                One Call. Complete Clarity.
              </span>
              <h3 className="sis-cta-title">
                Book your free consultation today.
              </h3>
              <p className="sis-cta-desc">
                No pressure, no hidden fees — just an honest roadmap for your study abroad journey.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default" to="/contact">
                Book Free Consultation
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <Link className="sis-btn-default btn-light" to="/destinations">
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
