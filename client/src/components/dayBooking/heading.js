import React from 'react';
import { connect } from 'react-redux';
import { selectedDateSelector } from '../../reducers';
import { nextDay, prevDay } from '../../actions/changeDay';
import { getTitleDay, formatDate } from '../../helpers/dates';
import isToday from 'date-fns/is_today'

const dateTitle = (date) => (
  `${getTitleDay(date)} ${formatDate(date, 'D/M/YYYY')}`
);

export const Heading = ({ date, onNextDayClick, onPrevDayClick }) => (
  <div className="Heading">
    { !isToday(date) ? (<a
      className="prev-day"
      onClick={ onPrevDayClick }>
      Previous Day
    </a>) : null }
    <h3>{ dateTitle(date) }</h3>
    <a
      className="next-day"
      onClick={ onNextDayClick }>
      Next Day
    </a>
  </div>
);

export const mapStateToProps = (state) => ({
  date: selectedDateSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onNextDayClick: () => dispatch(nextDay),
  onPrevDayClick: () => dispatch(prevDay)
});

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
