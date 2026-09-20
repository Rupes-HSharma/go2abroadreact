import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Cta() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-image" style={{backgroundImage: `url(${img("/images/choose-us-image.png")})`}} data-aos="fade-up--">
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-circle-question"></i>
                Not Sure Where To Start?
              </span>
              <h3 className="sis-cta-title">
                Confused which service you actually need?
              </h3>
              <p className="sis-cta-desc">
                Tell us your goal in one free call and we'll build a step-by-step service plan — only what you need, nothing you don't.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default" to="/contact">
                Talk to an Expert
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
