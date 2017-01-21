import * as apiClients from '../apiClients';

window.fetch = jest.fn((url) => (
  new Promise((resolve, reject) => (
    url === '/api/slots' ?
    resolve({ json: () => ({ slots: [] }) }) :
    reject()
  ))
));

it('fetchSlots to call fetch with /api/slots url', () => {
  return apiClients.fetchSlots().then((response) => {
    return expect(response).toEqual({ slots: [] });
  });
});
