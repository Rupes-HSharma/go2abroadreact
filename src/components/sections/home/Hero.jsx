import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Hero() {
  return (
    <div className="sis-hero hero-slider home-page">
      <div className="hero-slider-layout position-relative">
        <div className="hero-swiper">
          <div className="hero-slide pb-0">
            <div className="sisf-sis-bottom-right-image" data-aos="zoom-in-left" data-aos-delay="300">
              <figure>
                <img src={img("/images/hero-bg.png")} alt="Go2Abroad" />
              </figure>
            </div>
            <div className="container">
              <div className="row align-items-start">
                <div className="col-xl-9 col-lg-6">
                  <div className="hero-content text-start">
                    <div className="sis-section-title mb-0">
                      <span className="sisf-subtitle sisf-e-colored sis-text-anime-style-3">
                        Every Dream Deserves a Guide, Not Just a Consultant
                      </span>
                      <h1 className="sis-text-anime-style-3 mb-1">
                        <span className="sisf-e-colored">
                          Believe In The Dream.
                        </span>
                        We'll
                        <br />
                        Believe In The Paperwork
                      </h1>
                      <div className="sisf-m-text" data-aos="fade-up" data-aos-delay="100">
                        <p className="text-start">
                          A world-class degree shouldn't come with a hidden price tag. We've guided
                          <br />
                          1200+ Indian families through admissions, visas and new beginnings, at zero cost to them.
                        </p>
                      </div>
                      <div className="button-group d-flex align-items-center flex-wrap gap-3">
                        <div className="sisf-m-button" data-aos="fade-up" data-aos-delay="100">
                          <Link className="sis-btn-default" to="/contact">
                            Talk to a Counsellor — Free
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </Link>
                        </div>
                        <div className="sisf-m-button" data-aos="fade-up" data-aos-delay="300">
                          <Link className="sis-btn-default btn-light" to="/destinations">
                            See All Destinations
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sisf-content-center">
                    <div className="sisf-e-tile">
                      <p className="sisf-primary-text mb-3" style={{fontSize: '12px', marginLeft: '17px'}}>
                        Global Destinations
                      </p>
                    </div>
                    <div className="sisf-countries-list-top d-flex align-items-center gap-4 flex-wrap">
                      <div className="sisf-country-item text-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="sisf-country-image mb-2">
                          <figure>
                            <img src={img("/images/country-1.png")} alt="Go2Abroad" />
                          </figure>
                        </div>
                        <div className="sisf-country-content">
                          <span className="sisf-country-name">
                            Canada
                          </span>
                        </div>
                      </div>
                      <div className="sisf-country-item text-center" data-aos="fade-up" data-aos-delay="300">
                        <div className="sisf-country-image mb-2">
                          <figure>
                            <img src={img("/images/country-2.png")} alt="Go2Abroad" />
                          </figure>
                        </div>
                        <div className="sisf-country-content">
                          <span className="sisf-country-name">
                            Australia
                          </span>
                        </div>
                      </div>
                      <div className="sisf-country-item text-center" data-aos="fade-up" data-aos-delay="500">
                        <div className="sisf-country-image mb-2">
                          <figure>
                            <img src={img("/images/country-3.png")} alt="Go2Abroad" />
                          </figure>
                        </div>
                        <div className="sisf-country-content">
                          <span className="sisf-country-name">
                            Germany
                          </span>
                        </div>
                      </div>
                      <div className="sisf-country-item text-center" data-aos="fade-up" data-aos-delay="700">
                        <div className="sisf-country-image mb-2">
                          <figure>
                            <img src={img("/images/country-4.png")} alt="Go2Abroad" />
                          </figure>
                        </div>
                        <div className="sisf-country-content">
                          <span className="sisf-country-name">
                            UK
                          </span>
                        </div>
                      </div>
                      <div className="sisf-country-item text-center" data-aos="fade-up" data-aos-delay="900">
                        <div className="sisf-country-image mb-2">
                          <figure>
                            <img src={img("/images/country-5.png")} alt="Go2Abroad" />
                          </figure>
                        </div>
                        <div className="sisf-country-content">
                          <span className="sisf-country-name">
                            US
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sisf-content-bottom-side d-none">
                    <ul className="list-unstyled d-flex align-items-center justify-content-start gap-0 p-0 m-0 chatUser" style={{marginLeft: '10px !important'}}>
                      <li className="mb-0 p-0 rounded-5 bg-white p-2">
                        <a href="#">
                          <i className=""></i>
                        </a>
                        AM
                      </li>
                      <li className="mb-0 p-0 rounded-5 bg-black p-2">
                        <a href="#">
                          <i className=""></i>
                        </a>
                        AM
                      </li>
                      <li className="mb-0 p-0 rounded-5 bg-primary-subtle p-2">
                        <a href="#">
                          <i className=""></i>
                        </a>
                        AM
                      </li>
                      <li className="mb-0 p-0 rounded-5 bg-danger p-2">
                        <a href="#">
                          <i className=""></i>
                        </a>
                        AM
                      </li>
                      <li className="mb-0 p-0 rounded-5 bg-warning p-2" style={{padding: '5px 10px !important', fontSize: '28px', lineHeight: '21px'}}>
                        <a href="#" style={{verticalAlign: 'sub'}}>
                          <i className=""></i>
                        </a>
                        +
                      </li>
                      <li style={{marginLeft: '10px'}}>
                        <a>
                          Start with clarity.
                        </a>
                        <br />
                        <label style={{fontSize: '12px'}}>
                          Join students building a future abroad.
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="sisf-hero-content-right position-relative">
                    <div className="sisf-hero-image-right">
                      <figure className="sisf-reveal">
                        <img src={img("/images/hero-img-right.png")} alt="Go2Abroad" />
                      </figure>
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
