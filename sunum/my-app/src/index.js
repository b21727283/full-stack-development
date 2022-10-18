import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { IsLoggedProvider } from './IsLoggedContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <IsLoggedProvider>

    <BrowserRouter>

      <App />

    </BrowserRouter>  

  </IsLoggedProvider>

  
  
  
);


