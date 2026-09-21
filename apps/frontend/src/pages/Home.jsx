import { useEffect } from "react";
import Hero from "../components/sections/home/Hero";
import PopularDestination from "../components/sections/home/PopularDestination";
import Cta from "../components/sections/home/Cta";
import About from "../components/sections/home/About";
import Services from "../components/sections/home/Services";
import University from "../components/sections/home/University";
import Cta2 from "../components/sections/home/Cta2";
import ContactUs from "../components/sections/home/ContactUs";
import ContactLocation from "../components/sections/home/ContactLocation";
import HowItWork from "../components/sections/home/HowItWork";
import SuccessStories from "../components/sections/home/SuccessStories";
import TeamMember from "../components/sections/home/TeamMember";
import Cta3 from "../components/sections/home/Cta3";
import Faq from "../components/sections/home/Faq";
import LetestBlog from "../components/sections/home/LetestBlog";
import Cta4 from "../components/sections/home/Cta4";

export default function Home() {
  useEffect(() => {
    document.title = "GO2ABROAD";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <PopularDestination />
      <Cta />
      <About />
      <Services />
      <University />
      <Cta2 />
      <ContactUs />
      <ContactLocation />
      <HowItWork />
      <SuccessStories />
      <TeamMember />
      <Cta3 />
      <Faq />
      <LetestBlog />
      <Cta4 />
    </>
  );
}
