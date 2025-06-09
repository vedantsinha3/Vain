// components/SectionHeader.jsx
import React from 'react';
import '/Users/vedantsinha/Desktop/Vain/vain-ecommerce/frontend/src/styles/components/SectionHeader.css';

const SectionHeader = ({ title, subtitle, center = true }) => {
  return (
    <div className={`section-header ${center ? 'center' : ''}`}>
      <h1 className="section-title">{title}</h1>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
