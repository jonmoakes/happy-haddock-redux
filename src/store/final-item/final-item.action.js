import { FINAL_ITEM_ACTION_TYPES } from "./final-item.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const addSizeSelectedPrice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_SIZE_SELECTED_PRICE, payload);

export const addChosenSize = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_CHOSEN_SIZE, payload);

export const addDonerKebabType = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_DONER_KEBAB_TYPE, payload);

export const addDonerKebabTypePrice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_DONER_KEBAB_TYPE_PRICE, payload);

export const addChickenKebabType = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_CHICKEN_KEBAB_TYPE, payload);

export const addChickenKebabTypePrice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_CHICKEN_KEBAB_TYPE_PRICE, payload);

export const addMixedKebabType = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_MIXED_KEBAB_TYPE, payload);

export const addMixedKebabTypePrice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_MIXED_KEBAB_TYPE_PRICE, payload);

export const addTypeSelectedPrice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_TYPE_SELECTED_PRICE, payload);

export const addChosenType = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_CHOSEN_TYPE, payload);

export const addSaltAndVinegar = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_SALT_AND_VINEGAR, payload);

export const addPie = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_PIE, payload);

export const addGratedCheesePrice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_GRATED_CHEESE_PRICE, payload);

export const addDonerMeatPrice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_DONER_MEAT_PRICE, payload);

export const addCheeseSlice = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_CHEESE_SLICE, payload);

export const addSalad = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_SALAD, payload);

export const addSauces = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_SAUCES, payload);

export const addCan = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_CAN, payload);

export const addBottles = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_BOTTLES, payload);

export const addSingleCondiment = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_SINGLE_CONDIMENT, payload);

export const addTwoCondiments = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_TWO_CONDIMENTS, payload);

export const addConeOfChipsSauce = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_CONE_OF_CHIPS_SAUCE, payload);

export const addOneMeat = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_ONE_MEAT, payload);

export const addTwoMeats = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_TWO_MEATS, payload);

export const addQuantity = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_QUANTITY, payload);

export const addSpecialInstructions = (payload) =>
  createAction(FINAL_ITEM_ACTION_TYPES.ADD_SPECIAL_INSTRUCTIONS, payload);

export const clearFinalItem = () =>
  createAction(FINAL_ITEM_ACTION_TYPES.CLEAR_FINAL_ITEM);
