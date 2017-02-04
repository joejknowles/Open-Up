import topReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { parseDate } from './helpers/dates';

export default () => {
  const middleware = [ thunk ];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }
  const initialState = {
    selectedDate: parseDate(new Date())
  };
  return createStore(topReducer, initialState, applyMiddleware(...middleware));
};
