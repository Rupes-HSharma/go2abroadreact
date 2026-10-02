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
import DestinationDetail from "./pages/DestinationDetail";
import CourseDetail from "./pages/CourseDetail";
import UK from "./pages/UK";
import ArizonaStateUniversity from "./pages/ArizonaStateUniversity";
import { ServiceDetail, ServiceDetails, CountryDetails, UniversityDetail, UniversityDetails, SuccessDetails, BlogDetails, BlogArticleDetail, CourseDetails, PartnerDetails, LeadGeneration, InquiryForm, ThankYou, TermsAndConditions, PrivacyPolicy } from "./pages/pending/PendingPages";

export default function App() {
  return (

     <Routes>

  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/services" element={<Services />} />
    <Route path="/service" element={<Services />} />
    <Route path="/destinations" element={<Destinations />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/success-stories" element={<SuccessStories />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/usa" element={<Usa />} />
    <Route path="/destination/:slug" element={<DestinationDetail />} />
    <Route path="/uk" element={<UK />} />
    <Route path="/canada" element={<DestinationDetail slug="canada" />} />
    <Route path="/australia" element={<DestinationDetail slug="australia" />} />
    <Route path="/new-zealand" element={<DestinationDetail slug="new-zealand" />} />
    <Route path="/germany" element={<DestinationDetail slug="germany" />} />
    <Route path="/ireland" element={<DestinationDetail slug="ireland" />} />
    <Route path="/singapore" element={<DestinationDetail slug="singapore" />} />
    <Route path="/france" element={<DestinationDetail slug="france" />} />
    <Route path="/italy" element={<DestinationDetail slug="italy" />} />
    <Route path="/europe" element={<DestinationDetail slug="europe" />} />
    <Route path="/course/:slug" element={<CourseDetail />} />
    <Route path="/undergraduate" element={<CourseDetail slug="undergraduate" />} />
    <Route path="/postgraduate" element={<CourseDetail slug="postgraduate" />} />
    <Route path="/mba" element={<CourseDetail slug="mba" />} />
    <Route path="/phd" element={<CourseDetail slug="phd" />} />
    <Route path="/diploma" element={<CourseDetail slug="diploma" />} />
    <Route path="/language" element={<CourseDetail slug="language" />} />
    <Route
      path="/arizona-state-university"
      element={<ArizonaStateUniversity />}
    />
    <Route path="/service/:slug" element={<ServiceDetail />} />
    <Route path="/service-details" element={<ServiceDetails />} />
    <Route path="/country-details" element={<CountryDetails />} />
    <Route path="/university/:slug" element={<UniversityDetail />} />
    <Route path="/university-details" element={<UniversityDetails />} />
    <Route path="/success-story/:slug" element={<SuccessDetails />} />
    <Route path="/success-story-details" element={<SuccessDetails />} />
    <Route path="/blog" element={<BlogDetails />} />
    <Route path="/blog/:slug" element={<BlogArticleDetail />} />
    <Route path="/blog-details" element={<BlogDetails />} />
    <Route path="/course-details" element={<CourseDetails />} />
    <Route path="/partner-details" element={<PartnerDetails />} />
    <Route path="/lead-generation" element={<LeadGeneration />} />
    <Route path="/inquiry-form" element={<InquiryForm />} />
    <Route path="/thank-you" element={<ThankYou />} />
    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  </Route>

</Routes>

  );
}
