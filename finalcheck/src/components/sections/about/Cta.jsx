import { Link } from "react-router-dom";
export default function Cta() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-navy" data-aos="fade-up">
          <div className="sis-cta-pattern"></div>
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-comments"></i>
                Meet Your Counsellor
              </span>
              <h3 className="sis-cta-title">
                Want to know if you're a good fit? Let's find out together.
              </h3>
              <p className="sis-cta-desc">
                Book a free, no-obligation session with a Go2Abroad counsellor and get honest advice on your country, course and university options.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default" to="/contact">
                Book Free Session
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <Link className="sis-btn-default btn-light" to="/services">
                View Our Services
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
