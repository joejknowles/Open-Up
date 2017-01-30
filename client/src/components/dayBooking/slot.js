import React from 'react';
import '../../styles/DayBooking.css';
import { connect } from 'react-redux';
import { createSlotSelector } from '../../reducers';
import BookButton from './bookButton';
import format from 'date-fns/format';

const formatTime = (time) => (
  format(time, 'HH:mm')
);

export const Slot = (props) => (
  props.booking ?
  <p className="message">
    unavailable { formatTime(props.startTime) } to { formatTime(props.endTime) }
  </p>
  :
  (<div className="Slot">
      <BookButton { ...props }  />
  </div>)
);

const mapStateToProps = (state, { id }) => (
  createSlotSelector(id)
);

export default connect(mapStateToProps)(Slot);
