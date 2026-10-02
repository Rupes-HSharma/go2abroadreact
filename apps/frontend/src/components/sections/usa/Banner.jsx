import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function Banner() {
  return (
    <section className="g2-country-hero g2-country-hero-usa">
      <div className="container">
        <div className="g2-country-hero-inner">
          <div className="g2-country-hero-copy">
            <div className="g2-detail-eyebrow">🇺🇸 STUDY IN THE USA</div>
            <h1>Build your next chapter in the United States.</h1>
            <p>Explore universities, flexible degree structures, campus life and career-focused programs with guidance from shortlist to application.</p>
            <div className="g2-detail-actions">
              <Link className="sis-btn-default" to="/contact">Talk to a counsellor <i className="fa-solid fa-arrow-right-long" /></Link>
              <a className="g2-detail-outline" href="#usa-details">Explore USA</a>
            </div>
            <div className="sis-country-hero-facts">
              <span><i className="fa-solid fa-building-columns"></i>4,000+ Universities</span>
              <span><i className="fa-solid fa-briefcase"></i>Up to 3-Year OPT</span>
              <span><i className="fa-solid fa-coins"></i>From $20,000/yr Tuition</span>
              <span><i className="fa-solid fa-language"></i>IELTS 6.0+</span>
            </div>
          </div>
          <div className="g2-detail-hero-media">
            <div className="g2-detail-hero-image">
              <img src={img("/images/service-image-4.png")} alt="Students planning to study in the USA" />
              <div className="g2-detail-hero-image-shine"></div>
            </div>
            <div className="g2-detail-hero-badge"><i className="fa-solid fa-graduation-cap"></i><span>Study with confidence</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
