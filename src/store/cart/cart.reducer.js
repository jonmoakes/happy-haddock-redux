import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
  cartItems: [],
  contactMethod: "",
  showCardInput: false,
  customerDetails: {
    name: "",
    email: "",
    phoneNumber: "",
  },
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
    case CART_ACTION_TYPES.CHOOSE_CONTACT_METHOD:
      return {
        ...state,
        contactMethod: payload,
      };
    case CART_ACTION_TYPES.HANDLE_SHOW_CARD_INPUT:
      return {
        ...state,
        showCardInput: payload,
      };
    case CART_ACTION_TYPES.SET_CUSTOMER_DETAILS:
      return {
        ...state,
        customerDetails: payload,
      };
    default:
      return state;
  }
};
