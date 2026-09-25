import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/$/, "");
const categories = [
  { name: "General", icon: "fa-circle-info", id: "faqGeneral" },
  { name: "Visa & Documentation", icon: "fa-stamp", id: "faqVisa" },
  { name: "Finances & Loans", icon: "fa-wallet", id: "faqFinance" },
  { name: "Destinations & After Arrival", icon: "fa-earth-americas", id: "faqDest" },
];

function FaqGroup({ category, entries }) {
  if (entries.length === 0) return null;

  return (
    <div className="col-lg-6">
      <h3 className="sis-comman-title mb-3">
        <i className={`fa-solid ${category.icon}`} style={{ color: "var(--main-color)" }}></i>
        {category.name}
      </h3>
      <div className="sisf-page-accordian sisf-sis-page-accordian mb-4">
        <div className="accordion" id={category.id}>
          {entries.map((entry, index) => {
            const itemId = `${category.id}-${entry.id}`;
            return (
              <div className="accordion-item mt-0" key={entry.id}>
                <h2 className="accordion-header sis-comman-title">
                  <button
                    className={`accordion-button mt-0 ${index > 0 ? "collapsed" : ""}`}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${itemId}`}
                    aria-expanded={index === 0}
                    type="button"
                  >
                    <span>{entry.question}</span>
                  </button>
                </h2>
                <div
                  id={itemId}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  data-bs-parent={`#${category.id}`}
                >
                  <div className="accordion-body pt-0">
                    <div className="sisf-e-content-inner">
                      <p className="mb-0">{entry.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_URL}/public/faqs`)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load FAQs");
        return response.json();
      })
      .then((data) => {
        if (!cancelled) setFaqs(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!cancelled) {
          setFaqs([]);
          setError(true);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return <div className="sis-faq-page-section section"><div className="container"><p>Loading FAQs…</p></div></div>;
  }
  if (error) {
    return <div className="sis-faq-page-section section"><div className="container"><p>FAQs are temporarily unavailable. <Link to="/contact">Contact us</Link> and our team will help answer your questions.</p></div></div>;
  }

  return (
    <div className="sis-faq-page-section section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sisf-sis-section-title text-center sis-section-title">
              <span className="sisf-m-subtitle">GOT QUESTIONS?</span>
              <h2 className="sisf-m-title">
                Everything you need to
                <span className="sisf-e-colored"> know, in one place.</span>
              </h2>
              <div className="sisf-m-text">
                <p>Grouped by topic so you can jump straight to what matters — from services and fees to visas, finances and destinations.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {categories.map((category) => (
            <FaqGroup
              key={category.name}
              category={category}
              entries={faqs.filter((faq) => faq.category === category.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
