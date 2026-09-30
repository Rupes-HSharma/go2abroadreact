import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { submitContactForm } from "../../utils/submitContactForm";
import "./pending-pages.css";

const DATA = {
  service: {
    title: "Study Abroad Services",
    intro: "Get end-to-end guidance for your international education journey, from profile evaluation and university selection to visa and post-arrival support.",
    items: ["Profile Evaluation", "University Shortlisting", "Scholarship Guidance", "SOP & LOR Writing", "Visa Assistance", "Education Loan Assistance", "Accommodation Assistance", "Post-Arrival Support"],
  },
  country: {
    title: "Study Abroad Destinations",
    intro: "Explore popular study destinations, admission requirements, tuition, scholarships, visa information and student support options.",
    items: ["USA", "UK", "Canada", "Australia", "New Zealand", "Germany", "Ireland", "Singapore"],
  },
  university: {
    title: "University Details",
    intro: "Explore university profiles, popular programs, admissions, fees, scholarships and application information.",
    items: ["University overview", "Programs & intakes", "Entry requirements", "Tuition & living costs", "Scholarships", "Application process"],
  },
  success: {
    title: "Student Success Stories",
    intro: "Explore student journeys, application milestones and study-abroad experiences supported by Go2Abroad.",
    items: ["Student journey", "University selection", "Application support", "Visa journey", "Arrival & transition"],
  },
  blog: {
    title: "Study Abroad Blog",
    intro: "Practical guides and updates for students planning to study abroad.",
    items: ["Application guides", "Visa guidance", "Scholarships", "Country guides", "University updates", "Student tips"],
  },
  course: {
    title: "Courses Abroad",
    intro: "Find course pathways across undergraduate, postgraduate, MBA, doctorate and professional programs.",
    items: ["Undergraduate", "Postgraduate", "MBA & Management", "PhD & Doctorate", "Diploma", "English Language"],
  },
  partners: {
    title: "Our Partners",
    intro: "Learn more about the organisations and service partners supporting students throughout their study-abroad journey.",
    items: ["Education finance", "Banking partners", "International lenders", "Student support", "Accommodation", "Travel & forex"],
  },
};

function PageHeader({ title, intro }) {
  return (
    <section className="pending-hero">
      <div className="container">
        <span className="pending-eyebrow">GO2ABROAD</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

function DetailPage({ type }) {
  const location = useLocation();
  const data = DATA[type] || DATA.service;

  useEffect(() => {
    document.title = `${data.title} | Go2Abroad`;
    window.scrollTo(0, 0);
  }, [data.title, location.pathname]);

  return (
    <>
      <PageHeader title={data.title} intro={data.intro} />
      <main className="pending-page">
        <div className="container">
          <div className="row g-4">
            {data.items.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={item}>
                <article className="pending-card">
                  <span className="pending-number">{String(index + 1).padStart(2, "0")}</span>
                  <h2>{item}</h2>
                  <p>Get clear information, eligibility guidance and next steps for {item.toLowerCase()}.</p>
                  <Link to="/inquiry-form" className="pending-link">Enquire Now <span>→</span></Link>
                </article>
              </div>
            ))}
          </div>
          <div className="pending-cta">
            <div>
              <span className="pending-eyebrow">NEED HELP?</span>
              <h2>Talk to our study-abroad team</h2>
              <p>Share your requirements and our team can help you plan the next step.</p>
            </div>
            <Link className="btn pending-btn" to="/inquiry-form">Start an Enquiry</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export function ServiceDetails() { return <DetailPage type="service" />; }
export function CountryDetails() { return <DetailPage type="country" />; }
export function UniversityDetails() { return <DetailPage type="university" />; }
export function SuccessDetails() { return <DetailPage type="success" />; }
export function BlogDetails() { return <DetailPage type="blog" />; }
export function CourseDetails() { return <DetailPage type="course" />; }
export function PartnerDetails() { return <DetailPage type="partners" />; }

export function LeadGeneration() {
  return <FormPage title="Free Study Abroad Consultation" description="Tell us about your study plans and we will help you understand the next steps." source="Google Campaign" />;
}

export function InquiryForm() {
  return <FormPage title="Inquiry Form" description="Share your requirements and our team will get in touch with you." source="Website Inquiry" />;
}

function FormPage({ title, description, source }) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setError("");
    try {
      await submitContactForm(form);
      const values = Object.fromEntries(new FormData(form).entries());
      sessionStorage.setItem("go2abroad_lead", JSON.stringify({ ...values, source, submittedAt: new Date().toISOString() }));
      navigate("/thank-you");
    } catch (submissionError) {
      setError(submissionError.message || "Unable to submit the enquiry right now.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = `${title} | Go2Abroad`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <main className="pending-form-page">
      <div className="container">
        <div className="pending-form-shell">
          <div className="pending-form-copy">
            <span className="pending-eyebrow">GO2ABROAD</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <ul>
              <li>Profile and course guidance</li>
              <li>Destination and university options</li>
              <li>Application and visa support</li>
            </ul>
          </div>
          <form className="pending-form" onSubmit={handleSubmit}>
            <input type="hidden" name="source" value={source} />
            <label>Full Name<input name="name" required autoComplete="name" /></label>
            <label>Email Address<input type="email" name="email" required autoComplete="email" /></label>
            <label>Phone Number<input name="phone" required inputMode="tel" autoComplete="tel" /></label>
            <label>Preferred Destination<input name="destination" placeholder="USA, UK, Canada..." /></label>
            <label>Interested Course<input name="course" placeholder="Bachelor's, Master's, MBA..." /></label>
            <label>Message<textarea name="message" rows="4" /></label>
            {error && <div className="pending-form-error" role="alert">{error}</div>}
            <button className="btn pending-btn" type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit Enquiry"}</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export function ThankYou() {
  useEffect(() => {
    document.title = "Thank You | Go2Abroad";
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="pending-thankyou">
      <div className="container">
        <div className="thankyou-card">
          <div className="thank-icon">✓</div>
          <span className="pending-eyebrow">SUBMISSION RECEIVED</span>
          <h1>Thank you for contacting us</h1>
          <p>Your enquiry has been received. Our team will review the details and contact you using the information provided.</p>
          <Link className="btn pending-btn" to="/">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
