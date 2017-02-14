import React from 'react';
import ReactDOM from 'react-dom';
import LoadingIndicator from '../../../components/common/loadingIndicator';
import renderer from 'react-test-renderer';

it('Loading indicator renders the same as before', () => {
  const tree = renderer.create(
    <LoadingIndicator />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
