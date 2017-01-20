import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow } from 'enzyme';
import DayBooking from '../components/dayBooking';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders booking component', () => {
  const app = shallow(<App />);
  expect(app.find(DayBooking)).to.have.length(1);
});
