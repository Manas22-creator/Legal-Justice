// src/components/home/StatsBar.jsx
import React from 'react';

const StatItem = ({ number, label }) => (
  <div className="stat-item">
    <div className="number">{number}</div>
    <div className="label">{label}</div>
  </div>
);

const StatsBar = ({ className = "" }) => {
  const stats = [
    { number: '500+', label: 'Cases Won' },
    { number: '98%', label: 'Success Rate' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Available' },
  ];

  return (
    <div className={`stats-bar ${className}`}>
      {stats.map((stat, index) => (
        <StatItem key={index} number={stat.number} label={stat.label} />
      ))}
    </div>
  );
};

export default StatsBar;