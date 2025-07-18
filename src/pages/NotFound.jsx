// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// We can reuse the CSS classes from the Hero section for a consistent look.
const NotFound = () => {
  return (
    <>
      <title>404 Page Not Found - LegalAdvocate</title>
      
      <section className="hero" style={{ backgroundColor: '#1A2345', minHeight: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center' }}>
        <div className="hero-content">
          <h1 style={{ color: '#D4A017', fontSize: '6rem', lineHeight: 1 }}>404</h1>
          <h2 style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist or has been moved.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>
            Go Back to Homepage
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;