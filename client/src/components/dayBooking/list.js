import React from 'react';

export const List = ({ slots = [] }) => (
  slots.length === 0 ?
  <p className="message">No slots available</p> :
  (<div>
    { slots.map(({ id }) => (
        <button key={ id } >book</button>
    )) }
  </div>)
);

export default List;
