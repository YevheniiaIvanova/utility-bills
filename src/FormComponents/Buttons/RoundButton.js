import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  width: 94px;
  height: 94px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  font-size: 11px;
  color: #fff;
  border-radius: 100%;
  background-color: var(--primary-color, #62c7c3);
  box-shadow: 0px -1px 13px 0px #769b9a;
  :hover {
    box-shadow: 0px -1px 14px -1px #000;
    background-color: #246aa7;
  }
`

const RoundButton = ({children, type, ...props}) => {  
  return(
    <StyleButton type={type || 'button'} {...props}>{children}</StyleButton>
  );
}

export default RoundButton;