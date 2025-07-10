import React from 'react';
import '../styles/components/button.css';

const Button = ({ 
  children, 
  onClick, 
  type = "button", 
  className = "", 
  disabled = false,
  variant = "primary"
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant} ${className}`}
    >
      <div className="btn-background"></div>
      <span className="btn-text-visible">{children}</span>
      <span className="btn-text-hidden">{children}</span>
    </button>
  );
};

export default Button;
