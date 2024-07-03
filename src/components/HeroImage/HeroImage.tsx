import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  height: 300px;
  width: 100%;
`;

const HeroImage: React.FC<HeroImageProps> = ({ src }) => <StyledHeroImage src={src} />;

export default HeroImage;