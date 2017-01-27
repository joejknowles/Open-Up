import React from 'react';
import { connect } from 'react-redux';
import { slotsSelector } from '../../reducers';
import BookButton from './bookButton'

export const List = ({ slots = [] }) => (
  slots.length === 0 ?
  <p className="message">No slots available</p> :
  (<div>
    { slots.map(({ id }) => (
        <BookButton key={ id } />
    )) }
  </div>)
);

const mapStateToProps = (state) => ({
  slots: slotsSelector(state)
});

const connectedList = connect(mapStateToProps)(List);

export default connectedList;
