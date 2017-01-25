import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow } from 'enzyme';
import DayBooking from '../components/dayBooking';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const emptyStoreMock = mockStore({ allSlots: [] });

it('renders without crashing', () => {
  shallow(<App store={ emptyStoreMock }/>);
});

it('renders booking component', () => {
  const app = shallow(<App store={ emptyStoreMock }/>);
  expect(app.find(DayBooking).length).toBe(1);
});

it('renders correctly', () => {
  const tree = renderer.create(<App store={ emptyStoreMock }/>).toJSON();
  expect(tree).toMatchSnapshot();
});
