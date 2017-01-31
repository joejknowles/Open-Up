import React from 'react';
import { connect } from 'react-redux';

import '../../styles/Alert.css'

import { alertsSelector, createAlertSelector } from '../../reducers';
import { removeAlert } from '../../actions/alerts'

export const Alert = ({ message, onClick }) => (
  <div
    className="Alert Error"
    { ...{ onClick } }>
    { message }
  </div>
);

const mapDispatchToProps = (dispatch, { id }) => ({
  onClick: () => (dispatch(removeAlert(id)))
});
const mapStateToProps = (state, { id }) => createAlertSelector(id);

const ConnectedError = connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);

export const Alerts = ({ alerts }) => (
  <div className="Alerts">
    {
      alerts.map((id) => (
        <ConnectedError key={ id } { ...{ id } } />
      ))
    }
  </div>
);

export default connect((state) => (
  { alerts: alertsSelector(state) }
))(Alerts);
