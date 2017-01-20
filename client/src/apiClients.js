import 'whatwg-fetch';

export const fetchSlots = () => {
  return fetch('/api/slots');
};
