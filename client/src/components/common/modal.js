import React from 'react';
import '../../styles/Modal.css';

export default ({ children }) => (
  <div className="modal">
    <div className="modal-box">
      { children }
    </div>
  </div>
);
