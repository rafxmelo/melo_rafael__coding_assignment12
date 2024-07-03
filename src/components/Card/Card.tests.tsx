import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom/extend-expect';

test('renders the card', () => {
  render(<Card>Test Card Content</Card>);
  const cardElement = screen.getByText(/Test Card Content/i);
  expect(cardElement).toBeVisible();
});
