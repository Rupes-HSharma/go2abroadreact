import { useEffect, useState } from "react";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/$/, "");
const frontendAsset = (value) => {
  if (!value) return `${import.meta.env.BASE_URL}images/avtar-image.png`;
  if (/^(https?:|data:|blob:)/i.test(value)) return value;
  if (value.startsWith("/uploads/")) return `${API_URL}${value}`;
  return `${import.meta.env.BASE_URL}${value.replace(/^\/+/, "")}`;
};

function ReviewCard({ review, delay }) {
  const rating = Math.max(0, Math.min(5, Number(review.rating) || 0));
  return (
    <div className="col-lg-3 col-md-6">
      <div className="testimonial-right page" data-aos="fade-up--" data-aos-delay={delay}>
        <div className="sisf-e-inner bg-white p-4 sis-radius">
          <div className="sisf-m-inner d-flex align-items-center gap-4">
            <div className="sisf-e-media-image">
              <img src={frontendAsset(review.avatarUrl)} className="w-100" alt={`${review.name} testimonial`} />
            </div>
            <div className="sisf-e-author">
              <span className="sisf-e-author-name sis-comman-title d-block">{review.name}</span>
              <span className="sisf-e-author-role"><i>{review.role}</i></span>
            </div>
          </div>
          <div className="sisf-e-content-center">
            <div className="sisf-e-discription mt-4">
              <p>“{review.quote}”</p>
              {review.location && <p style={{ color: "#64748B" }}><i className="fa-solid fa-location-dot"></i> {review.location}</p>}
            </div>
          </div>
          <div className="sisf-case-overview pt-3 text-center">
            <div className="mb-2" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, index) => <i className="fa-solid fa-star" style={{ color: index < rating ? "#fbdc0e" : "#d1d5db" }} key={index}></i>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StoriesList() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_URL}/public/reviews`)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load reviews");
        return response.json();
      })
      .then((data) => { if (!cancelled) setReviews(Array.isArray(data) ? data : []); })
      .catch(() => { if (!cancelled) setError(true); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  if (loading) return <div className="sis-stories-list-section section pt-0"><div className="container"><p>Loading success stories…</p></div></div>;
  if (error || reviews.length === 0) return <div className="sis-stories-list-section section pt-0"><div className="container"><p>Success stories are temporarily unavailable. Please contact our team to hear from recent students.</p></div></div>;

  return <div className="sis-stories-list-section section pt-0"><div className="container"><div className="row g-4">{reviews.map((review, index) => <ReviewCard key={review.id} review={review} delay={100 + (index % 4) * 50} />)}</div></div></div>;
}
