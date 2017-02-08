import { slotsById } from '../../reducers/slots';

it('slotsById returns empty object by default', () => {
  const actual = slotsById(undefined, {});
  expect(actual).toEqual({});
});

it('slotsById returns previous state when no slots', () => {
  const actual = slotsById(undefined, { response: { entities: {} } });
  expect(actual).toEqual({});
});

it('slotsById returns slots by Id on fetch slots success', () => {
  const normalizedSlots = { 1: { id: 1  }, 2: { id: 2 } };
  const action = { type: 'FETCH_SLOTS_SUCCESS', response: { entities: { slots:
    normalizedSlots
  } } };
  const actual = slotsById(undefined, action);
  expect(actual).toEqual(normalizedSlots);
});

it("slotsById sets booking id to 'pending' on slot on book slot request", () => {
  const slotId = 7;
  const previousState = { 7: { id: 7 } };
  const bookingId = 8;
  const action = { type: 'BOOK_SLOT_REQUEST', slotId };
  const actual = slotsById(previousState, action);
  const expected = { 7: { id: 7, booking: 'pending' } };
  expect(actual).toEqual(expected);
});

it('slotsById adds booking id to slot on book slot success', () => {
  const slotId = 7;
  const previousState = { 7: { id: 7 } };
  const bookingId = 8;
  const action = { type: 'BOOK_SLOT_SUCCESS', slotId, response: { bookingId } };
  const actual = slotsById(previousState, action);
  const expected = { 7: { id: 7, booking: bookingId } };
  expect(actual).toEqual(expected);
});

it('slotsById returns previous state when no new slots on fetch slots success', () => {
  const previousState = { 10: { id: 10 } };
  const action = { type: 'FETCH_SLOTS_SUCCESS', response: { entities: {} } };
  const actual = slotsById(previousState, action);
  expect(actual).toEqual(previousState);
});
