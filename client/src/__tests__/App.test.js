import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow } from 'enzyme';
import DayBooking from '../components/dayBooking';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

it('renders without crashing', () => {
  shallow(<App store={ mockStore({ allSlots: [] }) }/>);
});

it('renders booking component', () => {
  const app = shallow(<App store={ mockStore({ allSlots: [] }) }/>);
  expect(app.find(DayBooking).length).toBe(1);
});

it('renders correctly', () => {
  const tree = renderer.create(<App store={ mockStore({ allSlots: [] }) }/>).toJSON();
  expect(tree).toMatchSnapshot();
});
