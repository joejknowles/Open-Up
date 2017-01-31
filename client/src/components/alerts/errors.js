import React from 'react';
import { connect } from 'react-redux';

import { errorsSelector, createErrorSelector } from '../../reducers'

export const Error = ({ message }) => (
  <p>{ message }</p>
);

const ConnectedError = connect((state, { id }) =>
  createErrorSelector(id)
)(Error)

export const Errors = ({ errors }) => (
  <div>
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
