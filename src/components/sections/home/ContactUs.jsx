 import { useState } from "react";
import { submitContactForm } from "../../../utils/submitContactForm";

const img = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export default function ContactUs() {
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const [destination, setDestination] = useState("");
  const [interest, setInterest] = useState("");

  // Phone
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");

  // Message
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

      setDestination("");
      setInterest("");
      setCountryCode("+91");
      setPhone("");
      setMessage("");

      setFormStatus(
        "Thank you! Your enquiry has been sent successfully."
      );
    } catch (error) {
      setFormStatus(
        "We could not send your enquiry. Please try again or email info@go2abroad.co."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="sis-contact-us-section section pt-0">
      <div className="container">
        <div className="row align-items-stretch g-4">

          {/* =========================================
              LEFT SECTION
          ========================================== */}
          <div className="col-lg-6 d-flex">
            <div className="sis-contact-left-wrapper w-100 d-flex flex-column">

              {/* Heading */}
              <div className="sisf-sis-section-title sis-section-title">
                <span className="sisf-m-subtitle">
                  <span className="sis-title-dot"></span>
                  INQUIRY / LEAD FORM
                </span>

                <h2 className="sisf-m-title">
                  Let’s make the next{" "}
                  <span className="sisf-e-colored">
                    step clear.   </span>
                </h2>
              </div>

              {/* Image / Contact */}
              <div className="sisf-contact-left-part position-relative flex-grow-1">

                <div className="sisf-contact-left-image h-100">
                  <figure className="sis-image-anime h-100 mb-0">
                    <img
                      src={img("/images/contct-img.png")}
                      className="w-100 h-100"
                      alt="Go2Abroad"
                    />
                  </figure>
                </div>

                <div
                  className="sisf-contact-left-bottom"
                  data-aos="zoom-in-left"
                  data-aos-delay="500"
                >
                  <div className="sisf-sis-contact-information">

                    {/* Phone */}
                    <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                      <div className="sisf-icon">
                        <a href="tel:+917068821740">
                          <i className="fa-solid fa-phone-volume"></i>
                        </a>
                      </div>

                      <div className="sisf-sis-e-content">
                        <a
                          href="tel:+917068821740"
                          className="sis-title text-white d-block"
                        >
                          +91-70688 21740, +91-79053 77279
                        </a>

                        <span className="sis-title text-white d-block">
                          Phone
                        </span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                      <div className="sisf-icon">
                        <a href="mailto:info@go2abroad.co">
                          <i className="fa-regular fa-envelope"></i>
                        </a>
                      </div>

                      <div className="sisf-sis-e-content">
                        <a
                          href="mailto:info@go2abroad.co"
                          className="sis-title text-white d-block"
                        >
                          info@go2abroad.co
                        </a>

                        <span className="sis-title text-white d-block">
                          Send a mail
                        </span>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="sisf-contact-box mb-0 d-flex align-items-center gap-3">
                      <div className="sisf-icon">
                        <a
                          href="https://wa.me/917068821740"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-whatsapp"></i>
                        </a>
                      </div>

                      <div className="sisf-sis-e-content">
                        <a
                          href="https://wa.me/917068821740"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sis-title text-white d-block"
                        >
                          WhatsApp
                        </a>

                        <span className="sis-title text-white d-block">
                          Chat with our team{" "}
                          <i
                            className="fa-solid fa-circle-right"
                            style={{
                              transform: "rotate(-45deg)",
                            }}
                          ></i>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT FORM
          ========================================== */}
          <div className="col-lg-6 d-flex">
            <div
              className="sis-contact-form-card w-100 h-100"
              data-aos="fade-up--"
              data-aos-delay="100"
            >

              {/* Header */}
              <div className="sis-contact-header">

                <div className="sis-contact-eyebrow">
                  <span></span>
                  GET IN TOUCH
                </div>

                <div className="sis-contact-heading-row">
                  <div>
                    <h2>
                      Send us a <span>Message</span>
                    </h2>
                  </div>

                  <div className="sis-contact-plane">
                    <i className="fa-solid fa-paper-plane"></i>

                    <div className="sis-plane-line"></div>

                    <small>
                      We're here
                      <br />
                      to help you!
                    </small>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="sis-form-inner">

                <form
                  id="enquiryForm"
                  className="p-0 m-0"
                  onSubmit={handleSubmit}
                  noValidate
                >

                  <div className="row g-3">

                    {/* =================================
                        FULL NAME
                    ================================== */}
                    <div className="col-12">
                      <div className="sis-form-field">

                        <label htmlFor="firstName">
                          Full Name <span>*</span>
                        </label>

                        <div className="sis-input-wrap sis-input-blue">

                          <div className="sis-input-icon fullName">
                            <i className="fa-solid fa-user"></i>
                          </div>

                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your full name"
                            required
                          />

                        </div>

                        <div className="help-block with-errors"></div>

                      </div>
                    </div>

                    {/* =================================
                        EMAIL
                    ================================== */}
                    <div className="col-md-6">
                      <div className="sis-form-field">

                        <label htmlFor="email">
                          Email Address <span>*</span>
                        </label>

                        <div className="sis-input-wrap sis-input-cyan">

                          <div className="sis-input-icon emailName">
                            <i className="fa-regular fa-envelope"></i>
                          </div>

                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                          />

                        </div>

                        <div className="help-block with-errors"></div>

                      </div>
                    </div>

                    {/* =================================
                        PHONE WITH COUNTRY CODE
                    ================================== */}
                    <div className="col-md-6">
                      <div className="sis-form-field">

                        <label htmlFor="phone">
                          Phone Number <span>*</span>
                        </label>

                        <div className="sis-phone-wrap">

                          {/* Phone Icon */}
                          <div className="sis-phone-icon emailName">
                            <i className="fa-solid fa-phone"></i>
                          </div>

                          {/* Country Code */}
                          <div className="sis-country-code">

                            <select
                              id="countryCode"
                              name="countryCode"
                              value={countryCode}
                              onChange={(e) =>
                                setCountryCode(e.target.value)
                              }
                              aria-label="Country code"
                            >
                              <option value="+91">
                                🇮🇳 +91
                              </option>

                              <option value="+1">
                                🇺🇸 +1
                              </option>

                              <option value="+44">
                                🇬🇧 +44
                              </option>

                              <option value="+1">
                                🇨🇦 +1
                              </option>

                              <option value="+61">
                                🇦🇺 +61
                              </option>

                              <option value="+49">
                                🇩🇪 +49
                              </option>

                              <option value="+64">
                                🇳🇿 +64
                              </option>

                              <option value="+353">
                                🇮🇪 +353
                              </option>

                              <option value="+971">
                                🇦🇪 +971
                              </option>

                              <option value="+65">
                                🇸🇬 +65
                              </option>

                              <option value="+60">
                                🇲🇾 +60
                              </option>

                              <option value="+92">
                                🇵🇰 +92
                              </option>

                              <option value="+880">
                                🇧🇩 +880
                              </option>
                            </select>

                            <i className="fa-solid fa-chevron-down"></i>

                          </div>

                          {/* Phone */}
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) =>
                              setPhone(e.target.value)
                            }
                            placeholder="XXXXX XXXXX"
                            required
                          />

                        </div>

                        <div className="help-block with-errors"></div>

                      </div>
                    </div>

                    {/* =================================
                        DESTINATION
                    ================================== */}
                    <div className="col-md-6">
                      <div className="sis-form-field">

                        <label htmlFor="destination">
                          I Want To Study In
                        </label>

                        <div className="sis-input-wrap sis-input-yellow sis-select-wrap">

                          <div className="sis-input-icon studtIn">
                            <i className="fa-solid fa-earth-americas"></i>
                          </div>

                          <select
                            className="form-control sis-native-select"
                            id="destination"
                            name="destination"
                            value={destination}
                            onChange={(e) =>
                              setDestination(e.target.value)
                            }
                          >
                            <option value="">
                              Select a destination
                            </option>

                            <option value="USA">
                              USA
                            </option>

                            <option value="UK">
                              UK
                            </option>

                            <option value="Canada">
                              Canada
                            </option>

                            <option value="Australia">
                              Australia
                            </option>

                            <option value="Germany">
                              Germany
                            </option>

                            <option value="New Zealand">
                              New Zealand
                            </option>

                            <option value="Ireland">
                              Ireland
                            </option>

                            <option value="Other">
                              Other
                            </option>
                          </select>

                          <i className="fa-solid fa-chevron-down sis-select-arrow"></i>

                        </div>

                      </div>
                    </div>

                    {/* =================================
                        INTEREST
                    ================================== */}
                    <div className="col-md-6">
                      <div className="sis-form-field">

                        <label htmlFor="interest">
                          I'm Interested In
                        </label>

                        <div className="sis-input-wrap sis-input-yellow sis-select-wrap">

                          <div className="sis-input-icon studtIn">
                            <i className="fa-solid fa-graduation-cap"></i>
                          </div>

                          <select
                            className="form-control sis-native-select"
                            id="interest"
                            name="interest"
                            value={interest}
                            onChange={(e) =>
                              setInterest(e.target.value)
                            }
                          >
                            <option value="">
                              Select what you need
                            </option>

                            <option value="Undergraduate Program">
                              Undergraduate Program
                            </option>

                            <option value="Postgraduate / Master's">
                              Postgraduate / Master's
                            </option>

                            <option value="MBA">
                              MBA
                            </option>

                            <option value="PhD / Doctorate">
                              PhD / Doctorate
                            </option>

                            <option value="Diploma / Certificate">
                              Diploma / Certificate
                            </option>

                            <option value="Test Preparation (IELTS/TOEFL/PTE)">
                              Test Preparation (IELTS/TOEFL/PTE)
                            </option>

                            <option value="Education Loan">
                              Education Loan
                            </option>
                          </select>

                          <i className="fa-solid fa-chevron-down sis-select-arrow"></i>

                        </div>

                      </div>
                    </div>

                    {/* =================================
                        MESSAGE
                    ================================== */}
                    <div className="col-12">
                      <div className="sis-form-field">

                        <label htmlFor="message">
                          Message
                        </label>

                        <div className="sis-textarea-wrap">

                          <div className="sis-textarea-icon">
                            <i className="fa-regular fa-comment-dots"></i>
                          </div>

                          <textarea
                            id="message"
                            className="form-control"
                            name="message"
                            value={message}
                            onChange={(e) =>
                              setMessage(e.target.value)
                            }
                            placeholder="Tell us about your goals, preferred country and intake..."
                            rows="2"
                            maxLength="500"
                            required
                          ></textarea>

                          <span className="sis-character-count">
                            {message.length}/500
                          </span>

                        </div>

                        <div className="help-block with-errors"></div>

                      </div>
                    </div>

                  </div>

                  {/* =================================
                      CONSENT
                  ================================== */}
                  <div className="sis-form-consent-new">

                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                    />

                    <label htmlFor="consent">
                      I agree to be contacted by{" "}
                      <a href="#!">
                        Go2Abroad
                      </a>{" "}
                      by phone, email or WhatsApp regarding
                      my study abroad plans.
                    </label>

                  </div>

                  {/* =================================
                      SUBMIT BUTTON
                  ================================== */}
                  <div className="sis-form-submit">

                    <button
                      type="submit"
                      className="sis-modern-submit"
                      disabled={submitting}
                    >

                      <span className="sis-submit-icon">
                        <i className="fa-solid fa-paper-plane"></i>
                      </span>

                      <span>
                        {submitting
                          ? "Sending..."
                          : "Get A Free Counselling"}
                      </span>

                      {!submitting && (
                        <i className="fa-solid fa-arrow-right sis-submit-arrow"></i>
                      )}

                    </button>

                    {formStatus && (
                      <div
                        className="sis-form-status"
                        role="status"
                      >
                        {formStatus}
                      </div>
                    )}

                  </div>

                  {/* =================================
                      TRUST FEATURES
                  ================================== */}
                  <div className="sis-form-benefits">

                    {/* Confidential */}
                    <div className="sis-benefit">

                      <div className="sis-benefit-icon blue">
                        <i className="fa-solid fa-shield-halved"></i>
                      </div>

                      <div>
                        <strong>
                          100% Confidential
                        </strong>

                        <span>
                          Your information is safe with us
                        </span>
                      </div>

                    </div>

                    {/* Quick Response */}
                    <div className="sis-benefit">

                      <div className="sis-benefit-icon green">
                        <i className="fa-regular fa-clock"></i>
                      </div>

                      <div>
                        <strong>
                          Quick Response
                        </strong>

                        <span>
                          We reply within 24 hours
                        </span>
                      </div>

                    </div>

                    {/* Expert Guidance */}
                    <div className="sis-benefit">

                      <div className="sis-benefit-icon orange">
                        <i className="fa-solid fa-user-group"></i>
                      </div>

                      <div>
                        <strong>
                          Expert Guidance
                        </strong>

                        <span>
                          From start to success
                        </span>
                      </div>

                    </div>

                  </div>

                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}