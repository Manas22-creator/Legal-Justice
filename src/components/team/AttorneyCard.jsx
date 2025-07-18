// src/components/team/AttorneyCard.jsx
import React from 'react';

const AttorneyCard = ({ attorney }) => {
  const { image, name, title, bio, achievements, contact } = attorney;

  return (
    <div className="attorney-card">
      <img src={image} alt={name} />
      <div className="attorney-info">
        <h3>{name}</h3>
        <div className="title">{title}</div>
        <p>{bio}</p>
        
        {achievements && achievements.length > 0 && (
          <div className="key-achievements">
            <ul>
              {achievements.map((item, index) => (
                <li key={index}><i className="fas fa-award"></i> {item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="attorney-contact">
          <a href={`mailto:${contact.email}`}><i className="fas fa-envelope"></i> Email</a>
          <a href={`tel:${contact.phone}`}><i className="fas fa-phone"></i> Call</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default AttorneyCard;