import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import configureStore from './configureStore'

ReactDOM.render(
  <App store={ configureStore() } />,
  document.getElementById('root')
);
