// src/components/Button/Button.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders the button', () => {
  render(<Button label="Test Button" />);
  const buttonElement = screen.getByText(/test button/i);
  expect(buttonElement).toBeVisible();
});

test('button has grey background when disabled', () => {
  render(<Button label="Test Button" disabled />);
  const buttonElement = screen.getByText(/test button/i);
  expect(buttonElement).toHaveStyle('background-color: grey');
});
