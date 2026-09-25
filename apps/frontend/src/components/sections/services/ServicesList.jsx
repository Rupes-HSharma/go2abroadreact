import { useEffect, useState } from "react";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/$/, "");

export default function ServicesList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_URL}/public/services`)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load services");
        return response.json();
      })
      .then((data) => {
        if (!cancelled) setServices(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!cancelled) setServices([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div className="sis-services-list-section section pt-0"><div className="container"><p>Loading services…</p></div></div>;

  return (
    <div className="sis-services-list-section section pt-0">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" id={service.slug} key={service.id}>
              <div className="sis-icon-card" data-aos="fade-up--" data-aos-delay={100 + (index % 6) * 50}>
                <div className="sis-icon-card-icon">
                  <i className={`fa-solid ${service.icon}`} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
