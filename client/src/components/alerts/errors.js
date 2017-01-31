import React from 'react';
import { connect } from 'react-redux';

import '../../styles/Alert.css'

import { errorsSelector, createErrorSelector } from '../../reducers';

export const Error = ({ message }) => (
  <div className="Alert Error">{ message }</div>
);

const ConnectedError = connect((state, { id }) =>
  createErrorSelector(id)
)(Error)

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
