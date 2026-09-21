import { Link } from "react-router-dom";
export default function FaqPage() {
  return (
    <div className="sis-faq-page-section section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sisf-sis-section-title text-center sis-section-title">
              <span className="sisf-m-subtitle">
                GOT QUESTIONS?
              </span>
              <h2 className="sisf-m-title">
                Everything you need to
                <span className="sisf-e-colored">
                  know, in one place.
                </span>
              </h2>
              <div className="sisf-m-text">
                <p>
                  Grouped by topic so you can jump straight to what matters — from services and fees to visas, finances and destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="sis-comman-title mb-3">
              <i className="fa-solid fa-circle-info" style={{color: 'var(--main-color)'}}></i>
              General
            </h3>
            <div className="sisf-page-accordian sisf-sis-page-accordian mb-4">
              <div className="accordion" id="faqGeneral">
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button mt-0" data-bs-toggle="collapse" data-bs-target="#g1">
                      <span>
                        What services does Go2Abroad offer?
                      </span>
                    </button>
                  </h2>
                  <div id="g1" className="accordion-collapse collapse show" data-bs-parent="#faqGeneral">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          We help with study abroad admissions, profile building, university shortlisting, scholarships, SOP/LOR writing, visa filing, education loans, forex, accommodation and post-arrival support — see our
                          <Link to="/services">
                            full services list
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#g2">
                      <span>
                        How do I get started with Go2Abroad?
                      </span>
                    </button>
                  </h2>
                  <div id="g2" className="accordion-collapse collapse" data-bs-parent="#faqGeneral">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Book a free counselling session from our
                          <Link to="/contact">
                            Contact page
                          </Link>
                          or WhatsApp us directly. We'll review your profile and recommend the right countries and courses within 48 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#g3">
                      <span>
                        Is the first consultation really free?
                      </span>
                    </button>
                  </h2>
                  <div id="g3" className="accordion-collapse collapse" data-bs-parent="#faqGeneral">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Yes. Your first counselling session and profile evaluation are completely free, with no obligation to continue with us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#g4">
                      <span>
                        Which class 12 / graduation percentage do I need?
                      </span>
                    </button>
                  </h2>
                  <div id="g4" className="accordion-collapse collapse" data-bs-parent="#faqGeneral">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Requirements vary by country, university and course. Many destinations accept 55%+ with the right profile and English score — we'll assess your specific case for free.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="sis-comman-title mb-3">
              <i className="fa-solid fa-stamp" style={{color: 'var(--main-color)'}}></i>
              Visa & Documentation
            </h3>
            <div className="sisf-page-accordian sisf-sis-page-accordian mb-4">
              <div className="accordion" id="faqVisa">
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button mt-0" data-bs-toggle="collapse" data-bs-target="#v1">
                      <span>
                        How long does a student visa take to process?
                      </span>
                    </button>
                  </h2>
                  <div id="v1" className="accordion-collapse collapse show" data-bs-parent="#faqVisa">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Processing times depend on the destination country, visa category and application complexity. We give you a realistic, country-specific timeline once your file is ready.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#v2">
                      <span>
                        Do you help if my visa was previously refused?
                      </span>
                    </button>
                  </h2>
                  <div id="v2" className="accordion-collapse collapse" data-bs-parent="#faqVisa">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Yes. We review the refusal reasons carefully, strengthen your documentation and financials, and help you explore reapplication or alternative pathways.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#v3">
                      <span>
                        Will I get interview preparation for my visa?
                      </span>
                    </button>
                  </h2>
                  <div id="v3" className="accordion-collapse collapse" data-bs-parent="#faqVisa">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Yes, we run personalised mock interviews and coaching sessions so you can approach your visa interview with confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#v4">
                      <span>
                        What documents will I need for my application?
                      </span>
                    </button>
                  </h2>
                  <div id="v4" className="accordion-collapse collapse" data-bs-parent="#faqVisa">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Typically academic transcripts, English test scores, SOP, LORs, passport and financial proof. We give you a checklist tailored to your target country.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="sis-comman-title mb-3">
              <i className="fa-solid fa-wallet" style={{color: 'var(--main-color)'}}></i>
              Finances & Loans
            </h3>
            <div className="sisf-page-accordian sisf-sis-page-accordian mb-4">
              <div className="accordion" id="faqFinance">
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button mt-0" data-bs-toggle="collapse" data-bs-target="#f1">
                      <span>
                        Can you help me get an education loan?
                      </span>
                    </button>
                  </h2>
                  <div id="f1" className="accordion-collapse collapse show" data-bs-parent="#faqFinance">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Yes, we work with partner banks and NBFCs to help you compare and secure the best interest rates and repayment terms for your education loan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#f2">
                      <span>
                        Are scholarships available for Indian students?
                      </span>
                    </button>
                  </h2>
                  <div id="f2" className="accordion-collapse collapse" data-bs-parent="#faqFinance">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Many universities offer merit and need-based scholarships. We identify the ones you qualify for and help you apply on time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#f3">
                      <span>
                        Do you provide forex services for tuition payment?
                      </span>
                    </button>
                  </h2>
                  <div id="f3" className="accordion-collapse collapse" data-bs-parent="#faqFinance">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Yes, we offer competitive forex rates and hassle-free transfers for both tuition fees and living expenses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="sis-comman-title mb-3">
              <i className="fa-solid fa-earth-americas" style={{color: 'var(--main-color)'}}></i>
              Destinations & After Arrival
            </h3>
            <div className="sisf-page-accordian sisf-sis-page-accordian mb-4">
              <div className="accordion" id="faqDest">
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button mt-0" data-bs-toggle="collapse" data-bs-target="#d1">
                      <span>
                        Which countries do you help students apply to?
                      </span>
                    </button>
                  </h2>
                  <div id="d1" className="accordion-collapse collapse show" data-bs-parent="#faqDest">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          USA, UK, Canada, Australia, New Zealand, Germany, Ireland, Singapore and 15+ more — see our full
                          <Link to="/destinations">
                            Study Destinations
                          </Link>
                          list.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#d2">
                      <span>
                        Will you help me find accommodation abroad?
                      </span>
                    </button>
                  </h2>
                  <div id="d2" className="accordion-collapse collapse" data-bs-parent="#faqDest">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Yes, we help you find safe, affordable and verified housing near your university before you even fly out.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-0">
                  <h2 className="accordion-header sis-comman-title">
                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#d3">
                      <span>
                        Do you provide support after I land abroad?
                      </span>
                    </button>
                  </h2>
                  <div id="d3" className="accordion-collapse collapse" data-bs-parent="#faqDest">
                    <div className="accordion-body pt-0">
                      <div className="sisf-e-content-inner">
                        <p className="mb-0">
                          Yes — airport pickup guidance, local bank account setup, SIM card and settling-in support are all part of our post-arrival services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
