import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function University() {
  return (
    <div className="sis-university-section position-relative bg-white section sis-brand-gradient-soft">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle sis-comman-bg">
                TOP UNIVERSITIES
              </span>
              <h2 className="sisf-m-title">
                Study at   <span className="sisf-e-colored">
                    globally recognised </span>  institutions.
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <div className="sisf-m-text" data-aos="fade-up--" data-aos-delay="100">
                <p className="mt-0">
                  A shortlist of universities that consistently welcome Indian students, with strong course options and proven placement outcomes.
                </p>
              </div>
              <div className="sisf-m-button pt-4" data-aos="fade-up--" data-aos-delay="500">
                <Link className="sis-btn-default" to="/usa#top-universities">
                  View All Universities
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="https://www.surrey.ac.uk/" target="_blank" rel="noopener noreferrer" className="sis-country-card d-block" data-aos="fade-up--" data-aos-delay="100">
              <div className="sis-country-card-top">
                <div className="sis-country-flag">
                  <img src={img("/images/topUniversity/ArizonaStateUniversity.jpg")} alt="University of Surrey" />
                </div>
                <div>
                  <h3>
                    University of Surrey
                  </h3>
                  <span className="sis-country-tag">
                    Guildford, Surrey
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Engineering, Computer Science & Business
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Strong industry placement opportunities
                  </li>
                </ul>
                <span className="sis-country-card-link">
                  View Details
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="https://www.uel.ac.uk/" target="_blank" rel="noopener noreferrer" className="sis-country-card d-block" data-aos="fade-up--" data-aos-delay="200">
              <div className="sis-country-card-top">
                <div className="sis-country-flag">
                  <img src={img("/images/topUniversity/eastLondon.png")} alt="University of East London" />
                </div>
                <div>
                  <h3>
                    University of East London
                  </h3>
                  <span className="sis-country-tag">
                    London, England
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Business, Computer Science & Healthcare
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Career-focused learning with industry experience
                  </li>
                </ul>
                <span className="sis-country-card-link">
                  View Details
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="https://www.coventry.ac.uk/" target="_blank" rel="noopener noreferrer" className="sis-country-card d-block" data-aos="fade-up--" data-aos-delay="300">
              <div className="sis-country-card-top">
                <div className="sis-country-flag">
                  <img src={img("/images/topUniversity/CoventryUniversity.png")} alt="University of East London" />
                </div>
                <div>
                  <h3>
                    Coventry University
                  </h3>
                  <span className="sis-country-tag">
                    Coventry, England
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Computer Science, Engineering & Business
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Multiple intakes including September, November & January
                  </li>
                </ul>
                <span className="sis-country-card-link">
                  View Details
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="https://www.brunel.ac.uk/" target="_blank" rel="noopener noreferrer" className="sis-country-card d-block" data-aos="fade-up--" data-aos-delay="100">
              <div className="sis-country-card-top">
                <div className="sis-country-flag">
                  <img src={img("/images/topUniversity/BrunelUniversityLondon.png")} alt="University of East London" />
                </div>
                <div>
                  <h3>
                    Brunel University London
                  </h3>
                  <span className="sis-country-tag">
                    London, England
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Engineering, Computer Science & Business
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Global campus with students from 140+ countries
                  </li>
                </ul>
                <span className="sis-country-card-link">
                  View Details
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="https://www.herts.ac.uk/" target="_blank" rel="noopener noreferrer" className="sis-country-card d-block" data-aos="fade-up--" data-aos-delay="200">
              <div className="sis-country-card-top">
                <div className="sis-country-flag">
                  <img src={img("/images/topUniversity/Uni_Of_Hertfordshire.png")} alt="University of East London" />
                </div>
                <div>
                  <h3>
                    University of Hertfordshire
                  </h3>
                  <span className="sis-country-tag">
                    Hatfield, Hertfordshire
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Computer Science, Engineering & Business
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    300+ career-focused courses with placement opportunities
                  </li>
                </ul>
                <span className="sis-country-card-link">
                  View Details
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="https://www.gre.ac.uk/" target="_blank" rel="noopener noreferrer" className="sis-country-card d-block" data-aos="fade-up--" data-aos-delay="300">
              <div className="sis-country-card-top">
                <div className="sis-country-flag">
                  <img src={img("/images/topUniversity/Greenwich.png")} alt="University of East London" />
                </div>
                <div>
                  <h3>
                    University of Greenwich
                  </h3>
                  <span className="sis-country-tag">
                    London, England
                  </span>
                </div>
              </div>
              <div className="sis-country-card-body">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Business, Engineering & Computing
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    International community across 150+ countries
                  </li>
                </ul>
                <span className="sis-country-card-link">
                  View Details
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
