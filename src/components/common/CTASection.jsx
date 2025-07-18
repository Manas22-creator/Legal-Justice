// src/components/common/CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = ({ title, subtitle, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink }) => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Link to={primaryBtnLink} className="btn btn-primary">{primaryBtnText}</Link>
        {secondaryBtnText && secondaryBtnLink && (
          <Link to={secondaryBtnLink} className="btn btn-secondary">{secondaryBtnText}</Link>
        )}
      </div>
    </section>
  );
};

export default CTASection;