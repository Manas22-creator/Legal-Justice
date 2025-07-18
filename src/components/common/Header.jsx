// src/components/common/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  // NavLink will automatically get an 'active' class
  // We can style this class in our index.css
  const getLinkClass = ({ isActive }) => isActive ? 'active' : '';

  // Close nav when a link is clicked (for mobile UX)
  const handleNavLinkClick = () => setNavOpen(false);

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <i className="fa-solid fa-scale-balanced"></i>
          <Link to="/">LegalAdvocate</Link>
        </div>
        <button
          className={`hamburger${navOpen ? ' open' : ''}`}
          aria-label="Open navigation"
          aria-expanded={navOpen}
          aria-controls="main-nav"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={`main-nav${navOpen ? ' open' : ''}`}
          id="main-nav"
        >
          <ul>
            <li><NavLink to="/" className={getLinkClass} end onClick={handleNavLinkClick}>Home</NavLink></li>
            <li><NavLink to="/about" className={getLinkClass} onClick={handleNavLinkClick}>About</NavLink></li>
            <li><NavLink to="/services" className={getLinkClass} onClick={handleNavLinkClick}>Services</NavLink></li>
            <li><NavLink to="/team" className={getLinkClass} onClick={handleNavLinkClick}>Team</NavLink></li>
            <li><NavLink to="/testimonials" className={getLinkClass} onClick={handleNavLinkClick}>Testimonials</NavLink></li>
            <li><NavLink to="/blog" className={getLinkClass} onClick={handleNavLinkClick}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={getLinkClass} onClick={handleNavLinkClick}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;