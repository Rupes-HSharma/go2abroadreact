import { useState } from "react";
import { submitContactForm } from "../../../utils/submitContactForm";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function ContactUs() {
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [destination, setDestination] = useState("");
  const [interest, setInterest] = useState("");

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
      setFormStatus("Thank you! Your enquiry has been sent successfully.");
    } catch (error) {
      setFormStatus("We could not send your enquiry. Please try again or email info@go2abroad.co.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="sis-contact-us-section section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle sis-text-anime-style-3">
                INQUIRY / LEAD FORM
              </span>
              <h2 className="sisf-m-title sis-text-anime-style-3">
                Let’s make the next
                <span className="sisf-e-colored">
                  step clear.
                </span>
              </h2>
            </div>
            <div className="sisf-contact-left-part position-relative">
              <div className="sisf-contact-left-image">
                <figure className="sis-image-anime">
                  <img src={img("/images/contct-img.png")} className="w-100" alt="Go2Abroad" />
                </figure>
              </div>
              <div className="sisf-contact-left-bottom" data-aos="zoom-in-left" data-aos-delay="500">
                <div className="sisf-sis-contact-information">
                  <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                    <div className="sisf-icon">
                      <a href="tel:+917068821760">
                        <i className="fa-solid fa-phone-volume"></i>
                      </a>
                    </div>
                    <div className="sisf-sis-e-content">
                      <a href="tel:+917068821760" className="sis-title text-white d-block">
                        +91-7068821760, +91-9958155484
                      </a>
                      <span className="sis-title text-white d-block">
                        Phone
                      </span>
                    </div>
                  </div>
                  <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                    <div className="sisf-icon">
                      <a href="mailto:info@go2abroad.co">
                        <i className="fa-regular fa-envelope"></i>
                      </a>
                    </div>
                    <div className="sisf-sis-e-content">
                      <a href="mailto:info@go2abroad.co" className="sis-title text-white d-block">
                        info@go2abroad.co
                      </a>
                      <span className="sis-title text-white d-block">
                        Send a mail
                      </span>
                    </div>
                  </div>
                  <div className="sisf-contact-box mb-0 d-flex align-items-center gap-3">
                    <div className="sisf-icon">
                      <a href="https://wa.me/919958155484" target="_blank" rel="noopener">
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                    </div>
                    <div className="sisf-sis-e-content">
                      <a href="https://wa.me/919958155484" target="_blank" rel="noopener" className="sis-title text-white d-block">
                        WhatsApp
                      </a>
                      <span className="sis-title text-white d-block">
                        Chat with our team
                        <i className="fa-solid fa-circle-right" style={{transform: 'rotate(-45deg)'}}></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="sis-contect-right bg-white p-4 sis-radius mt-0" data-aos="fade-up" data-aos-delay="100">
              <div className="sisf-sis-section-title sis-section-title">
                <h2 className="sisf-m-title sis-text-anime-style-3">
                  Send a
                  <span className="sisf-e-colored">
                    Message
                  </span>
                </h2>
                <div className="sisf-m-text">
                  <p className="mt-3">
                    Share a few details & get clear, profile-based guidance on your country, course and next steps.
                  </p>
                </div>
              </div>
              <div className="form-section">
                <form id="enquiryForm" className="p-0 m-0" onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group sis-form-field">
                        <label className="sis-form-label" htmlFor="firstName">
                          Full Name
                          <span className="sis-required">
                            *
                          </span>
                        </label>
                        <div className="help-block with-errors"></div>
                        <div className="form-col sis-form-field-icon">
                          <i className="fa-solid fa-user"></i>
                          <input type="text" className="form-control bg-white" id="firstName" name="firstName" placeholder="Enter your full name" required />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group sis-form-field">
                        <label className="sis-form-label" htmlFor="email">
                          Email Address
                          <span className="sis-required">
                            *
                          </span>
                        </label>
                        <div className="help-block with-errors"></div>
                        <div className="form-col sis-form-field-icon">
                          <i className="fa-regular fa-envelope"></i>
                          <input type="email" className="form-control bg-white" id="email" name="email" placeholder="you@example.com" required />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group sis-form-field">
                        <label className="sis-form-label" htmlFor="phone">
                          Phone Number
                          <span className="sis-required">
                            *
                          </span>
                        </label>
                        <div className="help-block with-errors"></div>
                        <div className="form-col sis-form-field-icon">
                          <i className="fa-solid fa-phone"></i>
                          <input type="tel" className="form-control bg-white" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group sis-form-field">
                        <label className="sis-form-label" htmlFor="destination">
                          I Want To Study In
                        </label>
                        <div className="help-block with-errors"></div>
                        <div className="form-col sis-form-field-icon sis-select-field">
                          <i className="fa-solid fa-earth-americas"></i>
                          <i className="fa-solid fa-caret-down"></i>
                          <select
                            className="form-control bg-white sis-native-select"
                            id="destination"
                            name="destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                          >
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
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group sis-form-field">
                        <label className="sis-form-label" htmlFor="interest">
                          I'm Interested In
                        </label>
                        <div className="help-block with-errors"></div>
                        <div className="form-col sis-form-field-icon sis-select-field">
                          <i className="fa-solid fa-graduation-cap"></i>
                          <i className="fa-solid fa-caret-down"></i>
                          <select
                            className="form-control bg-white sis-native-select"
                            id="interest"
                            name="interest"
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                          >
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
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group sis-form-field">
                        <label className="sis-form-label" htmlFor="message">
                          Message
                        </label>
                        <div className="help-block with-errors"></div>
                        <div className="form-col sis-form-field-icon sis-icon-top position-relative">
                          <i className="fa-regular fa-comment-dots"></i>
                          <textarea id="message" className="form-control bg-white" name="message" placeholder="Tell us about your goals, preferred country and intake" rows="3" required></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sis-form-consent">
                    <input type="checkbox" id="consent" name="consent" required />
                    <label htmlFor="consent" className="mb-0">
                      I agree to be contacted by Go2Abroad by phone, email or WhatsApp regarding my study abroad plans.
                    </label>
                  </div>
                  <div className="sisf-m-btn">
                    <button type="submit" className="sis-btn-default" disabled={submitting}>
                      {submitting ? "Sending..." : "Get A Free Counselling"}
                      {!submitting && <i className="fa-solid fa-arrow-right"></i>}
                    </button>
                    {formStatus && (
                      <div className="sis-form-status" role="status">
                        {formStatus}
                      </div>
                    )}
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
