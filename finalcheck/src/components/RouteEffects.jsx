import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;
    const timers = [];

    const run = () => {
      if (cancelled) return;

      if (location.hash) {
        const id = decodeURIComponent(location.hash.slice(1));
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        window.scrollTo(0, 0);
      }

      if (typeof window.go2AbroadReinit === "function") {
        window.go2AbroadReinit();
      }
    };

    const frame = window.requestAnimationFrame(run);
    timers.push(window.setTimeout(run, 120));
    timers.push(window.setTimeout(run, 450));

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [location.pathname, location.hash]);

  return null;
}
