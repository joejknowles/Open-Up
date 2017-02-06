import topReducer from '../../reducers';

const expectedReducers = [
  'selectedDate',
  'slotsById',
  'allSlots',
  'isLoading',
  'bookings',
  'alerts',
  'alertsById',
  'slotsByDate',
  'dateChangeDirection'
];

const runTestForName = (reducerName) => (
  it(`Top reducer includes ${reducerName} reducer`, () =>
    expectReducerReturnsProperty(reducerName)
  )
);

// Test reducer returns all correct properties
for (let reducerName of expectedReducers) {
  runTestForName(reducerName);
}

const expectReducerReturnsProperty = (reducerName) => (
  expect(
    callReducerWithInitialValues()
      .hasOwnProperty(reducerName)
  ).toBe(true)
);

const callReducerWithInitialValues = () => (
  topReducer(undefined, {})
);
