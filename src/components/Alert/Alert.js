import React from 'react';
import './Alert.css';
import Button from '../../FormComponents/Buttons/Button';

const Alert = ({message, title, icon, onClick}) => {

  return (
    <div className="overlay">
      <div className="alert">
        <h1 className="alert__title"><span className="alert__icon">{icon}</span>{title}</h1>
        <p className="alert__text">{message}</p>
        <Button onClick={onClick}>Ok</Button>
      </div>
    </div>
  );
}

export default Alert;