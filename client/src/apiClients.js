import 'whatwg-fetch';

export const fetchSlots = () => {
  return fetch('/api/slots').then(
    (response) => {
      const asJson = response.json()
      console.log(asJson);
      return asJson;
    }
  );
};
