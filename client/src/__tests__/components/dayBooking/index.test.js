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

it('updates slots on didMount', () => {
  const fetchSlots = jest.fn();
  const wrapper = shallow(
    <DayBooking
      { ...{ fetchSlots } }
      />
  );
  wrapper.instance().componentDidMount();
  expect(fetchSlots.mock.calls.length).toBe(1);
});

it('updates slots on didUpdate when date changes', () => {
  const fetchSlots = jest.fn();
  const wrapper = shallow(
    <DayBooking { ...{ fetchSlots } } date={ new Date(1)} />,
    { lifecycleExperimental: true }
  );
  wrapper.setProps({date: new Date(10000000000)});
  expect(fetchSlots.mock.calls.length).toBe(2);
});

it("doesn't update slots on didUpdate when date doesn't change", () => {
  const fetchSlots = jest.fn();
  const wrapper = shallow(
    <DayBooking { ...{ fetchSlots } } date={ new Date(10000000000)} test={ 'right test '} />,
    { lifecycleExperimental: true }
  );
  wrapper.setProps({
    otherProp: 'something irrelevant',
    date: new Date(10000000000)});
  expect(fetchSlots.mock.calls.length).toBe(1);
});
