import { useEffect } from "react";
import Banner from "../components/sections/faq/Banner";
import FaqPage from "../components/sections/faq/FaqPage";
import Cta from "../components/sections/faq/Cta";

export default function Faq() {
  useEffect(() => {
    document.title = "Frequently Asked Questions | Go2Abroad";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Answers to common questions about Go2Abroad's study abroad services, visas, education loans, destinations and more.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <FaqPage />
      <Cta />
    </>
  );
}
