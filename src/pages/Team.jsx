// src/pages/Team.jsx
import React from 'react';


// Import Common Components
import Hero from '../components/common/Hero';
import CTASection from '../components/common/CTASection';
import SectionTitle from '../components/common/SectionTitle';

// Import Team-Specific Components
import AttorneyCard from '../components/team/AttorneyCard';
import ExpertiseCard from '../components/home/ExpertiseCard'; // Reusing this component!

// Import Assets
import teamHero from '../assets/images/team-hero.jpg';
import attorneyJohn from '../assets/images/attorney-john.jpeg';
import attorneySarah from '../assets/images/attorney-sarah.jpeg';
import attorneyMichael from '../assets/images/attorney-michael.jpeg';
import attorneyEmily from '../assets/images/attorney-emily.jpeg';

const Team = () => {
  // Data for the attorneys
  const teamData = [
    {
      image: attorneyJohn,
      name: 'John Mitchell',
      title: 'Founding Partner | Corporate & Civil Law',
      bio: 'John founded LegalAdvocate with a vision to provide exceptional legal representation. He has over 20 years of experience in complex corporate transactions and high-stakes criminal defense cases.',
      achievements: ['Juris Doctor (J.D) from Harvard Law School', 'Top Attorney Award 2023', 'Former prosecutor with 98% conviction rate'],
      contact: { email: 'john@legaladvocate.com', phone: '555-123-4567', linkedin: '#' }
    },
    {
      image: attorneySarah,
      name: 'Sarah Johnson',
      title: 'Partner | Family & Civil Law',
      bio: "Sarah brings compassion and expertise to family law matters while also being a formidable litigator. She's known for her empathetic approach and strategic thinking.",
      achievements: ["Juris Doctor (J.D) from Stanford Law School", "Client's Choice Award 5 years running", "Certified Family Law Specialist", "300+ successful family law cases"],
      contact: { email: 'sarah@legaladvocate.com', phone: '555-123-4567', linkedin: '#' }
    },
    // Adding the others for completeness
    {
      image: attorneyMichael,
      name: 'Michael Rodriguez',
      title: 'Associate | Criminal Defense & Personal Injury',
      bio: "Michael is a passionate advocate for the wrongly accused and injured. His aggressive courtroom tactics and attention to detail have earned him a reputation in criminal defense.",
      achievements: ["Rising Star Award 2022", "150+ criminal defense cases"],
      contact: { email: 'michael@legaladvocate.com', phone: '555-123-4567', linkedin: '#' }
    },
     {
      image: attorneyEmily,
      name: 'Emily Davis',
      title: 'Associate | Corporate & Business Law',
      bio: "Emily focuses on protecting workers' rights and helping businesses navigate complex employment regulations. She's an expert in workplace discrimination and wage disputes.",
      achievements: ["Employment Law Excellence Award", "100+ employment law victories"],
      contact: { email: 'emily@legaladvocate.com', phone: '555-123-4567', linkedin: '#' }
    }
  ];

  // Data for the "Why Choose Us" section
  const whyChooseUsData = [
    { iconClass: 'fa-solid fa-users-gear', title: 'Collaborative Approach', description: 'Our attorneys work together, sharing their expertise to provide comprehensive legal solutions for complex cases.' },
    { iconClass: 'fa-solid fa-award', title: 'Proven Excellence', description: 'Our team holds numerous awards and industry recognition for their outstanding legal work and client service.' },
    { iconClass: 'fa-solid fa-hand-holding-heart', title: 'Client-Focused', description: 'Every strategy is tailored to our clients\' best interests, ensuring personalized attention and effective solutions.' },
  ];

  return (
    <>
     
        <title>Our Team - LegalAdvocate</title>
        <meta name="description" content="Meet the experienced attorneys at LegalAdvocate. Our diverse team brings decades of combined legal expertise to every case." />
    

      {/* Hero Section */}
      <Hero
        title="Our Legal Team"
        subtitle="Meet the experienced attorneys who will fight for your rights and protect your interests. Our diverse team brings decades of combined legal expertise to every case."
        bgImage={teamHero}
      />
      
      {/* Meet Our Attorneys Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Meet Our Attorneys"
            subtitle="Each member of our team brings unique expertise and unwavering commitment to achieving the best outcomes for our clients."
          />
          <div className="attorneys-list" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {teamData.map((attorney, index) => (
              <AttorneyCard key={index} attorney={attorney} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team Section */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Why Choose Our Team"
            subtitle="What sets our legal team apart in providing exceptional representation."
          />
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {whyChooseUsData.map((item, index) => (
              <ExpertiseCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Ready to Work With Our Team?"
        subtitle="Our experienced attorneys are ready to provide the expert legal representation you need. Contact us today to schedule a consultation."
        primaryBtnText="Schedule Consultation"
        primaryBtnLink="/contact"
        secondaryBtnText="View Our Services"
        secondaryBtnLink="/services"
      />
    </>
  );
};

export default Team;