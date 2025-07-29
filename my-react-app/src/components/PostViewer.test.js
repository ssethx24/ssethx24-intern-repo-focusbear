import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostViewer from './PostViewer';
import { getPost } from '../api/getPost';

jest.mock('../api/getPost', () => ({
  getPost: jest.fn(),
}));

test('renders fetched post title and body', async () => {
  getPost.mockResolvedValue({
    title: 'Test Post',
    body: 'This is a test post body.',
  });

  render(<PostViewer />);

  // Use more specific role-based queries
  const heading = await screen.findByRole('heading', { name: /Test Post/i });
  const body = await screen.findByText(/This is a test post body/i);

  expect(heading).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});
