import { useContactDetails } from "../../../context/WebsiteSettingsContext";

export default function Cta() {
  const { phoneHref, whatsappHref, phone } = useContactDetails();
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-blue" data-aos="fade-up--">
          <div className="sis-cta-pattern"></div>
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-brands fa-whatsapp"></i>
                Prefer To Chat?
              </span>
              <h3 className="sis-cta-title">
                Skip the form — message us directly on WhatsApp.
              </h3>
              <p className="sis-cta-desc">
                Get answers on eligibility, costs and timelines in minutes, from a real counsellor. Mon–Sat, 11:00 AM – 07:00 PM.
              </p>
            </div>
            <div className="sis-cta-actions">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="sis-btn-default btn-light">
                Chat on WhatsApp
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href={phoneHref} className="sis-btn-default">
                Call {phone}
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
