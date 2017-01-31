import { Errors } from '../../../components/alerts/errors';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('matches snapshot', () => {
  const tree = shallowRenderer.render(
    <Errors errors={ ['test error'] } />
  );
  expect(tree).toMatchSnapshot();
});
