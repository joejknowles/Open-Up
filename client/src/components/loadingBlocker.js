import React from 'react';
import LoadingIndicator from './loadingIndicator';
import { connect } from 'react-redux';

export const LoadingBlocker = ({ isLoading, children }) => (
  isLoading ? <LoadingIndicator /> : children
);

const mapStateToProps = ({ isLoading }) => ({
  isLoading
});

export default connect(mapStateToProps)(LoadingBlocker);
