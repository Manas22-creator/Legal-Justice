// src/components/services/FaqItem.jsx
import React from 'react';

const FaqItem = ({ question, answer }) => {
  return (
    // The 'details' element provides a native accordion functionality
    <details className="faq-item">
      <summary><h4>{question}</h4></summary>
      <p>{answer}</p>
    </details>
  );
};

export default FaqItem;