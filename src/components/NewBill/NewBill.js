import React from 'react';
import NumericInput from '../NumericInput';
import './NewBill.css';
import styles from '../../styles/button.module.css';

const NewBill = ({heading, billData, onSave, onInputNewBillTariff, onInputNewBillTitle}) => {
  const {title, tariff} = billData;
  return (
    /* TODO: стили вынести в модуль */
    <div className="new-bill bill">
      <h2 className="new-bill__title bill__title title">{heading}</h2>
      <p className="new-bill__content bill-item__content">
        <label className="bill-item__label" htmlFor="">Введите название счёта:</label>
        <input type="text" className="bill-item__input" placeholder="name" value={title} onInput={onInputNewBillTitle}/>
      </p>
      <p className="new-bill__content bill-item__content">
        <label className="bill-item__label" htmlFor="">Введите тариф счёта:</label>
        {/* TODO: Исправить Валидацию, точка или запятая должны быть */}
        <NumericInput className='bill-item__input' value={tariff} onInput={onInputNewBillTariff}/>
      </p>
      <button type="button" className={ styles.button } onClick={onSave}>Сохранить</button>
    </div>
  );
}

export default NewBill;