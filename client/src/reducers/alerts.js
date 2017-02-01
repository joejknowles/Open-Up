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
  switch (action.type) {
    case 'REMOVE_ALERT':
      return [ ...state ].filter((id) => id !== action.id);
    case 'BOOK_SLOT_SUCCESS':
      return [ ...state, action.notificationId ];
    default:
      return state;
  }
};

export const alertsById = (state = {}, action) => {
  if (isFailureType(action)) {
    return {
      ...state,
      ...action.response.errors
    }
  }
  if (action.type === 'BOOK_SLOT_SUCCESS') {
    const newNotification = {
      id: action.notificationId,
      message: 'booked!',
      type: 'SUCCESS'
    };
    return {
      ...state,
      [action.notificationId]: newNotification
    }
  }
  return state;
};
