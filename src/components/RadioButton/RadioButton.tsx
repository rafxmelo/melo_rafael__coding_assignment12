import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 1rem;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange }) => (
  <Label>
    <StyledRadioButton
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </Label>
);

export default RadioButton;
