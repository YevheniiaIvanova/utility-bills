import React from 'react';
import styles from './button.module.css';

const FormSubmit = ({heading}) => {
  return (
    <input type="submit" className={ styles.button } value={heading}/> 
  );
}

export default FormSubmit;