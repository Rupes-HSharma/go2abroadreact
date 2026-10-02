import { useEffect, useState } from "react";
import { submitContactForm } from "../../utils/submitContactForm";
import { useLocation } from "react-router-dom";

const SITE_VERSION = "1.0.0";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const destinations = ["USA", "UK", "Canada", "Australia", "Germany", "New Zealand", "Ireland", "Other"];
const interests = [
  "Undergraduate Program",
  "Postgraduate / Master's",
  "MBA",
  "PhD / Doctorate",
  "Diploma / Certificate",
  "Test Preparation (IELTS/TOEFL/PTE)",
  "Education Loan"
];

export default function SiteEnhancements() {
  const [showLeadPopup, setShowLeadPopup] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [thankYouName, setThankYouName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    if (!isHome) {
      setShowLeadPopup(false);
      return undefined;
    }
    const timer = setTimeout(() => setShowLeadPopup(true), 900);
    return () => clearTimeout(timer);
  }, [isHome]);

  useEffect(() => {
    const onShowNotice = () => setShowNotice(true);
    const onFormSuccess = (event) => {
      setThankYouName(event.detail?.name || "");
      setShowThankYou(true);
    };
    window.addEventListener("go2abroad:notification", onShowNotice);
    window.addEventListener("go2abroad:form-success", onFormSuccess);
    return () => {
      window.removeEventListener("go2abroad:notification", onShowNotice);
      window.removeEventListener("go2abroad:form-success", onFormSuccess);
    };
  }, []);

  const closeThankYou = () => {
    setShowThankYou(false);
    setThankYouName("");
  };

  const closePopup = () => {
    setShowLeadPopup(false);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await submitContactForm(event.currentTarget);
      const values = Object.fromEntries(new FormData(event.currentTarget).entries());
      sessionStorage.setItem("go2abroad_lead", JSON.stringify({ ...values, source: "Home Default Popup", submittedAt: new Date().toISOString() }));
      event.currentTarget.reset();
      closePopup();
      setShowNotice(true);
      window.dispatchEvent(new Event("go2abroad:notification"));
    } catch (submissionError) {
      setError(submissionError.message || "Unable to submit the enquiry right now.");
    } finally {
      setSubmitting(false);
    }
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

      {showThankYou && (
        <div
          className="go2abroad-thankyou-backdrop"
          role="presentation"
          onMouseDown={(event) => event.target === event.currentTarget && closeThankYou()}
        >
          <div className="go2abroad-thankyou-modal" role="dialog" aria-modal="true" aria-labelledby="go2abroad-thankyou-title">
            <button type="button" className="go2abroad-thankyou-close" onClick={closeThankYou} aria-label="Close">×</button>
            <div className="go2abroad-thankyou-icon" aria-hidden="true"><i className="fa-solid fa-check" /></div>
            <span className="go2abroad-thankyou-eyebrow">SUBMISSION RECEIVED</span>
            <h2 id="go2abroad-thankyou-title">Thank you{thankYouName ? `, ${thankYouName}` : ""}!</h2>
            <p>Your enquiry has been submitted successfully. Our counselling team will review your details and contact you shortly.</p>
            <div className="go2abroad-thankyou-actions">
              <button type="button" className="go2abroad-thankyou-primary" onClick={closeThankYou}>Continue Browsing <i className="fa-solid fa-arrow-right" /></button>
              <button type="button" className="go2abroad-thankyou-secondary" onClick={() => { closeThankYou(); window.location.href = `${import.meta.env.BASE_URL}`; }}>Back to Home</button>
            </div>
          </div>
        </div>
      )}

      {showLeadPopup && isHome && (
        <div
          className="go2abroad-modal-backdrop"
          role="presentation"
          onMouseDown={(e) => e.target === e.currentTarget && closePopup()}
        >
          <div className="go2abroad-lead-modal go2abroad-contact-modal go2abroad-form-modal" role="dialog" aria-modal="true" aria-labelledby="lead-popup-title">
            <button type="button" className="go2abroad-modal-close" onClick={closePopup} aria-label="Close">×</button>

            <aside className="go2abroad-modal-visual-panel" aria-label="Study abroad guidance">
              <div className="go2abroad-modal-visual-orbit orbit-one" />
              <div className="go2abroad-modal-visual-orbit orbit-two" />
              <div className="go2abroad-modal-visual-copy">
                <span className="go2abroad-popup-label">STUDY ABROAD</span>
                <h2>Your global education journey starts <strong>here.</strong></h2>
                <p>Tell us your plans and our expert counsellors will guide you with the right destination, course and visa support.</p>
                <div className="go2abroad-modal-trust-list">
                  <span><i className="fa-solid fa-circle-check" /> Personalised guidance</span>
                  <span><i className="fa-solid fa-circle-check" /> End-to-end support</span>
                  <span><i className="fa-solid fa-circle-check" /> 100% free counselling</span>
                </div>
              </div>
              <div className="go2abroad-modal-student-art">
                <div className="go2abroad-modal-globe"><i className="fa-solid fa-earth-americas" /></div>
                <img src={img("/images/hero-img-right.png")} alt="Students preparing for study abroad" />
              </div>
              <div className="go2abroad-modal-country-pills"><span>🇺🇸</span><span>🇬🇧</span><span>🇨🇦</span><span>🇦🇺</span><span>🇩🇪</span></div>
            </aside>

            <div className="sis-contact-form-card go2abroad-modal-form-card">
              <div className="sis-contact-header go2abroad-modal-header">
                <div className="sis-contact-eyebrow"><span /> FREE CONSULTATION</div>
                <div className="sis-contact-heading-row">
                  <div>
                    <h2 id="lead-popup-title">Send us a <span>Message</span></h2>
                    <p>Share your study plans and our counsellors will help you choose the right next step.</p>
                  </div>
                  <div className="sis-contact-plane go2abroad-modal-plane">
                    <i className="fa-solid fa-paper-plane" />
                    <div className="sis-plane-line" />
                    <small>We're here<br />to help you!</small>
                  </div>
                </div>
              </div>

              <div className="sis-form-inner go2abroad-modal-form-inner">
                <form onSubmit={handleSubmit} noValidate>
                  <input type="hidden" name="source" value="Home Default Popup" />

                  <div className="row g-3">
                    <div className="col-12">
                      <div className="sis-form-field">
                        <label htmlFor="popupFullName">Full Name <span>*</span></label>
                        <div className="sis-input-wrap sis-input-blue">
                          <div className="sis-input-icon"><i className="fa-solid fa-user" /></div>
                          <input id="popupFullName" type="text" className="form-control" name="name" placeholder="Enter your full name" autoComplete="name" required />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="sis-form-field">
                        <label htmlFor="popupEmail">Email Address <span>*</span></label>
                        <div className="sis-input-wrap sis-input-cyan">
                          <div className="sis-input-icon"><i className="fa-regular fa-envelope" /></div>
                          <input id="popupEmail" type="email" className="form-control" name="email" placeholder="you@example.com" autoComplete="email" required />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="sis-form-field">
                        <label htmlFor="popupPhone">Phone Number <span>*</span></label>
                        <div className="sis-phone-wrap">
                          <div className="sis-phone-icon"><i className="fa-solid fa-phone" /></div>
                          <div className="sis-country-code">
                            <select name="countryCode" aria-label="Country code" defaultValue="+91">
                              <option value="+91">🇮🇳 +91</option>
                              <option value="+1">🇺🇸 +1</option>
                              <option value="+44">🇬🇧 +44</option>
                              <option value="+61">🇦🇺 +61</option>
                              <option value="+49">🇩🇪 +49</option>
                              <option value="+64">🇳🇿 +64</option>
                              <option value="+353">🇮🇪 +353</option>
                              <option value="+65">🇸🇬 +65</option>
                              <option value="+971">🇦🇪 +971</option>
                              <option value="+880">🇧🇩 +880</option>
                            </select>
                            <i className="fa-solid fa-chevron-down" />
                          </div>
                          <input id="popupPhone" type="tel" className="form-control" name="phone" placeholder="XXXXX XXXXX" autoComplete="tel" required />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="sis-form-field">
                        <label htmlFor="popupDestination">I Want To Study In</label>
                        <div className="sis-input-wrap sis-input-yellow sis-select-wrap">
                          <div className="sis-input-icon sis-popup-yellow-icon"><i className="fa-solid fa-earth-americas" /></div>
                          <select id="popupDestination" className="form-control sis-native-select" name="destination" defaultValue="">
                            <option value="">Select a destination</option>
                            {destinations.map((item) => <option value={item} key={item}>{item}</option>)}
                          </select>
                          <i className="fa-solid fa-chevron-down sis-select-arrow" />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="sis-form-field">
                        <label htmlFor="popupInterest">I'm Interested In</label>
                        <div className="sis-input-wrap sis-input-yellow sis-select-wrap">
                          <div className="sis-input-icon sis-popup-yellow-icon"><i className="fa-solid fa-graduation-cap" /></div>
                          <select id="popupInterest" className="form-control sis-native-select" name="course" defaultValue="">
                            <option value="">Select what you need</option>
                            {interests.map((item) => <option value={item} key={item}>{item}</option>)}
                          </select>
                          <i className="fa-solid fa-chevron-down sis-select-arrow" />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="sis-form-field">
                        <label htmlFor="popupMessage">Message</label>
                        <div className="sis-textarea-wrap">
                          <div className="sis-textarea-icon"><i className="fa-regular fa-comment-dots" /></div>
                          <textarea id="popupMessage" className="form-control" name="message" rows="2" maxLength="500" placeholder="Tell us about your goals, preferred country and intake..." />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sis-form-consent-new">
                    <input type="checkbox" id="popupConsent" name="consent" required />
                    <label htmlFor="popupConsent">I agree to be contacted by <strong>Go2Abroad</strong> by phone, email or WhatsApp regarding my study abroad plans.</label>
                  </div>

                  {error && <div className="go2abroad-popup-error" role="alert">{error}</div>}

                  <div className="sis-form-submit">
                    <button type="submit" className="sis-modern-submit" disabled={submitting}>
                      <span className="sis-submit-icon"><i className="fa-solid fa-paper-plane" /></span>
                      <span>{submitting ? "Sending..." : "Get A Free Counselling"}</span>
                      {!submitting && <i className="fa-solid fa-arrow-right sis-submit-arrow" />}
                    </button>
                  </div>

                  <div className="sis-form-benefits">
                    <div className="sis-benefit"><div className="sis-benefit-icon blue"><i className="fa-solid fa-shield-halved" /></div><div><strong>100% Confidential</strong><span>Your information is safe with us</span></div></div>
                    <div className="sis-benefit"><div className="sis-benefit-icon green"><i className="fa-regular fa-clock" /></div><div><strong>Quick Response</strong><span>We reply within 24 hours</span></div></div>
                    <div className="sis-benefit"><div className="sis-benefit-icon orange"><i className="fa-solid fa-user-group" /></div><div><strong>Expert Guidance</strong><span>From start to success</span></div></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
