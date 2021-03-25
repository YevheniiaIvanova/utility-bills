import React from 'react';
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
        <input type="text" className="bill-item__input" value={currentValue} onInput={onInputCurrentValue} placeholder='###' />
      </p>
      <p className="bill-item__content">
        <label className="bill-item__label">
          Предыдущее значение счетчика:
        </label>
        <input type="text" className="bill-item__input" value={previousValue} onInput={onInputPreviousValue} placeholder='###' />
      </p>
    </div>
  );
}


export default CalculatorBillsItem;