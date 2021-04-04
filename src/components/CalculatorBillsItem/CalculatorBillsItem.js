import React from 'react';
import NumericInput from '../NumericInput';
import './CalculatorBillsItem.css';

const CalculatorBillsItem = (props) => {
  const {
          title, 
          tariff, 
          previousValue, 
          currentValue, 
          onInputPreviousValue, 
          onInputCurrentValue, 
        } = props;
  return ( 
    <div className="bill calculator-bills__item bills-item">
      <h2 className="title bill__title">
        {title}: текущий тариф {tariff} грн
      </h2>
      <p className="bill-item__content">
        <label className="bill-item__label">
          Текущее значение счетчика:
        </label>
        <NumericInput className='bill-item__input' value={currentValue} onInput={onInputCurrentValue(title)} />
      </p>
      <p className="bill-item__content">
        <label className="bill-item__label">
          Предыдущее значение счетчика:
        </label>
        <NumericInput className='bill-item__input' value={previousValue} onInput={onInputPreviousValue(title)}/>
      </p>
    </div>
  );
}


export default CalculatorBillsItem;