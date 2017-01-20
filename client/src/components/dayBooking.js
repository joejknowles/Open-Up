import React, { Component } from 'react';
import '../styles/App.css';

class DayBooking extends Component {
  render() {
    return (
      <div>
        Today { this.props.date }
      </div>
    );
  }
}
export default DayBooking;
