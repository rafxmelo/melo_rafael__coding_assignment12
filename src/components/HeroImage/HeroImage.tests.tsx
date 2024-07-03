import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';
import '@testing-library/jest-dom/extend-expect';

test('renders the hero image', () => {
  render(<HeroImage src="https://via.placeholder.com/1200x300" />);
  const heroImageElement = screen.getByRole('img');
  expect(heroImageElement).toBeVisible();
});
