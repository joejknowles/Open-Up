import React from 'react';
import { connect } from 'react-redux';
import { selectedDateSelector } from '../../reducers';
import format from 'date-fns/format'

const dateTitle = (date) => (
  `Today ${format(date, 'D/M/YYYY')}`
);

export const Heading = ({ date }) => (
  <h3>{ dateTitle(date) }</h3>
);

export const mapStateToProps = (state) => ({
  date: selectedDateSelector(state)
});

export default connect(mapStateToProps)(Heading);
