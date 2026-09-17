import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Cta() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-image" style={{backgroundImage: `url(${img("/images/about-image-1.jpg")})`}} data-aos="fade-up">
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-graduation-cap"></i>
                Still Deciding?
              </span>
              <h3 className="sis-cta-title">
                Undergrad or Master's? We'll help you decide.
              </h3>
              <p className="sis-cta-desc">
                Budget, timeline, work rights and career goals all matter — our advisors help you pick the level and course that fits.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default" to="/contact">
                Talk to an Advisor
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
