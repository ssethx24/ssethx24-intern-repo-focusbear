import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld'; 
import '@testing-library/jest-dom';

test('renders hello with Focus Bear', () => {
  render(<HelloWorld name="Focus Bear" />);
  const heading = screen.getByText(/Hello, Focus Bear!/i);
  expect(heading).toBeInTheDocument();
});
