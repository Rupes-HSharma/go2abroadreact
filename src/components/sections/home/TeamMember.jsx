import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const TEAM_PROFILES = {
  "Chakrapalit Narayan": {
    role: "Founder & CEO of Go2Abroad",
    image: img("/images/Chakrapalit_Narayan.jpg"),
    heading: "The Go2Abroad Founder's Story",
    paragraphs: [
      "Eight years ago, Chakrapalit Narayan was drawing blueprints for machines. Today, he draws blueprints for futures.",
      "As Founder & CEO of Go2Abroad, he's built something rare: a zero-fee study abroad platform rooted in transparency, where every student — from a first-gen Oxford hopeful to a future doctor bound for Georgia — gets a real champion in their corner.",
      "His path here wasn't linear. He trained as a mechanical engineer, earning his B.Tech from Dr. A.P.J. Abdul Kalam Technical University, before pivoting into education. At PolicyBazaar, he consistently delivered 150% of targets as an IRDAI-certified Advisor. At Leverage Edu, he rose from Senior Counselor to Assistant Manager — guiding 100 students into UK and US universities in three months and leading a 12-person team to record revenue. At The Modern School Group, he scaled enrollment marketing across three NCR campuses.",
      "In September 2024, he launched Go2Abroad with a simple belief: the best education journey should begin with clarity, not confusion.",
    ],
  },
  "David Carter": {
    role: "Study Abroad Advisor",
    image: img("/images/team-image-2.png"),
    heading: "Helping Students Find Their Best-Fit Path",
    paragraphs: [
      "David helps students compare countries, courses and universities with a practical, student-first approach.",
      "He works closely with applicants to turn academic goals into a clear study abroad plan and keeps every step of the journey easy to understand.",
    ],
  },
  "Emily Thompson": {
    role: "Visa Documentation Specialist",
    image: img("/images/team-image-3.png"),
    heading: "Making Visa Documentation Simple",
    paragraphs: [
      "Emily focuses on documentation accuracy and visa readiness, helping students prepare complete and well-organized applications.",
      "Her attention to detail helps reduce avoidable mistakes and gives applicants confidence before submission.",
    ],
  },
  "Michael Reynolds": {
    role: "Work Permit Consultant",
    image: img("/images/team-image-4.png"),
    heading: "Supporting International Career Plans",
    paragraphs: [
      "Michael guides students and professionals who want to understand work opportunities and post-study pathways abroad.",
      "He focuses on practical options, eligibility and the next steps required to move forward confidently.",
    ],
  },
};

export default function TeamMember() {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (!selectedMember) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setSelectedMember(null);
    };

    document.body.classList.add("team-modal-open");
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("team-modal-open");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedMember]);

  const openMember = (event, name) => {
    if (event.target.closest(".sisf-m-social-icons")) return;
    event.preventDefault();
    event.stopPropagation();
    setSelectedMember(TEAM_PROFILES[name] ? name : "Chakrapalit Narayan");
  };

  const closeMember = () => setSelectedMember(null);

  return (
    <div className="sis-team-member-section sis-comman-background section">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle sis-text-anime-style-3">
                Meet Team Go2Abroad
              </span>
              <h2 className="sisf-m-title text-white sis-text-anime-style-3">
                <span className="sisf-e-colored">
                  Meet The Heroes Behind
                </span>
                <br />
                Your Journey
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <div className="sisf-m-text" data-aos="fade-up" data-aos-delay="100">
                <p className="text-white mt-0">
                  Whether you need expert course advising, assistance with funding and education loans, digital portal support, or meticulous visa documentation, our dedicated professionals
						collaborate behind the scenes to support every step of your overseas education.
                </p>
              </div>
              <div className="sisf-m-button pt-4" data-aos="fade-up" data-aos-delay="500">
                <Link className="sis-btn-default" to="/contact">
                  Talk To Our Counsellors
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="sis-comman--swiper-slider" data-aos="fade-up" data-aos-delay="300">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="sisf-sis-team-member sisf-item-layout-info-from-bottom sisf-hover mb-3 page" onClick={(event) => openMember(event, "Chakrapalit Narayan")} role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && openMember(event, "Chakrapalit Narayan")}>
                      <div className="sisf-e-inner position-relative">
                        <div className="image-with-icons position-relative">
                          <div className="sis-team-members-img sis-radius">
                            <a href="#" className="sisf-sis-page-link position-relative">
                              <figure>
                                <img src={img("/images/Chakrapalit_Narayan.jpg")} className="w-100" alt="Go2Abroad" />
                              </figure>
                            </a>
                          </div>
                          <div className="sisf-m-social-icons">
                            <ul className="social-icons list-unstyled d-flex align-items-center justify-content-center gap-3 p-0 m-0">
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-facebook"></i>
                                </a>
                              </li>
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-x-twitter"></i>
                                </a>
                              </li>
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sis-team-member-content d-flex align-items-center justify-content-between">
                          <div className="contents-out">
                            <h2 className="sisf-m-title sis-comman-title mb-1">
                              <a href="#" className="sisf-sis-page-link">
                                Chakrapalit Narayan
                              </a>
                            </h2>
                            <p className="sisf-m-role mb-0">
                              Founder & CEO of Go2Abroad
                            </p>
                          </div>
                          <div className="sis-e-icon-link">
                            <a href="#">
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sisf-sis-team-member sisf-item-layout-info-from-bottom sisf-hover mb-3 page" onClick={(event) => openMember(event, "David Carter")} role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && openMember(event, "David Carter")}>
                      <div className="sisf-e-inner position-relative">
                        <div className="image-with-icons position-relative">
                          <div className="sis-team-members-img sis-radius">
                            <a href="#" className="sisf-sis-page-link position-relative">
                              <figure>
                                <img src={img("/images/team-image-2.png")} className="w-100" alt="Go2Abroad" />
                              </figure>
                            </a>
                          </div>
                          <div className="sisf-m-social-icons">
                            <ul className="social-icons list-unstyled d-flex align-items-center justify-content-center gap-3 p-0 m-0">
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-facebook"></i>
                                </a>
                              </li>
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-x-twitter"></i>
                                </a>
                              </li>
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sis-team-member-content d-flex align-items-center justify-content-between">
                          <div className="contents-out">
                            <h2 className="sisf-m-title sis-comman-title mb-1">
                              <a href="#" className="sisf-sis-page-link">
                                David Carter
                              </a>
                            </h2>
                            <p className="sisf-m-role mb-0">
                              Study Abroad Advisor
                            </p>
                          </div>
                          <div className="sis-e-icon-link">
                            <a href="#">
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sisf-sis-team-member sisf-item-layout-info-from-bottom sisf-hover mb-3 page" onClick={(event) => openMember(event, "Emily Thompson")} role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && openMember(event, "Emily Thompson")}>
                      <div className="sisf-e-inner position-relative">
                        <div className="image-with-icons position-relative">
                          <div className="sis-team-members-img sis-radius">
                            <a href="#" className="sisf-sis-page-link position-relative">
                              <figure>
                                <img src={img("/images/team-image-3.png")} className="w-100" alt="Go2Abroad" />
                              </figure>
                            </a>
                          </div>
                          <div className="sisf-m-social-icons">
                            <ul className="social-icons list-unstyled d-flex align-items-center justify-content-center gap-3 p-0 m-0">
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-facebook"></i>
                                </a>
                              </li>
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-x-twitter"></i>
                                </a>
                              </li>
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sis-team-member-content d-flex align-items-center justify-content-between">
                          <div className="contents-out">
                            <h2 className="sisf-m-title sis-comman-title mb-1">
                              <a href="#" className="sisf-sis-page-link">
                                Emily Thompson
                              </a>
                            </h2>
                            <p className="sisf-m-role mb-0">
                              Visa Documentation Specialist
                            </p>
                          </div>
                          <div className="sis-e-icon-link">
                            <a href="#">
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sisf-sis-team-member sisf-item-layout-info-from-bottom sisf-hover mb-3 page" onClick={(event) => openMember(event, "Michael Reynolds")} role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && openMember(event, "Michael Reynolds")}>
                      <div className="sisf-e-inner position-relative">
                        <div className="image-with-icons position-relative">
                          <div className="sis-team-members-img sis-radius">
                            <a href="#" className="sisf-sis-page-link position-relative">
                              <figure>
                                <img src={img("/images/team-image-4.png")} className="w-100" alt="Go2Abroad" />
                              </figure>
                            </a>
                          </div>
                          <div className="sisf-m-social-icons">
                            <ul className="social-icons list-unstyled d-flex align-items-center justify-content-center gap-3 p-0 m-0">
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-facebook"></i>
                                </a>
                              </li>
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-x-twitter"></i>
                                </a>
                              </li>
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sis-team-member-content d-flex align-items-center justify-content-between">
                          <div className="contents-out">
                            <h2 className="sisf-m-title sis-comman-title mb-1">
                              <a href="#" className="sisf-sis-page-link">
                                Michael Reynolds
                              </a>
                            </h2>
                            <p className="sisf-m-role mb-0">
                              Work Permit Consultant
                            </p>
                          </div>
                          <div className="sis-e-icon-link">
                            <a href="#">
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sisf-sis-team-member sisf-item-layout-info-from-bottom sisf-hover mb-3 page" onClick={(event) => openMember(event, "David Carter")} role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && openMember(event, "David Carter")}>
                      <div className="sisf-e-inner position-relative">
                        <div className="image-with-icons position-relative">
                          <div className="sis-team-members-img sis-radius">
                            <a href="#" className="sisf-sis-page-link position-relative">
                              <figure>
                                <img src={img("/images/team-image-2.png")} className="w-100" alt="Go2Abroad" />
                              </figure>
                            </a>
                          </div>
                          <div className="sisf-m-social-icons">
                            <ul className="social-icons list-unstyled d-flex align-items-center justify-content-center gap-3 p-0 m-0">
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-facebook"></i>
                                </a>
                              </li>
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-x-twitter"></i>
                                </a>
                              </li>
                              <li className="mb-0">
                                <a href="#">
                                  <i className="fa-brands fa-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sis-team-member-content d-flex align-items-center justify-content-between">
                          <div className="contents-out">
                            <h2 className="sisf-m-title sis-comman-title mb-1">
                              <a href="#" className="sisf-sis-page-link">
                                David Carter
                              </a>
                            </h2>
                            <p className="sisf-m-role mb-0">
                              Study Abroad Advisor
                            </p>
                          </div>
                          <div className="sis-e-icon-link">
                            <a href="#">
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedMember && (
        <div
          className="team-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeMember();
          }}
          role="presentation"
        >
          <div
            className="team-profile-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedMember} profile`}
          >
            <button
              type="button"
              className="team-modal-close"
              onClick={closeMember}
              aria-label="Close profile"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="team-modal-image">
              <img src={TEAM_PROFILES[selectedMember].image} alt={selectedMember} />
            </div>
            <div className="team-modal-content">
              <h2>{selectedMember}</h2>
              <p className="team-modal-role">{TEAM_PROFILES[selectedMember].role}</p>
              <span className="team-modal-line"></span>
              <h3>{TEAM_PROFILES[selectedMember].heading}</h3>
              {TEAM_PROFILES[selectedMember].paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
