import React from 'react';
import './FormInput.css';

const NumericInput = ({onInput, value, className='',...otherProps}) => {

  const inputHandler = (event) => {
   const isValid = event.currentTarget.value.match(/^[0-9]*$/);
   if(isValid) {
     onInput(event); 
   }
  }

  return (
    <input {...otherProps} type="text" className={`form-input ${className}`} value={value} onInput={inputHandler}/>
  );
}

export default NumericInput;