import 'whatwg-fetch';

const checkStatus = (response) => {
  let json = response.json();
  if (response.ok) {
    return json;
  } else {
    return json.then(Promise.reject.bind(Promise));
  }
};

export const fetchSlots = () => (
  fetch('/api/slots')
    .then(checkStatus)
);

export const bookSlot = (slotId) => {
  return fetch('/api/booking', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slot_id: slotId })
  })
  .then(checkStatus)
};
