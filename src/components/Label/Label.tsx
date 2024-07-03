import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label`
  font-size: 1rem;
  color: black;
`;

const Label: React.FC<LabelProps> = ({ text }) => <StyledLabel>{text}</StyledLabel>;

export default Label;
