import 'whatwg-fetch';

export const fetchSlots = () => {
  return fetch('/api/slots').then(
    (response) => response.json()
  );
};
