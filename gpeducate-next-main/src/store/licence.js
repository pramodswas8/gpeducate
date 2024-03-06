const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INSTANCE":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const fetchInstance = () => (dispatch) => {
  return fetch("https://srm.goeducate.com/dev/api/gps/license/")
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: "INSTANCE",
        payload: res,
      });
    });
};

export const instanceSelector = (state) => state.licence;
