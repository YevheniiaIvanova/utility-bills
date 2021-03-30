import React from 'react';

const NumericInput = ({onInput, value, className, ...otherProps}) => {

  const inputHandler = (event) => {
   const isValid = event.currentTarget.value.match(/^[0-9]*$/);
   if(isValid) {
     onInput(event); 
   }
  }

  return (
    <input {...otherProps} type="text" className={className} value={value} onInput={inputHandler} placeholder='###'/>
  );
}

export default NumericInput;