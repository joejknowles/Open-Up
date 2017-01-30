import { schema } from 'normalizr';

const booking = new schema.Entity('bookings');

const slot = new schema.Entity('slots', {
  booking
});

export const arrayOfSlots = new schema.Array(slot);
