export const selectedDate = (state, action) => {
  if (action.response) {
    return action.response.date;
  }
  return state;
};

export const slotsById = (state, action) => ({});
