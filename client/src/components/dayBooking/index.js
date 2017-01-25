import React, { Component } from 'react';
import '../../styles/App.css';
import { connect } from 'react-redux';
import { fetchSlots } from '../../actions';

import LoadingIndicator from '../loadingIndicator';
import Heading from './heading';
import List from './list';

export class DayBooking extends Component {
  componentDidMount() {
    this.props.fetchSlots();
  }

  render() {
    if (this.props.isLoading) return (<LoadingIndicator />);
    return (
      <div>
        <Heading />
        <List slots={ this.props.slots } />
      </div>
    );
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
