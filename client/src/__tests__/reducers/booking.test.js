import { slotsById, allSlots } from '../../reducers';

it('slotsById returns empty object by default', () => {
  const actual = slotsById(undefined, {});
  expect(actual).toEqual({});
});

it('slotsById returns previous state when no slots', () => {
  const actual = slotsById(undefined, { response: { entities: {} } });
  expect(actual).toEqual({});
});

it('slotsById returns slots by Id', () => {
  const normalizedSlots = { 1: { id: 1, available: true }, 2: { id: 2, available: true } };
  const action = { type: 'FETCH_SLOTS_SUCCESS', response: { entities: { slots:
    normalizedSlots
  } } };
  const actual = slotsById(null, action);
  expect(actual).toEqual(normalizedSlots);
});

it('allSlots returns an empty array by default', () => {
  const actual = allSlots(undefined, {});
  expect(actual).toEqual([]);
});

it('allSlots returns an array of slot ids', () => {
  const actual = allSlots(undefined, { response: { result: [1, 2, 4] }});
  expect(actual).toEqual([1, 2, 4]);
});
