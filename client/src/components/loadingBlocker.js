import React from 'react';
import LoadingIndicator from './loadingIndicator';
import { connect } from 'react-redux';

import { isLoadingSelector } from '../reducers';

export const LoadingBlocker = ({ isLoading, children }) => (
  isLoading ? <LoadingIndicator /> : children
);

export default connect((state) =>
  ({ isloading: isLoadingSelector(state) })
)(LoadingBlocker);
