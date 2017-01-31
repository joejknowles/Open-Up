import React, { Component } from 'react';
import '../styles/App.css';
import DayBooking from './dayBooking';
import Errors from './alerts/errors';

import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <div className="App">
          <Errors />
          <DayBooking />
        </div>
      </Provider>
    );
  }
}

export default App;
