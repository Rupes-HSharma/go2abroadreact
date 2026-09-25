import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function OurApproach() {
  return (
    <div className="sis-our-approach-section sis-comman-background position-relative section">
      <div className="sisf-sis-bottom-left-image">
        <figure>
          <img src={img("/images/footer-bg.png")} alt="Go2Abroad" />
        </figure>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle">
                OUR APPROACH
              </span>
              <h2 className="sisf-m-title text-white">
                Turning Your  <span className="sisf-e-colored">
                  Global Dreams  </span>   Into Reality
              </h2>
              <div className="sisf-m-text" data-aos="fade-up--" data-aos-delay="100">
                <p className="text-white">
                  At Go2Abroad, we do not just get you an admission—we prepare you to learn confidently in a global classroom, adapt to new cultures, and leave a lasting impact in your profession of choice.
                </p>
              </div>
              <div className="sisf-m-button pt-4" data-aos="fade-up--" data-aos-delay="300">
                <Link className="sis-btn-default" to="/service">
                  Start Your Immigration Journey
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sisf-our-approach-content position-relative" data-aos="fade-up--" data-aos-delay="100">
              <div className="sisf-sis-top-right-image">
                <figure>
                  <img src={img("/images/about-pattern-img.png")} alt="Go2Abroad" />
                </figure>
              </div>
              <div className="sis-e-inner sis-radius p-4">
                <div className="sisf-our-icon">
                  <figure>
                    <img src={img("/images/about-icon-1.svg")} alt="Go2Abroad" />
                  </figure>
                </div>
                <div className="sisf-e-content">
                  <div className="sis-e-title">
                    <h3 className="text-white">
                      Our Mission
                    </h3>
                  </div>
                  <div className="sis-e-text">
                    <p className="text-white mb-0">
                      Go2Abroad is an education consultancy that provides
							  guidance to students seeking to accomplish their dreams as international students.
							  With transparent communication and assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sisf-our-approach-content position-relative" data-aos="fade-up--" data-aos-delay="300">
              <div className="sisf-sis-top-right-image">
                <figure>
                  <img src={img("/images/about-pattern-img.png")} alt="Go2Abroad" />
                </figure>
              </div>
              <div className="sis-e-inner sis-radius p-4">
                <div className="sisf-our-icon">
                  <figure>
                    <img src={img("/images/about-icon-2.svg")} alt="Go2Abroad" />
                  </figure>
                </div>
                <div className="sisf-e-content">
                  <div className="sis-e-title">
                    <h3 className="text-white">
                      Our Vision
                    </h3>
                  </div>
                  <div className="sis-e-text">
                    <p className="text-white mb-0">
                      We aspire to make dreams come true... Our vision is to help students accomplish their goal to study abroad, contributing towards the development of their fields and community.
                    </p>
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
