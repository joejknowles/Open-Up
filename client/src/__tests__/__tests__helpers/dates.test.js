import {
  getTitleDay,
  numberToWeekday,
  formatDate,
  getNextDay,
  getPrevDay } from '../../helpers/dates.js';
import addDays from 'date-fns/add_days';

it('weekday gives Monday for day 1', () => expect(numberToWeekday(1)).toBe('Monday'));
it('weekday gives Tuesday for day 2', () => expect(numberToWeekday(2)).toBe('Tuesday'));
it('weekday gives Wednsday for day 3', () => expect(numberToWeekday(3)).toBe('Wednesday'));
it('weekday gives Thursday for day 4', () => expect(numberToWeekday(4)).toBe('Thursday'));
it('weekday gives Friday for day 5', () => expect(numberToWeekday(5)).toBe('Friday'));
it('weekday gives Saturday for day 6', () => expect(numberToWeekday(6)).toBe('Saturday'));
it('weekday gives Sunday for day 0', () => expect(numberToWeekday(0)).toBe('Sunday'));

it('formats date to "D/M/YYYY"', () =>
  expect(formatDate(new Date(2017, 0, 26))).toEqual('26/1/2017'));

it('getTitleDay gives "Today" for "Today"', () =>
  expect(getTitleDay(new Date())).toBe('Today'));
it('getTitleDay gives "Tomorrow" for "Tomorrow"', () =>
  expect(getTitleDay(addDays(new Date(), 1))).toBe('Tomorrow'));
it('getTitleDay gives "Wednesday" for "Wednesday"', () =>
  expect(getTitleDay(new Date(2012, 1, 29))).toBe('Wednesday'));

it('getNextDay gives following day', () =>
  expect(getNextDay(new Date(2012, 1, 29))).toEqual('2012-03-01'));

it('getPrevDay gives previous day', () =>
  expect(getPrevDay(new Date(2012, 1, 29))).toEqual('2012-02-28'));
