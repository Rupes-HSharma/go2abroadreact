
import { Link } from "react-router-dom";
import { SERVICE_CATALOG } from "../../../data/serviceCatalog";

export default function ServicesList() {
  return (
    <div className="sis-services-list-section section pt-0 g2-services-directory">
      <div className="container">
        <div className="row g-4">
          {SERVICE_CATALOG.map((service, index) => (
            <div className="col-lg-4 col-md-6" id={service.slug} key={service.slug}>
              <Link to={`/service/${service.slug}`} className="g2-service-card-link">
                <div className="sis-icon-card g2-service-card" data-aos="fade-up--" data-aos-delay={100 + (index % 6) * 50}>
                  <div className="sis-icon-card-icon">
                    <i className={`fa-solid ${service.icon}`} />
                  </div>
                  <span className="g2-service-card-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="g2-service-card-action">Explore Service <i className="fa-solid fa-arrow-right-long" /></span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
