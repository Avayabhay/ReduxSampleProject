export const upAction = (payload) => {
  return {
    type: "INCREMENT",
    payload,
  };
};

export const downAction = (payload) => {
  return {
    type: "DECREMENT",
    payload,
  };
};
