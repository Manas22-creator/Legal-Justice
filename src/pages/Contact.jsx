// src/pages/Contact.jsx
import React from 'react';


// Import Common Components
import Hero from '../components/common/Hero';

// Import Contact-Specific Components
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

// Import Assets
import contactHero from '../assets/images/contact-hero.jpg';

const Contact = () => {
  return (
    <>
     
        <title>Contact Us - LegalAdvocate</title>
        <meta name="description" content="Get in touch with LegalAdvocate for a free consultation. Fill out our form, call us, or visit our office." />
     

      <Hero
        title="Contact Us"
        subtitle="Ready to discuss your legal matter? Get in touch today for a free consultation and discover how we can help protect your rights and interests."
        bgImage={contactHero}
      />
      
      <section className="section">
        <div className="container">
          <div className="contact-wrapper">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;