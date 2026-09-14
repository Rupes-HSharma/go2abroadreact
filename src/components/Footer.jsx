import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="sisf-page-footer-inner-area sisf-page-background position-relative pt-4">
        <div className="sisf-sis-bottom-left-image">
          <figure>
            <img src={img("/images/footer-bg.png")} alt="" />
          </figure>
        </div>
        <div className="sisf-page-footer-middle-area pt-4">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-links page" data-aos="fade-up" data-aos-delay="300">
                  <h3>
                    BRAND & IDENTITY
                  </h3>
                  <ul>
                    <li style={{listStyle: 'none'}} className="footerlogo">
                      <Link className="navbar-brand" to="/">
                        <img src={img("/images/logo.png")} alt="Go2Abroad Logo" style={{width: '190px'}} />
                      </Link>
                    </li>
                    <li style={{listStyle: 'none'}}>
                      As a leading study abroad consultant, we help Indian students connect with trusted institutions across the globe and plan the career that follows — at zero consultation cost.
                    </li>
                    <li style={{listStyle: 'none'}}>
                      <div className="footer-links page">
                        <div className="footer-social-icons-link page">
                          <ul className="list-unstyled d-flex align-items-left justify-content-left gap-3 p-0 m-0">
                            <li className="mb-0 p-0">
                              <a href="https://www.facebook.com/p/Go2Abroad-Overseas-Consultancy-61587411091019/" target="_blank" rel="noopener">
                                <i className="fa-brands fa-facebook"></i>
                              </a>
                            </li>
                            <li className="mb-0 p-0">
                              <a href="https://www.instagram.com/go2abroad_?igsh=cG10ODg4bDY4ejh1&utm_source=qr" target="_blank" rel="noopener">
                                <i className="fa-brands fa-instagram"></i>
                              </a>
                            </li>
                            <li className="mb-0 p-0">
                              <a href="https://x.com/G2Abroad_25?t=-zpbUEvZoTwsGH3QNKZSfA&s=09" target="_blank" rel="noopener">
                                <i className="fa-brands fa-x-twitter"></i>
                              </a>
                            </li>
                            <li className="mb-0 p-0">
                              <a href="https://www.youtube.com/@go2abroad" target="_blank" rel="noopener">
                                <i className="fa-brands fa-youtube"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6">
                <div className="footer-links page" data-aos="fade-up" data-aos-delay="100">
                  <h3>
                    QUICK LINKS
                  </h3>
                  <ul>
                    <li>
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/destinations">
                        Study Destinations
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses">
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/success-stories">
                        Success Stories
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li className="mb-0">
                      <Link to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-links page" data-aos="fade-up" data-aos-delay="300">
                  <h3>
                    STUDY DESTINATIONS
                  </h3>
                  <ul>
                    <li>
                      <Link to="/usa">
                        Study In USA
                      </Link>
                    </li>
                    <li>
                      <Link to="/destinations#uk">
                        Study In UK
                      </Link>
                    </li>
                    <li>
                      <Link to="/destinations#canada">
                        Study In Canada
                      </Link>
                    </li>
                    <li>
                      <Link to="/destinations#australia">
                        Study In Australia
                      </Link>
                    </li>
                    <li>
                      <Link to="/destinations#new-zealand">
                        Study In New Zealand
                      </Link>
                    </li>
                    <li className="mb-0">
                      <Link to="/destinations#germany">
                        Study In Germany
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-links page" data-aos="fade-up" data-aos-delay="700">
                  <h3 className="text-uppercase">
                    CONTACT INFORMATION
                  </h3>
                  <div className="sisf-sis-contact-information">
                    <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                      <div className="sisf-icon">
                        <a href="tel:+917068821760">
                          <i className="fa-solid fa-phone-volume"></i>
                        </a>
                      </div>
                      <div className="sisf-sis-e-content">
                        <span className="sis-title text-white d-block">
                          Call us on
                        </span>
                        <a href="tel:+917068821760" className="sis-title text-white d-block">
                          +91-7068821760
                        </a>
                      </div>
                    </div>
                    <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                      <div className="sisf-icon">
                        <a href="mailto:info@go2abroad.co">
                          <i className="fa-regular fa-envelope"></i>
                        </a>
                      </div>
                      <div className="sisf-sis-e-content">
                        <span className="sis-title text-white d-block">
                          Reach out
                        </span>
                        <a href="mailto:info@go2abroad.co" className="sis-title text-white d-block">
                          info@go2abroad.co
                        </a>
                      </div>
                    </div>
                    <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                      <div className="sisf-icon">
                        <Link to="/contact">
                          <i className="fa-solid fa-location-dot"></i>
                        </Link>
                      </div>
                      <div className="sisf-sis-e-content">
                        <span className="sis-title text-white d-block">
                          Head Office (Delhi NCR)
                        </span>
                        <Link className="sis-title text-white d-block" to="/contact">
                          B-395, 2nd Floor, Nehru Ground, Neelam Chowk, Faridabad, Haryana - 121001
                        </Link>
                      </div>
                    </div>
                    <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                      <div className="sisf-icon">
                        <a href="#">
                          <i className="fa-regular fa-clock"></i>
                        </a>
                      </div>
                      <div className="sisf-sis-e-content">
                        <span className="sis-title text-white d-block">
                          Office Timings
                        </span>
                        <a href="#" className="sis-title text-white d-block">
                          Mon - Sat: 11:00 AM - 07:00 PM
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sisf-page-footer-bottom-area">
          <div className="container">
            <div className="footer-copyright py-4">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4">
                  <div className="footer-copyright-text">
                    <p className="mb-0 text-white">
                      © Copyright 2026 Go2Abroad. All Rights Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-4"></div>
                <div className="col-xl-4 col-lg-5 col-md-8">
                  <div className="footer-privacy-policy">
                    <ul className="list-unstyled d-flex align-items-center justify-content-end gap-4 p-0 m-0">
                      <li>
                        <a href="#" className="text-white">
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
