import React from 'react';
import { connect } from 'react-redux';

import { errorsSelector } from '../../reducers'

export const Errors = ({ errors }) => (
  <div>
    {
      errors.map((error, index) => (
        <p key={ index }>{ error }</p>
      ))
    }
  </div>
);

export default connect((state) => (
  { errors: errorsSelector(state) }
))(Errors);
