const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export default function WhyChooseUs() {
  return (
    <div className="sis-why-choose-us-section position-relative">
      <div className="sisf-sis-bottom-right-image" data-aos="fade-left" data-aos-delay="400">
        <figure>
          <img src={img("/images/page-image-2.png")} className="sisf-fade" alt="Go2Abroad" />
        </figure>
      </div>
      <div className="sis-why-choose-us-bg sisf-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col-lg-7">
              <div className="sisf-sis-section-title mb-4 sis-section-title">
                <span className="sisf-m-subtitle">
                  WHY CHOOSE US
                </span>
                <h2 className="sisf-m-title">
                  Helping You Achieve Your
                  <span className="sisf-e-colored">  Global Goals
                  </span>  With Confidence
                </h2>
                <div className="sisf-m-text" data-aos="fade-up--" data-aos-delay="100">
                  <p>
                    Your global ambitions deserve a trusted partner. Our team offers professional advice, strategic planning, and end-to-end assistance to help you confidently navigate immigration requirements and successfully pursue opportunities abroad.
                  </p>
                </div>
              </div>
              <div className="sisf-sis-why-choose-us-content sisf-top">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sis-why-choose-us-content" data-aos="fade-up--" data-aos-delay="300">
                      <div className="sis-e-inner">
                        <div className="sisf-m-count">
                          <span>
                            01
                          </span>
                        </div>
                        <div className="sisf-e-content">
                          <div className="sis-e-title mb-2">
                            <h3>
                              Personalized Solutions
                            </h3>
                          </div>
                          <div className="sis-e-text">
                            <p className="sis-page-text--line">
                              Every immigration journey is unique. We provide customized guidance and visa strategies tailored to your goals.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sis-why-choose-us-content" data-aos="fade-up--" data-aos-delay="500">
                      <div className="sis-e-inner">
                        <div className="sisf-m-count">
                          <span>
                            02
                          </span>
                        </div>
                        <div className="sisf-e-content">
                          <div className="sis-e-title mb-2">
                            <h3>
                              Trusted Expertise
                            </h3>
                          </div>
                          <div className="sis-e-text">
                            <p className="sis-page-text--line">
                              Benefit from professional guidance backed by extensive immigration knowledge, ensuring accurate advice.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sisf-sis-why-choose-us-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sis-why-choose-us-content" data-aos="fade-up--" data-aos-delay="700">
                      <div className="sis-e-inner">
                        <div className="sisf-m-count">
                          <span>
                            03
                          </span>
                        </div>
                        <div className="sisf-e-content">
                          <div className="sis-e-title mb-2">
                            <h3>
                              Fast Processing
                            </h3>
                          </div>
                          <div className="sis-e-text">
                            <p className="sis-page-text--line">
                              Our streamlined approach helps minimize delays, ensuring your application is prepared accurately and submitted efficiently.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sis-why-choose-us-content" data-aos="fade-up--" data-aos-delay="900">
                      <div className="sis-e-inner">
                        <div className="sisf-m-count">
                          <span>
                            04
                          </span>
                        </div>
                        <div className="sisf-e-content">
                          <div className="sis-e-title mb-2">
                            <h3>
                              Transparent Support
                            </h3>
                          </div>
                          <div className="sis-e-text">
                            <p className="mb-0 sis-page-text--line">
                              Stay informed throughout your journey with clear communication, honest guidance, and regular updates at every stage.
                            </p>
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
    </div>
  );
}
