import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  width: 94px;
  height: 94px;
  margin: 0;
  font-size: 12px;
  color: #fff;
  border-radius: 100%;
  background-color: var(--primary-color, #62c7c3);
  box-shadow: 0px -1px 13px 0px #769b9a;
`

const RoundButton = ({children, type, ...props}) => {  
  return(
    <StyleButton type={type || 'button'} {...props}>{children}</StyleButton>
  );
}

export default RoundButton;