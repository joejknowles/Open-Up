import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../../../components/common/modal';

it('renders as before', () => {
  const tree = renderer.create(
    <Modal>
      modal children
    </Modal>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
