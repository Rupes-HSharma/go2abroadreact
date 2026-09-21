import { useEffect } from "react";
import Banner from "../components/sections/success/Banner";
import StoriesIntro from "../components/sections/success/StoriesIntro";
import StoriesList from "../components/sections/success/StoriesList";
import Cta from "../components/sections/success/Cta";

export default function SuccessStories() {
  useEffect(() => {
    document.title = "Success Stories | Go2Abroad";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Read real success stories from Indian students who studied abroad in the USA, UK, Canada, Australia, Germany and more with Go2Abroad's guidance.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <StoriesIntro />
      <StoriesList />
      <Cta />
    </>
  );
}
