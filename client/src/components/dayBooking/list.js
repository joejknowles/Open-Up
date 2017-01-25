import React from 'react';
import { connect } from 'react-redux';

export const List = ({ slots = [] }) => (
  slots.length === 0 ?
  <p className="message">No slots available</p> :
  (<div>
    { slots.map(({ id }) => (
        <button key={ id } >book</button>
    )) }
  </div>)
);

const mapStateToProps = (state) => ({
  slots: state.allSlots.map((id) => state.slotsById[id])
});

const connectedList = connect(mapStateToProps)(List);

export default connectedList;
