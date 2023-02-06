import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/style.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);

reportWebVitals();
