// src/components/testimonials/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ image, name, role, rating, text, tag, tagCategory }) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    return stars;
  };

  return (
    <div className="testimonial-card" data-category={tagCategory}>
      <div className="testimonial-header">
        <img src={image} alt={name} />
        <div className="testimonial-author">
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
      <div className="rating">
        {renderStars()}
      </div>
      <p>"{text}"</p>
      <span className="tag">{tag}</span>
    </div>
  );
};

export default TestimonialCard;