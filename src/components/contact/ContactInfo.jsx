// src/components/contact/ContactInfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3>Get In Touch</h3>
      <div className="contact-info-item">
        <i className="fas fa-phone"></i>
        <div>
          <strong>Phone</strong><br />
          (555) 123-4567<br />
          <small>Available 24/7 for emergencies</small>
        </div>
      </div>
      <div className="contact-info-item">
        <i className="fas fa-envelope"></i>
        <div>
          <strong>Email</strong><br />
          info@legaladvocate.com
        </div>
      </div>
      <div className="contact-info-item">
        <i className="fas fa-map-marker-alt"></i>
        <div>
          <strong>Office Address</strong><br />
          123 Legal Street<br />
          Downtown Legal District<br />
          City, State 12345
        </div>
      </div>
      <div className="contact-info-item">
        <i className="fas fa-clock"></i>
        <div>
          <strong>Office Hours</strong><br />
          Monday - Friday: 8:00 AM - 6:00 PM<br />
          Saturday: 9:00 AM - 1:00 PM<br />
          Sunday: Emergency calls only
        </div>
      </div>
      <div className="emergency-box">
        <h4><i className="fas fa-exclamation-triangle"></i> Emergency Legal Assistance</h4>
        <p>If you're facing an urgent legal matter, please call our 24/7 emergency hotline.</p>
        <a href="tel:555-123-4567" className="btn btn-primary" style={{ backgroundColor: '#dc3545', borderColor: '#dc3545', marginTop: '10px' }}>
          Call Emergency Line
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;