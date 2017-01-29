import React from 'react';
import format from 'date-fns/format';

const formatTime = (time) => (
  format(time, 'HH:mm')
);

export const BookButton = ({ startTime, endTime}) => (
  <button className="BookButton">book { formatTime(startTime) } to { formatTime(endTime) }</button>
);
