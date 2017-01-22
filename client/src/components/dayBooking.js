import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import { fetchSlots } from '../actions'

export class DayBooking extends Component {
  componentDidMount() {
    this.props.fetchSlots();
  }

  render() {
    const { date = '' } = this.props; //.toLocaleDateString("en-GB")
    return (
      <div>
        <h3>Today { date }</h3>
        { this.slots() }
      </div>
    );
  }

  slots() {
    const { slots } = this.props;
    if (slots.length === 0) return <p className="message">No slots available</p>;
    return slots.map(({ id }) => (
        <button key={ id } ></button>
    ))
  }
}

const mapStateToProps = (state) => ({
  slots: state.allSlots.map((id) => state.slotsById[id]),
  date: state.selectedDate
});

const mapDispatchToProps = (dispatch) => ({
  fetchSlots: fetchSlots(dispatch)
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  fetchSlots: dispatchProps.fetchSlots(stateProps.date)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayBooking);
