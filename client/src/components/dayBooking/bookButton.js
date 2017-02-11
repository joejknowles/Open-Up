import React from 'react';
import { connect } from 'react-redux'
import format from 'date-fns/format';
import { bookSlotRequest } from '../../actions';

const formatTime = (time) => (
  format(time, 'HH:mm')
);

export const BookButton = ({ startTime, endTime, bookSlot }) => (
  <button className="BookButton slot-content" onClick={ bookSlot }>
    book { formatTime(startTime) } to { formatTime(endTime) }
  </button>
);

export const mapDispatchToProps = (dispatch, { id }) => ({
  bookSlot: () => dispatch(bookSlotRequest(id))
});

export default connect(null, mapDispatchToProps)(BookButton)
