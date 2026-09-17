export default function ContactLocation() {
  return (
    <section className="sis-contact-location section pt-0">
      <div className="container">
        <div className="sis-location-card">
          <div className="sis-location-details">
            <div className="sis-location-tabs">
              <button className="sis-location-tab active" type="button" data-location="headOffice">
                <span className="sis-tab-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="sis-tab-content">
                  <strong>
                    Head Office
                  </strong>
                  <small>
                    (Delhi NCR)
                  </small>
                </span>
              </button>
              <button className="sis-location-tab" type="button" data-location="branchOffice">
                <span className="sis-tab-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="sis-tab-content">
                  <strong>
                    Branch Office
                  </strong>
                  <small>
                    (Haryana)
                  </small>
                </span>
              </button>
            </div>
            <div className="sis-location-info">
              <div className="sis-info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="sis-info-content">
                <span className="text-black">
                  <b>
                    Office Address
                  </b>
                </span>
                <p id="officeAddress">
                  B-395, 2nd Floor, Nehru Ground,
                            Neelam Chowk, Faridabad,
                            Haryana - 121001
                </p>
              </div>
            </div>
            <div className="sis-location-info">
              <div className="sis-info-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="sis-info-content">
                <span className="text-black">
                  <b>
                    Call Us
                  </b>
                </span>
                <p id="officePhone">
                  +91-7068821740
                </p>
              </div>
            </div>
            <div className="sis-location-info">
              <div className="sis-info-icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="sis-info-content">
                <span className="text-black">
                  <b>
                    Email
                  </b>
                </span>
                <p id="officeEmail">
                  info@go2abroad.co
                </p>
              </div>
            </div>
            <div className="sisf-m-btn" style={{maxWidth: 'max-content'}}>
              <a href="https://www.google.com/maps/search/?api=1&query=B-395%2C+2nd+Floor%2C+Nehru+Ground%2C+Neelam+Chowk%2C+Faridabad%2C+Haryana+121001" target="_blank" rel="noopener noreferrer" className="sis-btn-default" id="directionBtn">
                <span>
                  Get Directions
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="sis-location-map">
            <iframe id="officeMap" src="https://www.google.com/maps?q=B-395%2C%202nd%20Floor%2C%20Nehru%20Ground%2C%20Neelam%20Chowk%2C%20Faridabad%2C%20Haryana%20121001&output=embed" width="600" height="100%" style={{border: '0'}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
