import React from 'react';
import './FormInput.css';

const NoNumericInput = ({onInput, value, className='', ...otherProps}) => {
  const inputHandler = (event) => {
    const isValid = event.currentTarget.value.match(/^[А-Яа-я, a-zA-Z]*$/);
    if(isValid) {
      onInput(event);
    }
  }
  
  return(
    <input {...otherProps} type="text" className={`form-input ${className}`} value={value} onInput={inputHandler}/>
  );
}

export default NoNumericInput;