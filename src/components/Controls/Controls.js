import React, {useState} from 'react';
import RoundButton from '../../FormComponents/Buttons/RoundButton';
import IconWrapper from '../../FormComponents/Icons/IconWrapper';
import MenuIcon from '../../FormComponents/Icons/MenuIcon';
import './Controls.css';


const Controls = ({
  onClearAllValues, 
  onAddButtonClick, 
  onEditButtonClick, 
  onDeleteButtonClick, 
  onCalculateButtonClick
}) => {
  const [showControls, setShowControls] = useState(false);
  let headingShowButton = showControls ? "Закрыть" : "Показать";

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
            <MenuIcon/>
          </IconWrapper>
        </RoundButton>
      </div>
      { showControls &&
        <div className="controls-panel">
          <RoundButton onClick={closeControlPanel(onCalculateButtonClick)} as="input" type="submit" value="Расчитать"/>
          <RoundButton onClick={closeControlPanel(onClearAllValues)} >Очистить</RoundButton>
          <RoundButton onClick={closeControlPanel(onAddButtonClick)}>Добавить</RoundButton>
          <RoundButton onClick={closeControlPanel(onEditButtonClick)}>Редактировать</RoundButton>
          <RoundButton onClick={closeControlPanel(onDeleteButtonClick)}>Удалить</RoundButton>
        </div>
      }
  </div>
  );
}

export default Controls;