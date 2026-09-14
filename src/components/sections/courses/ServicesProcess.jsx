import { Link } from "react-router-dom";
export default function ServicesProcess() {
  return (
    <div className="sis-services-process-section section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle sis-text-anime-style-3">
                BEFORE YOU APPLY
              </span>
              <h2 className="sisf-m-title sis-text-anime-style-3">
                Every course needs the
                <span className="sisf-e-colored">
                  right test score.
                </span>
              </h2>
              <div className="sisf-m-text">
                <p>
                  Whichever course level you choose, most universities require IELTS, TOEFL or PTE. We run structured coaching batches with mock tests so your score doesn't hold your application back.
                </p>
              </div>
              <div className="sisf-m-button pt-3">
                <Link className="sis-btn-default" to="/services#test-preparation">
                  Explore Test Prep
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sis-mini-stat-strip">
              <div className="sis-mini-stat">
                <h3>
                  IELTS
                </h3>
                <span>
                  Academic & General
                </span>
              </div>
              <div className="sis-mini-stat">
                <h3>
                  TOEFL
                </h3>
                <span>
                  iBT Coaching
                </span>
              </div>
              <div className="sis-mini-stat">
                <h3>
                  PTE
                </h3>
                <span>
                  Fast Results
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
