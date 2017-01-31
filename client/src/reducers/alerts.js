const isFailureType = ({ type }) => (
  type === 'FETCH_SLOTS_FAILURE' ||
  type === 'BOOK_SLOT_FAILURE'
);

export default (state = [], action) => {
  if (isFailureType(action)) {
    return [
      ...state,
      ...action.response.result
    ];
  }
  if (action.type === 'REMOVE_ALERT') {
    return [ ...state ].filter((id) => id !== action.id);
  }
  return state;
};

export const alertsById = (state = {}, action) => {
  if (isFailureType(action)) {
    return {
      ...state,
      ...action.response.errors
    }
  }
  return state;
};
