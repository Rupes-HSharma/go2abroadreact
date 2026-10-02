import { Link } from "react-router-dom";
import { SUCCESS_STORIES } from "../../../data/successStories";

const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export default function StoriesList() {
  return (
    <div className="sis-stories-list-section section pt-0 g2-success-directory">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {SUCCESS_STORIES.map((story, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={story.slug}>
              <article className="testimonial-right page g2-success-page-card" data-aos="fade-up--" data-aos-delay={80 + (index % 4) * 60}>
                <div className="sisf-e-inner bg-white p-4 sis-radius">
                  <div className="sisf-top--content">
                    <div className="sisf-content-inner">
                      <div className="sisf-m-inner d-flex align-items-center gap-4">
                        <div className="sisf-e-media-image">
                          <img src={img(story.image)} className="w-100" alt={story.name} />
                        </div>
                        <div className="sisf-e-author">
                          <span className="sisf-e-author-name sis-comman-title d-block">{story.name}</span>
                          <span className="sisf-e-author-role"><i>{story.role}</i></span>
                        </div>
                      </div>
                      <div className="sisf-e-content-center">
                        <div className="sisf-e-discription mt-4">
                          <p>“{story.quote}”</p>
                          <p style={{ color: "#64748B" }}><i className="fa-solid fa-location-dot" /> {story.university}</p>
                        </div>
                      </div>
                      <div className="sisf-case-overview pt-4">
                        <div className="sisf-e-title mb-3 text-center">
                          <h3>
                            {[0,1,2,3,4].map((star) => (
                              <span key={star} className={`g2a-rating-star ${story.rating === 4.5 && star === 4 ? "g2a-rating-half" : ""}`}>★</span>
                            ))}
                          </h3>
                        </div>
                        <div className="sis-m-overview-inner align-items-center flex-wrap gap-2">
                          <div className="sis-m-overview-item text-center">
                            <Link to={`/success-story/${story.slug}`}><span>READ FULL STORY</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
