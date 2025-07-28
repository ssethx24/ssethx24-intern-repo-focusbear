import axiosInstance, { getAbortController } from './axiosInstance';

export async function testPostRequest(params, redirectCallback) {
  const controller = getAbortController();
  try {
    const response = await axiosInstance.post(
      '/posts', 
      params,
      { signal: controller.signal }
    );
    if (response.status === 201 && redirectCallback) {
      redirectCallback();
    }
    return response.data;
  } catch (error) {
    if (error.name === 'CanceledError') {
      console.log('Request canceled', error.message);
    } else {
      console.error('API Error:', error);
    }
    throw error;
  }
} 