// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="logo">LegalAdvocate</div>
            <p>Providing exceptional legal services with over 15 years of experience. Trusted by 500+ clients across various legal domains.</p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Practice Areas</h4>
            <ul>
              <li><Link to="/services">Civil Law</Link></li>
              <li><Link to="/services">Criminal Defense</Link></li>
              <li><Link to="/services">Family Law</Link></li>
              <li><Link to="/services">Corporate Law</Link></li>
              <li><Link to="/services">Personal Injury</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p><i className="fas fa-phone"></i> (555) 123-4567</p>
            <p><i className="fas fa-envelope"></i> info@legaladvocate.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 123 Legal St, City, State 12345</p>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} LegalAdvocate. All rights reserved. | <Link to="#">Privacy Policy</Link> | <Link to="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;