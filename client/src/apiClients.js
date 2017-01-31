import 'whatwg-fetch';

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = (response) => (
  response.json()
);

export const fetchSlots = () => (
  fetch('/api/slots')
    .then(checkStatus)
    .then(parseJSON)
);

export const bookSlot = (slotId) => {
  return fetch('/api/booking', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slot_id: slotId })
  })
  .then(checkStatus)
  .then(parseJSON)
};
