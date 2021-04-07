import React from 'react';
import styles from './button.module.css';


const FormButton = ({heading, onClick}) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>{heading}</button>
  );
}

export default FormButton;