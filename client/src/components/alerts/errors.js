import React from 'react';
import { connect } from 'react-redux';

import '../../styles/Alert.css'

import { errorsSelector, createErrorSelector } from '../../reducers';
import { removeAlert } from '../../actions/alerts'

export const Error = ({ message, onClick }) => (
  <div
    className="Alert Error"
    onClick={ onClick }>
    { message }
  </div>
);

const mapDispatchToProps = (dispatch, { id }) => ({
  onClick: () => (dispatch(removeAlert(id)))
});
const mapStateToProps = (state, { id }) => createErrorSelector(id);

const ConnectedError = connect(
  mapStateToProps,
  mapDispatchToProps
)(Error);

export const Errors = ({ errors }) => (
  <div className="Alerts">
    {
      errors.map((id) => (
        <ConnectedError key={ id } { ...{ id } } />
      ))
    }
  </div>
);

export default connect((state) => (
  { errors: errorsSelector(state) }
))(Errors);
