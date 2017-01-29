import * as apiClients from '../apiClients';

const setFetchFunction = () => {
  window.fetch = jest.fn((url) => (
    new Promise((resolve, reject) => (
      resolve({ json: () => ({ slots: [] }) })
    ))
  ));
}

it('fetchSlots to return response as json', () => {
  setFetchFunction();
  return apiClients.fetchSlots().then((response) => {
    return expect(response).toEqual({ slots: [] });
  });
});

it('fetchSlots to call fetch with /api/slots url', () => {
  window.fetch.mockReset();
  setFetchFunction();
  return apiClients.fetchSlots().then((response) => {
    return expect(window.fetch).toHaveBeenCalledWith('/api/slots');
  });
});

it('bookSlot to call fetch with /api/booking url', () => {
  window.fetch.mockReset();
  setFetchFunction();
  const slotId = 1;
  const url = '/api/booking';
  const options = {
    method: 'POST',
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify({ slotId })
  };
  const expectedArgs = [url, options]
  return apiClients.bookSlot(slotId).then((response) => {
    return expect(window.fetch).toHaveBeenCalledWith(...expectedArgs);
  });
});

it('bookSlot to call return response json', () => {
  window.fetch.mockReset();
  setFetchFunction();

  return apiClients.bookSlot(1).then((response) => {
    return expect(response).toEqual({ slots: [] });
  });
});
