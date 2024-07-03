import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select`
  padding: 8px;
  font-size: 1rem;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => (
  <StyledSelect onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
