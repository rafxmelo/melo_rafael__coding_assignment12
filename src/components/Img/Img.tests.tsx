import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';
import '@testing-library/jest-dom/extend-expect';

test('renders the image', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Test Image" />);
  const imgElement = screen.getByAltText(/Test Image/i);
  expect(imgElement).toBeVisible();
});
