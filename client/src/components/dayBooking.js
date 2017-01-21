import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';

export class DayBooking extends Component {
  render() {
    const date = this.props.date ?
      this.props.date.toLocaleDateString("en-GB") :
      '';
    const slots = this.props.slots || []
    return (
      <div>
        <h3>Today { date }</h3>
        { slots.map(({ id }) => (
            <button key={ id } ></button>
        )) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  slots: state.allSlots.map((id) => state.slotsById[id]),
  date: state.selectedDate
});

export default connect(mapStateToProps)(DayBooking);
