import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  max-width: 300px;
`;

const Card: React.FC<CardProps> = ({ children }) => <StyledCard>{children}</StyledCard>;

export default Card;
