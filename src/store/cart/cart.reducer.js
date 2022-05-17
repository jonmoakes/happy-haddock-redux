import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.CHANGE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.CLEAR_CART_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
