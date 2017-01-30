import React from 'react';
import { shallow } from 'enzyme';
import { Slot, UnavailableSlot } from '../../../components/dayBooking/slot';
import { BookButton } from '../../../components/dayBooking/bookButton';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

const startTime = new Date(null, null, null, 13);
const endTime = new Date(null, null, null, 14);
const times = { startTime, endTime };

it("renders a button when there's no booking", () => {
  const component = shallow(<Slot booking={ false } { ...times } />);
  expect(component.find('Connect(Component)').length).toBe(1);
});

it("renders unavailable message when there's a booking", () => {
  const component = shallow(<Slot booking={ true } { ...times } />);
  expect(component.find(UnavailableSlot).length).toBe(1);
});

it('renders Slot with booking as before', () => {
  const tree = shallowRenderer.render(
    <Slot booking={ true } { ...times } />
  );
  expect(tree).toMatchSnapshot();
});

it('renders Slot without booking as before', () => {
  const tree = shallowRenderer.render(
    <Slot booking={ false } { ...times } />
  );
  expect(tree).toMatchSnapshot();
});

it('renders UnavailableSlot as before', () => {
  const tree = shallowRenderer.render(
    <UnavailableSlot { ...times } />
  );
  expect(tree).toMatchSnapshot();
});

it("UnavailableSlot renders unavailable message", () => {
  const component = shallow(<UnavailableSlot { ...times } />);
  expect(component.find('span').text()).toBe('unavailable 13:00 to 14:00');
});
