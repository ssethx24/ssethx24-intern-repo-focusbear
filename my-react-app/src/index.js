import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';          // <-- from src/store/index.js
import App from './App';
import './i18n';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>              {/* <-- provides Redux context */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
