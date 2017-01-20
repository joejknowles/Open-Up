import React, { Component } from 'react';
import '../styles/App.css';
import DayBooking from './dayBooking'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DayBooking />
      </div>
    );
  }
}

export default App;
