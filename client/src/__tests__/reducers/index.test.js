import topReducer from '../../reducers';

const expectedReducers = [
  'selectedDate',
  'slotsById',
  'allSlots',
  'isLoading',
  'bookings',
  'alerts',
  'alertsById',
  'slotsByDate'
];

const runTestForName = (reducerName) => (
  it(`includes ${reducerName} reducer`, () =>
    expectReducerReturnsProperty(reducerName)
  )
);

// Test reducer returns all correct properties
for (let reducerName of expectedReducers) {
  runTestForName(reducerName);
}

const expectReducerReturnsProperty = (reducerName) => (
  expectToBeDefined(callReducerWithInitialValues()[reducerName])
);

const callReducerWithInitialValues = () => (
  topReducer(undefined, {})
);

const expectToBeDefined = (value) => (
  expect(typeof(value)).not.toBe('undefined')
);
