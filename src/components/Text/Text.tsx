import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p`
  font-size: 1rem;
  color: black;
`;

const Text: React.FC<TextProps> = ({ content }) => <StyledText>{content}</StyledText>;

export default Text;
