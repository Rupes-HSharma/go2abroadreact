const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function StoriesList() {
  return (
    <div className="sis-stories-list-section section pt-0">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-right page" data-aos="fade-up" data-aos-delay="100">
              <div className="sisf-e-inner bg-white p-4 sis-radius">
                <div className="sisf-m-inner d-flex align-items-center gap-4">
                  <div className="sisf-e-media-image">
                    <img src={img("/images/profile-img1.png")} className="w-100" alt="Priya Sharma" />
                  </div>
                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Priya Sharma
                    </span>
                    <span className="sisf-e-author-role">
                      <i>
                        Nurse Candidate
                      </i>
                    </span>
                  </div>
                </div>
                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">
                    <p>
                      “The counselling team made the German qualification recognition process feel simple instead of intimidating.”
                    </p>
                    <p style={{color: '#64748B'}}>
                      <i className="fa-solid fa-location-dot"></i>
                      Klinikum Hochrhein | Germany
                    </p>
                  </div>
                </div>
                <div className="sisf-case-overview pt-3 text-center">
                  <div className="mb-2">
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-right page" data-aos="fade-up" data-aos-delay="150">
              <div className="sisf-e-inner bg-white p-4 sis-radius">
                <div className="sisf-m-inner d-flex align-items-center gap-4">
                  <div className="sisf-e-media-image">
                    <img src={img("/images/profile-img2.png")} className="w-100" alt="Rohan Mehta" />
                  </div>
                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Rohan Mehta
                    </span>
                    <span className="sisf-e-author-role">
                      <i>
                        MBA Student
                      </i>
                    </span>
                  </div>
                </div>
                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">
                    <p>
                      “From GMAT strategy to my final SOP draft, Go2Abroad stayed on top of every deadline so I didn't have to.”
                    </p>
                    <p style={{color: '#64748B'}}>
                      <i className="fa-solid fa-location-dot"></i>
                      Schulich School of Business | Canada
                    </p>
                  </div>
                </div>
                <div className="sisf-case-overview pt-3 text-center">
                  <div className="mb-2">
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-right page" data-aos="fade-up" data-aos-delay="200">
              <div className="sisf-e-inner bg-white p-4 sis-radius">
                <div className="sisf-m-inner d-flex align-items-center gap-4">
                  <div className="sisf-e-media-image">
                    <img src={img("/images/profile-img3.png")} className="w-100" alt="Pallavi Jha" />
                  </div>
                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Pallavi Jha
                    </span>
                    <span className="sisf-e-author-role">
                      <i>
                        Master of Fine Arts
                      </i>
                    </span>
                  </div>
                </div>
                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">
                    <p>
                      “My portfolio review sessions genuinely changed how I presented my work — I got into my first-choice university.”
                    </p>
                    <p style={{color: '#64748B'}}>
                      <i className="fa-solid fa-location-dot"></i>
                      University of Essex | UK
                    </p>
                  </div>
                </div>
                <div className="sisf-case-overview pt-3 text-center">
                  <div className="mb-2">
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star-half-stroke" style={{color: '#fbdc0e'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-right page" data-aos="fade-up" data-aos-delay="250">
              <div className="sisf-e-inner bg-white p-4 sis-radius">
                <div className="sisf-m-inner d-flex align-items-center gap-4">
                  <div className="sisf-e-media-image">
                    <img src={img("/images/profile-img4.png")} className="w-100" alt="Arjun Verma" />
                  </div>
                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Arjun Verma
                    </span>
                    <span className="sisf-e-author-role">
                      <i>
                        MS Computer Science
                      </i>
                    </span>
                  </div>
                </div>
                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">
                    <p>
                      “The education loan comparison alone saved my family lakhs in interest over the course of my degree.”
                    </p>
                    <p style={{color: '#64748B'}}>
                      <i className="fa-solid fa-location-dot"></i>
                      Arizona State University | USA
                    </p>
                  </div>
                </div>
                <div className="sisf-case-overview pt-3 text-center">
                  <div className="mb-2">
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-right page" data-aos="fade-up" data-aos-delay="100">
              <div className="sisf-e-inner bg-white p-4 sis-radius">
                <div className="sisf-m-inner d-flex align-items-center gap-4">
                  <div className="sisf-e-media-image">
                    <img src={img("/images/profile-img5.png")} className="w-100" alt="Sneha Kulkarni" />
                  </div>
                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Sneha Kulkarni
                    </span>
                    <span className="sisf-e-author-role">
                      <i>
                        Bachelor of Business
                      </i>
                    </span>
                  </div>
                </div>
                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">
                    <p>
                      “Straight after Class 12, I had no idea where to start. My counsellor mapped everything out in one call.”
                    </p>
                    <p style={{color: '#64748B'}}>
                      <i className="fa-solid fa-location-dot"></i>
                      Deakin University | Australia
                    </p>
                  </div>
                </div>
                <div className="sisf-case-overview pt-3 text-center">
                  <div className="mb-2">
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-right page" data-aos="fade-up" data-aos-delay="150">
              <div className="sisf-e-inner bg-white p-4 sis-radius">
                <div className="sisf-m-inner d-flex align-items-center gap-4">
                  <div className="sisf-e-media-image">
                    <img src={img("/images/profile-img6.png")} className="w-100" alt="Karan Malhotra" />
                  </div>
                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Karan Malhotra
                    </span>
                    <span className="sisf-e-author-role">
                      <i>
                        MEng Engineering
                      </i>
                    </span>
                  </div>
                </div>
                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">
                    <p>
                      “The mock visa interview was almost identical to my real one — I walked in knowing exactly what to expect.”
                    </p>
                    <p style={{color: '#64748B'}}>
                      <i className="fa-solid fa-location-dot"></i>
                      University of Auckland | New Zealand
                    </p>
                  </div>
                </div>
                <div className="sisf-case-overview pt-3 text-center">
                  <div className="mb-2">
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-right page" data-aos="fade-up" data-aos-delay="200">
              <div className="sisf-e-inner bg-white p-4 sis-radius">
                <div className="sisf-m-inner d-flex align-items-center gap-4">
                  <div className="sisf-e-media-image">
                    <img src={img("/images/profile-img1.png")} className="w-100" alt="Ishita Rao" />
                  </div>
                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Ishita Rao
                    </span>
                    <span className="sisf-e-author-role">
                      <i>
                        Diploma, Hospitality
                      </i>
                    </span>
                  </div>
                </div>
                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">
                    <p>
                      “They found me verified, affordable accommodation before I even landed — one less thing to worry about.”
                    </p>
                    <p style={{color: '#64748B'}}>
                      <i className="fa-solid fa-location-dot"></i>
                      Shannon College | Ireland
                    </p>
                  </div>
                </div>
                <div className="sisf-case-overview pt-3 text-center">
                  <div className="mb-2">
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star-half-stroke" style={{color: '#fbdc0e'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-right page" data-aos="fade-up" data-aos-delay="250">
              <div className="sisf-e-inner bg-white p-4 sis-radius">
                <div className="sisf-m-inner d-flex align-items-center gap-4">
                  <div className="sisf-e-media-image">
                    <img src={img("/images/profile-img2.png")} className="w-100" alt="Aditya Nair" />
                  </div>
                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Aditya Nair
                    </span>
                    <span className="sisf-e-author-role">
                      <i>
                        MSc Data Science
                      </i>
                    </span>
                  </div>
                </div>
                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">
                    <p>
                      “Being close to home mattered to my parents. Go2Abroad found me a top program without an 18-hour flight.”
                    </p>
                    <p style={{color: '#64748B'}}>
                      <i className="fa-solid fa-location-dot"></i>
                      NUS | Singapore
                    </p>
                  </div>
                </div>
                <div className="sisf-case-overview pt-3 text-center">
                  <div className="mb-2">
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                    <i className="fa-solid fa-star" style={{color: '#fbdc0e'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
