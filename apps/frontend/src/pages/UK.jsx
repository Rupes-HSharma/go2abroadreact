import { useEffect } from "react";
import { Link } from "react-router-dom";
import ModernInnerHero from "../components/ModernInnerHero";

const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export default function UK() {
  useEffect(() => { document.title = "Study in the UK | Go2Abroad"; window.scrollTo(0, 0); }, []);

  return (
    <main className="g2-uk-page">
      <ModernInnerHero
        eyebrow="🇬🇧 STUDY IN THE UK"
        title="Your UK story can start here, and it won't cost you a fee."
        intro="From your first campus shortlist to your first cup of tea in a new city, we guide you personally through every step of studying in the United Kingdom."
        image="/images/service-image-5.png"
        imageAlt="Study in the United Kingdom"
        badge="Study in the UK"
        primaryLabel="Talk to a UK counsellor"
        secondaryLabel="See the real costs"
        secondaryTo="#costs"
        meta={["Free counselling", "UK university matching", "Visa support"]}
        themeKey="uk"
      />

      <section className="g2-detail-section"><div className="container">
        <div className="g2-detail-heading"><span>WHY STUDENTS CHOOSE THE UK</span><h2>Why so many students choose the UK</h2><p>The UK has a long reputation for academic rigour, and many of its degrees are shorter than those in other countries, so you can graduate sooner and spend less on living costs. Just as important, you'll study alongside students from all over the world.</p></div>
        <div className="g2-detail-grid">
          <article className="g2-detail-card"><b>01</b><h3>Shorter degrees</h3><p>Most bachelor's courses run three years and most master's courses one year.</p></article>
          <article className="g2-detail-card"><b>02</b><h3>Globally recognised</h3><p>UK qualifications are respected by employers and universities around the world.</p></article>
          <article className="g2-detail-card"><b>03</b><h3>Room to work</h3><p>Students on degree-level courses can usually work part-time during term, within visa limits.</p></article>
          <article className="g2-detail-card"><b>04</b><h3>Life after study</h3><p>The Graduate Route lets eligible students stay on to work or look for work after graduating.</p></article>
        </div>
      </div></section>

      <section className="g2-detail-section g2-detail-soft"><div className="container"><div className="g2-detail-promise"><span>WHAT WE DO FOR FREE, AS ALWAYS</span><h2>Our zero-fee support</h2><p>Course and university shortlisting, portfolio building, SOP writing, application submission, visa assistance, accommodation help, and alumni networking. You pay the university and the government fees listed below. You never pay us.</p></div></div></section>

      <section id="costs" className="g2-detail-section"><div className="container"><div className="g2-detail-heading"><span>COST PLANNING</span><h2>The numbers, without surprises</h2><p>We'd rather you know the costs now than be shocked later. These are the current student visa figures. Rules change, so we confirm the latest with you before you apply.</p></div><div className="g2-uk-table-wrap"><table><tbody><tr><th>What</th><th>Amount</th></tr><tr><td>Student visa application fee</td><td>£558</td></tr><tr><td>Immigration Health Surcharge (NHS access)</td><td>£776 per year of visa</td></tr><tr><td>Living funds to show: London</td><td>£1,529 per month, up to 9 months</td></tr><tr><td>Living funds to show: outside London</td><td>£1,171 per month, up to 9 months</td></tr></tbody></table></div><p className="g2-uk-note">Plus your first year's tuition. Your funds must normally be held for 28 consecutive days before you apply. Always check gov.uk/student-visa for the latest figures.</p></div></section>

      <section className="g2-detail-section g2-detail-soft"><div className="container"><div className="g2-detail-heading"><span>OUR PROCESS</span><h2>How we take you from dream to departure</h2></div><ol className="g2-detail-steps"><li><b>01</b><div><h3>A real conversation</h3><p>We learn about your grades, budget, career goals, and family's hopes, then suggest courses that truly fit.</p></div></li><li><b>02</b><div><h3>A shortlist you understand</h3><p>Universities, entry requirements, scholarships, and intakes (usually September and January) explained plainly.</p></div></li><li><b>03</b><div><h3>Your profile and SOP</h3><p>We help you build your portfolio and write a personal statement that sounds like you.</p></div></li><li><b>04</b><div><h3>Applications and offers</h3><p>We submit, track, and update you, and help you compare offers before you decide.</p></div></li><li><b>05</b><div><h3>Visa and funds</h3><p>Checklists, document reviews, and interview preparation, so nothing is left to chance.</p></div></li><li><b>06</b><div><h3>Landing softly</h3><p>Accommodation support and a connection to Go2Abroad alumni already living in the UK.</p></div></li></ol></div></section>

      <section className="g2-detail-section"><div className="container"><div className="g2-detail-heading"><span>FREQUENT QUESTIONS</span><h2>Questions families ask us most</h2></div><div className="g2-faq-grid"><details><summary>Can I work while I study?</summary><p>Most students on degree-level courses can work part-time during term and full-time in holidays, within the limits of their visa. We'll explain your exact conditions when you receive your offer.</p></details><details><summary>Can I stay after my degree?</summary><p>Eligible graduates can apply for the Graduate Route to work or look for work. The length of stay has been under review, so we always share the latest rule at the time you apply.</p></details><details><summary>Can my family come with me?</summary><p>Most students on taught courses can't bring dependants. There are exceptions, such as some research degrees. We'll check your situation honestly.</p></details><details><summary>Is it really free to work with you?</summary><p>Yes. We don't charge students for any part of our service, from counselling through to visa support.</p></details></div></div></section>

      <section id="contact" className="g2-detail-cta"><div className="container"><h2>Let's find your place in the UK.</h2><p>Tell us your course, your budget, or just your dream. We'll take it from there.</p><Link className="sis-btn-default" to="/contact">Book a free counselling session <i className="fa-solid fa-arrow-right-long" /></Link></div></section>
      <p className="g2-uk-note g2-uk-bottom-note">Add your real contact details, partner university logos, and student stories before publishing.</p>
    </main>
  );
}
