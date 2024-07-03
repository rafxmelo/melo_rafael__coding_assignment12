import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';
import '@testing-library/jest-dom/extend-expect';

test('renders the radio button', () => {
  render(<RadioButton label="Test Radio" name="test" value="test" onChange={() => {}} />);
  const radioElement = screen.getByLabelText(/Test Radio/i);
  expect(radioElement).toBeVisible();
});
