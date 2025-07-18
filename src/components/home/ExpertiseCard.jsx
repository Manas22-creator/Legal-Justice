import React from 'react';
import { Link } from 'react-router-dom';

const ExpertiseCard = ({ iconClass, title, description, linkTo }) => {
  return (
    <div
      className="expertise-card"
      style={{
        backgroundColor: 'var(--white)',
        padding: '40px',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div
        className="icon"
        style={{
          fontSize: '2.5rem',
          color: 'var(--primary-blue)',
          marginBottom: '20px',
        }}
      >
        <i className={iconClass}></i>
      </div>
      <h3>{title}</h3>
      <p
        style={{
          color: 'var(--text-light)',
          marginBottom: '25px',
        }}
      >
        {description}
      </p>
      <Link
        to={linkTo}
        style={{
          fontWeight: 700,
          color: 'var(--primary-blue)',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Learn More <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default ExpertiseCard;
