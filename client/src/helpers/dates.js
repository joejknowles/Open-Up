import getDay from 'date-fns/get_day';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';
import isTomorrow from 'date-fns/is_tomorrow';
import addDays from 'date-fns/add_days';
import parse from 'date-fns/parse';

const weekdaysDictionary = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  0: 'Sunday'
};

export const numberToWeekday = (dayNumber) => weekdaysDictionary[dayNumber];

export const getWeekday = (date) => numberToWeekday(getDay(date));

export const getTitleDay = (date) => (
  isToday(date) ?
    'Today' :
    (isTomorrow(date) ?
      'Tomorrow' :
      getWeekday(date))
);

export const getNextDay = (date) => addDays(date, 1);

export const formatDate = (date) => format(date, 'D/M/YYYY');

export const parseDate = (date) => parse(date);
