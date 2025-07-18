// src/pages/Home.jsx
import React from 'react';

import { Link } from 'react-router-dom';

// Import Common Components
import Hero from '../components/common/Hero';
import CTASection from '../components/common/CTASection';
import SectionTitle from '../components/common/SectionTitle';

// Import Home-Specific Components
import StatsBar from '../components/home/StatsBar';
import ExpertiseCard from '../components/home/ExpertiseCard';

// Import Reusable Components
import TestimonialCard from '../components/testimonials/TestimonialCard';

// Import Assets
import heroBg from '../assets/images/hero-bg.jpg';
import clientSarah from '../assets/images/client-sarah.jpeg';
import clientMichael from '../assets/images/client-michael.jpeg';
import clientEmily from '../assets/images/client-emily.jpeg';

const Home = () => {
  // Data for expertise cards
  const expertiseData = [
    { iconClass: 'fa-solid fa-gavel', title: 'Civil Law', description: 'Property disputes, personal injury, contract issues, and civil litigation with expert representation.', linkTo: '/services' },
    { iconClass: 'fa-solid fa-user-lock', title: 'Criminal Defense', description: 'DUI, assault, theft, and serious felony charges are handled with aggressive advocacy.', linkTo: '/services' },
    { iconClass: 'fa-solid fa-users', title: 'Family Law', description: 'Divorce, custody, adoption, and other family matters require compassion and expertise.', linkTo: '/services' },
    { iconClass: 'fa-solid fa-building', title: 'Corporate Law', description: 'Business formation, contracts, compliance, and litigation for companies of all sizes.', linkTo: '/services' },
  ];

  // Data for testimonials
  const testimonialsData = [
    { image: clientSarah, name: 'Sarah Johnson', role: 'Business Executive', text: "Exceptional corporate law expertise. Guided us through a complex merger with professionalism and attention to detail that secured our company's future.", tag: 'Corporate Law', rating: 5 },
    { image: clientMichael, name: 'Michael Rodriguez', role: 'Small Business Owner', text: 'Defended my business against false accusations with remarkable skill. The case was dismissed, and my reputation was restored. A true legal warrior.', tag: 'Criminal Defense', rating: 5 },
    { image: clientEmily, name: 'Emily Chen', role: 'Working Mother', text: "Compassionate and thorough handling of my divorce proceedings. Protected my children's interests while ensuring a fair settlement. I couldn't have asked for better representation.", tag: 'Family Law', rating: 5 },
  ];

  return (
    <>
     
        <title>LegalAdvocate - Expert Legal Advocacy</title>
        <meta name="description" content="With over 15 years of experience and 500+ successful cases, we provide exceptional legal representation across civil, criminal, family, and corporate law." />
      

      {/* Hero Section */}
      <Hero 
        title="Expert Legal Advocacy You Can Trust"
        subtitle="With over 15 years of experience and 500+ successful cases, we provide exceptional legal representation across civil, criminal, family, and corporate law."
        bgImage={heroBg}
      >
        <Link to="/contact" className="btn btn-primary">Get Free Consultation</Link>
        <Link to="/services" className="btn btn-secondary">Our Services</Link>
        <StatsBar />
      </Hero>

      {/* Areas of Expertise Section */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Areas of Expertise"
            subtitle="Comprehensive legal services across multiple practice areas with proven track record of success."
          />
          <div className="card-grid">
            {expertiseData.map((item, index) => (
              <ExpertiseCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle 
            title="Client Success Stories"
            subtitle="Read what our clients have to say about our legal services and successful outcomes."
          />
          <div className="card-grid">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/testimonials" className="btn btn-dark">View All Testimonials</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Need Legal Assistance?"
        subtitle="Don't wait. Get the expert legal representation you deserve. Contact us today for a free consultation."
        primaryBtnText="Schedule Free Consultation"
        primaryBtnLink="/contact"
        secondaryBtnText="Learn About Us"
        secondaryBtnLink="/about"
      />
    </>
  );
};

export default Home;