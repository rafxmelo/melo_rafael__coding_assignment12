import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled: boolean }>`
  background-color: ${props => (props.disabled ? 'grey' : 'blue')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

const Button: React.FC<ButtonProps> = ({ label, disabled = false, onClick }) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {label}
  </StyledButton>
);

export default Button;
