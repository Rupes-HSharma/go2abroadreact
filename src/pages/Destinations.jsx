import { useEffect } from "react";
import Banner from "../components/sections/destinations/Banner";
import DestinationsIntro from "../components/sections/destinations/DestinationsIntro";
import DestinationsList from "../components/sections/destinations/DestinationsList";
import Cta from "../components/sections/destinations/Cta";
import MoreDestinations from "../components/sections/destinations/MoreDestinations";
import Cta2 from "../components/sections/destinations/Cta2";

export default function Destinations() {
  useEffect(() => {
    document.title = "Study Destinations for Indian Students | Go2Abroad";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Compare 20+ study abroad destinations - USA, UK, Canada, Australia, Germany and more - with Go2Abroad's free country matching for Indian students.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <DestinationsIntro />
      <DestinationsList />
      <Cta />
      <MoreDestinations />
      <Cta2 />
    </>
  );
}
