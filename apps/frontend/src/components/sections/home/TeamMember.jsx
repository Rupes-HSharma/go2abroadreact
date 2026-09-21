import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const img = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const TEAM_PROFILES = {
  "Chakrapalit Narayan": {
    role: "Founder & CEO of Go2Abroad",
    image: img("/images/Chakrapalit_Narayan.png"),
    linkedin:
      "https://in.linkedin.com/in/chakrapalit-narayan-%E0%A4%9A%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%AA%E0%A4%BE%E0%A4%B2%E0%A4%BF%E0%A4%A4-%E0%A4%A8%E0%A4%BE%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%A3-770553166",
    short:
      "Building a transparent, student-first study abroad journey from counselling to arrival.",
    email: "info@go2abroad.co",
    phone: "+91 79053 77279",
    description: "Founder & CEO of Go2Abroad, focused on building a transparent, student-first study abroad journey from counselling to arrival.",
  },
  "Amrit Seth": {
    role: "Operational & Digital Support",
    image: img("/images/amritSeth.png"),
    linkedin: "https://in.linkedin.com/in/amrit-seth-ab05782a2",
    short:
      "Supporting Go2Abroad through reliable digital systems, operations and a detail-focused approach.",
    email: "operation@go2abroad.co",
    phone: "+91 7518437330",
    description: "Operational & Digital Support professional helping Go2Abroad with digital systems, operations and day-to-day execution.",
  },
  "Sandhya Kathuria": {
    role: "Cheif Business Officer",
    image: img("/images/sandhya.png"),
    linkedin: "https://in.linkedin.com/in/sandhya-jhamtani-912ba587",
    short:
      "Bringing deep international education experience and student-focused guidance to every journey.",
    email: "sandhya.k@go2abroad.co",
    phone: "+91 99581 55484",
    description: "Cheif Business Officer bringing international education experience and student-focused guidance to every journey.",
  },
};

function TeamCard({ member, onHover }) {
  const profile = TEAM_PROFILES[member];

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <article className="g2-team-card" onMouseEnter={() => onHover(member)} tabIndex={0} onFocus={() => onHover(member)}>
        <div className="g2-team-image">
          <img src={profile.image} alt={member} loading="lazy" />

          <div className="g2-team-hover">
            <div className="g2-team-hover-content">
              <div className="g2-team-name-row">
                <h3>{member}</h3>
                <a
                  className="g2-team-linkedin"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member} LinkedIn`}
                  onClick={(event) => event.stopPropagation()}
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </div>

              <span className="g2-team-role">{profile.role}</span>
              <p>{profile.short}</p>

              <span className="g2-team-arrow" aria-hidden="true">
                <i className="fa-solid fa-arrow-right-long" />
              </span>
            </div>
          </div>
        </div>

        <div className="g2-team-default-info">
          <div>
            <h3>{member}</h3>
            <p>{profile.role}</p>
          </div>
          <span className="g2-team-default-arrow">
            <i className="fa-solid fa-arrow-right-long" />
          </span>
        </div>
      </article>
    </div>
  );
}

function TeamProfileModal({ member, onClose }) {
  const profile = member ? TEAM_PROFILES[member] : null;

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("team-modal-open");
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.classList.remove("team-modal-open"); };
  }, [onClose, member]);

  if (!member || !profile) return null;

  return (
    <div className="g2-team-popup-layer" role="dialog" aria-modal="true" aria-label={`${member} profile`}>
      <div className="g2-team-popup-backdrop" onClick={onClose} />
      <div className="g2-team-popup" onMouseLeave={onClose}>
        <div className="g2-team-popup-image-wrap">
          <img src={profile.image} alt={member} />
          <div className="g2-team-popup-image-shade" />
        </div>
        <div className="g2-team-popup-content">
          <div className="g2-team-popup-topline">
            <span>TEAM GO2ABROAD</span>
            <button type="button" className="g2-team-popup-close" onClick={onClose} aria-label="Close profile"><i className="fa-solid fa-xmark" /></button>
          </div>
          <div className="g2-team-popup-name-row">
            <h2>{member}</h2>
            <a className="g2-team-popup-linkedin" href={profile.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label={`${member} LinkedIn`}><i className="fa-brands fa-linkedin-in" /></a>
          </div>
          <span className="g2-team-popup-role">{profile.role}</span>
          <div className="g2-team-popup-line" />
          <h3>About {member}</h3>
          <p className="g2-team-popup-description">{profile.description}</p>
          <div className="g2-team-popup-contact">
            <a href={`mailto:${profile.email}`}><i className="fa-solid fa-envelope" />{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}><i className="fa-solid fa-phone" />{profile.phone}</a>
          </div>
          <div className="g2-team-popup-footer">
            <span>Helping students move from ambition to arrival.</span>
            <Link className="g2-team-popup-cta" to="/contact" onClick={onClose}>View Full Profile <i className="fa-solid fa-arrow-right-long" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamMember() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="sis-team-member-section sis-comman-background section">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle">
                Meet Team Go2Abroad
              </span>
              <h2 className="sisf-m-title text-white">
                <span className="sisf-e-colored">Meet The Heroes Behind</span>
                <br />
                Your Journey
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <div className="sisf-m-text">
                <p className="text-white mt-0">
                  Our dedicated professionals work together across counselling,
                  operations, digital support and global education guidance.
                </p>
              </div>
              <div className="sisf-m-button pt-4">
                <Link className="sis-btn-default" to="/contact">
                  Talk To Our Counsellors
                  <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row g2-team-grid">
          <TeamCard member="Chakrapalit Narayan" onHover={setSelectedMember} />
          <TeamCard member="Amrit Seth" onHover={setSelectedMember} />
          <TeamCard member="Sandhya Kathuria" onHover={setSelectedMember} />
        </div>
        <TeamProfileModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      </div>
    </section>
  );
}
