import React from 'react';
import { shallow } from 'enzyme';
import { BookButton, mapDispatchToProps } from '../../../components/dayBooking/bookButton';
import renderer from 'react-test-renderer';

const startTime = new Date(null, null, null, 13);
const endTime = new Date(null, null, null, 14);
const times = { startTime, endTime };

it('renders button text with correct times', () => {
  const component = shallow(<BookButton id={ 1 } { ...times } />);
  expect(component.find('button').text()).toBe('book 13:00 to 14:00');
});

it('renders booking button as before', () => {
  const tree = renderer.create(
    <BookButton { ...times } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('calls bookSlot on click', () => {
  const mockBookSlot = jest.fn();
  const component = shallow(<BookButton bookSlot={ mockBookSlot } />);
  expect(mockBookSlot).not.toHaveBeenCalled();
  component.simulate('click');
  expect(mockBookSlot).toHaveBeenCalled();
});
