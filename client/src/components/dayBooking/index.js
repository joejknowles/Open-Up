import React, { Component } from 'react';
import '../../styles/App.css';
import { connect } from 'react-redux';
import { fetchSlots } from '../../actions';
import LoadingIndicator from '../loadingIndicator';
import Heading from './heading';

export class DayBooking extends Component {
  componentDidMount() {
    this.props.fetchSlots();
  }

  render() {
    if (this.props.isLoading) return (<LoadingIndicator />);
    return (
      <div>
        <Heading />
        { this.slots() }
      </div>
    );
  }

  slots() {
    const { slots } = this.props;
    if (slots.length === 0) return <p className="message">No slots available</p>;
    return slots.map(({ id }) => (
        <button key={ id } >book</button>
    ))
  }
}

const mapStateToProps = (state) => ({
  slots: state.allSlots.map((id) => state.slotsById[id]),
  date: state.selectedDate,
  isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchSlots: fetchSlots(dispatch)
});

const mergeProps = ({ slots, isLoading, date }, dispatchProps) => ({
  slots, isLoading,
  fetchSlots: dispatchProps.fetchSlots(date)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayBooking);
