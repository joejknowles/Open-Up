import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import DayBooking from '../../components/dayBooking';
import renderer from 'react-test-renderer';

it('renders booking component', () => {
  const app = shallow(<DayBooking
    date={ new Date(1000) }
    slots={ [{ id: 1 }, { id: 2 }] }
    />);
  expect(app.find('button').length).toBe(2);
});

it('renders correctly', () => {
  const tree = renderer.create(
    <DayBooking
      date={ new Date(1000) }
      slots={ [{ id: 1 }, { id: 2 }] }
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
