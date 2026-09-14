import { useEffect } from "react";
import Banner from "../components/sections/contact/Banner";
import Cta from "../components/sections/contact/Cta";
import ContactUs from "../components/sections/contact/ContactUs";
import ContactLocation from "../components/sections/contact/ContactLocation";

export default function Contact() {
  useEffect(() => {
    document.title = "GO2ABROAD | Contact Us";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <Cta />
      <ContactUs />
      <ContactLocation />
    </>
  );
}
