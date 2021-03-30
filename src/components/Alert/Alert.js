import React from 'react';
import './Alert.css';
import styles from '../button.module.css';

const Alert = ({message, title, icon, onClick}) => {

  return (
    <div className="overlay">
      <div className="alert">
        <h1 className="alert__title"><span className="alert__icon">{icon}</span>{title}</h1>
        <p className="alert__text">{message}</p>
        <button className={styles.button} onClick={onClick}>Ok</button>
      </div>
    </div>
  );
}

export default Alert;