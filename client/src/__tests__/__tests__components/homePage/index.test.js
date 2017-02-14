import Home from '../../../components/homePage';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders home page as before', () => {
  const notFound = shallowRenderer.render(<Home />);
  expect(notFound).toMatchSnapshot();
});
