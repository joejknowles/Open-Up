import React, { Component } from 'react';
import '../../styles/App.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  selectedDateSelector,
  isDateCachedSelector,
  dateChangeDirectionSelector } from '../../reducers';
import { getNextDay } from '../../helpers/dates'

import LoadingBlocker from '../common/loadingBlocker';
import Heading from './heading';
import List from './list';
import Modal from '../common/modal';
import isSameDay from 'date-fns/is_same_day';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';

export class DayBooking extends Component {
  componentDidMount() {
    this.props.fetchSlots();
    this.props.fetchNextSlots();
  }

  componentDidUpdate(prevProps) {
    const { date, fetchSlots, fetchNextSlots } = this.props;
    if (!isSameDay(date, prevProps.date)) {
      fetchSlots();
      fetchNextSlots();
    }
  }

  render() {
    const { direction, date } = this.props;
    return (
      <Modal>
        <Heading />
        <LoadingBlocker>
          <ReactCSSTransitionsGroup
            transitionName={ `list-${ direction }`}
            transitionEnterTimeout={400}
            transitionLeave={false}
            >
            <List key={ date } date={ date } />
          </ReactCSSTransitionsGroup>
        </LoadingBlocker>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  date: selectedDateSelector(state),
  isDateCached: isDateCachedSelector(state),
  direction: dateChangeDirectionSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSlots: (date) => () => dispatch(actions.fetchSlotsRequest(date))
});

const mergeProps = ({ date, isDateCached, direction }, dispatchProps) => ({
  fetchSlots: dispatchProps.fetchSlots(date),
  fetchNextSlots: dispatchProps.fetchSlots(getNextDay(date)),
  date, isDateCached, direction
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayBooking);
