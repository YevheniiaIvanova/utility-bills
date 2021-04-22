import React, {useState} from 'react';
import RoundButton from '../../FormComponents/Buttons/RoundButton';
import IconWrapper from '../../FormComponents/Icons/style/IconWrapper';
import {AddIcon, CalculateIcon, ClearIcon, CloseIcon, DeleteIcon, EditIcon, MenuIcon} from '../../FormComponents/Icons/Icons';
import './Controls.css';


const Controls = ({
  onClearAllValues, 
  onAddButtonClick, 
  onEditButtonClick, 
  onDeleteButtonClick, 
  onCalculateButtonClick
}) => {
  
  const [showControls, setShowControls] = useState(false);
  const closeControlPanel = function(handler) {
    //эта функция сработает, когда сработает обработчик события
    return function (event) {
      setShowControls(false);
      if(handler) {
        handler(event);
      }
    }
  }

  const onShowControls = () => {
    if(showControls) {
      setShowControls(false);
    } else {
      setShowControls(true);
    }
  }

  return (
    <div className="controls">
      <div className="control__button">
        <RoundButton onClick={onShowControls}>
          <IconWrapper>
            {showControls ? <CloseIcon /> : <MenuIcon/>}
          </IconWrapper>
        </RoundButton>
      </div>
      { showControls &&
        <div className="controls-panel">
          <RoundButton onClick={closeControlPanel(onCalculateButtonClick)} type="submit">
          <IconWrapper><CalculateIcon/></IconWrapper>
            Расчитать
            </RoundButton>
          <RoundButton onClick={closeControlPanel(onClearAllValues)} >
            <IconWrapper><ClearIcon/></IconWrapper>
              Очистить
          </RoundButton>
          <RoundButton onClick={closeControlPanel(onAddButtonClick)}>
            <IconWrapper><AddIcon /></IconWrapper>
              Добавить
          </RoundButton>
          <RoundButton onClick={closeControlPanel(onEditButtonClick)}>
            <IconWrapper><EditIcon /></IconWrapper>
              Редактировать
          </RoundButton>
          <RoundButton onClick={closeControlPanel(onDeleteButtonClick)}>
            <IconWrapper><DeleteIcon /></IconWrapper>
              Удалить
          </RoundButton>
        </div>
      }
  </div>
  );
}

export default Controls;