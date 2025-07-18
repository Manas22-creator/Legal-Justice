// src/components/blog/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ article }) => {
  const { image, tag, category, title, description, date, linkTo } = article;
  
  return (
    // We add the data-category attribute for consistency with the original CSS/JS,
    // but the filtering logic in React is handled by state, not this attribute.
    <div className="blog-card" data-category={category}>
      <img src={image} alt={title} />
      <div className="blog-card-content">
        <span className="tag">{tag}</span>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="blog-meta">
          <span><i className="fas fa-calendar-alt"></i> {date}</span>
        </div>
        <Link to={linkTo}>Read More →</Link>
      </div>
    </div>
  );
};

export default BlogCard;