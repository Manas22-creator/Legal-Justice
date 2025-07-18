// src/components/services/LegalProcess.jsx
import React from 'react';

const ProcessStep = ({ number, title, description }) => (
  <div className="process-step">
    <div className="number">{number}</div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const LegalProcess = () => {
  const steps = [
    { number: 1, title: 'Initial Consultation', description: 'Free consultation to discuss your case and discuss legal options.' },
    { number: 2, title: 'Case Analysis', description: 'Thorough investigation and analysis to build a strong legal strategy.' },
    { number: 3, title: 'Legal Action', description: 'Aggressive representation and skilled negotiation to protect your interests.' },
    { number: 4, title: 'Resolution', description: 'Achieving the best possible outcome through settlement or trial.' },
  ];

  return (
    <div className="legal-process">
      {steps.map((step) => (
        <ProcessStep key={step.number} {...step} />
      ))}
    </div>
  );
};

export default LegalProcess;