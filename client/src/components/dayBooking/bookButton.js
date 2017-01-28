import React from 'react';
import { connect } from 'react-redux';
import format from 'date-fns/format'
import { createSlotSelector } from '../../reducers'

export const BookButton = ({ startTime, endTime}) => (
  <button>book { formatTime(startTime) } to { formatTime(endTime) }</button>
);

const formatTime = (time) => (
  format(time, 'H:mm')
);

const mapStateToProps = (state, { id }) => {
  const s =  createSlotSelector(id);
  console.log(s);
  return s
};

export default connect(mapStateToProps)(BookButton);
