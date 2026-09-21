import { useEffect } from "react";
import Banner from "../components/sections/courses/Banner";
import CoursesIntro from "../components/sections/courses/CoursesIntro";
import CoursesList from "../components/sections/courses/CoursesList";
import Cta from "../components/sections/courses/Cta";
import ServicesProcess from "../components/sections/courses/ServicesProcess";
import Cta2 from "../components/sections/courses/Cta2";

export default function Courses() {
  useEffect(() => {
    document.title = "Courses Abroad - UG, PG, MBA, PhD | Go2Abroad";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Explore Undergraduate, Postgraduate, MBA, PhD, Diploma and English language programs abroad, and find the right course level for your goals with Go2Abroad.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <CoursesIntro />
      <CoursesList />
      <Cta />
      <ServicesProcess />
      <Cta2 />
    </>
  );
}
