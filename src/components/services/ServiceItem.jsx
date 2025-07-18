// src/components/services/ServiceItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ iconClass, title, description, services }) => {
  return (
    <div className="service-item">
      <div className="service-header">
        <div className="icon"><i className={iconClass}></i></div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <div style={{ marginTop: '20px' }}>
        <Link to="/contact" className="btn btn-dark">Get Legal Help →</Link>
      </div>
    </div>
  );
};

export default ServiceItem;