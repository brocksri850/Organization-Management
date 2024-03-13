import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

// Replace ReactDOM.render with createRoot
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
