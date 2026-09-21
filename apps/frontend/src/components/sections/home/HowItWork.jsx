import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function HowItWork() {
  return (
    <div className="sis-how-it-work-section position-relative bg-white section">
      <div className="sisf-sis-bottom-right-image" data-aos="fade-left" data-aos-delay="400">
        <figure>
          <img src={img("/images/cloud-light.png")} alt="Go2Abroad" />
        </figure>
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle sis-comman-bg">
                ABOUT US · WHY CHOOSE GO2ABROAD
              </span>
              <h2 className="sisf-m-title">
                Why choose   <span className="sisf-e-colored">
                  Go2Abroad.
                </span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <div className="sisf-m-text" data-aos="fade-up--" data-aos-delay="100">
                <p className="mt-0">
                  There is a lot to figure out. You do not have to figure it out alone. We bring clarity, care and local know-how to every step.
                </p>
              </div>
              <div className="sisf-m-button pt-4" data-aos="fade-up--" data-aos-delay="300">
                <Link className="sis-btn-default" to="/contact">
                  Meet Your Counsellor
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sisf-works-content-center sis-comman-bg sis-radius">
          <div className="row align-items-center">
            <div className="col-lg-3 position-relative">
              <div className="sisf-works-bottom-image" data-aos="zoom-in" data-aos-delay="500">
                <div className="sisf-animated-top sisf-swing">
                  <figure>
                    <img src={img("/images/about-visa-image.svg")} alt="Go2Abroad" />
                  </figure>
                </div>
              </div>
              <div className="sis-e-works-image">
                <figure className="sis-image-anime">
                  <img src={img("/images/how-works-img.png")} className="w-100" alt="Go2Abroad" />
                </figure>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row m-0">
                <div className="col-lg-4 pl-0">
                  <div className="sisf-blog-item mb-0 bg-white p-3 rounded-3">
                    <div className="sisf-e-inner position-relative">
                      <div className="sisf-e-content p-0">
                        <div className="sisf-e-info mb-2 mt-0 sisf-info--top-holder">
                          <div className="post-meta-list-after">
                            <Link className="post-cat fs-1" to="/services#counselling">
                              ✦
                            </Link>
                          </div>
                        </div>
                        <div className="sisf-e-content-inner">
                          <div className="sisf-e-text">
                            <h2 className="sisf-e-title sis-comman-title mb-2">
                              <Link className="sisf-e-title-link" to="/services#counselling">
                                Personalized Career & Profile Counselling
                              </Link>
                            </h2>
                            <p className="sisf-e-excerpt mb-3">
                              One-on-one guidance to map your academic profile, strengths, and goals to the right country and course...
                            </p>
                          </div>
                          <div className="sisf-m-button">
                            <Link className="sis-btn-default" to="/services#counselling">
                              Read More
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sisf-blog-item mb-0 bg-white p-3 rounded-3">
                    <div className="sisf-e-inner position-relative">
                      <div className="sisf-e-content p-0">
                        <div className="sisf-e-info mb-2 mt-0 sisf-info--top-holder">
                          <div className="post-meta-list-after">
                            <Link className="post-cat fs-1" to="/services#university-shortlisting">
                              ⌖
                            </Link>
                          </div>
                        </div>
                        <div className="sisf-e-content-inner">
                          <div className="sisf-e-text">
                            <h2 className="sisf-e-title sis-comman-title mb-2">
                              <Link className="sisf-e-title-link" to="/services#university-shortlisting">
                                University & Course Selection
                              </Link>
                            </h2>
                            <p className="sisf-e-excerpt mb-3">
                              Curated shortlists of best-fit universities and programs across the UK, USA, Canada, Australia, Ireland...
                            </p><br/>
                          </div>
                          <div className="sisf-m-button">
                            <Link className="sis-btn-default" to="/services#university-shortlisting">
                              Read More
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sisf-blog-item mb-0 bg-white p-3 rounded-3">
                    <div className="sisf-e-inner position-relative">
                      <div className="sisf-e-content p-0">
                        <div className="sisf-e-info mb-2 mt-0 sisf-info--top-holder">
                          <div className="post-meta-list-after">
                            <Link className="post-cat fs-1" to="/services#sop-writing">
                              ↗
                            </Link>
                          </div>
                        </div>
                        <div className="sisf-e-content-inner">
                          <div className="sisf-e-text">
                            <h2 className="sisf-e-title sis-comman-title mb-2">
                              <Link className="sisf-e-title-link" to="/services#sop-writing">
                                IELTS & English Language Test Guidance
                              </Link>
                            </h2>
                            <p className="sisf-e-excerpt mb-3">
                              Structured prep support and test strategy to help you hit the score your target university needs.
                            </p>
                          </div>
                          <div className="sisf-m-button">
                            <Link className="sis-btn-default" to="/services#sop-writing">
                              Read More
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
          </div>
        </div>
      </div>
    </div>
  );
}
