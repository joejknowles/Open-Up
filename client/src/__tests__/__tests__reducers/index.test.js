import topReducer from '../../reducers';

const expectedReducers = [
  ['booking'],
  ['booking', 'selectedDate'],
  ['booking', 'slotsById'],
  ['booking', 'slotsByDate'],
  ['booking', 'bookings'],
  ['booking', 'dateChangeDirection'],
  ['isLoading'],
  ['alerts', 'alerts'],
  ['alerts', 'alertsById']
];

const runTestForNames = (reducerNames) => (
  it(testName(reducerNames), () =>
    expectReducerReturnsProperty(reducerNames)
  )
);

const testName = (reducerNames) => {
  const nestedReducer = reducerNames.join(' > ')
  return `Top reducer includes ${nestedReducer} reducer`
};

// Test reducer returns all correct properties
for (let reducerNames of expectedReducers) {
  runTestForNames(reducerNames);
}

const expectReducerReturnsProperty = (reducerNames) => {
  let object = initialStore;
  for ( let reducerName of reducerNames ) {
    expect(
      object
        .hasOwnProperty(reducerName)
    ).toBe(true);
    object = object[reducerName];
  }
};

const initialStore = topReducer(undefined, {});
