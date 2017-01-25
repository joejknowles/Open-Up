import React from 'react';
import { connect } from 'react-redux';

export const Heading = ({date}) => (
  <h3>Today { date }</h3>
);

export const mapStateToProps = ({ selectedDate }) => ({
  date: selectedDate
});

export default connect(mapStateToProps)(Heading);
