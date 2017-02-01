import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';

import '../../styles/Alert.css';

import { alertsSelector, createAlertSelector } from '../../reducers';
import { removeAlert } from '../../actions/alerts'

export const Alert = ({ message, onClick, type }) => (
  <div
    className={ `Alert ${ type === 'ERROR' ? 'Error' : 'Success' }`}
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
    <ReactCSSTransitionsGroup
      transitionName="alert"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={400}
      >
      {
        alerts.map((id) => (
          <ConnectedError key={ id } { ...{ id } } />
        ))
      }
    </ReactCSSTransitionsGroup>
  </div>
);

export default connect((state) => (
  { alerts: alertsSelector(state) }
))(Alerts);
