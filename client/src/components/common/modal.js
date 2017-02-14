import React from 'react';
import '../../styles/Modal.css';
import { exitBooking } from '../../helpers/routing';

export default ({ children }) => (
  <div className="modal" onClick={ exitBooking } >
    <div className="modal-box" onClick={ (e) => e.stopPropagation() }>
      { children }
    </div>
  </div>
);
