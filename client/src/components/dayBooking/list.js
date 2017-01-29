import React from 'react';
import '../../styles/DayBooking.css';
import { connect } from 'react-redux';
import { slotsSelector } from '../../reducers';
import Slot from './slot'

export const List = ({ slots = [] }) => (
  slots.length === 0 ?
  <p className="message">No slots available</p> :
  (<div className="List">
    { slots.map(( id ) => (
      <Slot key={ id } { ...{ id } } />
    )) }
  </div>)
);

const mapStateToProps = (state) => ({
  slots: slotsSelector(state)
});

const connectedList = connect(mapStateToProps)(List);

export default connectedList;
