import React from 'react';
import LoadingIndicator from './loadingIndicator';

export const LoadingBlocker = ({ isLoading, children }) => (
  isLoading ? <LoadingIndicator /> : children
);

export default LoadingBlocker;
