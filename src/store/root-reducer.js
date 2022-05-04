import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  hamburgerMenu: hamburgerMenuReducer,
});
