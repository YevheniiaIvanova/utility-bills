import React from 'react';
import CalculatorBillsItem from '../CalculatorBillsItem';

const CalculatorBillsList = ({billsData, onInputPreviousValue, onInputCurrentValue, isDeleteBill, onDeleteBill}) => {
  
  const billsList = billsData.map(bill => <CalculatorBillsItem 
                                            key={bill.title} {...bill} 
                                            onInputPreviousValue={onInputPreviousValue} 
                                            onInputCurrentValue={onInputCurrentValue}
                                            isDeleteBill={isDeleteBill}
                                            onDeleteBill={onDeleteBill}
                                  />);
  
  return (
    <div className="calculator-bills__list">
      {billsList}
    </div>
  );
}

export default CalculatorBillsList;