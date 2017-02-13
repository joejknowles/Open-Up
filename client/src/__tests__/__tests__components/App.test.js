import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';
import { shallow } from 'enzyme';
import DayBooking from '../../components/dayBooking';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
const emptyStoreMock = mockStore(
  {
    booking: {
      allSlots: [],
      selectedDate: '2017-02-05T16:24:17.712+00:00',
      slotsByDate: {'2017-02-05T16:24:17.712+00:00': []}
    },
    alerts: {
      alerts: []
    }
  }
);

it('renders without crashing', () => {
  shallow(
    <Provider store={ emptyStoreMock }>
      <App />
    </Provider>);
});

it('renders children', () => {
  const app = shallow(
    <Provider store={ emptyStoreMock }>
      <App><DayBooking /></App>
    </Provider>
  );
  expect(app.find(DayBooking).length).toBe(1);
});

it('renders as before', () => {
  const tree = renderer.create(
    <Provider store={ emptyStoreMock }>
      <App />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
