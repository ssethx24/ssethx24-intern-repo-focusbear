import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Needed for `.toBeInTheDocument()`
import Greeting from './Greeting';

test('renders welcome heading', () => {
  render(<Greeting />);
  expect(screen.getByText(/Welcome to Focus Bear!/i)).toBeInTheDocument();
});

test('shows message on button click', () => {
  render(<Greeting />);
  const button = screen.getByRole('button', { name: /show message/i });
  fireEvent.click(button);
  expect(screen.getByText(/Hello, user!/i)).toBeInTheDocument();
});
