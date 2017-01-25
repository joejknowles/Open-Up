import React, { Component } from 'react';
import '../../styles/App.css';
import { connect } from 'react-redux';
import { fetchSlots } from '../../actions';

import LoadingIndicator from '../loadingIndicator';
import Heading from './heading';
import List from './list';

export class DayBooking extends Component {
  componentDidMount() {
    this.props.fetchSlots();
  }

  render() {
    if (this.props.isLoading) return (<LoadingIndicator />);
    return (
      <div>
        <Heading />
        <List />
      </div>
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
