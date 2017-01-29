import 'whatwg-fetch';

export const fetchSlots = () => (
  fetch('/api/slots').then(
    (response) => response.json()
  )
);

export const bookSlot = (slotId) => (
  fetch('/api/booking', {
    method: 'POST',
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify({ slotId })
  }).then(
    (response) => response.json()
  )
);
