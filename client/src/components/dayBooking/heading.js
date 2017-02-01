import React from 'react';
import { connect } from 'react-redux';
import { selectedDateSelector } from '../../reducers';
import format from 'date-fns/format'

const dateTitle = (date) => (
  `Today ${format(date, 'D/M/YYYY')}`
);

export const Heading = ({ date }) => (
  <div className="Heading">
    <h3>{ dateTitle(date) }</h3>
    <a className="next-day">Next Day</a>
  </div>
);

export const mapStateToProps = (state) => ({
  date: selectedDateSelector(state)
});

export default connect(mapStateToProps)(Heading);
