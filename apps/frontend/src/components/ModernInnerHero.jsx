import { Link } from "react-router-dom";

const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export default function ModernInnerHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  badge = "Study with confidence",
  primaryLabel = "Talk to a counsellor",
  primaryTo = "/contact",
  secondaryLabel = "Explore more",
  secondaryTo = "/destinations",
  meta = [],
  icon = "fa-graduation-cap",
  tone = "destination",
  themeKey = "brand",
  children = null,
  className = "",
  showActions = true,
  showMeta = true,
  compact = false
}) {
  return (
    <section className={`g2-modern-hero g2-modern-hero-${tone} g2-modern-hero-theme-${themeKey} ${compact ? "g2-modern-hero-compact" : ""} ${className}`}>
      <div className="g2-modern-hero-pattern g2-modern-hero-pattern-one" />
      <div className="g2-modern-hero-pattern g2-modern-hero-pattern-two" />
      <div className="g2-modern-hero-glow g2-modern-hero-glow-one" />
      <div className="g2-modern-hero-glow g2-modern-hero-glow-two" />
      <div className="container">
        <div className="g2-modern-hero-inner">
          <div className="g2-modern-hero-copy">
            <div className="g2-modern-hero-eyebrow"><span className="g2-modern-hero-dot" />{eyebrow}</div>
            <h1>{title}</h1>
            <p>{intro}</p>

            {showActions && (children ? children : (
              <div className="g2-detail-actions g2-modern-hero-actions">
                <Link className="sis-btn-default" to={primaryTo}>{primaryLabel}<i className="fa-solid fa-arrow-right-long" /></Link>
                {String(secondaryTo).startsWith("#") ? (
                  <a className="g2-detail-outline" href={secondaryTo}>{secondaryLabel}<i className="fa-solid fa-arrow-down" /></a>
                ) : (
                  <Link className="g2-detail-outline" to={secondaryTo}>{secondaryLabel}<i className="fa-solid fa-arrow-right-long" /></Link>
                )}
              </div>
            ))}

            {showMeta && meta.length > 0 && (
              <div className="g2-modern-hero-meta">
                {meta.map((item) => <span key={item}><i className="fa-solid fa-circle-check" />{item}</span>)}
              </div>
            )}
          </div>

          <div className="g2-modern-hero-media">
            <div className="g2-modern-hero-image-frame g2-modern-hero-png-frame">
              <div className="g2-modern-hero-image-backdrop" />
              <div className="g2-modern-hero-image-ring" />
              <img className="g2-modern-hero-png" src={img(image)} alt={imageAlt || title} />
              <div className="g2-modern-hero-image-shade" />
              <div className="g2-modern-hero-image-label"><i className={`fa-solid ${icon}`} /><span>{badge}</span></div>
            </div>
            <div className="g2-modern-hero-float-card">
              <span className="g2-modern-hero-float-icon"><i className="fa-solid fa-arrow-trend-up" /></span>
              <span><strong>Personal guidance</strong><small>From shortlist to departure</small></span>
            </div>
            <div className="g2-modern-hero-photo-tag"><i className="fa-solid fa-location-dot" /> Go2Abroad</div>
          </div>
        </div>
      </div>
    </section>
  );
}
