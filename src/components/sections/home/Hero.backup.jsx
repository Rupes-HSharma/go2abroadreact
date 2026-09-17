import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const splitChars = (text, start = 0) =>
  Array.from(text).map((char, index) => (
    <span
      key={`${text}-${index}`}
      className="g2a-hero-char"
      style={{ "--char-delay": `${start + index * 0.018}s` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
export default function Hero() {
  const [heroCycle, setHeroCycle] = useState(0);

  // Re-run the original hero entrance sequence on every autoplay cycle.
  // This is React-controlled and does not depend on the legacy jQuery/GSAP scripts.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroCycle((value) => value + 1);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="sis-hero hero-slider home-page hero-ready">
      <div className="hero-slider-layout position-relative">
        <div className="hero-swiper swiper">
          <div key={heroCycle} className="hero-slide swiper-slide pb-0 g2a-react-hero-cycle">
            <div className="sisf-sis-bottom-right-image hero-bg-animate g2a-hero-bg">
              <figure>
                <img src={img("/images/hero-bg.png")} alt="Go2Abroad" />
              </figure>
            </div>
            <div className="container">
              <div className="row align-items-start">
                <div className="col-xl-9 col-lg-6">
                  <div className="hero-content text-start hero-load-content">
                    <div className="sis-section-title mb-0">
                      <span className="sisf-subtitle sisf-e-colored g2a-hero-item g2a-hero-1">
                        Every Dream Deserves a Guide, Not Just a Consultant
                      </span>
                      <h1 className="mb-1 g2a-hero-item g2a-hero-2 g2a-hero-title">
                        <span className="sisf-e-colored g2a-hero-char-group">
                          {splitChars("Believe In The Dream.", 0.14)}
                        </span>
                        {splitChars("We'll", 0.14 + 0.42)}
                        <br />
                        {splitChars("Believe In The Paperwork", 0.14 + 0.62)}
                      </h1>
                      <div className="sisf-m-text g2a-hero-item g2a-hero-3">
                        <p className="text-start">
                          A world-class degree shouldn't come with a hidden price tag. We've guided
                          <br />
                          1200+ Indian families through admissions, visas and new beginnings, at zero cost to them.
                        </p>
                      </div>
                      <div className="button-group d-flex align-items-center flex-wrap gap-3 g2a-hero-item g2a-hero-4">
                        <div className="sisf-m-button">
                          <Link className="sis-btn-default" to="/contact">
                            Talk to a Counsellor — Free
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </Link>
                        </div>
                        <div className="sisf-m-button">
                          <Link className="sis-btn-default btn-light" to="/destinations">
                            See All Destinations
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sisf-content-center g2a-hero-item g2a-hero-5">
                    <div className="sisf-e-tile">
                      <p className="sisf-primary-text mb-3" style={{fontSize: '12px', marginLeft: '17px'}}>
                        Global Destinations
                      </p>
                    </div>
                    <div className="sisf-countries-list-top d-flex align-items-center gap-4 flex-wrap">
                      <div className="sisf-country-item text-center">
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
                      <div className="sisf-country-item text-center">
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
                      <div className="sisf-country-item text-center">
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
                      <div className="sisf-country-item text-center">
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
                      <div className="sisf-country-item text-center">
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
                      <figure className="hero-main-image-animate g2a-hero-image">
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
