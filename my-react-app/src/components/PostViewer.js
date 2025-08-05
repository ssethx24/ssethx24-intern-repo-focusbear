import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostViewer from './PostViewer';
import { getPost } from '../api/getPost';

jest.mock('../api/getPost', () => ({
  getPost: jest.fn(),
}));

const mockPost = {
  title: 'Test Post',
  body: 'This is a test post body.',
};

beforeEach(() => {
  getPost.mockResolvedValue(mockPost);
});

test('renders fetched post title and body', async () => {
  render(<PostViewer />);

  const { title, body } = mockPost;

  // Use role and text-based queries
  const heading = await screen.findByRole('heading', { name: new RegExp(title, 'i') });
  const bodyText = await screen.findByText(new RegExp(body, 'i'));

  expect(heading).toBeInTheDocument();
  expect(bodyText).toBeInTheDocument();
});