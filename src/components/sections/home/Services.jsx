import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Services() {
  return (
    <div className="sis-services-section sisf-page-background position-relative section aboutService sis-brand-gradient-dark">
      <div className="sisf-sis-top-left-image" data-aos="fade-right" data-aos-delay="400">
        <figure>
          <img src={img("/images/page-image1.png")} alt="Go2Abroad" />
        </figure>
      </div>
      <div className="sisf-sis-bottom-right-image" data-aos="fade-left" data-aos-delay="400">
        <figure>
          <img src={img("/images/page-image2.png")} className="sisf-fade" alt="Go2Abroad" />
        </figure>
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle sis-text-anime-style-3">
                OUR SERVICES
              </span>
              <h2 className="sisf-m-title text-white sis-text-anime-style-3">
                <span className="sisf-e-colored">
                  End-to-End Support
                </span>
                for Every Step of Your Study Abroad Journey.
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <div className="sisf-m-text" data-aos="fade-up" data-aos-delay="100">
                <p className="text-white mt-0">
                  From choosing the right country and course to scholarships, visa filing and your first day on campus — our counsellors guide you through every milestone of the journey, at zero consultation fee.
                </p>
              </div>
              <div className="sisf-m-button pt-4" data-aos="fade-up" data-aos-delay="500">
                <Link className="sis-btn-default" to="/services">
                  Explore Our Services
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="sisf-sis-e-service-list" data-aos="fade-up" data-aos-delay="100">
              <div className="sisf-e-inner bg-white sis-radius position-relative">
                <div className="sisf-service-image position-relative">
                  <Link className="sisf-sis-page-link" to="/services#counselling">
                    <figure className="sis-image-anime">
                      <img src={img("/images/service-image-1.png")} className="w-100" alt="Profile & Career Assessment" />
                    </figure>
                  </Link>
                </div>
                <div className="sisf-e-content p-4 d-flex align-items-center justify-content-between gap-3">
                  <div className="sisf-sis-e-title-with-text">
                    <h3 className="sisf-e-title mb-2">
                      <Link to="/services#counselling">
                        Profile & Career Assessment
                      </Link>
                    </h3>
                    <div className="sisf-m-text">
                      <p className="mb-0 sisf-page-text-line">
                        A student-first evaluation of your academics, budget and goals to map the right country and course for you.
                      </p>
                    </div>
                  </div>
                  <div className="sisf-e-service-icon">
                    <Link className="sisf-page-link" to="/services#counselling">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sisf-sis-e-service-list" data-aos="fade-up" data-aos-delay="300">
              <div className="sisf-e-inner bg-white sis-radius position-relative">
                <div className="sisf-service-image position-relative">
                  <Link className="sisf-sis-page-link" to="/services#test-preparation">
                    <figure className="sis-image-anime">
                      <img src={img("/images/service-image-2.png")} className="w-100" alt="Test Preparation" />
                    </figure>
                  </Link>
                </div>
                <div className="sisf-e-content p-4 d-flex align-items-center justify-content-between gap-3">
                  <div className="sisf-sis-e-title-with-text">
                    <h3 className="sisf-e-title mb-2">
                      <Link to="/services#test-preparation">
                        Test Preparation
                      </Link>
                    </h3>
                    <div className="sisf-m-text">
                      <p className="mb-0 sisf-page-text-line">
                        IELTS, TOEFL & PTE coaching with mock tests and a score-improvement plan.
                      </p>
                    </div>
                  </div>
                  <div className="sisf-e-service-icon">
                    <Link className="sisf-page-link" to="/services#test-preparation">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sisf-sis-e-service-list" data-aos="fade-up" data-aos-delay="500">
              <div className="sisf-e-inner bg-white sis-radius position-relative">
                <div className="sisf-service-image position-relative">
                  <Link className="sisf-sis-page-link" to="/services#university-shortlisting">
                    <figure className="sis-image-anime">
                      <img src={img("/images/service-image-3.png")} className="w-100" alt="University & Course Fit" />
                    </figure>
                  </Link>
                </div>
                <div className="sisf-e-content p-4 d-flex align-items-center justify-content-between gap-3">
                  <div className="sisf-sis-e-title-with-text">
                    <h3 className="sisf-e-title mb-2">
                      <Link to="/services#university-shortlisting">
                        University & Course Fit
                      </Link>
                    </h3>
                    <div className="sisf-m-text">
                      <p className="mb-0 sisf-page-text-line">
                        A curated university shortlist matched to your scores, budget and career goals.
                      </p>
                    </div>
                  </div>
                  <div className="sisf-e-service-icon">
                    <Link className="sisf-page-link" to="/services#university-shortlisting">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sisf-sis-e-service-list" data-aos="fade-up" data-aos-delay="700">
              <div className="sisf-e-inner bg-white sis-radius position-relative">
                <div className="sisf-service-image position-relative">
                  <Link className="sisf-sis-page-link" to="/services#sop-writing">
                    <figure className="sis-image-anime">
                      <img src={img("/images/service-image-10.png")} className="w-100" alt="SOP Drafting" />
                    </figure>
                  </Link>
                </div>
                <div className="sisf-e-content p-4 d-flex align-items-center justify-content-between gap-3">
                  <div className="sisf-sis-e-title-with-text">
                    <h3 className="sisf-e-title mb-2">
                      <Link to="/services#sop-writing">
                        SOP Drafting
                      </Link>
                    </h3>
                    <div className="sisf-m-text">
                      <p className="mb-0 sisf-page-text-line">
                        Expert-reviewed Statements of Purpose that tell your story clearly and compellingly.
                      </p>
                    </div>
                  </div>
                  <div className="sisf-e-service-icon">
                    <Link className="sisf-page-link" to="/services#sop-writing">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sisf-sis-e-service-list" data-aos="fade-up" data-aos-delay="100">
              <div className="sisf-e-inner bg-white sis-radius position-relative">
                <div className="sisf-service-image position-relative">
                  <Link className="sisf-sis-page-link" to="/services#scholarship-guidance">
                    <figure className="sis-image-anime">
                      <img src={img("/images/service-image-5.png")} className="w-100" alt="Scholarship Guidance" />
                    </figure>
                  </Link>
                </div>
                <div className="sisf-e-content p-4 d-flex align-items-center justify-content-between gap-3">
                  <div className="sisf-sis-e-title-with-text">
                    <h3 className="sisf-e-title mb-2">
                      <Link to="/services#scholarship-guidance">
                        Scholarship Guidance
                      </Link>
                    </h3>
                    <div className="sisf-m-text">
                      <p className="mb-0 sisf-page-text-line">
                        Merit, need and country-specific scholarships identified and applied for on your behalf.
                      </p>
                    </div>
                  </div>
                  <div className="sisf-e-service-icon">
                    <Link className="sisf-page-link" to="/services#scholarship-guidance">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sisf-sis-e-service-list" data-aos="fade-up" data-aos-delay="300">
              <div className="sisf-e-inner bg-white sis-radius position-relative">
                <div className="sisf-service-image position-relative">
                  <Link className="sisf-sis-page-link" to="/services#visa-assistance">
                    <figure className="sis-image-anime">
                      <img src={img("/images/service-image-4.png")} className="w-100" alt="Visa Assistance" />
                    </figure>
                  </Link>
                </div>
                <div className="sisf-e-content p-4 d-flex align-items-center justify-content-between gap-3">
                  <div className="sisf-sis-e-title-with-text">
                    <h3 className="sisf-e-title mb-2">
                      <Link to="/services#visa-assistance">
                        Visa Assistance
                      </Link>
                    </h3>
                    <div className="sisf-m-text">
                      <p className="mb-0 sisf-page-text-line">
                        End-to-end student visa filing, documentation and mock interviews for a smooth approval.
                      </p>
                    </div>
                  </div>
                  <div className="sisf-e-service-icon">
                    <Link className="sisf-page-link" to="/services#visa-assistance">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sisf-sis-e-service-list" data-aos="fade-up" data-aos-delay="500">
              <div className="sisf-e-inner bg-white sis-radius position-relative">
                <div className="sisf-service-image position-relative">
                  <Link className="sisf-sis-page-link" to="/services#loan-assistance">
                    <figure className="sis-image-anime">
                      <img src={img("/images/service-image-9.png")} className="w-100" alt="Education Loan Assistance" />
                    </figure>
                  </Link>
                </div>
                <div className="sisf-e-content p-4 d-flex align-items-center justify-content-between gap-3">
                  <div className="sisf-sis-e-title-with-text">
                    <h3 className="sisf-e-title mb-2">
                      <Link to="/services#loan-assistance">
                        Education Loan Assistance
                      </Link>
                    </h3>
                    <div className="sisf-m-text">
                      <p className="mb-0 sisf-page-text-line">
                        Loan comparisons across leading lenders and NBFCs to secure the best possible interest rate.
                      </p>
                    </div>
                  </div>
                  <div className="sisf-e-service-icon">
                    <Link className="sisf-page-link" to="/services#loan-assistance">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sisf-sis-e-service-list" data-aos="fade-up" data-aos-delay="700">
              <div className="sisf-e-inner bg-white sis-radius position-relative">
                <div className="sisf-service-image position-relative">
                  <Link className="sisf-sis-page-link" to="/services#accommodation">
                    <figure className="sis-image-anime">
                      <img src={img("/images/service-image-6.png")} className="w-100" alt="Accommodation Assistance" />
                    </figure>
                  </Link>
                </div>
                <div className="sisf-e-content p-4 d-flex align-items-center justify-content-between gap-3">
                  <div className="sisf-sis-e-title-with-text">
                    <h3 className="sisf-e-title mb-2">
                      <Link to="/services#accommodation">
                        Accommodation Assistance
                      </Link>
                    </h3>
                    <div className="sisf-m-text">
                      <p className="mb-0 sisf-page-text-line">
                        Verified on-campus and off-campus housing options, booked before you fly.
                      </p>
                    </div>
                  </div>
                  <div className="sisf-e-service-icon">
                    <Link className="sisf-page-link" to="/services#accommodation">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
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
