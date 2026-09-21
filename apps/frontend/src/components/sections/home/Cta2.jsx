import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Cta2() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-image" style={{backgroundImage: `url(${img("/images/video-bg.jpg")})`}} data-aos="fade-up--">
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-stamp"></i>
                Visa & Documentation
              </span>
              <h3 className="sis-cta-title">
                Your visa, handled end-to-end — no guesswork, no delays.
              </h3>
              <p className="sis-cta-desc">
                From SOPs and financial documents to interview prep, our visa specialists prepare every file so your application gets it right the first time.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default" to="/services#visa-assistance">
                Get Visa Assistance
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <div className="sis-cta-phone">
                <i className="fa-solid fa-phone-volume"></i>
                <div>
                  <span>
                    Call our visa desk
                  </span>
                  <a href="tel:+917068821740">
                    +91-70688 21740
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
