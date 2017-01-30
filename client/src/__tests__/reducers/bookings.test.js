import bookings from '../../reducers/bookings';

it('bookings returns empty object by default', () => {
  const actual = bookings(undefined, {});
  expect(actual).toEqual({});
});

it('bookings returns previous state when no bookings', () => {
  const actual = bookings(undefined, { response: { entities: {  } } });
  expect(actual).toEqual({});
});

it('bookings returns bookings by Id on fetch slots success', () => {
  const normalizedBookings = { 1: { id: 1 }, 2: { id: 2 } };
  const action = { type: 'FETCH_SLOTS_SUCCESS', response: { entities: { bookings:
    normalizedBookings
  } } };
  const actual = bookings(undefined, action);
  expect(actual).toEqual(normalizedBookings);
});

it('bookings returns previous state when no new bookings on fetch slots success', () => {
  const previousState =  { 10: { id: 10 } };
  const action = { type: 'FETCH_SLOTS_SUCCESS', response: { entities: {} } };
  const actual = bookings(previousState, action);
  expect(actual).toEqual(previousState);
});

it('bookings returns previous state on book slot success', () => {
  const previousState =  { 10: { id: 10 } };
  const action = { type: 'BOOK_SLOT_SUCCESS', response: { entities: { bookings: { 3: {} } } } };
  const actual = bookings(previousState, action);
  expect(actual).toEqual(previousState);
});
