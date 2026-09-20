import { Link } from "react-router-dom";

const img = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export default function StoriesList() {
  return (
    <div className="sis-stories-list-section section pt-0">
      <div className="container">
        <div className="row g-4">

          {/* ==================== JAGPREET SINGH ==================== */}
          <div className="col-lg-3 col-md-6">
            <div
              className="testimonial-right page"
              data-aos="fade-up--"
              data-aos-delay="100"
            >
              <div className="sisf-e-inner bg-white p-4 sis-radius">

                <div className="sisf-m-inner d-flex align-items-center gap-4">

                  <div className="sisf-e-media-image">
                    <img
                      src={img("/images/JagpreetSingh.png")}
                      className="w-100"
                      alt="Go2Abroad"
                    />
                  </div>

                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Jagpreet Singh
                    </span>

                    <span className="sisf-e-author-role">
                      <i>BBA Student</i>
                    </span>
                  </div>

                </div>

                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">

                    <p>
                      "Go2Abroad made my entire journey—from university
                      application to visa guidance..."
                    </p>

                    <p style={{ color: "#64748B" }}>
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      Wittenborg University of Applied | Netherlands
                    </p>

                  </div>
                </div>

                <div className="sisf-case-overview pt-3 text-center">

                  <div className="mb-2">

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ==================== ABDULLAH YUNUS ==================== */}
          <div className="col-lg-3 col-md-6">
            <div
              className="testimonial-right page"
              data-aos="fade-up--"
              data-aos-delay="150"
            >
              <div className="sisf-e-inner bg-white p-4 sis-radius">

                <div className="sisf-m-inner d-flex align-items-center gap-4">

                  <div className="sisf-e-media-image">
                    <img
                      src={img("/images/AbdullahYunus.png")}
                      className="w-100"
                      alt="Go2Abroad"
                    />
                  </div>

                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Abdullah Yunus
                    </span>

                    <span className="sisf-e-author-role">
                      <i>M.B.A Student</i>
                    </span>
                  </div>

                </div>

                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">

                    <p>
                      "Go2Abroad made my application and university selection
                      effortless, helping me gain admission to the MBA program at..."
                    </p>

                    <p style={{ color: "#64748B" }}>
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      Coventry University, London!
                    </p>

                  </div>
                </div>

                <div className="sisf-case-overview pt-3 text-center">

                  <div className="mb-2">

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ==================== MOHAMMAD HAMZA KHAN ==================== */}
          <div className="col-lg-3 col-md-6">
            <div
              className="testimonial-right page"
              data-aos="fade-up--"
              data-aos-delay="200"
            >
              <div className="sisf-e-inner bg-white p-4 sis-radius">

                <div className="sisf-m-inner d-flex align-items-center gap-4">

                  <div className="sisf-e-media-image">
                    <img
                      src={img("/images/MohammadHamzaKhan.png")}
                      className="w-100"
                      alt="Go2Abroad"
                    />
                  </div>

                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Mohammad Hamza Khan
                    </span>

                    <span className="sisf-e-author-role">
                      <i>Data Science Student</i>
                    </span>
                  </div>

                </div>

                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">

                    <p>
                      "Go2Abroad provided constant support and guidance at
                      every step, making my admission to..."
                    </p>

                    <p style={{ color: "#64748B" }}>
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      University of Surrey, Guildford, England
                    </p>

                  </div>
                </div>

                <div className="sisf-case-overview pt-3 text-center">

                  <div className="mb-2">

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star-half-stroke"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ==================== MOHAMMAD SUHAIB KHAN ==================== */}
          <div className="col-lg-3 col-md-6">
            <div
              className="testimonial-right page"
              data-aos="fade-up--"
              data-aos-delay="250"
            >
              <div className="sisf-e-inner bg-white p-4 sis-radius">

                <div className="sisf-m-inner d-flex align-items-center gap-4">

                  <div className="sisf-e-media-image">
                    <img
                      src={img("/images/MohammadSuhaibKhan.png")}
                      className="w-100"
                      alt="Go2Abroad"
                    />
                  </div>

                  <div className="sisf-e-author">
                    <span className="sisf-e-author-name sis-comman-title d-block">
                      Mohammad Suhaib Khan
                    </span>

                    <span className="sisf-e-author-role">
                      <i>Data Science Student</i>
                    </span>
                  </div>

                </div>

                <div className="sisf-e-content-center">
                  <div className="sisf-e-discription mt-4">

                    <p>
                      "Go2Abroad handled every step of my journey with complete
                      professionalism..."
                    </p>

                    <p style={{ color: "#64748B" }}>
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      University of Surrey, Guildford, England
                    </p>

                  </div>
                </div>

                <div className="sisf-case-overview pt-3 text-center">

                  <div className="mb-2">

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#fbdc0e" }}
                    ></i>

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