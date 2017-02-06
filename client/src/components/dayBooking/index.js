import React, { Component } from 'react';
import '../../styles/App.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { selectedDateSelector, isDateCachedSelector } from '../../reducers';
import { getNextDay } from '../../helpers/dates'

import LoadingBlocker from '../loadingBlocker';
import Heading from './heading';
import List from './list';
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
    return (
      <div>
        <Heading />
        <LoadingBlocker>
          <ReactCSSTransitionsGroup
            transitionName={ `list-${ this.props.direction }`}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={200}
            >
            <List key={this.props.date} />
          </ReactCSSTransitionsGroup>
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

let isNext = true;

const mergeProps = ({ date, isDateCached }, dispatchProps) => {
  const direction = isNext ? 'next' : 'prev';
  isNext = !isNext;
  return ({
    fetchSlots: dispatchProps.fetchSlots(date),
    fetchNextSlots: dispatchProps.fetchSlots(getNextDay(date)),
    date, isDateCached, direction
  });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayBooking);
