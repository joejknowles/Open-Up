import { DayBooking } from '../../../components/dayBooking';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('matches snapshot', () => {
  const tree = shallowRenderer.render(
    <DayBooking />
  );
  expect(tree).toMatchSnapshot();
});
