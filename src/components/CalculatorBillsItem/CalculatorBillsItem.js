import React from 'react';
import FormTitle from '../../FormComponents/FormTitle/FormTitle';
import NumericInput from '../../FormComponents/FormInput/NumericInput';
import Button from '../../FormComponents/Buttons/Button';
import './CalculatorBillsItem.css';

const CalculatorBillsItem = (props) => {
  const {
          title, 
          tariff, 
          previousValue, 
          currentValue, 
          onInputPreviousValue, 
          onInputCurrentValue,
          isDeleteBill,
          onDeleteBill, 
        } = props;
  return ( 
    <div className="bill calculator-bills__item bills-item">
      <FormTitle>
        {`${title}: текущий тариф ${tariff} грн`}
      </FormTitle>
        {/*TODO_REVIEW: пустые строки вот так лучше не оставлять*/}
   
      <p className="bill-item__content">
        <label className="bill-item__label">
          Текущее значение счетчика:
        </label>
        <NumericInput  value={currentValue} onInput={onInputCurrentValue(title)} placeholder='###'/>
      </p>
      <p className="bill-item__content">
        <label className="bill-item__label">
          Предыдущее значение счетчика:
        </label>
        <NumericInput value={previousValue} onInput={onInputPreviousValue(title)} placeholder='###'/>
      </p>
      {isDeleteBill && <Button onClick={onDeleteBill(title)}>Удалить</Button>}
    </div>
  );
}


export default CalculatorBillsItem;