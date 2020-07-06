import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './store/reducers';
import middleware from './store/middleware'
import { Provider } from 'react-redux';
import "antd/dist/antd.css";
import './index.css';
import App from './components/App';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
