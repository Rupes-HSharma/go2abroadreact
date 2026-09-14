import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Banner() {
  return (
    <div className="sisf-banner position-relative">
      <div className="banner-img">
        <figure>
          <img src={img("/images/page-banner.png")} alt="Go2Abroad Study Destinations" />
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
            <span className="sisf-breadcrumbs-current text-white">
              Study Destinations
            </span>
          </div>
          <div className="sisf-m-content sisf-content-grid">
            <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
              Study Destinations
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
