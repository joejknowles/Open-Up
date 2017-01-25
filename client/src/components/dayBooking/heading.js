import React from 'react';

export const Heading = ({date}) => (
  <h3>Today { date }</h3>
);

export const mapStateToProps = ({ selectedDate }) => ({
  date: selectedDate
});

export default Heading;
