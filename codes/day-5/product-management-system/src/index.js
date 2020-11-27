import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import './index.css';
import productStore from './redux/Store/productStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <Provider store={productStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);