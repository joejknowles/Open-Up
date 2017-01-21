import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { DayBooking } from '../../components/dayBooking';
import renderer from 'react-test-renderer';

const fakeDate = '1999-01-01';

it('renders booking component', () => {
  const app = shallow(<DayBooking
    date={ fakeDate }
    slots={ [{ id: 1 }, { id: 2 }] }
    fetchSlots={ ()=> {}}
    />);
  expect(app.find('button').length).toBe(2);
});

it('renders correctly', () => {
  const tree = renderer.create(
    <DayBooking
      date={ fakeDate }
      slots={ [{ id: 1 }, { id: 2 }] }
      fetchSlots={ ()=> {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
