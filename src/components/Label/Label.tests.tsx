import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';
import '@testing-library/jest-dom/extend-expect';

test('renders the label', () => {
  render(<Label text="Test Label" />);
  const labelElement = screen.getByText(/test label/i);
  expect(labelElement).toBeVisible();
});
