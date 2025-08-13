// src/components/PostViewer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostViewer from './PostViewer';
import { getPost } from '../api/getPost';

jest.mock('../api/getPost', () => ({ getPost: jest.fn() }));
// ---- Test data ----
const mockPost = {
  title: 'Test Post',
  body: 'This is a test post body.',
};
// ---- Shared helpers ----
const renderSUT = () => render(<PostViewer />);

async function expectPostVisible(post = mockPost) {
  // Title via role-based query (accessible heading)
  await screen.findByRole('heading', { name: new RegExp(post.title, 'i') });
  // Body via text query
  await screen.findByText(new RegExp(post.body, 'i'));
}

beforeEach(() => {
  getPost.mockResolvedValue(mockPost);
});
afterEach(() => {
  jest.clearAllMocks();
});

describe('<PostViewer />', () => {
  test('renders fetched post title and body', async () => {
    renderSUT();
    await expectPostVisible();
  });

  test('renders different post data without duplicating assertions', async () => {
    const anotherPost = { title: 'Hello World', body: 'Lorem ipsum dolor sit amet.' };
    getPost.mockResolvedValueOnce(anotherPost);

    renderSUT();
    await expectPostVisible(anotherPost);
  });
});

