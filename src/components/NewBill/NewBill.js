import React from 'react';
import FormTitle from '../../FormComponents/FormTitle/FormTitle';
import FloatInput from '../../FormComponents/FormInput/FloatInput';
import NoNumericInput from '../../FormComponents/FormInput/NoNumericInput';
import FormButton from '../../FormComponents/FormButton/FormButton';
import './NewBill.css';


const NewBill = ({heading, billData, onSave, onInputNewBillTariff, onInputNewBillTitle}) => {
  const {title, tariff} = billData;
  return (
    /* TODO: стили вынести в модуль */
    <div className="new-bill bill">
      <FormTitle heading={heading} />
      <p className="new-bill__content bill-item__content">
        <label className="bill-item__label" htmlFor="">Введите название счёта:</label>
        <NoNumericInput  placeholder="name" value={title} onInput={onInputNewBillTitle}/>
      </p>
      <p className="new-bill__content bill-item__content">
        <label className="bill-item__label" htmlFor="">Введите тариф счёта:</label>
        <FloatInput className='bill-item__input' value={tariff} onInput={onInputNewBillTariff} placeholder='###'/>
      </p>
      <FormButton heading="Сохранить" onClick={onSave} />
    </div>
  );
}

export default NewBill;