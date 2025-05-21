import React from 'react';
import './Button.scss';

const Button = ({ title, variant = 'contained', className = '', ...props }) => {
  return (
    <button className={`button ${variant} ${className}`} {...props}>
      {title}
    </button>
  );
};

export default Button;
