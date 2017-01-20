import * as apiClients from '../apiClients';

window.fetch = jest.fn(() => (
  new Promise((resolve, reject) => (
    resolve({ slots: [] }) )
  ))
);

it('fetchSlots to call fetch with /api/slots url', () => {
  return apiClients.fetchSlots().then((response) => {
    return expect(response).toEqual({ slots: [] });
  });
});
