import { Errors, Error } from '../../../components/alerts/errors';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('errors match snapshot', () => {
  const tree = shallowRenderer.render(
    <Errors alerts={ ['1'] } />
  );
  expect(tree).toMatchSnapshot();
});

it('error matches snapshot', () => {
  const tree = shallowRenderer.render(
    <Error message="error message" />
  );
  expect(tree).toMatchSnapshot();
});
