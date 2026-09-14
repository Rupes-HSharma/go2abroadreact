import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Cta() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-image" style={{backgroundImage: `url(${img("/images/country-detail-image-2.jpg")})`}} data-aos="fade-up">
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-globe"></i>
                Not Sure Which Country Fits You?
              </span>
              <h3 className="sis-cta-title">
                Compare countries side-by-side with a counsellor.
              </h3>
              <p className="sis-cta-desc">
                Cost of living, work rights, PR pathways and admission chances — we'll break it all down for your specific profile.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default" to="/contact">
                Book Free Session
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
