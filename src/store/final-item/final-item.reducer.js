import { FINAL_ITEM_ACTION_TYPES } from "./final-item.types";
export const FINAL_ITEM_INITIAL_STATE = {
  finalItem: {},
  sizeSelectedPrice: null,
  hasSizeBeenChosen: false,
  gratedCheesePrice: null,
  donerMeatPrice: null,
  cheeseSliceSelected: false,
};

export const finalItemReducer = (
  state = FINAL_ITEM_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case FINAL_ITEM_ACTION_TYPES.ADD_FINAL_ITEM:
      return { ...state, finalItem: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_SIZE_SELECTED_PRICE:
      return { ...state, sizeSelectedPrice: payload };
    case FINAL_ITEM_ACTION_TYPES.HAS_SIZE_BEEN_CHOSEN:
      return { ...state, hasSizeBeenChosen: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_GRATED_CHEESE_PRICE:
      return { ...state, gratedCheesePrice: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_DONER_MEAT_PRICE:
      return { ...state, donerMeatPrice: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_CHEESE_SLICE:
      return { ...state, cheeseSliceSelected: payload };
    default:
      return state;
  }
};
