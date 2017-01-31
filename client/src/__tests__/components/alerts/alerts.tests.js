import { Alerts, Alert } from '../../../components/alerts';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('errors match snapshot', () => {
  const tree = shallowRenderer.render(
    <Alerts alerts={ ['1'] } />
  );
  expect(tree).toMatchSnapshot();
});

it('error matches snapshot', () => {
  const tree = shallowRenderer.render(
    <Alert message="error message" />
  );
  expect(tree).toMatchSnapshot();
});
