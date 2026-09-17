import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function PopularDestination() {
  return (
    <div className="sis-popular-destination-section sisf-extended-grid--right section sis-brand-gradient-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title"></div>
            <div className="row">
              <div className="col-md-4">
                <div className="sis-counter-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="sis-counter-icon">
                    <i className="fa-solid fa-user-graduate"></i>
                  </div>
                  <div className="sis-counter-title">
                    <h2 className="d-flex align-items-center">
                      <span className="sis-counter">
                        2000
                      </span>
                      <span className="sisf-digit-label sisf-e-colored">
                        +
                      </span>
                    </h2>
                  </div>
                  <div className="sis-counter-content">
                    <span className="sisf-content">
                      Students Counselled
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sis-counter-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="sis-counter-icon">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div className="sis-counter-title">
                    <h2 className="d-flex align-items-center">
                      <span className="sis-counter">
                        60
                      </span>
                      <span className="sisf-digit-label sisf-e-colored">
                        %
                      </span>
                    </h2>
                  </div>
                  <div className="sis-counter-content">
                    <span className="sisf-content">
                      Success Rate
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sis-counter-item" data-aos="fade-up" data-aos-delay="500">
                  <div className="sis-counter-icon">
                    <i className="fa-solid fa-file-circle-check"></i>
                  </div>
                  <div className="sis-counter-title">
                    <h2 className="d-flex align-items-center">
                      <span className="sis-counter">
                        400
                      </span>
                      <span className="sisf-digit-label sisf-e-colored">
                        +
                      </span>
                    </h2>
                  </div>
                  <div className="sis-counter-content">
                    <span className="sisf-content">
                      Applications
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <h2 className="sisf-m-title sis-text-anime-style-3">
                Explore Where
                <span className="sisf-e-colored">
                  Your Future Can Take You
                </span>
              </h2>
              <div className="sisf-m-text" data-aos="fade-up" data-aos-delay="100">
                <p>
                  Each country offers unique pathways and benefits, and our consultants help you identify the option that best matches your goals and qualifications.
                </p>
              </div>
              <div className="button-group d-flex align-items-center flex-wrap gap-4 pt-4">
                <div className="sisf-m-button" data-aos="fade-up" data-aos-delay="300">
                  <Link className="sis-btn-default" to="/destinations">
                    Explore Destinations
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="sisf-m-button d-none" data-aos="fade-up" data-aos-delay="500">
                  <a href="#" className="sis-btn-default btn-light">
                    Free Eligibility Check
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pe-2">
        <div className="sisf-comman-swiper--slider sisf-page-location-list" data-aos="fade-up" data-aos-delay="700">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="sisf-page-location-ist-item mb-0">
                  <div className="sis-e-inner bg-white rounded-pill">
                    <div className="sis-e-icon">
                      <figure>
                        <img src={img("/images/location1.svg")} alt="Go2Abroad" />
                      </figure>
                    </div>
                    <div className="sis-e-content">
                      <div className="sisf-m-title">
                        <p>
                          Canada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sisf-page-location-ist-item mb-0">
                  <div className="sis-e-inner bg-white rounded-pill">
                    <div className="sis-e-icon">
                      <figure>
                        <img src={img("/images/location2.svg")} alt="Go2Abroad" />
                      </figure>
                    </div>
                    <div className="sis-e-content">
                      <div className="sisf-m-title">
                        <p>
                          Australia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sisf-page-location-ist-item mb-0">
                  <div className="sis-e-inner bg-white rounded-pill">
                    <div className="sis-e-icon">
                      <figure>
                        <img src={img("/images/location3.svg")} alt="Go2Abroad" />
                      </figure>
                    </div>
                    <div className="sis-e-content">
                      <div className="sisf-m-title">
                        <p>
                          Germany
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sisf-page-location-ist-item mb-0">
                  <div className="sis-e-inner bg-white rounded-pill">
                    <div className="sis-e-icon">
                      <figure>
                        <img src={img("/images/location5.svg")} alt="Go2Abroad" />
                      </figure>
                    </div>
                    <div className="sis-e-content">
                      <div className="sisf-m-title">
                        <p>
                          United Kingdom
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sisf-page-location-ist-item mb-0">
                  <div className="sis-e-inner bg-white rounded-pill">
                    <div className="sis-e-icon">
                      <figure>
                        <img src={img("/images/location4.svg")} alt="Go2Abroad" />
                      </figure>
                    </div>
                    <div className="sis-e-content">
                      <div className="sisf-m-title">
                        <p>
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sisf-page-location-ist-item mb-0">
                  <div className="sis-e-inner bg-white rounded-pill">
                    <div className="sis-e-icon">
                      <figure>
                        <img src={img("/images/location7.svg")} alt="Go2Abroad" />
                      </figure>
                    </div>
                    <div className="sis-e-content">
                      <div className="sisf-m-title">
                        <p>
                          New Zealand
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sisf-page-location-ist-item mb-0">
                  <div className="sis-e-inner bg-white rounded-pill">
                    <div className="sis-e-icon">
                      <figure>
                        <img src={img("/images/location6.svg")} alt="Go2Abroad" />
                      </figure>
                    </div>
                    <div className="sis-e-content">
                      <div className="sisf-m-title">
                        <p>
                          Europe
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sisf-page-location-ist-item mb-0">
                  <div className="sis-e-inner bg-white rounded-pill">
                    <div className="sis-e-icon">
                      <figure>
                        <img src={img("/images/location8.svg")} alt="Go2Abroad" />
                      </figure>
                    </div>
                    <div className="sis-e-content">
                      <div className="sisf-m-title">
                        <p>
                          Ireland
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
