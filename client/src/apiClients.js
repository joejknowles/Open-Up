import 'whatwg-fetch';

export const fetchSlots = () => (
  fetch('/api/slots').then(
    (response) => response.json()
  )
);

export const bookSlot = (slotId) => {
  return fetch('/api/booking', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slot_id: slotId })
  }).then(
    (response) => response.json()
  )
};
