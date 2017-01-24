import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { DayBooking } from '../../components/dayBooking';
import LoadingIndicator from '../../components/loadingIndicator';
import renderer from 'react-test-renderer';

const fakeDate = '1999-01-01';

it('renders loading indicator when isLoading true', () => {
  const component = shallow(<DayBooking
    date={ fakeDate }
    slots={ [{ id: 1 }, { id: 2 }] }
    fetchSlots={ ()=> {}}
    isLoading={ true }
    />);
  expect(component.find(LoadingIndicator).length).toBe(1);
});

it('renders two buttons for two slots', () => {
  const component = shallow(<DayBooking
    date={ fakeDate }
    slots={ [{ id: 1 }, { id: 2 }] }
    fetchSlots={ ()=> {}}
    isLoading={ false }
    />);
  expect(component.find('button').length).toBe(2);
});

it('renders three buttons for three slots', () => {
  const component = shallow(<DayBooking
    date={ fakeDate }
    slots={ [{ id: 1 }, { id: 2 }, { id: 4 }] }
    fetchSlots={ ()=> {}}
    isLoading={ false }
    />);
  expect(component.find('button').length).toBe(3);
});

it('renders message for no slots', () => {
  const component = shallow(<DayBooking
    date={ fakeDate }
    slots={ [] }
    fetchSlots={ ()=> {}}
    isLoading={ false }
    />);
  expect(component.find('.message').text()).toBe('No slots available');
});

it('renders the same as before with two slots', () => {
  const tree = renderer.create(
    <DayBooking
      date={ fakeDate }
      slots={ [{ id: 1 }, { id: 2 }] }
      fetchSlots={ ()=> {}}
      isLoading={ false }
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the same as before with no slots', () => {
  const tree = renderer.create(
    <DayBooking
      date={ fakeDate }
      slots={ [] }
      fetchSlots={ ()=> {}}
      isLoading={ false }
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
