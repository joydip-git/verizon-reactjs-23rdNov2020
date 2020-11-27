import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import './index.css';
import productStore from './redux/Store/productStore'

ReactDOM.render(
  <Provider store={productStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);