// src/components/testimonials/FilterControls.jsx
import React from 'react';

const FilterControls = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="filter-controls">
      {categories.map((category) => (
        <button
          key={category}
          // Conditionally apply the 'active' class
          className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
          // The data-filter attribute is for semantic purposes, but not used by React logic
          data-filter={category}
          // Update the state in the parent component when a button is clicked
          onClick={() => onFilterChange(category)}
        >
          {/* Capitalize the first letter for display */}
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterControls;