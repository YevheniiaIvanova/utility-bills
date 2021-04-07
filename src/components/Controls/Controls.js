import React from 'react';
import FormSubmit from '../../FormComponents/FormButton/FormSubmit';
import FormButton from '../../FormComponents/FormButton/FormButton';


const Controls = ({onClearAllValues, onAddButtonHandler}) => {
  return (
    <div className="controls">
      <FormSubmit heading="Расчитать"/>   
      <FormButton heading="Очистить" onClick={onClearAllValues}/>
      <FormButton heading="Добавить" onClick={onAddButtonHandler}/>
  </div>
  );
}

export default Controls;