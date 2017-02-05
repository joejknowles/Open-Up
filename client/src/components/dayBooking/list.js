import React from 'react';
import '../../styles/DayBooking.css';
import { connect } from 'react-redux';
import { slotsSelector, selectedDateSelector } from '../../reducers';
import Slot from './slot'

export const List = ({ slots = [], date }) => (
  slots.length === 0 ?
    <p className="message">No slots available</p> :
    <div className={ `List ${date}` }>
      { slots.map(( id ) => (
        <Slot key={ id } { ...{ id } } />
      )) }
    </div>
);

const mapStateToProps = (state) => ({
  slots: slotsSelector(state),
  date: selectedDateSelector(state)
});

const connectedList = connect(mapStateToProps)(List);

export default connectedList;
