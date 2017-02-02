import React, { Component } from 'react';
import '../../styles/App.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { selectedDateSelector } from '../../reducers';

import LoadingBlocker from '../loadingBlocker';
import Heading from './heading';
import List from './list';
import isSameDay from 'date-fns/is_same_day';

export class DayBooking extends Component {
  componentDidMount() {
    this.props.fetchSlots();
  }

  componentDidUpdate(prevProps) {
    const { date, fetchSlots } = this.props;
    if (!isSameDay(date, prevProps.date)) {
      fetchSlots();
    }
  }

  render() {
    return (
      <LoadingBlocker>
        <div>
          <Heading />
          <List />
        </div>
      </LoadingBlocker>
    );
  }
}

const mapStateToProps = (state) => ({
  date: selectedDateSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSlots: actions.fetchSlots(dispatch)
});

const mergeProps = ({ date }, dispatchProps) => ({
  fetchSlots: dispatchProps.fetchSlots(date),
  date
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayBooking);
