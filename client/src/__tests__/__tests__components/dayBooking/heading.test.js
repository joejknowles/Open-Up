import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Heading, mapStateToProps } from '../../../components/dayBooking/heading';
import renderer from 'react-test-renderer';
import { getTitleDay, formatDate } from '../../../helpers/dates';
import addDays from 'date-fns/add_days'

it('renders heading text using date', () => {
  const currentDate = new Date();
  const dateString = `Today ${formatDate(currentDate)}`;
  const component = shallow(<Heading
    date={ currentDate }
    />);
  expect(component.find('h3').text()).toBe(dateString);
});

it('renders heading text for tomorrow using date', () => {
  const currentDate = addDays(new Date(), 1);
  const dateString = `Tomorrow ${formatDate(currentDate)}`;
  const component = shallow(<Heading
    date={ currentDate }
    />);
  expect(component.find('h3').text()).toBe(dateString);
});

it('renders heading text for later days using day of week', () => {
  const currentDate = new Date();
  const dateString = `${getTitleDay(currentDate)} ${formatDate(currentDate)}`;
  const component = shallow(<Heading
    date={ currentDate }
    />);
  expect(component.find('h3').text()).toBe(dateString);
});

it('renders heading as before', () => {
  const fakeDate = new Date(2017, 0, 26) ;
  const tree = renderer.create(
    <Heading
      date={ fakeDate }
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
