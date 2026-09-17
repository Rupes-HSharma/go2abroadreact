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
                <i className="fa-solid fa-star"></i>
                Your Story Starts Here
              </span>
              <h3 className="sis-cta-title">
                Your success story starts with one call.
              </h3>
              <p className="sis-cta-desc">
                Join 2000+ students who trusted Go2Abroad with their study abroad journey — at zero consultation cost.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default" to="/contact">
                Talk to a Counsellor â€” Free
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
