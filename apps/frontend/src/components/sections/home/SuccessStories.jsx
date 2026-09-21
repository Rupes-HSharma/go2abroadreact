import { Link } from "react-router-dom";
const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function SuccessStories() {
  return (
    <div className="sis-success-stories-section position-relative pb-0 section sis-brand-gradient-deep">
      <div className="sisf-sis-bottom-left-image" style={{top: '0px'}}>
        <figure>
          <img src={img("/images/globe-bg1.png")} style={{height: '722px'}} />
        </figure>
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <h2 className="sisf-m-title">
                People Say The Nicest Things   <span className="sisf-e-colored">
                  Success Stories..
                </span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <div className="sisf-m-text" data-aos="fade-up--" data-aos-delay="100">
                <p className="mt-0">
                  Real stories from students whose overseas journeys changed their lives.
                </p>
              </div>
              <div className="sisf-m-button pt-4" data-aos="fade-up--" data-aos-delay="300">
                <Link className="sis-btn-default" to="/success-stories">
                  Explore Success Stories
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
       <div className="row">
  {/* ==================== JAGPREET SINGH ==================== */}
  <div className="col-lg-3 col-md-6">
    <div
      className="testimonial-right page"
      data-aos="fade-up--"
      data-aos-delay="100"
    >
      <div className="sisf-e-inner bg-white p-4 sis-radius">
        <div className="sisf-top--content">
          <div className="sisf-content-inner">

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
                  "Go2Abroad made my entire journey—from university application
                  to visa guidance..."
                </p>

                <p style={{ color: "#64748B" }}>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NDc0OEIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXAtcGluLWhvdXNlLWljb24gbHVjaWRlLW1hcC1waW4taG91c2UiPjxwYXRoIGQ9Ik0xNSAyMmExIDEgMCAwIDEtMS0xdi00YTEgMSAwIDAgMSAuNDQ1LS44MzJsMy0yYTEgMSAwIDAgMSAxLjExIDBsMyAyQTEgMSAwIDAgMSAyMiAxN3Y0YTEgMSAwIDAgMS0xIDF6Ii8+PHBhdGggZD0iTTE4IDEwYTggOCAwIDAgMC0xNiAwYzAgNC45OTMgNS41MzkgMTAuMTkzIDcuMzk5IDExLjc5OWExIDEgMCAwIDAgLjYwMS4yIi8+PHBhdGggZD0iTTE4IDIydi0zIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMyIvPjwvc3ZnPg=="
                  />
                  Wittenborg University of Applied | Netherlands
                </p>

              </div>
            </div>

            <div className="sisf-case-overview pt-4">

              {/* 4.5 STAR RATING */}
              <div className="sisf-e-title mb-3 text-center">
                <h3>

                  {/* Star 1 */}
                  <span className="g2a-rating-star">★</span>

                  {/* Star 2 */}
                  <span className="g2a-rating-star">★</span>

                  {/* Star 3 */}
                  <span className="g2a-rating-star">★</span>

                  {/* Star 4 */}
                  <span className="g2a-rating-star">★</span>

                  {/* Half Star */}
                  <span className="g2a-rating-star g2a-rating-half">
                    ★
                  </span>

                </h3>
              </div>

              <div className="sis-m-overview-inner align-items-center flex-wrap gap-2">
                <div className="sis-m-overview-item text-center">
                  <Link to="/success-stories">
                    <span>READ FULL STORY</span>
                  </Link>
                </div>
              </div>

            </div>

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
      data-aos-delay="100"
    >
      <div className="sisf-e-inner bg-white p-4 sis-radius">
        <div className="sisf-top--content">
          <div className="sisf-content-inner">

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
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NDc0OEIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXAtcGluLWhvdXNlLWljb24gbHVjaWRlLW1hcC1waW4taG91c2UiPjxwYXRoIGQ9Ik0xNSAyMmExIDEgMCAwIDEtMS0xdi00YTEgMSAwIDAgMSAuNDQ1LS44MzJsMy0yYTEgMSAwIDAgMSAxLjExIDBsMyAyQTEgMSAwIDAgMSAyMiAxN3Y0YTEgMSAwIDAgMS0xIDF6Ii8+PHBhdGggZD0iTTE4IDEwYTggOCAwIDAgMC0xNiAwYzAgNC45OTMgNS41MzkgMTAuMTkzIDcuMzk5IDExLjc5OWExIDEgMCAwIDAgLjYwMS4yIi8+PHBhdGggZD0iTTE4IDIydi0zIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMyIvPjwvc3ZnPg=="
                  />
                  Coventry University, London!
                </p>

              </div>
            </div>

            <div className="sisf-case-overview pt-4">

              {/* 5 STAR RATING */}
              <div className="sisf-e-title mb-3 text-center">
                <h3>

                  <span className="g2a-rating-star">★</span>
                  <span className="g2a-rating-star">★</span>
                  <span className="g2a-rating-star">★</span>
                  <span className="g2a-rating-star">★</span>
                  <span className="g2a-rating-star">★</span>

                </h3>
              </div>

              <div className="sis-m-overview-inner align-items-center flex-wrap gap-2">
                <div className="sis-m-overview-item text-center">
                  <Link to="/success-stories">
                    <span>READ FULL STORY</span>
                  </Link>
                </div>
              </div>

            </div>

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
      data-aos-delay="100"
    >
      <div className="sisf-e-inner bg-white p-4 sis-radius">
        <div className="sisf-top--content">
          <div className="sisf-content-inner">

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
                  "Go2Abroad provided constant support and guidance at every
                  step, making my admission to..."
                </p>

                <p style={{ color: "#64748B" }}>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NDc0OEIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXAtcGluLWhvdXNlLWljb24gbHVjaWRlLW1hcC1waW4taG91c2UiPjxwYXRoIGQ9Ik0xNSAyMmExIDEgMCAwIDEtMS0xdi00YTEgMSAwIDAgMSAuNDQ1LS44MzJsMy0yYTEgMSAwIDAgMSAxLjExIDBsMyAyQTEgMSAwIDAgMSAyMiAxN3Y0YTEgMSAwIDAgMS0xIDF6Ii8+PHBhdGggZD0iTTE4IDEwYTggOCAwIDAgMC0xNiAwYzAgNC45OTMgNS41MzkgMTAuMTkzIDcuMzk5IDExLjc5OWExIDEgMCAwIDAgLjYwMS4yIi8+PHBhdGggZD0iTTE4IDIydi0zIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMyIvPjwvc3ZnPg=="
                  />
                  University of Surrey, Guildford, England
                </p>

              </div>
            </div>

            <div className="sisf-case-overview pt-4">

              {/* 4.5 STAR RATING */}
              <div className="sisf-e-title mb-3 text-center">
                <h3>

                  <span className="g2a-rating-star">★</span>
                  <span className="g2a-rating-star">★</span>
                  <span className="g2a-rating-star">★</span>
                  <span className="g2a-rating-star">★</span>

                  <span className="g2a-rating-star g2a-rating-half">
                    ★
                  </span>

                </h3>
              </div>

              <div className="sis-m-overview-inner align-items-center flex-wrap gap-2">
                <div className="sis-m-overview-item text-center">
                  <Link to="/success-stories">
                    <span>READ FULL STORY</span>
                  </Link>
                </div>
              </div>

            </div>

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
      data-aos-delay="100"
    >
      <div className="sisf-e-inner bg-white p-4 sis-radius">
        <div className="sisf-top--content">
          <div className="sisf-content-inner">

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
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NDc0OEIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXAtcGluLWhvdXNlLWljb24gbHVjaWRlLW1hcC1waW4taG91c2UiPjxwYXRoIGQ9Ik0xNSAyMmExIDEgMCAwIDEtMS0xdi00YTEgMSAwIDAgMSAuNDQ1LS44MzJsMy0yYTEgMSAwIDAgMSAxLjExIDBsMyAyQTEgMSAwIDAgMSAyMiAxN3Y0YTEgMSAwIDAgMS0xIDF6Ii8+PHBhdGggZD0iTTE4IDEwYTggOCAwIDAgMC0xNiAwYzAgNC45OTMgNS41MzkgMTAuMTkzIDcuMzk5IDExLjc5OWExIDEgMCAwIDAgLjYwMS4yIi8+PHBhdGggZD0iTTE4IDIydi0zIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMyIvPjwvc3ZnPg=="
                  />
                  University of Surrey, Guildford, England
                </p>

              </div>
            </div>

            <div className="sisf-case-overview pt-4">

              {/* 5 STAR RATING */}
              <div className="sisf-e-title mb-3 text-center">
                <h3>

                  <span className="g2a-rating-star">★</span>
                  <span className="g2a-rating-star">★</span>
                  <span className="g2a-rating-star">★</span>
                  <span className="g2a-rating-star">★</span>
                  <span className="g2a-rating-star">★</span>

                </h3>
              </div>

              <div className="sis-m-overview-inner align-items-center flex-wrap gap-2">
                <div className="sis-m-overview-item text-center">
                  <Link to="/success-stories">
                    <span>READ FULL STORY</span>
                  </Link>
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
  );
}
