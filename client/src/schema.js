import { schema } from 'normalizr';

const slot = new schema.Entity('slots');
export const arrayOfSlots = new schema.Array(slot);
