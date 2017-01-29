import React from 'react';
import { shallow } from 'enzyme';
import { Slot } from '../../../components/dayBooking/slot';
import { BookButton } from '../../../components/dayBooking/bookButton';
import renderer from 'react-test-renderer';

const startTime = new Date(null, null, null, 13);
const endTime = new Date(null, null, null, 14);
const times = { startTime, endTime };

it("renders a button when there's no booking", () => {
  const component = shallow(<Slot booking={ false } { ...times } />);
  expect(component.find(BookButton).length).toBe(1);
});

it("renders unavailable message when there's a booking", () => {
  const component = shallow(<Slot booking={ true } { ...times } />);
  expect(component.find('p').text()).toBe('unavailable from 13:00 to 14:00');
});

it('renders Slot with booking as before', () => {
  const tree = renderer.create(
    <Slot booking={ true } { ...times } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Slot without booking as before', () => {
  const tree = renderer.create(
    <Slot booking={ false } { ...times } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
