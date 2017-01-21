import React from 'react';
import ReactDOM from 'react-dom';
import { selectedDate, slotsById, allSlots } from '../../reducers';

it('selectedDate returns date', () => {
  const testDate = new Date(100);
  const action = { response: { date: testDate } };
  const actual = selectedDate(undefined, action);
  expect(actual).toBe(testDate);
});

it('slotsById returns empty object by default', () => {
  const actual = slotsById(undefined, {});
  expect(actual).toEqual({});
});

it('slotsById returns slots by Id', () => {
  const normalizedSlots = { 1: { id: 1, available: true }, 2: { id: 2, available: true } };
  const action = { response: { entities: { slots:
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
  const actual = allSlots(undefined, { response: { results: [1, 2, 4] }});
  expect(actual).toEqual([1, 2, 4]);
});
