import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App';

import UserLogInProvider from './Context/UserLogInContext';
import ThemeProvider from './Context/ThemeContext';
import CartProvider from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserLogInProvider>
        <ThemeProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ThemeProvider>
      </UserLogInProvider>
    </BrowserRouter>
  </React.StrictMode>
);