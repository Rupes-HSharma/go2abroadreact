import { useState } from "react";
import { submitContactForm } from "../../utils/submitContactForm";

export default function LeadPopupForm() {
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setSubmitting(true);
    setFormStatus("");
    try {
      await submitContactForm(event.currentTarget);
      event.currentTarget.reset();
      setCountryCode("+91");
      setPhone("");
      setDestination("");
      setInterest("");
      setMessage("");
      setFormStatus("Thank you! Your enquiry has been sent successfully.");
      window.dispatchEvent(new CustomEvent("go2abroad:notification"));
    } catch {
      setFormStatus("We could not send your enquiry. Please try again or email info@go2abroad.co.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="go2-popup-form" onSubmit={handleSubmit} noValidate>
      <div className="go2-popup-grid">
        <div className="go2-popup-field full">
          <label htmlFor="popup-firstName">Full Name <span>*</span></label>
          <input id="popup-firstName" name="firstName" type="text" placeholder="Enter your full name" required />
        </div>

        <div className="go2-popup-field">
          <label htmlFor="popup-email">Email Address <span>*</span></label>
          <input id="popup-email" name="email" type="email" placeholder="you@example.com" required />
        </div>

        <div className="go2-popup-field">
          <label htmlFor="popup-phone">Phone Number <span>*</span></label>
          <div className="go2-popup-phone">
            <select id="popup-countryCode" name="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} aria-label="Country code">
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+49">🇩🇪 +49</option>
              <option value="+64">🇳🇿 +64</option>
              <option value="+353">🇮🇪 +353</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+65">🇸🇬 +65</option>
            </select>
            <input id="popup-phone" name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="XXXXX XXXXX" required />
          </div>
        </div>

        <div className="go2-popup-field">
          <label htmlFor="popup-destination">I Want To Study In</label>
          <select id="popup-destination" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">Select a destination</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Ireland">Ireland</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="go2-popup-field">
          <label htmlFor="popup-interest">I'm Interested In</label>
          <select id="popup-interest" name="interest" value={interest} onChange={(e) => setInterest(e.target.value)}>
            <option value="">Select what you need</option>
            <option value="Undergraduate Program">Undergraduate Program</option>
            <option value="Postgraduate / Master's">Postgraduate / Master's</option>
            <option value="MBA">MBA</option>
            <option value="PhD / Doctorate">PhD / Doctorate</option>
            <option value="Diploma / Certificate">Diploma / Certificate</option>
            <option value="Test Preparation (IELTS/TOEFL/PTE)">Test Preparation (IELTS/TOEFL/PTE)</option>
            <option value="Education Loan">Education Loan</option>
          </select>
        </div>

        <div className="go2-popup-field full">
          <label htmlFor="popup-message">Message</label>
          <textarea id="popup-message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your goals, preferred country and intake..." rows="3" maxLength="500" required />
        </div>
      </div>

      <div className="go2-popup-consent">
        <input id="popup-consent" type="checkbox" name="consent" required />
        <label htmlFor="popup-consent">I agree to be contacted by <a href="#!" onClick={(e) => e.preventDefault()}>Go2Abroad</a> by phone, email or WhatsApp regarding my study abroad plans.</label>
      </div>

      <button type="submit" className="sis-btn-default go2-popup-submit" disabled={submitting}>
        {submitting ? "Sending..." : "Get A Free Counselling"}
        {!submitting && <i className="fa-solid fa-arrow-right-long"></i>}
      </button>

      {formStatus && <div className="go2-popup-status" role="status">{formStatus}</div>}
    </form>
  );
}
