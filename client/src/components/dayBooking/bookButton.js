import React from 'react';
import { connect } from 'react-redux';
import format from 'date-fns/format'
import { createSlotSelector } from '../../reducers'

const formatTime = (time) => (
  format(time, 'HH:mm')
);

export const BookButton = ({ startTime, endTime}) => (
  <button className="BookButton">book { formatTime(startTime) } to { formatTime(endTime) }</button>
);

const mapStateToProps = (state, { id }) => (
  createSlotSelector(id)
);

export default connect(mapStateToProps)(BookButton);
