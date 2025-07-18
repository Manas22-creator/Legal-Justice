// src/components/about/QualificationsCard.jsx
import React from 'react';

const QualificationsCard = ({ iconClass, title, items }) => {
  return (
    // We can reuse the .service-item class from our CSS as it fits perfectly
    <div className="service-item">
      <div className="service-header">
        <div className="icon"><i className={iconClass}></i></div>
        <h3>{title}</h3>
      </div>
      <ul className="service-list" style={{ gridTemplateColumns: '1fr' }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default QualificationsCard;