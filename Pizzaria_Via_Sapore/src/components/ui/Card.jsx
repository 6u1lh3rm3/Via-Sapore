import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'medium',
  shadow = 'medium',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg border';
  
  const variants = {
    default: 'border-gray-200',
    elevated: 'border-gray-100',
    outlined: 'border-gray-300',
  };
  
  const paddings = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6',
  };
  
  const shadows = {
    none: 'shadow-none',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
  };
  
  const cardClasses = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${shadows[shadow]} ${className}`;
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;