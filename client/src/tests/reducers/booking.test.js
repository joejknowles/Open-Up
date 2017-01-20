import React from 'react';
import ReactDOM from 'react-dom';
import { selectedDate } from '../../reducers';

it('selectedDate returns date', () => {
  const testDate = new Date(100);
  const action = { response: { date: testDate } };
  const actual = selectedDate(null, action);
  expect(actual).toBe(testDate);
});
