import { Link } from "react-router-dom";
export default function Cta3() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-navy" data-aos="fade-up">
          <div className="sis-cta-pattern"></div>
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-users"></i>
                2000+ Students Counselled
              </span>
              <h3 className="sis-cta-title">
                1200+ Indian families trusted us. Zero consultation fees. Your turn next.
              </h3>
              <p className="sis-cta-desc">
                One free session with a real counsellor — not a chatbot — to map out your country, course and complete cost of studying abroad.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default" to="/contact">
                Talk to a Counsellor — Free
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <Link className="sis-btn-default btn-light" to="/success-stories">
                See Success Stories
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
