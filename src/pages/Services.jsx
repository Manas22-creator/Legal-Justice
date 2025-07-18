// src/pages/Services.jsx
import React from 'react';


// Import Common Components
import Hero from '../components/common/Hero';
import CTASection from '../components/common/CTASection';
import SectionTitle from '../components/common/SectionTitle';

// Import Services-Specific Components
import ServiceItem from '../components/services/ServiceItem';
import LegalProcess from '../components/services/LegalProcess';
import FaqItem from '../components/services/FaqItem';

// Import Assets
import servicesHero from '../assets/images/services-hero.jpg';

const Services = () => {
  const servicesData = [
    { iconClass: 'fas fa-gavel', title: 'Civil Law', description: 'Comprehensive civil litigation and dispute resolution services.', services: ['Injury Claims', 'Property Disputes', 'Contract Litigation', 'Consumer Protection', 'Negligence Cases'] },
    { iconClass: 'fas fa-user-lock', title: 'Criminal Defense', description: 'Aggressive defense for all criminal charges and investigations.', services: ['DUI/DWI Defense', 'Assault & Battery', 'Theft & Burglary', 'Drug Offenses', 'White Collar Crimes', 'Juvenile Defense'] },
    { iconClass: 'fas fa-users', title: 'Family Law', description: 'Compassionate legal guidance for family-related matters.', services: ['Divorce Proceedings', 'Child Custody', 'Alimony & Support', 'Adoption Services', 'Domestic Violence', 'Prenuptial Agreements'] },
    { iconClass: 'fas fa-building', title: 'Corporate Law', description: 'Strategic legal counsel for businesses of all sizes.', services: ['Business Formation', 'Contract Negotiation', 'Mergers & Acquisitions', 'Intellectual Property', 'Corporate Compliance', 'Employment Law'] },
  ];

  const faqData = [
    { question: 'How much do your legal services cost?', answer: 'Costs vary depending on the complexity of the case. We offer free initial consultations and transparent pricing. Many cases are handled on a contingency basis, meaning you only pay if we win.' },
    { question: 'How long will my case take?', answer: 'Case duration varies significantly based on complexity, court schedules, and negotiation requirements. We\'ll provide a realistic timeline for your specific circumstances during the consultation.' },
    { question: 'Do you handle cases outside your local area?', answer: 'Yes, we are licensed to practice in multiple states and can handle cases across various jurisdictions. We also work with a network of trusted attorneys for specialized local representation.' },
    { question: 'What should I bring to my consultation?', answer: 'Bring any relevant documents, police reports, correspondence, evidence, and a timeline of events. The more information you provide, the better we can assess your case and provide accurate advice.' },
  ];

  return (
    <>
     
        <title>Legal Services - LegalAdvocate</title>
        <meta name="description" content="Explore our comprehensive legal services in Civil Law, Criminal Defense, Family Law, and Corporate Law. See our process and get answers to your questions." />
     
      
      {/* Hero Section */}
      <Hero
        title="Legal Services"
        subtitle="Comprehensive legal representation across practice areas with proven expertise and unwavering commitment to client success."
        bgImage={servicesHero}
      >
        <div className="services-stats-bar">
          <div className="stat-item"><div className="number">500+</div><div className="label">Cases Handled</div></div>
          <div className="stat-item"><div className="number">98%</div><div className="label">Success Rate</div></div>
          <div className="stat-item"><div className="number">24/7</div><div className="label">Support</div></div>
        </div>
      </Hero>

      {/* Services Grid Section */}
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {servicesData.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Legal Process Section */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle 
            title="Our Legal Process"
            subtitle="A streamlined approach that ensures you receive the best possible legal representation."
          />
          <LegalProcess />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Common questions about our legal services and processes."
          />
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <FaqItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Need Legal Assistance?"
        subtitle="Don't face legal challenges alone. Get expert representation from attorneys who are committed to your success."
        primaryBtnText="Free Consultation"
        primaryBtnLink="/contact"
        secondaryBtnText="Call (555) 123-4567"
        secondaryBtnLink="tel:555-123-4567"
      />
    </>
  );
};

export default Services;