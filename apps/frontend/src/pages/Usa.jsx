import { useEffect } from "react";
import ModernInnerHero from "../components/ModernInnerHero";
import CountryDetail from "../components/sections/usa/CountryDetail";

export default function Usa() {
  useEffect(() => {
    document.title = "Study in the USA | Go2Abroad";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Complete guide to studying in the USA for Indian students - top universities, tuition, visa process, scholarships, cost calculator and free counselling.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ModernInnerHero
        eyebrow="🇺🇸 STUDY IN THE USA"
        title="Build your next chapter in the United States."
        intro="Explore universities, flexible degree structures, campus life and career-focused programs with guidance from shortlist to application."
        image="/images/service-image-4.png"
        imageAlt="International student planning study in the USA"
        badge="Study in the USA"
        primaryLabel="Talk to a USA counsellor"
        secondaryLabel="Explore destinations"
        secondaryTo="/destinations"
        meta={["Free counselling", "University matching", "Visa guidance"]}
        themeKey="usa"
      />
      <CountryDetail />
    </>
  );
}
