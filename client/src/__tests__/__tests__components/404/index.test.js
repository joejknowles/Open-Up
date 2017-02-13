import NotFound from '../../../components/404';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders 404 page as before', () => {
  const notFound = shallowRenderer.render(<NotFound />);
  expect(notFound).toMatchSnapshot();
});
