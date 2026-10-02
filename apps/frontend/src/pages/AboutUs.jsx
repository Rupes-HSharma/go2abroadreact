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

      {/* Additional About content — existing sections above remain unchanged */}
      <section className="go2about-extra">
        <div className="go2about-wrap">
          <div className="go2about-hero-grid">
            <div>
              <h2 className="go2about-display">Going abroad should never cost you a rupee to get started.</h2>
              <p className="go2about-lead">
                We are Go2Abroad, a small, close team that walks beside students and their families from the very first
                "Can I really do this?" to the day you land in your new city. Every step, free of charge.
              </p>
              <div className="go2about-actions">
                <a className="go2about-btn" href="#go2about-contact">Talk to a counsellor</a>
                <a className="go2about-btn go2about-btn-outline" href="#go2about-story">Read our story</a>
              </div>
            </div>
            <div className="go2about-side-card">
              <span className="go2about-kicker">Our promise</span>
              <h3>Guidance that puts students first.</h3>
              <p>
                Honest support from counselling and applications to visa preparation and your first days abroad — with no consultancy fee for students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="go2about-extra go2about-soft" id="go2about-story">
        <div className="go2about-wrap">
          <div className="go2about-two-col">
            <div>
              <span className="go2about-kicker">Our story</span>
              <h2>It started with a question we couldn't ignore</h2>
            </div>
            <div>
              <p>
                Every year, brilliant students give up on studying abroad. Not because they lack talent, but because the process feels expensive, confusing, and full of people who want money before they offer answers.
              </p>
              <p>
                We watched families take loans just to pay consultancy fees, and students submit applications they didn't fully understand. We kept thinking: <em>this doesn't have to be the way it works.</em>
              </p>
              <blockquote className="go2about-quote">“A student's dream shouldn't have a price tag before it even begins.”</blockquote>
              <p>
                So we built Go2Abroad on one simple promise: guidance that costs students nothing. Not a free first call followed by a bill. Nothing at all, from beginning to end.
              </p>
            </div>
          </div>

          <div className="go2about-promise">
            <div>
              <span className="go2about-kicker">Zero-fee promise</span>
              <h3>Advice that is honest, even when it isn't the easy sell.</h3>
            </div>
            <p>
              You will never be asked to pay us for counselling, applications, SOP support, visa help, or anything else on this page. We believe the right university for you should be chosen because it fits your goals, not because of what a service costs.
            </p>
          </div>
        </div>
      </section>

      <section className="go2about-extra">
        <div className="go2about-wrap">
          <div className="go2about-section-head">
            <span className="go2about-kicker">What we handle</span>
            <h2>Everything you need, handled with care</h2>
            <p>Studying abroad has a lot of moving parts. We take them on together, so you don't have to figure it out alone at midnight.</p>
          </div>
          <div className="go2about-card-grid">
            <article><h3>Honest counselling</h3><p>One-to-one conversations about your goals, budget, and worries, before we suggest a single course.</p></article>
            <article><h3>Portfolio building</h3><p>We help you discover and shape the achievements that make your profile stand out.</p></article>
            <article><h3>SOP writing</h3><p>Your story, in your voice. We guide you until it sounds like you at your best.</p></article>
            <article><h3>Application submission</h3><p>Carefully checked, on time, and tracked, so nothing slips through the cracks.</p></article>
            <article><h3>Visa assistance</h3><p>Clear checklists, document reviews, and interview preparation to help you feel ready and calm.</p></article>
            <article><h3>Accommodation</h3><p>Help finding a safe, comfortable place to call home before you arrive.</p></article>
            <article><h3>Alumni networking</h3><p>Connections with students who have already made the move and remember how it felt.</p></article>
          </div>
        </div>
      </section>

      <section className="go2about-extra go2about-soft">
        <div className="go2about-wrap">
          <div className="go2about-two-col go2about-destinations">
            <div>
              <span className="go2about-kicker">Study destinations</span>
              <h2>Where we can take you</h2>
              <p>Whether you dream of a campus in London or a medical degree that fits your family's budget, we know these paths well.</p>
            </div>
            <div>
              <h3>Study destinations</h3>
              <div className="go2about-pills">
                {['United Kingdom','United States','Canada','Australia','Ireland','New Zealand','Dubai'].map((item) => <span key={item}>{item}</span>)}
              </div>
              <h3 className="go2about-subhead">MBBS programmes</h3>
              <div className="go2about-pills go2about-pills-med">
                {['Russia','Georgia','Kyrgyzstan','Kazakhstan'].map((item) => <span key={item}>{item}</span>)}
              </div>
              <p>For future doctors, we explain recognition, curriculum, living costs, and student life plainly, so you and your parents can decide with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="go2about-extra">
        <div className="go2about-wrap">
          <div className="go2about-section-head">
            <span className="go2about-kicker">Our process</span>
            <h2>How we walk with you</h2>
          </div>
          <div className="go2about-steps">
            <article><span>01</span><div><h3>We listen first</h3><p>A relaxed conversation about who you are, what you want, and what worries you.</p></div></article>
            <article><span>02</span><div><h3>We shape your profile</h3><p>Together we build your portfolio and write an SOP that is honest and memorable.</p></div></article>
            <article><span>03</span><div><h3>We apply, you stay informed</h3><p>We submit your applications and keep you updated at every stage.</p></div></article>
            <article><span>04</span><div><h3>We prepare you for the visa</h3><p>Documents, interview practice, and reassurance until you feel ready.</p></div></article>
            <article><span>05</span><div><h3>We help you land softly</h3><p>Accommodation, a welcoming alumni community, and someone to call when you arrive.</p></div></article>
          </div>
        </div>
      </section>

      <section className="go2about-extra go2about-soft">
        <div className="go2about-wrap">
          <div className="go2about-two-col">
            <div>
              <span className="go2about-kicker">Our team</span>
              <h2>The small team behind your big move</h2>
              <p>We are a team of six. That means when you message us, you talk to real people who know your name, your story, and your deadlines. You are never a file number.</p>
            </div>
            <div className="go2about-values">
              <article><h3>Honesty</h3><p>If a university, course, or country isn't right for you, we will tell you.</p></article>
              <article><h3>Respect for families</h3><p>We know this is a decision for the whole family, and we treat it that way.</p></article>
              <article><h3>Students first</h3><p>Your success is the only measure we care about.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="go2about-extra" id="go2about-contact">
        <div className="go2about-wrap">
          <div className="go2about-cta">
            <div>
              <span className="go2about-kicker">Let's get started</span>
              <h2>Ready to start? It's free, and always will be.</h2>
            </div>
            <div>
              <p>Tell us where you're at. Even if you don't know your course or country yet, we'll figure it out together.</p>
              <a className="go2about-btn" href="#go2about-contact">Book a free counselling session</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
