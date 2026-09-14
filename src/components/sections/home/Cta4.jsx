import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Cta4() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-image" style={{backgroundImage: `url(${img("/images/about-image-1.jpg")})`}} data-aos="fade-up">
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-wallet"></i>
                Loan & Forex Assistance
              </span>
              <h3 className="sis-cta-title">
                Fund your dream without the financial stress.
              </h3>
              <p className="sis-cta-desc">
                Compare education loan offers from partner banks and NBFCs, and get the best forex rates for tuition and living expenses — all under one roof.
              </p>
            </div>
            <div className="sis-cta-actions">
              <Link className="sis-btn-default" to="/services#loan-assistance">
                Get Loan Assistance
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <Link className="sis-btn-default btn-light" to="/services#forex">
                Forex Services
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
