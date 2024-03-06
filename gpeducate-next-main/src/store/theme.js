const initialState = {
  mode: "light",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};
