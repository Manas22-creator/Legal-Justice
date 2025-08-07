// src/pages/About.jsx
import React from 'react';


// Import Common Components
import Hero from '../components/common/Hero';
import CTASection from '../components/common/CTASection';
import SectionTitle from '../components/common/SectionTitle';

// Import Reusable & Page-Specific Components
import ExpertiseCard from '../components/home/ExpertiseCard'; // Reusing this!
import QualificationsCard from '../components/about/QualificationsCard';

// Import Assets
import aboutHero from '../assets/images/about-hero.jpg';

const About = () => {
  const coreValuesData = [
    { iconClass: 'fa-solid fa-scale-unbalanced', title: 'Integrity', description: 'We conduct ourselves with the highest ethical standards, ensuring transparency and honesty in all our interactions.' },
    { iconClass: 'fa-solid fa-trophy', title: 'Excellence', description: 'We strive for excellence in every case, continuously honing our skills and staying current with legal developments.' },
    { iconClass: 'fa-solid fa-handshake-angle', title: 'Client-Focus', description: "Our clients' needs come first. We listen, understand, and work tirelessly to achieve the best possible outcomes for them." },
  ];

  const qualificationsData = [
    { iconClass: 'fas fa-graduation-cap', title: 'Education & Certifications', items: ['Juris Doctor (J.D) from Harvard Law School', 'Licensed to practice in multiple states', 'Board Certified in Criminal Law', 'Member of American Bar Association'] },
    { iconClass: 'fas fa-award', title: 'Awards & Recognition', items: ['"Top Attorney" by Legal Excellence Magazine (2023)', "Client's Choice Award for 5 consecutive years", 'Outstanding Service Award from State Bar', 'Featured speaker at legal conferences'] },
  ];
  
  return (
    <>
     
        <title>About Us - LegalAdvocate</title>
        <meta name="description" content="Learn about LegalAdvocate's story, our core values of integrity and excellence, and our unwavering commitment to client success." />
      
      
      <Hero
        title="About LegalAdvocate"
        subtitle="Dedicated to providing exceptional legal representation with integrity, expertise, and unwavering commitment to our clients' success."
        bgImage={aboutHero}
      />
      
      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>From its humble beginnings, LegalAdvocate has grown from a small practice to one of the region's most trusted legal firms. Our journey began with a simple mission: to provide client-focused, results-driven advocacy for everyone.</p>
              <p>What sets us apart is our commitment to understanding each client's unique situation and crafting tailored strategies to achieve their specific goals. We believe that every individual and business deserves access to quality legal representation.</p>
              <p>Today, with over 500 successful cases and a 98% success rate, we continue to uphold the highest standards of legal excellence while maintaining the personal touch that our clients value most.</p>
            </div>
            {/* The image from the original design would go here. For simplicity, we'll omit it, but you could add an <img /> tag. */

               <div class="about-stats">
                        <div class="about-stat-item">
                            <div class="icon"><i class="fa-solid fa-users"></i></div>
                            <div class="number">500+</div>
                            <div class="label">Happy Clients</div>
                        </div>
                        <div class="about-stat-item">
                            <div class="icon"><i class="fa-solid fa-scale-balanced"></i></div>
                            <div class="number">98%</div>
                            <div class="label">Success Rate</div>
                        </div>
                        <div class="about-stat-item">
                            <div class="icon"><i class="fa-solid fa-business-time"></i></div>
                            <div class="number">15+</div>
                            <div class="label">Years Experience</div>
                        </div>
                        <div class="about-stat-item">
                            <div class="icon"><i class="fa-solid fa-star"></i></div>
                            <div class="number">4.9</div>
                            <div class="label">Average Rating</div>
                        </div>
                    </div>
              
            }
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle 
            title="Our Core Values"
            subtitle="The principles that guide every decision we make and every case we handle."
          />
          <div className="card-grid core-values">
            {coreValuesData.map((value, index) => (
              <ExpertiseCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Professional Qualifications Section */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Professional Qualifications"
            subtitle="Our extensive education and certifications ensure you receive expert legal representation."
          />
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
            {qualificationsData.map((qual, index) => (
              <QualificationsCard key={index} {...qual} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work Together?"
        subtitle="Experience the difference that dedicated, experienced legal representation can make for your case."
        primaryBtnText="Schedule Consultation"
        primaryBtnLink="/contact"
        secondaryBtnText="Read Client Stories"
        secondaryBtnLink="/testimonials"
      />
    </>
  );
};


export default About;
