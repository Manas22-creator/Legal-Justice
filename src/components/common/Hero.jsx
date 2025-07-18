// src/components/common/Hero.jsx
import React from 'react';

// Using props to make the Hero component reusable for every page
const Hero = ({ title, subtitle, children, bgImage }) => {
  const heroStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {/* 'children' prop is used to pass buttons or the stats bar */}
        {children}
      </div>
    </section>
  );
};

export default Hero;