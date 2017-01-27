import React from 'react';
import { shallow } from 'enzyme';
import { BookButton } from '../../../components/dayBooking/bookButton';
import renderer from 'react-test-renderer';


it('renders heading text using date', () => {
  const component = shallow(<BookButton />);
  expect(component.find('button').text()).toBe('book');
});

it('renders heading as before', () => {
  const tree = renderer.create(
    <BookButton />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
