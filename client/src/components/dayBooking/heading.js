import React from 'react';
import { connect } from 'react-redux';
import { selectedDateSelector } from '../../reducers';
import format from 'date-fns/format'
import { nextDay } from '../../actions/changeDay';

const dateTitle = (date) => (
  `Today ${format(date, 'D/M/YYYY')}`
);

export const Heading = ({ date, onNextDayClick }) => (
  <div className="Heading">
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

const mapDispatchToProps = (dispatch) => ({ onNextDayClick: () => dispatch(nextDay) });

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
