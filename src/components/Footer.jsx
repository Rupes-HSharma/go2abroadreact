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
        <section className="g2-footer-partners" aria-label="Our Partner">
          <div className="container">
            <div className="g2-footer-partners-head">
              <h2>OUR PARTNER</h2>
              <p>
                Helping students, professionals, families, and entrepreneurs navigate
                immigration pathways with confidence.
              </p>
            </div>
            <div className="g2-footer-partners-marquee" aria-label="Partner companies">
              <div className="g2-footer-partners-track">
                {[
                  ["Credila", "credila.com", "CR"],
                  ["Avanse", "avanse.com", "A"],
                  ["Poonawalla Fincorp", "poonawallafincorp.com", "PF"],
                  ["Yes Bank", "yesbank.in", "YES"],
                  ["Axis Bank", "axisbank.com", "AXIS"],
                  ["ICICI Bank", "icicibank.com", "ICICI"],
                  ["IDFC First", "idfcfirstbank.com", "IDFC"],
                  ["Auxilo", "auxilo.com", "AUX"],
                  ["InCred", "incred.com", "IN"],
                  ["EdGro", "edgro.in", "EG"],
                  ["Tata Capital", "tatacapital.com", "TATA"],
                  ["MPower (Int. Lender)", "mpowerfinancing.com", "MPOWER"],
                  ["Prodigy (Int. Lender)", "prodigyfinance.com", "P"],
                  ["US Cosigner (Int. Lender)", "uscosigner.com", "USC"],
                  ["Saraswat Bank", "saraswatbank.com", "SB"]
                ].concat([
                  ["Credila", "credila.com", "CR"],
                  ["Avanse", "avanse.com", "A"],
                  ["Poonawalla Fincorp", "poonawallafincorp.com", "PF"],
                  ["Yes Bank", "yesbank.in", "YES"],
                  ["Axis Bank", "axisbank.com", "AXIS"],
                  ["ICICI Bank", "icicibank.com", "ICICI"],
                  ["IDFC First", "idfcfirstbank.com", "IDFC"],
                  ["Auxilo", "auxilo.com", "AUX"],
                  ["InCred", "incred.com", "IN"],
                  ["EdGro", "edgro.in", "EG"],
                  ["Tata Capital", "tatacapital.com", "TATA"],
                  ["MPower (Int. Lender)", "mpowerfinancing.com", "MPOWER"],
                  ["Prodigy (Int. Lender)", "prodigyfinance.com", "P"],
                  ["US Cosigner (Int. Lender)", "uscosigner.com", "USC"],
                  ["Saraswat Bank", "saraswatbank.com", "SB"]
                ]).map(([name, domain, fallback], index) => (
                  <div className="g2-partner-card" key={`${name}-${index}`}>
                    <span className="g2-partner-mark">
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
                        alt=""
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling.style.display = "inline";
                        }}
                      />
                      <span className="g2-partner-fallback">{fallback}</span>
                    </span>
                    <strong>{name}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
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
                        <a href="tel:+917068821740">
                          <i className="fa-solid fa-phone-volume"></i>
                        </a>
                      </div>
                      <div className="sisf-sis-e-content">
                        <span className="sis-title text-white d-block">
                          Call / WhatsApp
                        </span>
                        <a href="tel:+917068821740" className="sis-title text-white d-block">
                 
                          +91-7905377279

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
                          Delhi Office
                        </span>
                        <Link className="sis-title text-white d-block" to="/contact">
                          Connaught Place, New Delhi, Delhi, India
                        </Link>
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
                          Panipat Office
                        </span>
                        <Link className="sis-title text-white d-block" to="/contact">
                          SCO 223, Sector 13-17 Main Rd, HUDA, Panipat, Haryana, India
                        </Link>
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
