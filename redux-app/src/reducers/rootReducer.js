import { combineReducers } from "redux";
import { updown } from "./updown";

const rootReducer = new combineReducers({
  updown,
});

export default rootReducer;
