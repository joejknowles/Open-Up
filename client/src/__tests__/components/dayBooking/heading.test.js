import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Heading, mapStateToProps } from '../../../components/dayBooking/heading';
import renderer from 'react-test-renderer';

const fakeDate = '1999-01-01';

it('renders heading text using date', () => {
  const component = shallow(<Heading
    date={ fakeDate }
    />);
  expect(component.find('h3').text()).toBe(`Today ${fakeDate}`);
});

it('renders heading as before', () => {
  const tree = renderer.create(
    <Heading
      date={ fakeDate }
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('maps sate to props correctly', () => (
  expect(mapStateToProps({ selectedDate: 'test date' }))
    .toEqual({ date: 'test date'})
));
