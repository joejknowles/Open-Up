import { DayBooking } from '../../../components/dayBooking';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import { shallow } from 'enzyme';
const shallowRenderer = ReactTestUtils.createRenderer();

it('matches snapshot', () => {
  const tree = shallowRenderer.render(
    <DayBooking />
  );
  expect(tree).toMatchSnapshot();
});

it('fetches slots on didMount', () => {
  const dispatches = {
    fetchSlots: jest.fn(),
    fetchNextSlots: jest.fn(),
    setDate: jest.fn()
  }
  const wrapper = shallow(
    <DayBooking
      { ...dispatches }
      />
  );
  wrapper.instance().componentDidMount();
  expect(dispatches.fetchSlots.mock.calls.length).toBe(1);
});

it('fetches slots on didUpdate when date changes', () => {
  const dispatches = {
    fetchSlots: jest.fn(),
    fetchNextSlots: jest.fn(),
    setDate: jest.fn()
  }
  const wrapper = shallow(
    <DayBooking { ...dispatches } date={ new Date(1)} />,
    { lifecycleExperimental: true }
  );
  wrapper.setProps({date: new Date(10000000000)});
  expect(dispatches.fetchSlots.mock.calls.length).toBe(2);
});

it("doesn't fetch slots on didUpdate when date doesn't change", () => {
  const dispatches = {
    fetchSlots: jest.fn(),
    fetchNextSlots: jest.fn(),
    setDate: jest.fn()
  }
  const wrapper = shallow(
    <DayBooking { ...dispatches } date={ new Date(10000000000)} test={ 'right test '} />,
    { lifecycleExperimental: true }
  );
  wrapper.setProps({
    otherProp: 'something irrelevant',
    date: new Date(10000000000)});
  expect(dispatches.fetchSlots.mock.calls.length).toBe(1);
});
