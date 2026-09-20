import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Banner() {
  return (
    <div className="sisf-banner position-relative">
      <div className="banner-img">
        <figure>
          <img src={img("/images/slider-image-2.jpg")} alt="Study in the USA" />
        </figure>
      </div>
      <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
        <div className="sisf-m-inner container">
          <div className="sisf-breadcrumbs mb-2">
            <Link className="sisf-breadcrumbs-link text-white" to="/">
              <span>
                Home
              </span>
            </Link>
            <span className="sisf-breadcrumbs-separator text-white mx-2">
              <i className="fa-solid fa-chevron-right"></i>
            </span>
            <Link className="sisf-breadcrumbs-link text-white" to="/destinations">
              <span>
                Study Destinations
              </span>
            </Link>
            <span className="sisf-breadcrumbs-separator text-white mx-2">
              <i className="fa-solid fa-chevron-right"></i>
            </span>
            <span className="sisf-breadcrumbs-current text-white">
              USA
            </span>
          </div>
          <div className="sisf-m-content sisf-content-grid">
            <h1 className="sisf-m-title text-white entry-title">
              🇺🇸 Study in the USA
            </h1>
          </div>
          <div className="sis-country-hero-facts">
            <span>
              <i className="fa-solid fa-building-columns"></i>
              4,000+ Universities
            </span>
            <span>
              <i className="fa-solid fa-briefcase"></i>
              Up to 3-Year OPT
            </span>
            <span>
              <i className="fa-solid fa-coins"></i>
              From $20,000/yr Tuition
            </span>
            <span>
              <i className="fa-solid fa-language"></i>
              IELTS 6.0+
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
