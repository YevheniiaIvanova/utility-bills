import React from 'react';
import CalculatorBillsItem from '../CalculatorBillsItem';

const CalculatorBillsList = ({billsData, onInputPreviousValue, onInputCurrentValue}) => {
  
  const billsList = billsData.map(bill => <CalculatorBillsItem 
                                            key={bill.title} {...bill} 
                                            onInputPreviousValue={onInputPreviousValue} 
                                            onInputCurrentValue={onInputCurrentValue}/>);
  
  return (
    <div className="calculator-bills__list">
      {billsList}
    </div>
  );
}

export default CalculatorBillsList;