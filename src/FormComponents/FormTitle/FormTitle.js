import React from 'react';
import './FormTitle.css';

const FormTitle = ({children, className="", heading}) => {
  return (
    <h2 className={`form__title ${className}`}>
      {heading ? heading : children}
    </h2>
  );
}

export default FormTitle;
