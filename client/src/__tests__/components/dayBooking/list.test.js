import { List } from '../../../components/dayBooking/list';

it('renders two buttons for two slots', () => {
  const component = shallow(<List
    slots={ [{ id: 1 }, { id: 2 }] }
    fetchSlots={ ()=> {}}
    />);
  expect(component.find('button').length).toBe(2);
});

it('renders three buttons for three slots', () => {
  const component = shallow(<List
    slots={ [{ id: 1 }, { id: 2 }, { id: 4 }] }
    fetchSlots={ ()=> {}}
    />);
  expect(component.find('button').length).toBe(3);
});

it('renders message for no slots', () => {
  const component = shallow(<List
    slots={ [] }
    fetchSlots={ ()=> {}}
    />);
  expect(component.find('.message').text()).toBe('No slots available');
});

it('renders the same as before with two slots', () => {
  const tree = shallowRenderer.render(
    <List
      slots={ [{ id: 1 }, { id: 2 }] }
      fetchSlots={ ()=> {}}
      />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the same as before with no slots', () => {
  const tree = shallowRenderer.render(
    <DayBooking
      slots={ [] }
      fetchSlots={ ()=> {}}
      />
  );
  expect(tree).toMatchSnapshot();
});
