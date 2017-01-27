import React, { Component } from 'react';
import '../styles/App.css';
import DayBooking from './dayBooking'
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <div className="App">
          <DayBooking />
          This is testing the heroku build process
        </div>
      </Provider>
    );
  }
}

export default App;
