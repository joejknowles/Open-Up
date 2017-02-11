import topReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { parseDate } from './helpers/dates';
import rootSaga from './sagas';

export default () => {
  const reduxSagaMiddleware = createSagaMiddleware();
  const middleware = [ reduxSagaMiddleware ];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }
  const initialState = {
    booking: {
      selectedDate: parseDate(new Date())
    }
  };
  const store = createStore(topReducer, initialState, applyMiddleware(...middleware));
  reduxSagaMiddleware.run(rootSaga);
  return store;
};
