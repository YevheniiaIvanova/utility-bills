import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  width: 200px;
  height: 50px;
  margin-right: auto;
  margin-left: auto;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--light-color, #ffffff);
  background-color: var(--primary-color, #62c7c3);
  border-radius: 5px;
  transition: 0.3s;
  :hover {
    background-color: var(--light-color, #ffffff);
    border: 2px solid var(--primary-color, #62c7c3);
    color: var(--primary-color, #62c7c3);
  }
`
export default Button;