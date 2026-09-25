import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Banner() {
  return (
    <div className="sisf-banner position-relative">
      <div className="banner-img">
        <figure>
          <img src={img("/images/service-detail-image-1.jpg")} alt="Go2Abroad Courses" />
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
              Courses
            </span>
          </div>
          <div className="sisf-m-content sisf-content-grid">
            <h1 className="sisf-m-title text-white entry-title">
              Courses
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
