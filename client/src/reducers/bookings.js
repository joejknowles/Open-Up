const bookings = (state = true, action) => (
  action ? false : state
);

export default bookings;
