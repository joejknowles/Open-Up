import { DayBooking } from '../../../components/dayBooking';

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LoadingIndicator from '../../../components/loadingIndicator';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders loading indicator when isLoading true', () => {
  const component = shallow(<DayBooking
    isLoading={ true }
    />);
  expect(component.find(LoadingIndicator).length).toBe(1);
});

it('matches snapshot', () => {
  const tree = shallowRenderer.render(
    <DayBooking
      isLoading={ false }
      />
  );
  expect(tree).toMatchSnapshot();
});
