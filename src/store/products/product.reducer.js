import { PRODUCTS_ACTION_TYPES } from "./product.types";
export const PRODUCTS_INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
  individualProduct: {},
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
      return { ...state, isLoading: true };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: payload, isLoading: false };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
      return { ...state, error: payload, isLoading: false };
    case PRODUCTS_ACTION_TYPES.ADD_INDIVIDUAL_PRODUCT:
      return { ...state, individualProduct: payload };
    case PRODUCTS_ACTION_TYPES.CLEAR_INDIVIDUAL_PRODUCT:
      return { ...state, individualProduct: {} };
    default:
      return state;
  }
};
