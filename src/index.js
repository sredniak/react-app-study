import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css'; //importy absolutne, bez kropki
import App from 'views/Root'; //importy absolutne


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);