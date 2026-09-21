import { useEffect, useState } from "react";

export default function FloatingContactButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="sis-floating-contact" aria-label="Quick contact actions">
      <a
        className="sis-floating-contact-btn sis-floating-whatsapp"
        href="https://wa.me/7905377279"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Go2Abroad on WhatsApp"
        title="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>

      <a
        className="sis-floating-contact-btn sis-floating-call"
        href="tel:+917068821740"
        aria-label="Call Go2Abroad"
        title="Call us"
      >
        <i className="fa-solid fa-phone" />
      </a>

      <button
        type="button"
        className={`sis-floating-contact-btn sis-floating-top ${showTop ? "is-visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <i className="fa-solid fa-chevron-up" />
      </button>
    </div>
  );
}
