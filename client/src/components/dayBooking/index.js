import React, { Component } from 'react';
import '../../styles/App.css';
import { connect } from 'react-redux';
import { fetchSlots } from '../../actions';

import LoadingBlocker from '../loadingBlocker';
import Heading from './heading';
import List from './list';

export class DayBooking extends Component {
  componentDidMount() {
    this.props.fetchSlots();
  }

  render() {
    return (
      <LoadingBlocker isLoading={ this.props.isLoading }>
        <div>
          <Heading />
          <List />
        </div>
      </LoadingBlocker>
    );
  }
}

const mapStateToProps = ({ isLoading, date }) => ({
  isLoading, date
});

const mapDispatchToProps = (dispatch) => ({
  fetchSlots: fetchSlots(dispatch)
});

const mergeProps = ({ isLoading, date }, dispatchProps) => ({
  isLoading,
  fetchSlots: dispatchProps.fetchSlots(date)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayBooking);
