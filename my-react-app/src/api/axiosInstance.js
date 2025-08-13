// src/api/axiosInstance.js
import axios from 'axios';

/** Generate a unique request id for tracing */
function generateRequestId() {
  return Math.random().toString(36).slice(2) + Date.now();
}

/** Create the Axios instance */
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    'X-Request-ID': generateRequestId(),
  },
  timeout: 10_000, // 10 seconds
});

/** AbortController helpers */
export function getAbortController() {
  return new AbortController();
}
export function cancelRequest(controller, reason = 'User aborted request') {
  if (controller && typeof controller.abort === 'function') {
    controller.abort(reason);
  }
}
export function isCanceled(error) {
  // Axios v1 uses DOMException name/message when aborted via signal
  return !!(error?.code === 'ERR_CANCELED' || error?.name === 'CanceledError');
}

/** REQUEST INTERCEPTOR
 * - Injects Authorization token (if present)
 * - Regenerates X-Request-ID per request
 * - Allows passing AbortController via config.signal
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // Attach bearer token if present
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Always stamp a fresh request id
    config.headers = config.headers || {};
    config.headers['X-Request-ID'] = generateRequestId();

    // If caller passed an AbortController, Axios v1+ will use config.signal
    // Example usage at call site:
    //   const c = getAbortController();
    //   axiosInstance.post('/posts', data, { signal: c.signal })
    // (No extra work needed here; just ensure we don't overwrite it.)
    return config;
  },
  (error) => Promise.reject(error)
);

/** RESPONSE INTERCEPTOR
 * - Optional console logging (dev only)
 * - Normalizes errors so UI can handle status/code/data consistently
 */
axiosInstance.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV !== 'production') {
      // Keep it light; helpful during review/demo
      // eslint-disable-next-line no-console
      console.log('[Axios] Response:', {
        url: response.config?.url,
        method: response.config?.method,
        status: response.status,
      });
    }
    return response;
  },
  (error) => {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[Axios] Error:', error);
    }

    // If aborted/canceled, rethrow as-is so caller can branch on isCanceled(error)
    if (isCanceled(error)) {
      return Promise.reject(error);
    }

    // Normalize shape
    const normalized = {
      message: error?.message || 'Request failed',
      status: error?.response?.status ?? null,
      code: error?.code ?? null,
      data: error?.response?.data ?? null,
      // Optionally expose request id if backend echoes it
      requestId:
        error?.response?.headers?.['x-request-id'] ||
        error?.config?.headers?.['X-Request-ID'] ||
        null,
      original: error,
    };

    return Promise.reject(normalized);
  }
);

export default axiosInstance;
