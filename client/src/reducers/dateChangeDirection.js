const dateChangeDirection = (state = 'next', action) => {
  switch (action.type) {
    case 'NEXT_DAY':
      return 'next';
    case 'PREV_DAY':
      return 'prev';
    default:
      return state
  }
};

export default dateChangeDirection;
