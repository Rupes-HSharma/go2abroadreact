import { useEffect } from "react";
import Banner from "../components/sections/asu/Banner";
import CountryDetail from "../components/sections/asu/CountryDetail";

export default function ArizonaStateUniversity() {
  useEffect(() => {
    document.title = "Arizona State University | Go2Abroad";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Complete guide to Arizona State University for Indian students - rankings, tuition, scholarships, admission requirements, deadlines, career outcomes and application process.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <CountryDetail />
    </>
  );
}
