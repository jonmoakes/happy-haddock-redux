import { HAMBURGER_MENU_ACTION_TYPES } from "./hamburger-menu.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const hideHamburgerMenu = () =>
  createAction(HAMBURGER_MENU_ACTION_TYPES.HIDE_HAMBURGER_MENU, false);

export const toggleHamburgerMenu = (showHamburgerMenu) =>
  createAction(
    HAMBURGER_MENU_ACTION_TYPES.TOGGLE_HAMBURGER_MENU,
    showHamburgerMenu
  );
