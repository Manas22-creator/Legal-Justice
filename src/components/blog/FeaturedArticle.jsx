// src/components/blog/FeaturedArticle.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedArticle = ({ article }) => {
  const { image, tag, title, description, author, date, readTime, linkTo } = article;
  
  return (
    <div className="featured-article">
      <img src={image} alt={title} />
      <div className="featured-content">
        <span className="tag">{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="blog-meta">
          <span><i className="fas fa-user"></i> By {author}</span>
          <span><i className="fas fa-calendar-alt"></i> {date}</span>
          <span><i className="fas fa-clock"></i> {readTime} read</span>
        </div>
        <Link to={linkTo} className="btn btn-dark">Read Full Article →</Link>
      </div>
    </div>
  );
};

export default FeaturedArticle;