import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRouter from './components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);