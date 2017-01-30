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
  <div className="Slot">
    {
      props.booking ?
        <UnavailableSlot { ...props } />
      :
        <BookButton { ...props }  />
    }
  </div>
);

export const UnavailableSlot = ({ startTime, endTime }) => (
  <div className="unavailableSlot">
    <span className="message">
      unavailable { formatTime(startTime) } to { formatTime(endTime) }
    </span>
  </div>
);

const mapStateToProps = (state, { id }) => (
  createSlotSelector(id)
);

export default connect(mapStateToProps)(Slot);
