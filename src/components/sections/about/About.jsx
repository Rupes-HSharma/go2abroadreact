import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function About() {
  return (
    <div className="sis-about-section section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="sisf-about-left-image-with-content position-relative">
              <div className="sisf-about-left-image">
                <figure className="sis-image-anime">
                  <img src={img("/images/about-image.jpg")} className="w-100 sis-radius" alt="Go2Abroad" />
                </figure>
              </div>
              <div className="sisf-about-content" data-aos="zoom-in-left" data-aos-delay="400">
                <div className="sisf-e-inner sisf-float-left-right sis-comman-background p-4 sis-radius">
                  <div className="sisf-e-content">
                    <div className="sisf-e-title mb-2">
                      <h2 className="text-white sis-comman-title">
                        We think every aspiration is unique and important.
                      </h2>
                    </div>
                    <div className="sis-e-text">
                      <p className="text-white mb-0">
                        At Go2Abroad, we do not just get you an admission—we prepare you to learn confidently in a global classroom, adapt to new cultures, and leave a lasting impact in your profession of choice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle sis-text-anime-style-3">
                ABOUT GO2ABROAD
              </span>
              <h2 className="sisf-m-title sis-text-anime-style-3">
                Connecting Dreams
                <span className="sisf-e-colored">
                  and Reality
                </span>
              </h2>
              <div className="sisf-m-text" data-aos="fade-up" data-aos-delay="100">
                <p>
                  At Go2Abroad, we are not just an education consultancy;
						we are your partner in turning your study abroad dreams into
						reality! Through trusted communication, expert advice, and
						personalised guidance, we take students through the next chapter of global education seamlessly and with clarity.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="sisf-about-content-right" data-aos="fade-up" data-aos-delay="100">
                  <div className="sisf-e-inner">
                    <div className="sisf-e-content">
                      <div className="sis-e-text">
                        <p className="mb-0">
                          As a leading study abroad consultant, we emphasise connecting students with institutions across the globe and a variety of career options thereafter. We offer services from career counselling to course selection, support with applications, visa management, scholarships, accommodation, and much more! We support students every step of the way, without feeling overwhelming or stressful!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sisf-about-right-bottom" data-aos="fade-up" data-aos-delay="300">
                  <figure className="sis-image-anime">
                    <img src={img("/images/about-image-1.jpg")} className="w-100 sis-radius" alt="Go2Abroad" />
                  </figure>
                </div>
              </div>
              <div className="col-12">
                <div className="sisf-m-button pt-4" data-aos="fade-up" data-aos-delay="500">
                  <Link className="sis-btn-default" to="/about-us">
                    Meet Your Consellor
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="sisf-about-top-image" data-aos="zoom-in" data-aos-delay="500">
              <div className="sisf-animated-top sisf-swing">
                <figure>
                  <img src={img("/images/about-visa-image.svg")} alt="Go2Abroad" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
