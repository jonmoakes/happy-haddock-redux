import { PRODUCTS_ACTION_TYPES } from "./product.types";
export const PRODUCTS_INITIAL_STATE = {
  products: [],
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
