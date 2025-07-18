// src/pages/Testimonials.jsx
import React, { useState } from 'react';


// Import Common Components
import Hero from '../components/common/Hero';
import CTASection from '../components/common/CTASection';
import SectionTitle from '../components/common/SectionTitle';

// Import Testimonial-Specific Components
import TestimonialCard from '../components/testimonials/TestimonialCard';
import FilterControls from '../components/testimonials/FilterControls';

// Import Assets
import heroBg2 from '../assets/images/hero-bg-2.jpg';
import clientSarah from '../assets/images/client-sarah.jpeg';
import clientMichael from '../assets/images/client-michael.jpeg';
import clientEmily from '../assets/images/client-emily.jpeg';
import clientRobert from '../assets/images/client-robert.jpeg';
import clientDavid from '../assets/images/client-david.jpeg';
import clientJessica from '../assets/images/client-jessica.jpeg';

const Testimonials = () => {
  // --- STATE MANAGEMENT ---
  // useState hook to manage the active filter category. 'all' is the default.
  const [activeFilter, setActiveFilter] = useState('all');

  const allTestimonialsData = [
    { image: clientSarah, name: 'Sarah Johnson', role: 'Business Executive', text: 'Exceptional corporate law expertise. Guided us through a complex merger with professionalism and attention to detail.', tag: 'Corporate Law', category: 'corporate' },
    { image: clientMichael, name: 'Michael Rodriguez', role: 'Small Business Owner', text: 'Defended my business against false accusations... The case was dismissed, and my reputation was restored.', tag: 'Criminal Defense', category: 'criminal' },
    { image: clientEmily, name: 'Emily Chen', role: 'Teacher', text: 'Compassionate and thorough handling of my divorce proceedings while ensuring fair settlement.', tag: 'Family Law', category: 'family' },
    { image: clientRobert, name: 'Robert Smith', role: 'Retired Engineer', text: 'Outstanding property dispute resolution. Achieved a favorable outcome in a complex boundary dispute case.', tag: 'Civil Law', category: 'civil' },
    { image: clientDavid, name: 'David Wilson', role: 'Software Developer', text: 'Expertly handled my DUI case. Clear communication and dedication got me the best possible outcome. Highly recommended.', tag: 'Criminal Defense', category: 'criminal' },
    { image: clientJessica, name: 'Jessica Martinez', role: 'Teacher', text: "Compassionate approach to my custody case. They fought tirelessly to protect my children's best interests.", tag: 'Family Law', category: 'family' },
  ];

  const filterCategories = ['all', 'civil', 'criminal', 'family', 'corporate'];

  // --- DERIVED STATE ---
  // Filter the testimonials based on the activeFilter state.
  // This is a core React concept: derive what you render from your state.
  const filteredTestimonials = allTestimonialsData.filter(testimonial => 
    activeFilter === 'all' || testimonial.category === activeFilter
  );

  return (
    <>
      
        <title>Testimonials - LegalAdvocate</title>
        <meta name="description" content="Read success stories from our satisfied clients across civil, criminal, family, and corporate law. Find out why they trust LegalAdvocate." />
     

      {/* Hero Section */}
      <Hero
        title="What Our Clients Say"
        subtitle="Over 500+ successful cases and satisfied clients across various legal domains. Read their experiences and discover why they trust us with their legal matters."
        bgImage={heroBg2}
      />

      {/* All Testimonials Section with Filtering */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle title="All Client Testimonials" />
          <FilterControls 
            categories={filterCategories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter} // Pass the state setter function as a prop
          />
          <div className="card-grid">
            {/* Map over the FILTERED array to render the cards */}
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join Our Satisfied Clients?"
        subtitle="Get the same exceptional legal representation that our clients rave about. Schedule your consultation today and experience the difference."
        primaryBtnText="Book Free Consultation"
        primaryBtnLink="/contact"
        secondaryBtnText="Call (555) 123-4567"
        secondaryBtnLink="tel:555-123-4567"
      />
    </>
  );
};

export default Testimonials;