import axios from 'axios';

// Function to generate a unique request ID
function generateRequestId() {
  return Math.random().toString(36).substring(2) + Date.now();
}

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API base URL
  headers: {
    'Accept': '*/*',
    'X-Request-ID': generateRequestId(),
  },
  timeout: 10000, // 10 seconds
});

// Function to get a new AbortController
export function getAbortController() {
  return new AbortController();
}

// Request interceptor for auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // Always set a new request ID
    config.headers['X-Request-ID'] = generateRequestId();
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;