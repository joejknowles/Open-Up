import { LoadingBlocker } from '../../components/loadingBlocker';

import React from 'react';
import LoadingIndicator from '../../components/loadingIndicator';
import { shallow } from 'enzyme';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('renders loading indicator when loading', () => {
  const component = shallow(
    <LoadingBlocker isLoading={ true } block={ true }>
      <p className='test-child'>children</p>
    </LoadingBlocker>
  );
  expect(component.find(LoadingIndicator).length).toBe(1);
});

it('matches snapshot when loading', () => {
  const tree = shallowRenderer.render(
    <LoadingBlocker isLoading={ true }>
      <p className='test-child'>children</p>
    </LoadingBlocker>
  );
  expect(tree).toMatchSnapshot();
});

it('renders children when not loading', () => {
  const component = shallow(
    <LoadingBlocker isLoading={ false }>
      <p className='test-child'>children</p>
    </LoadingBlocker>
  );
  expect(component.find('.test-child').length).toBe(1);
});

it('matches snapshot when not loading', () => {
  const tree = shallowRenderer.render(
    <LoadingBlocker isLoading={ false }>
      <p className='test-child'>children</p>
    </LoadingBlocker>
  );
  expect(tree).toMatchSnapshot();
});
