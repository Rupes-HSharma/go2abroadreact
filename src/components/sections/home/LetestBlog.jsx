import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function LetestBlog() {
  return (
    <div className="sis-letest-blog-section section pt-0 paddingTop">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle">
                LATEST INSIGHTS
              </span>
              <h2 className="sisf-m-title">
                Places that feel like <span className="sisf-e-colored">
                  Possibility
                </span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <div className="sisf-m-text" data-aos="fade-up--" data-aos-delay="100">
                <p className="mt-0">
                  From study visas and skilled migration programs to permanent residency pathways and immigration success tips, discover expert knowledge that helps simplify your journey toward global opportunities.
                </p>
              </div>
              <div className="sisf-m-button pt-4" data-aos="fade-up--" data-aos-delay="500">
                <Link className="sis-btn-default" to="/destinations">
                  Explore all destinations
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="sis-letest-blog-item sis-radius" data-aos="fade-up--" data-aos-delay="100">
              <div className="sisf-e-inner position-relative">
                <div className="sisf-e-media-holder mb-4">
                  <div className="sisf-e-media">
                    <div className="sisf-e-media-image">
                      <a href="#" className="d-block">
                        <figure>
                          <img src={img("/images/unitedKingdom.jpg")} className="w-100" alt="Go2Abroad" style={{height: '283px'}} />
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sisf-e-content">
                  <div className="sisf-e-text">
                    <div className="sisf-e-title-wraper mb-2">
                      <h2 className="sisf-e-title sis-comman-title entry-title">
                        <Link className="sisf-e-title-link blog-title-link" to="/destinations#uk">
                          United Kingdom
                        </Link>
                      </h2>
                    </div>
                    <div className="sisf-e-text">
                      <p className="sisf-e-discription sis-page-text-line mb-0">
                        World-class degrees, rich culture and global career pathways.
                      </p>
                    </div>
                    <div className="sisf-m-btn">
                      <Link className="sis-btn-outlined sisf-e-colored" to="/destinations#uk">
                        Explore destination
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sis-letest-blog-item sis-radius" data-aos="fade-up--" data-aos-delay="300">
              <div className="sisf-e-inner position-relative">
                <div className="sisf-e-media-holder mb-4">
                  <div className="sisf-e-media">
                    <div className="sisf-e-media-image">
                      <a href="#" className="d-block">
                        <figure>
                          <img src={img("/images/sydney-opera-house.jpg")} className="w-100" alt="Go2Abroad" style={{height: '283px'}} />
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sisf-e-content">
                  <div className="sisf-e-text">
                    <div className="sisf-e-title-wraper mb-2">
                      <h2 className="sisf-e-title sis-comman-title entry-title">
                        <Link className="sisf-e-title-link blog-title-link" to="/destinations#australia">
                          Australia
                        </Link>
                      </h2>
                    </div>
                    <div className="sisf-e-text">
                      <p className="sisf-e-discription sis-page-text-line mb-0">
                        Post-study work rights, globally ranked universities and a welcoming migration pathway for skilled graduates.
                      </p>
                    </div>
                    <div className="sisf-m-btn">
                      <Link className="sis-btn-outlined sisf-e-colored" to="/destinations#australia">
                        Explore destination
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sis-letest-blog-item sis-radius mb-0" data-aos="fade-up--" data-aos-delay="500">
              <div className="sisf-e-inner position-relative">
                <div className="sisf-e-media-holder mb-4">
                  <div className="sisf-e-media">
                    <div className="sisf-e-media-image">
                      <a href="#" className="d-block">
                        <figure>
                          <img src={img("/images/canadawaterfall.jpg")} className="w-100" alt="Go2Abroad" style={{height: '283px'}} />
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sisf-e-content">
                  <div className="sisf-e-text">
                    <div className="sisf-e-title-wraper mb-2">
                      <h2 className="sisf-e-title sis-comman-title entry-title">
                        <Link className="sisf-e-title-link blog-title-link" to="/destinations#canada">
                          Canada
                        </Link>
                      </h2>
                    </div>
                    <div className="sisf-e-text">
                      <p className="sisf-e-discription sis-page-text-line mb-0">
                        Affordable tuition, PGWP work permits and one of the world's most direct routes to permanent residency.
                      </p>
                    </div>
                    <div className="sisf-m-btn">
                      <Link className="sis-btn-outlined sisf-e-colored" to="/destinations#canada">
                        Explore destination
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
  );
}
