import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import { fetchSlots } from '../actions'

export class DayBooking extends Component {
  componentDidMount() {
    this.props.fetchSlots();
  }

  render() {
    const date = this.props.date ?
      this.props.date : //.toLocaleDateString("en-GB")
      '';
    const slots = this.props.slots;
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

const mapDispatchToProps = (dispatch) => ({
  fetchSlots: fetchSlots(dispatch)
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  fetchSlots: dispatchProps.fetchSlots(stateProps.date)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayBooking);
