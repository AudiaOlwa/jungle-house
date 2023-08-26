import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/Banner.css';
import './styles/Cart.css';
import './styles/ShoppingList.css';
import './styles/PlantItem.css';
import './styles/Categories.css';
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);