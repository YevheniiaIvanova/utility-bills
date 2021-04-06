import React from 'react';
import styles from '../../styles/button.module.css';

const Controls = ({onClearAllValues, onAddButtonHandler}) => {
  return (
    <div className="controls">
      <input type="submit" className={ styles.button } value="Расчитать"/>   
      <button type="button" className={ styles.button } onClick={onClearAllValues}>Очистить</button>
      <button type="button" className={ styles.button } onClick={onAddButtonHandler}>Добавить</button>
  </div>
  );
}

export default Controls;