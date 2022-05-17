import { FINAL_ITEM_ACTION_TYPES } from "./final-item.types";

export const FINAL_ITEM_INITIAL_STATE = {
  sizeSelectedPrice: null,
  chosenSize: "",
  saltAndVinegar: "",
  gratedCheesePrice: null,
  donerMeatPrice: null,
  cheeseSliceSelected: false,
  saladSelected: false,
  saucesSelected: {},
  specialInstructions: "",
  quantity: 0,
};

export const finalItemReducer = (
  state = FINAL_ITEM_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case FINAL_ITEM_ACTION_TYPES.ADD_SIZE_SELECTED_PRICE:
      return { ...state, sizeSelectedPrice: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_CHOSEN_SIZE:
      return { ...state, chosenSize: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_SALT_AND_VINEGAR:
      return { ...state, saltAndVinegar: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_GRATED_CHEESE_PRICE:
      return { ...state, gratedCheesePrice: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_DONER_MEAT_PRICE:
      return { ...state, donerMeatPrice: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_CHEESE_SLICE:
      return { ...state, cheeseSliceSelected: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_SALAD:
      return { ...state, saladSelected: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_SAUCES:
      return { ...state, saucesSelected: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_SPECIAL_INSTRUCTIONS:
      return { ...state, specialInstructions: payload };
    case FINAL_ITEM_ACTION_TYPES.ADD_QUANTITY:
      return { ...state, quantity: payload };
    case FINAL_ITEM_ACTION_TYPES.CLEAR_FINAL_ITEM:
      return {
        ...state,
        sizeSelectedPrice: null,
        chosenSize: "",
        saltAndVinegar: "",
        gratedCheesePrice: null,
        donerMeatPrice: null,
        cheeseSliceSelected: false,
        saladSelected: false,
        saucesSelected: {},
        specialInstructions: "",
        quantity: 0,
      };
    default:
      return state;
  }
};
