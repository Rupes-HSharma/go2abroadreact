import { useEffect } from "react";
import Banner from "../components/sections/about/Banner";
import About from "../components/sections/about/About";
import OurApproach from "../components/sections/about/OurApproach";
import Cta from "../components/sections/about/Cta";
import WhyChooseUs from "../components/sections/about/WhyChooseUs";
import PageCounters from "../components/sections/about/PageCounters";
import Cta2 from "../components/sections/about/Cta2";

export default function AboutUs() {
  useEffect(() => {
    document.title = "GO2ABROAD | About";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <About />
      <OurApproach />
      <Cta />
      <WhyChooseUs />
      <PageCounters />
      <Cta2 />
    </>
  );
}
