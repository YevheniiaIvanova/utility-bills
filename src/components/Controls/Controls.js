import React from 'react';
import styles from '../button.module.css';

const Controls = ({onClearAllValues}) => {
  return (
    <div className="controls">
      <input type="submit" className={ styles.button } value="Расчитать"/>   
      <button type="button" className={ styles.button } onClick={onClearAllValues}>Очистить</button>
  </div>
  );
}

export default Controls;