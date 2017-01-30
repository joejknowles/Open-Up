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
  const normalizedBookings = { 1: { id: 1, available: true }, 2: { id: 2, available: true } };
  const action = { type: 'FETCH_SLOTS_SUCCESS', response: { entities: { bookings:
    normalizedbookings
  } } };
  const actual = bookings(null, action);
  expect(actual).toEqual(normalizedBookings);
});

it('bookings returns previous state when no new bookings on fetch slots success', () => {
  const previousState =  {};
  const action = { type: 'FETCH_SLOTS_SUCCESS', response: { entities: {} } };
  const actual = bookings(previousState, action);
  expect(actual).toBe(previousState);
});

it('bookings returns bookings by Id on book slot success', () => {
  const normalizedBookings = { 1: { id: 1, available: true }, 2: { id: 2, available: true } };
  const action = { type: 'BOOK_SLOT_SUCCESS', response: { entities: { bookings:
    normalizedBookings
  } } };
  const actual = bookings(null, action);
  expect(actual).toEqual(normalizedBookings);
});
