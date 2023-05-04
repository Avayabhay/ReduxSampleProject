//default state value
const initialValue = 10;

export const updown = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state = state + action.payload);
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};
