import * as apiClients from '../apiClients';

const setFetchFunction = () => {
  window.fetch = jest.fn((url) => (
    new Promise((resolve, reject) => (
      resolve({ status: 200, ok: true,
        json: () => ({ slots: [] }) })
    ))
  ));
}

const testApiClient = (clientName, arg, expectedArgs) => {
  it(clientName + ' to return response as json', () => {
    setFetchFunction();
    return apiClients[clientName](arg).then((response) => {
      expect(response).toEqual({ slots: [] });
      window.fetch.mockReset();
    });
  });

  it(clientName + ' to call fetch with correct arguments', () => {
    setFetchFunction();
    return apiClients[clientName](arg).then((response) => {
      expect(window.fetch).toHaveBeenCalledWith(...expectedArgs);
      window.fetch.mockReset();
    });
  });
}

testApiClient('fetchSlots', null, ['/api/slots']);

const slotId = 1;
const url = '/api/booking';
const options = {
  method: 'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ slot_id: slotId })
};
const expectedArgs = [url, options]

testApiClient('bookSlot', slotId, expectedArgs )
