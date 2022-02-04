import { combineReducers } from "redux";

import isSideBarOpen from "./isSideBarOpen";
import activeTabs from './activeTabs'
import activeSideBar from "./activeSideBar";

const appReducer = combineReducers({
  isSideBarOpen,
  activeTabs,
  activeSideBar
});

const rootReducer = (state, action) => {
  if (action.type === "APP_LOGOUT_SUCCESS") {
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;
