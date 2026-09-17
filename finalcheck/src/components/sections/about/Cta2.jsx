import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Cta2() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-image" style={{backgroundImage: `url(${img("/images/choose-us-image.png")})`}} data-aos="fade-up">
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-heart"></i>
                Zero Consultation Fees
              </span>
              <h3 className="sis-cta-title">
                1200+ families trusted us with their biggest decision. We'd love to guide yours too.
              </h3>
              <p className="sis-cta-desc">
                From the first shortlist to the day you land, our team stays with you — honestly, and at no cost to you.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default" to="/contact">
                Start Your Journey
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <Link className="sis-btn-default btn-light" to="/success-stories">
                Read Success Stories
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
