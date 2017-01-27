import React from 'react';
import { connect } from 'react-redux';

export const BookButton = () => (
  <button>book</button>
);

export default connect()(BookButton);
