import { Link } from "react-router-dom";
export default function Cta() {
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-blue" data-aos="fade-up">
          <div className="sis-cta-pattern"></div>
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-solid fa-circle-question"></i>
                Still Have Questions?
              </span>
              <h3 className="sis-cta-title">
                We're one message away.
              </h3>
              <p className="sis-cta-desc">
                Chat with a real counsellor on WhatsApp or book a free call — whichever is easier for you.
              </p>
            </div>
            <div className="sis-cta-actions">
              <a href="https://wa.me/919958155484" target="_blank" rel="noopener" className="sis-btn-default btn-light">
                Chat on WhatsApp
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <Link className="sis-btn-default" to="/contact">
                Contact Us
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
