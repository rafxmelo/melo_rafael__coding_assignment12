import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';
import '@testing-library/jest-dom/extend-expect';

test('renders the text content', () => {
  render(<Text content="Test Content" />);
  const textElement = screen.getByText(/test content/i);
  expect(textElement).toBeVisible();
});
