import React from 'react';
import '../../styles/DayBooking.css';
import { connect } from 'react-redux';
import { createSlotsSelector } from '../../reducers';
import Slot from './slot'

export const List = ({ slots = [] }) => (
  slots.length === 0 ?
    <p className="message">No slots available</p> :
    <div className='List'>
      { slots.map(( id ) => (
        <Slot key={ id } { ...{ id } } />
      )) }
    </div>
);

const mapStateToProps = (initState, { date }) => (state) => ({
  slots: createSlotsSelector(date)(state)
});

const connectedList = connect(mapStateToProps)(List);

export default connectedList;
