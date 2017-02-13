import Venue from '../../../components/venue';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders Venue as before', () => {
  const venue = shallowRenderer.render(<Venue />);
  expect(venue).toMatchSnapshot();
});
