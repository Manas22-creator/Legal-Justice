// src/components/contact/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  // Use a single state object to hold all form data
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Select a service',
    urgency: 'Normal',
    message: ''
  });

  // A single handler function to update the state for any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default browser refresh
    // In a real application, you would send the formData to a server here.
    console.log('Form Submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    // Optionally, reset the form
    setFormData({
      fullName: '', phone: '', email: '', service: 'Select a service', urgency: 'Normal', message: ''
    });
  };

  return (
    <div className="contact-form">
      <h3>Schedule Your Free Consultation</h3>
      <p>Fill out the form below and we'll contact you within 24 hours to discuss your case.</p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="full-name">Full Name *</label>
            <input type="text" id="full-name" name="fullName" value={formData.fullName} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-control" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="service">Legal Service Needed</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange} className="form-control">
              <option>Select a service</option>
              <option>Civil Law</option>
              <option>Criminal Defense</option>
              <option>Family Law</option>
              <option>Corporate Law</option>
            </select>
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="urgency">Urgency Level</label>
            <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} className="form-control">
              <option>Normal</option>
              <option>Urgent</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-control" placeholder="Please describe your legal matter..." required></textarea>
        </div>
        <button type="submit" className="btn btn-dark" style={{ width: '100%' }}><i className="fas fa-paper-plane"></i> Send Message</button>
        <p style={{ fontSize: '0.8rem', marginTop: '15px' }}>By submitting, you consent to receive communications from our firm. Your information is confidential.</p>
      </form>
    </div>
  );
};

export default ContactForm;