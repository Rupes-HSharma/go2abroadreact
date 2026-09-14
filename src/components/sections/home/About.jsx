import { useEffect, useRef, useState } from "react";

const journeySteps = [
  {
    title: "Shortlist",
    description: "Explore & shortlist universities",
    icon: "fa-list-check",
    left: "8%",
    top: "0",
  },
  {
    title: "Profile",
    description: "Create & verify your profile",
    icon: "fa-user",
    left: "24.8%",
    top: "130px",
  },
  {
    title: "Apply",
    description: "Submit applications",
    icon: "fa-paper-plane",
    left: "41.6%",
    top: "0",
  },
  {
    title: "Funds",
    description: "Plan costs & secure funding",
    icon: "fa-wallet",
    left: "58.4%",
    top: "130px",
  },
  {
    title: "Visa",
    description: "Apply & track progress",
    icon: "fa-stamp",
    left: "75.2%",
    top: "0",
  },
  {
    title: "Arrival",
    description: "Settle in & get started",
    icon: "fa-plane",
    left: "92%",
    top: "130px",
  },
];

const pathD =
  "M40,26 C82,26 82,156 124,156 C166,156 166,26 208,26 C250,26 250,156 292,156 C334,156 334,26 376,26 C418,26 418,156 460,156";

export default function About() {
  const wrapRef = useRef(null);
  const pathRef = useRef(null);
  const animationRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;

    if (!wrap || !path) return;

    const icons = Array.from(
      wrap.querySelectorAll(".sis-step-icon")
    );

    const thresholds = icons.map((_, index) => {
      if (index === 0) return 0.025;
      return index / (icons.length - 1);
    });

    const resetJourney = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }

      icons.forEach((icon) => {
        icon.classList.remove(
          "sis-journey-active",
          "sis-journey-current"
        );
      });
    };

    const startAnimation = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      const length = path.getTotalLength();
      const duration = 5600;
      const startTime = performance.now();

      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.transition = "none";

      icons.forEach((icon) => {
        icon.classList.remove(
          "sis-journey-active",
          "sis-journey-current"
        );
      });

      const animate = (now) => {
        const elapsed = now - startTime;
        const rawProgress = Math.min(elapsed / duration, 1);

        // Smooth ease-in-out so the graph feels like the original animation.
        const progress =
          rawProgress < 0.5
            ? 2 * rawProgress * rawProgress
            : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2;

        path.style.setProperty("stroke-dashoffset", `${length * (1 - progress)}px`, "important");

        thresholds.forEach((threshold, index) => {
          const icon = icons[index];
          if (!icon) return;

          if (progress >= threshold && !icon.classList.contains("sis-journey-active")) {
            icon.classList.add("sis-journey-active");
            icon.classList.add("sis-journey-current");

            // Remove current after the one-time ripple so the completed
            // circles stay light green without continuously blinking.
            window.setTimeout(() => {
              icon.classList.remove("sis-journey-current");
            }, 1500);
          }
        });

        if (rawProgress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          path.style.setProperty("stroke-dashoffset", "0px", "important");
          animationRef.current = null;
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setStarted(true);
        resetJourney();

        // Let the section become visible first, then start the graph.
        window.setTimeout(startAnimation, 180);
        observer.disconnect();
      },
      {
        threshold: 0.28,
      }
    );

    observer.observe(wrap);

    return () => {
      observer.disconnect();
      resetJourney();
    };
  }, []);

  return (
    <div className="sis-about-section section pt-0 sis-journey-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sisf-sis-section-title text-center sis-section-title sis-journey-heading">
              <span className="sisf-m-subtitle sis-text-anime-style-3">
                WHAT WE OFFER
              </span>

              <h2 className="sisf-m-title sis-text-anime-style-3">
                A Six Step Student Journey
                <br />
                <span className="sisf-e-colored">
                  Shortlist, Profile, Apply, Funds, Visa, Arrival
                </span>
              </h2>

              <div className="sisf-m-text">
                <p>
                  From visa applications and documentation to permanent residency pathways, our experienced consultants provide
                  <br />
                  personalized guidance at every step.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={wrapRef}
          className={`sis-journey-wrap ${started ? "in-view" : ""}`}
          data-g2a-react-journey="1"
        >
          <svg
            viewBox="0 0 500 182"
            preserveAspectRatio="none"
            className="sis-journey-svg"
            aria-hidden="true"
          >
            <path
              id="sis-journey-path"
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="#15202B"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>

          {journeySteps.map((step) => (
            <div
              key={step.title}
              className={`sis-step-item ${started ? "step-visible" : ""}`}
              style={{
                position: "absolute",
                left: step.left,
                top: step.top,
                transform: "translateX(-50%)",
                width: "100px",
                textAlign: "center",
              }}
            >
              <div
                className="sis-step-icon"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: step.title === "Arrival" ? "#006E93" : "#fff",
                  border: "1.5px solid #006E93",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  position: "relative",
                  zIndex: "1",
                }}
              >
                <i
                  className={`fa-solid ${step.icon}`}
                  style={{
                    fontSize: "22px",
                    color: step.title === "Arrival" ? "#fff" : "#006E93",
                  }}
                  aria-hidden="true"
                ></i>
              </div>

              <div
                style={{
                  marginTop: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#14203E",
                }}
              >
                {step.title}
              </div>

              <div
                style={{
                  marginTop: "3px",
                  fontSize: "12px",
                  color: "#5A6584",
                  lineHeight: "1.4",
                }}
              >
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
