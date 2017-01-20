export const selectedDate = (state, action) => {
  if (action.response) {
    return action.response.date;
  }
  return state;
};
