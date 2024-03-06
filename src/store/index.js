import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import theme from "./theme";
import licence from "./licence";
import { thunk } from "redux-thunk";

const defaultReducer = combineReducers({ theme, licence });
const rootReducer = (state, action) => {
  return defaultReducer(state, action);
};

const middlewares = [logger, thunk];

const configureStore = () => {
  const store = createStore(
    rootReducer,
    { name: { name: "sasd" } },
    applyMiddleware(...middlewares)
  );
  return store;
};

export default configureStore;
