import React, {useState, useEffect} from 'react';
import BillsDataService from '../../services/billsData-service';
import config from '../../config';
import CalculatorBillsList from '../CalculatorBillsList';
import Controls from '../Controls';
import FormTitle from '../../FormComponents/FormTitle/FormTitle';
import Alert from '../Alert';
import NewBill from '../NewBill';
import EditBill from '../EditBill';
import './CalculatorBills.css';


const {garbageBills, homeMaintenance, rentBills} = config;

function calculateTheCostWithTariff(bill) {
  const {previousValue, currentValue, tariff} = bill; 
  return (Math.abs(currentValue - previousValue)) * tariff;
}

function calculateFullCost(...costBills) {
  return costBills.reduce((totalValue, bill) => {
    return totalValue + bill;
  }, 0).toFixed(2);
}

const CalculatorBills = () => {
  
  const [bills, setBills] = useState([]);
  const [totalCost, setTotalCost] = useState('');
  const [alertType, setAlertType] = useState('');
  const [isShowNewBillBlock, setIsShowNewBillBlock] = useState(false);
  const [newBill, setNewBill] = useState({title: '', tariff: '', previousValue: '', currentValue: '' });
  const [isDeleteBill, setIsDeleteBill] = useState(false);
  const [isEditBill, setIsEditBill] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await BillsDataService.getData();
      const bills = response.data.map(bill => ({...bill, previousValue: '', currentValue: ''}));
      setBills(() => bills);
    }
    fetchData();
  }, []);


  //Buttons Handlers
  const closeAlertHandler = () => {
    setAlertType('');
  }
  
  /*TODO_REVIEW: Не так чтоб это плохо, но можем быть это сделать по аналогии с алертами, через какой-то параметр типа?
    просто получится если добавится еще одна кнопка, то к каждому обрабтчику кнопки нужно будет 
    добавить по if еще одному, а потому еще по одному
  */
  const onAddButtonHandler = () => {
    if(isEditBill) {
      setIsEditBill(false);
    }
    if(isDeleteBill) {
      setIsDeleteBill(false);
    }
    setIsShowNewBillBlock(true);
  }

  const onEditButtonHandler = () => {
    if(isDeleteBill) {
      setIsDeleteBill(false);
    }
    if(isShowNewBillBlock){
      setIsShowNewBillBlock(false);
    }
    setIsEditBill(true);
  }

  const onDeleteButtonHandler = () => {
    if(isEditBill) {
      setIsEditBill(false);
    }
    if(isShowNewBillBlock){
      setIsShowNewBillBlock(false);
    }
    setIsDeleteBill(true);
  }



  //TODO: Добавить функционал редактирование существующего счёта -- этот todo уже не нужен, так как функционал готов
  
  const inputPreviousValue = (title) => {
    return function(event) {
      const previousValue = event.currentTarget.value;
      setBills((bills) => { 
        const copyBills = [...bills];
        /*TODO_REVIEW: тут есть маленькая проблема. 
          Мы скопировали массив, но элементы массива у нас не скопированы
          и теперь если мы изменим элемент массива copyBills, то этот же элемент в bills тоже изменится.
          Грустно, но благодаря еще одной деструктуризации мы можем решить эту проблему.

          const billIndex = copyBills.findIndex(bill => bill.title === title);
          if (billIndex !== -1) {
            copuBills[billIndex] = {
              ...copuBills[billIndex],
              previousValue: previousValue
            }
          }
          return copyBills;
        */
        const bill = copyBills.find(bill => bill.title === title);
        bill.previousValue = previousValue;
        return copyBills;
      });
    }
  }
  
  
  const inputCurrentValue = (title) => {
    return function(event) {
      const currentValue = event.currentTarget.value;
      setBills((bills) => { 
        const copyBills = [...bills];
        /*TODO_REVIEW: та же ситуация что и выше

          const billIndex = copyBills.findIndex(bill => bill.title === title);
          if (billIndex !== -1) {
            copuBills[billIndex] = {
              ...copuBills[billIndex],
              currentValue: currentValue
            }
          }
          return copyBills;
        */
        const bill = copyBills.find(bill => bill.title === title);
        bill.currentValue = currentValue;
        return copyBills;
      });
    }
  } 


  const isNotEmptyValue = (values) => {
    return values.every(value => value.previousValue && value.currentValue);
  }


  const calculateTheCost = (event) => {
    event.preventDefault();
    const isNotEmptyValues = isNotEmptyValue(bills);
    
    if(isNotEmptyValues) {
      const totalCostBills = bills.map(bill => calculateTheCostWithTariff(bill));
      setTotalCost(calculateFullCost(homeMaintenance, garbageBills, rentBills, ...totalCostBills));  
    } else {
      setAlertType('emptyValues');
    }
  }


  const clearAllValues = () => {
    setBills(() => {
      const newBills = bills.map(bill => {
        /*TODO_REVIEW: Это можно было сделать чуть
        return {
          ...bill,
          previousValue: '',
          currentValue: ''
        }
        */
        const newBill = {...bill};
        newBill.previousValue = '';
        newBill.currentValue = '';
        return newBill;
      });

      return newBills;
    });

    setTotalCost('');
  }


  const onInputNewBillTitle = (event) => {
    const titleNewBill = event.currentTarget.value;
    setNewBill((newBill) => {
      return {
        ...newBill,
        title: titleNewBill
      }
    });
  }

  const onInputNewBillTariff = (event) => {
    const tariffNewBill = event.currentTarget.value;
    setNewBill((newBill) => {
      return {
        ...newBill,
        tariff: tariffNewBill
      }
    });
  }

  const addNewBill = () => {
    if(newBill.title && newBill.tariff) {
      setBills((bills) => {
        const copyBills = [...bills, newBill];
        return copyBills;
      });
      /* TODO: подумать сразу скрывать или же добавить кнопку закрытия + добавить плавную анимацию */
      setNewBill((newBill) => {
        return {
          ...newBill,
          title: '', 
          tariff: '',
        };
      });
      setIsShowNewBillBlock(false);
    } else {
      setAlertType('emptyValues');
    }
  }

  const deleteBill = (title) => {
    return function() {
      setBills((bills) => {
        const copyBills = [...bills];
        return copyBills.filter(bill => bill.title !== title);
      });
    }
  }

  const editBill = () => {
    if(newBill.title && newBill.tariff) {
      setBills((bills) => {
        const copyBills = [...bills];
        const indexBill  = copyBills.findIndex(bill => bill.title === newBill.title);
        if(indexBill !== -1) {
          copyBills[indexBill] = {...newBill};
          return copyBills;
          //TODO_REVIEW: этот else не обязателен и засоряет код
        } else {
          setAlertType('nonExistentValue');
        }
        return bills;
        
      });
    } else {
      setAlertType('emptyValues');
     
    }
  }

  return (
    <div className="calculator-bills">
      <div className="calculator-bills__container">
        <header className="calculator-bills__header">
          <h1 className="calculator-bills__title title"> Расчет аренды квартиры с коммуналкой </h1>
        </header>
        <form className="bills" onSubmit={calculateTheCost}>
          <div className="static-bill bill">
            <FormTitle heading="Статические счета" className="static-bill__title" />
            <ul className="static-bill__list">
              <li className="static-bill__item">
                Аренда квартиры: {rentBills} грн
              </li>
              <li className="static-bill__item">
                Счет за мусор: {garbageBills} грн
              </li>
              <li className="static-bill__item">
                Счет за обслуживание дома: {homeMaintenance} грн
              </li>
            </ul>
          </div>
          <CalculatorBillsList 
            billsData={bills} 
            onInputPreviousValue={inputPreviousValue} 
            onInputCurrentValue={inputCurrentValue}
            isDeleteBill={isDeleteBill}
            onDeleteBill={deleteBill}
          />
            { isShowNewBillBlock && <NewBill 
                                      heading="Добавить новый счёт"
                                      billData={newBill}
                                      onSave={addNewBill} 
                                      onInputNewBillTariff={onInputNewBillTariff} 
                                      onInputNewBillTitle={onInputNewBillTitle}/> 
            }
            
            {isEditBill && <EditBill 
                              heading="Редактировать тариф счёта"
                              billData={newBill}
                              onSave={editBill} 
                              onInputNewBillTariff={onInputNewBillTariff} 
                              onInputNewBillTitle={onInputNewBillTitle}/> 

            } 
            {/*TODO: Более подробный вывод, чтобы было понятно как посчитано?*/ }
            {totalCost && <div className="calculator-bills__total-cost title"> Итоговая цена: {totalCost}</div>}

            <Controls onClearAllValues={clearAllValues} 
                      onAddButtonClick={onAddButtonHandler}
                      onEditButtonClick={onEditButtonHandler}
                      onDeleteButtonClick={onDeleteButtonHandler}
                      onCalculateButtonClick={calculateTheCost}
            />
        </form>
      </div>
        {/*TODO_REVIEW: слишном длинные строки я бы их сократил. Например вот так.
          {
            alertType==='emptyValues'
            && 
            <Alert
              message='Пожалуйста, заполните все поля значениями!' 
              title='Warning' icon='&#9888;'
              onClick={closeAlertHandler}
            />
          }

          Или еще неплохой вариант создать два компонента следующего вида:
          <EmptyValuesAlert onClick={closeAlertHandler} />
          и 
          <NonExistentValueAlert onClick={closeAlertHandler} />
        */}
        {alertType==='emptyValues' && <Alert message='Пожалуйста, заполните все поля значениями!' title='Warning' icon='&#9888;' onClick={closeAlertHandler}/>}
        {alertType==='nonExistentValue' && <Alert message='Такого значения нет!' title='Warning' icon='&#9888;' onClick={closeAlertHandler}/>}
    </div>
  );
}

export  default CalculatorBills;