import React from 'react';

export const Errors = ({ errors }) => (
  <div>
    {
      errors.map((error, index) => (
        <p key={ index }>{ error }</p>
      ))
    }
  </div>
);

export default Errors;
