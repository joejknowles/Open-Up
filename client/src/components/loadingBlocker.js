import React from 'react';
import LoadingIndicator from './loadingIndicator';
import { connect } from 'react-redux';

import { shouldBlockSelector } from '../reducers';

export const LoadingBlocker = ({ block, children }) => (
  block ? <LoadingIndicator /> : children
);

export default connect((state, { block }) =>
  ({ block: shouldBlockSelector(state) })
)(LoadingBlocker);
