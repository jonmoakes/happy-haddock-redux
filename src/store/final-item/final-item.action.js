import { FINAL_ITEM_ACTION_TYPES } from "./final-item.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const addFinalItem = (finalItem) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_FINAL_ITEM, finalItem);

export const addSizeSelectedPrice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_SIZE_SELECTED_PRICE, payload);

export const hasSizebeenChosen = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.HAS_SIZE_BEEN_CHOSEN, payload);

export const addGratedCheesePrice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_GRATED_CHEESE_PRICE, payload);

export const addDonerMeatPrice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_DONER_MEAT_PRICE, payload);

export const addCheeseSlice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_CHEESE_SLICE, payload);
