import { testPostRequest } from '../api/testapi';
import axiosInstance from '../api/axiosInstance';

jest.mock('../api/axiosInstance', () => {
  return {
    __esModule: true,
    default: {
      post: jest.fn()
    },
    getAbortController: () => new AbortController()
  };
});

test('testPostRequest returns mock data', async () => {
  const mockData = { id: 123, title: 'test' };
  axiosInstance.post.mockResolvedValue({ status: 201, data: mockData });

  const result = await testPostRequest({ title: 'test' });
  expect(result).toEqual(mockData);
});
 