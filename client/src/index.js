import 'phantomjs-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Venue from './components/venue';
import DayBooking from './components/dayBooking';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './configureStore';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.render(
  (
    <Provider store={ configureStore() } >
      <Router history={ browserHistory }>
        <Route path="/" component={ App } >
          <Route path="venue" component={ Venue } />
          <Route path="venue/book" component={ DayBooking } />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
