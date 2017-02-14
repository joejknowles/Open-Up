import React from 'react';
import '../../styles/Modal.css';
import { connect } from 'react-redux';

 export const Modal = ({ children, closeModal }) => (
  <div className="modal" onClick={ closeModal } >
    <div className="modal-box" onClick={ (e) => e.stopPropagation() }>
      { children }
    </div>
  </div>
);

export default connect(null,
  (dispatch) => (
    { closeModal: () => dispatch({ type: 'CLOSE_MODAL' }) }
  )
)(Modal)
