import React, { Component } from 'react';
import '../../styles/App.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { selectedDateSelector, isDateCachedSelector } from '../../reducers';

import LoadingBlocker from '../loadingBlocker';
import Heading from './heading';
import List from './list';
import isSameDay from 'date-fns/is_same_day';

export class DayBooking extends Component {
  componentDidMount() {
    this.props.fetchSlots();
  }

  componentDidUpdate(prevProps) {
    const { date, fetchSlots, isDateCached } = this.props;
    if (!isSameDay(date, prevProps.date)) {
      isDateCached ?
        fetchSlots({block: false}) :
        fetchSlots();
    }
  }

  render() {
    return (
      <div>
        <Heading />
        <LoadingBlocker>
          <List />
        </LoadingBlocker>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  date: selectedDateSelector(state),
  isDateCached: isDateCachedSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSlots: actions.fetchSlots(dispatch)
});

const mergeProps = ({ date, isDateCached }, dispatchProps) => ({
  fetchSlots: dispatchProps.fetchSlots(date),
  date, isDateCached
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayBooking);
