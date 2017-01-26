import React from 'react';
import { connect } from 'react-redux';
import { selectedDateSelector } from '../../reducers';

export const Heading = ({date}) => (
  <h3>Today { date }</h3>
);

export const mapStateToProps = (state) => ({
  date: selectedDateSelector(state)
});

export default connect(mapStateToProps)(Heading);
