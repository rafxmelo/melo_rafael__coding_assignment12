import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
import '@testing-library/jest-dom/extend-expect';

test('renders the dropdown', () => {
  render(<Dropdown options={[{ label: 'Option 1', value: '1' }]} onChange={() => {}} />);
  const optionElement = screen.getByText(/Option 1/i);
  expect(optionElement).toBeVisible();
});
