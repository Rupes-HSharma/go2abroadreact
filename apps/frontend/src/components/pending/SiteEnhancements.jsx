import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SITE_VERSION = "1.0.0";

export default function SiteEnhancements() {
  const [showLeadPopup, setShowLeadPopup] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const popupSeen = sessionStorage.getItem("go2abroad_lead_popup_seen");
    if (!popupSeen) {
      const timer = setTimeout(() => setShowLeadPopup(true), 900);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const onShowNotice = () => setShowNotice(true);
    window.addEventListener("go2abroad:notification", onShowNotice);
    return () => window.removeEventListener("go2abroad:notification", onShowNotice);
  }, []);

  const closePopup = () => {
    sessionStorage.setItem("go2abroad_lead_popup_seen", "1");
    setShowLeadPopup(false);
  };

  return (
    <>
      <div className="go2abroad-version" aria-label={`Website version ${SITE_VERSION}`}>
        Version {SITE_VERSION}
      </div>
      {showNotice && (
        <div className="go2abroad-notice" role="status">
          <span>Thanks! Your request has been received.</span>
          <button type="button" onClick={() => setShowNotice(false)} aria-label="Close notification">×</button>
        </div>
      )}
      {showLeadPopup && (
        <div className="go2abroad-modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && closePopup()}>
          <div className="go2abroad-lead-modal" role="dialog" aria-modal="true" aria-labelledby="lead-popup-title">
            <button type="button" className="go2abroad-modal-close" onClick={closePopup} aria-label="Close">×</button>
            <span className="go2abroad-popup-label">FREE CONSULTATION</span>
            <h2 id="lead-popup-title">Plan your study abroad journey</h2>
            <p>Get guidance on destinations, universities, courses and applications.</p>
            <Link className="btn go2abroad-popup-btn" to="/lead-generation" onClick={closePopup}>Start My Enquiry</Link>
          </div>
        </div>
      )}
    </>
  );
}
