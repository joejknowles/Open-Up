import React from 'react';
import { shallow } from 'enzyme';
import { BookButton } from '../../../components/dayBooking/bookButton';
import renderer from 'react-test-renderer';

const startTime = new Date();
const endTime = new Date();
const times = { startTime, endTime };

it('renders heading text using date', () => {
  const component = shallow(<BookButton id={ 1 } { ...times } />);
  expect(component.find('button').text()).toBe('book 13:00 to 14:00');
});

it('renders heading as before', () => {
  const tree = renderer.create(
    <BookButton { ...times } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
