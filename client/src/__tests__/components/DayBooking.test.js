import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { DayBooking } from '../../components/dayBooking';
import renderer from 'react-test-renderer';

const fakeDate = '1999-01-01';

it('renders two buttons for two slots', () => {
  const component = shallow(<DayBooking
    date={ fakeDate }
    slots={ [{ id: 1 }, { id: 2 }] }
    fetchSlots={ ()=> {}}
    />);
  expect(component.find('button').length).toBe(2);
});

it('renders three buttons for three slots', () => {
  const component = shallow(<DayBooking
    date={ fakeDate }
    slots={ [{ id: 1 }, { id: 2 }, { id: 4 }] }
    fetchSlots={ ()=> {}}
    />);
  expect(component.find('button').length).toBe(3);
});

it('renders message for no slots', () => {
  const component = shallow(<DayBooking
    date={ fakeDate }
    slots={ [] }
    fetchSlots={ ()=> {}}
    />);
  expect(component.find('.message').text()).toBe('No slots available');
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
