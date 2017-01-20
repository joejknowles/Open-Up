import React from 'react';
import ReactDOM from 'react-dom';
import { selectedDate, slotsById } from '../../reducers';

it('selectedDate returns date', () => {
  const testDate = new Date(100);
  const action = { response: { date: testDate } };
  const actual = selectedDate(null, action);
  expect(actual).toBe(testDate);
});

it('slotsById returns empty object by default', () => {
  const actual = slotsById(null, {});
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
