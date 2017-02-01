import { Alerts, Alert } from '../../../components/alerts';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('Alerts match snapshot', () => {
  const tree = shallowRenderer.render(
    <Alerts alerts={ ['1'] } />
  );
  expect(tree).toMatchSnapshot();
});

it('Alert matches snapshot with error', () => {
  const tree = shallowRenderer.render(
    <Alert message="error message" type="ERROR" />
  );
  expect(tree).toMatchSnapshot();
});

it('Alert matches snapshot with success notification', () => {
  const tree = shallowRenderer.render(
    <Alert message="error message" type="SUCCESS" />
  );
  expect(tree).toMatchSnapshot();
});
