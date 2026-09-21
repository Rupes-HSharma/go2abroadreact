import { useEffect } from "react";
import Banner from "../components/sections/usa/Banner";
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
      <Banner />
      <CountryDetail />
    </>
  );
}
