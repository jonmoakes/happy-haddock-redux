import { CART_ACTION_TYPES } from "./cart.types";
import {
  increaseQuantityByOneToCart,
  decreaseQuantityByOneFromCart,
} from "./cart.action";

export const CART_INITIAL_STATE = {
  cartItems: [],
  totalPrice: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.INCREASE_QUANTITY_BY_ONE:
      return {
        ...state,
        cartItems: increaseQuantityByOneToCart(state.cartItems, payload),
      };
    case CART_ACTION_TYPES.DECREASE_QUANTITY_BY_ONE:
      return {
        ...state,
        cartItems: decreaseQuantityByOneFromCart(state.cartItems, payload),
      };
    case CART_ACTION_TYPES.CLEAR_CART_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    case CART_ACTION_TYPES.RESET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: 0,
      };
    default:
      return state;
  }
};
