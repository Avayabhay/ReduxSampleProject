import rootReducer from "./reducers/rootReducer";
import { legacy_createStore as createStore } from "redux";

const store = new createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
