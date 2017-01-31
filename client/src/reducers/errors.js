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
  return state;
};

export const errorsById = (state = {}, action) => {
  if (isFailureType(action)) {
    return {
      ...state,
      ...action.response.errors
    }
  }
  return state;
};
