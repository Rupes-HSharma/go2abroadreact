import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import Courses from "./pages/Courses";
import SuccessStories from "./pages/SuccessStories";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Usa from "./pages/Usa";
import ArizonaStateUniversity from "./pages/ArizonaStateUniversity";

export default function App() {
  return (

     <Routes>

  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/services" element={<Services />} />
    <Route path="/destinations" element={<Destinations />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/success-stories" element={<SuccessStories />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/usa" element={<Usa />} />
    <Route
      path="/arizona-state-university"
      element={<ArizonaStateUniversity />}
    />
  </Route>

</Routes>

  );
}
