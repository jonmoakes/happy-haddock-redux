import { HAMBURGER_MENU_ACTION_TYPES } from "./hamburger-menu.types";

const INITIAL_STATE = {
  showHamburgerMenu: false,
};

export const hamburgerMenuReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HAMBURGER_MENU_ACTION_TYPES.HIDE_HAMBURGER_MENU:
      return {
        ...state,
        showHamburgerMenu: payload,
      };
    case HAMBURGER_MENU_ACTION_TYPES.TOGGLE_HAMBURGER_MENU:
      return {
        ...state,
        showHamburgerMenu: payload,
      };
    default:
      return state;
  }
};
