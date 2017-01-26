import React from 'react';
import { connect } from 'react-redux';
import { slotsSelector } from '../../reducers'

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
  slots: slotsSelector(state)
});

const connectedList = connect(mapStateToProps)(List);

export default connectedList;
