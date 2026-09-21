import { useEffect } from "react";
import Banner from "../components/sections/services/Banner";
import ServicesIntro from "../components/sections/services/ServicesIntro";
import ServicesList from "../components/sections/services/ServicesList";
import Cta from "../components/sections/services/Cta";
import ServicesProcess from "../components/sections/services/ServicesProcess";
import Cta2 from "../components/sections/services/Cta2";

export default function Services() {
  useEffect(() => {
    document.title = "Study Abroad Services | Go2Abroad";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Explore Go2Abroad's end-to-end study abroad services for Indian students - counselling, university shortlisting, visa assistance, education loans, forex and more.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <ServicesIntro />
      <ServicesList />
      <Cta />
      <ServicesProcess />
      <Cta2 />
    </>
  );
}
